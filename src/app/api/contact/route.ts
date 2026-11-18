import { NextResponse } from 'next/server';
import { EMAIL_RE, isHoneypotFilled, isRateLimited, readFields, rowsHtml, sendMail } from '@/lib/mail';

const LIMITS = { name: 80, lastname: 80, email: 254, phone: 30, subject: 150, message: 5000 };

export async function POST(request: Request) {
    if (isRateLimited(request)) {
        return NextResponse.json({ error: 'Demasiadas solicitudes. Intente más tarde.' }, { status: 429 });
    }

    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Solicitud inválida' }, { status: 400 });
    }

    // Honeypot: si un bot llenó el campo oculto, fingimos éxito y no enviamos nada
    if (isHoneypotFilled(body)) return NextResponse.json({ success: true });

    const result = readFields(body, LIMITS);
    if ('invalid' in result) {
        return NextResponse.json({ error: `Campo inválido: ${result.invalid}` }, { status: 400 });
    }
    const d = result.data;
    if (!EMAIL_RE.test(d.email)) {
        return NextResponse.json({ error: 'Correo inválido' }, { status: 400 });
    }

    try {
        await sendMail({
            subject: `🚀 Nuevo Proyecto: ${d.subject}`,
            replyTo: d.email,
            text: `Nombre: ${d.name} ${d.lastname}\nEmail: ${d.email}\nWhatsApp: ${d.phone}\n\nMensaje:\n${d.message}`,
            html: `
                <div style="font-family: sans-serif; color: #333;">
                    <h2>Nuevo mensaje de contacto</h2>
                    <table>${rowsHtml([
                ['Nombre', `${d.name} ${d.lastname}`],
                ['Email', d.email],
                ['WhatsApp', d.phone],
                ['Mensaje', d.message],
            ])}</table>
                </div>
            `,
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('[contact] Error al enviar correo:', error instanceof Error ? error.message : error);
        return NextResponse.json({ error: 'No se pudo enviar el mensaje' }, { status: 500 });
    }
}
