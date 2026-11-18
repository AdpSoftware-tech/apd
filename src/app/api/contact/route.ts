import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const LIMITS = { name: 80, lastname: 80, email: 254, phone: 30, subject: 150, message: 5000 } as const;
type Field = keyof typeof LIMITS;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Rate limit simple en memoria (por instancia): 5 envíos / 10 min por IP
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
    recent.push(now);
    hits.set(ip, recent);
    if (hits.size > 5000) hits.clear();
    return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    if (isRateLimited(ip)) {
        return NextResponse.json({ error: 'Demasiadas solicitudes. Intente más tarde.' }, { status: 429 });
    }

    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Solicitud inválida' }, { status: 400 });
    }

    // Honeypot: si un bot llenó el campo oculto, fingimos éxito y no enviamos nada
    if (typeof body.website === 'string' && body.website.trim() !== '') {
        return NextResponse.json({ success: true });
    }

    const data = {} as Record<Field, string>;
    for (const field of Object.keys(LIMITS) as Field[]) {
        const raw = body[field];
        const value = typeof raw === 'string' ? raw.trim() : '';
        if (!value || value.length > LIMITS[field]) {
            return NextResponse.json({ error: `Campo inválido: ${field}` }, { status: 400 });
        }
        data[field] = value;
    }
    if (!EMAIL_RE.test(data.email)) {
        return NextResponse.json({ error: 'Correo inválido' }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('[contact] Faltan EMAIL_USER / EMAIL_PASS');
        return NextResponse.json({ error: 'No se pudo enviar el mensaje' }, { status: 500 });
    }

    const safe = Object.fromEntries(
        Object.entries(data).map(([k, v]) => [k, escapeHtml(v)])
    ) as Record<Field, string>;
    const subjectLine = data.subject.replace(/[\r\n]+/g, ' ');

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Web Contact" <${process.env.EMAIL_USER}>`,
            to: 'apdsolutions5@gmail.com',
            replyTo: data.email,
            subject: `🚀 Nuevo Proyecto: ${subjectLine}`,
            text: `Nombre: ${data.name} ${data.lastname}\nEmail: ${data.email}\nWhatsApp: ${data.phone}\n\nMensaje:\n${data.message}`,
            html: `
                <div style="font-family: sans-serif; color: #333;">
                    <h2>Nuevo mensaje de contacto</h2>
                    <p><strong>Nombre:</strong> ${safe.name} ${safe.lastname}</p>
                    <p><strong>Email:</strong> ${safe.email}</p>
                    <p><strong>WhatsApp:</strong> ${safe.phone}</p>
                    <p><strong>Mensaje:</strong></p>
                    <p style="background: #f4f4f4; padding: 10px; white-space: pre-wrap;">${safe.message}</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('[contact] Error al enviar correo:', error instanceof Error ? error.message : error);
        return NextResponse.json({ error: 'No se pudo enviar el mensaje' }, { status: 500 });
    }
}
