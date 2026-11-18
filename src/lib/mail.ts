import nodemailer from "nodemailer";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const INBOX = "apdsolutions5@gmail.com";

export function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// Rate limit simple en memoria (por instancia): 5 envíos / 10 min por IP
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

export function isRateLimited(request: Request): boolean {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    const now = Date.now();
    const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
    recent.push(now);
    hits.set(ip, recent);
    if (hits.size > 5000) hits.clear();
    return recent.length > MAX_PER_WINDOW;
}

/**
 * Valida campos de texto: obligatorios y con largo máximo.
 * Devuelve los valores limpios o el nombre del primer campo inválido.
 */
export function readFields<K extends string>(
    body: Record<string, unknown>,
    limits: Record<K, number>,
    optional: NoInfer<K>[] = []
): { data: Record<K, string> } | { invalid: K } {
    const data = {} as Record<K, string>;
    for (const field of Object.keys(limits) as K[]) {
        const raw = body[field];
        const value = typeof raw === "string" ? raw.trim() : "";
        if ((!value && !optional.includes(field)) || value.length > limits[field]) {
            return { invalid: field };
        }
        data[field] = value;
    }
    return { data };
}

export function isHoneypotFilled(body: Record<string, unknown>): boolean {
    return typeof body.website === "string" && body.website.trim() !== "";
}

/** Tabla HTML con filas etiqueta/valor; escapa todos los valores. */
export function rowsHtml(rows: [string, string][]): string {
    return rows
        .map(
            ([label, value]) =>
                `<tr><td style="padding:6px 12px 6px 0;color:#637C88;vertical-align:top;white-space:nowrap"><strong>${escapeHtml(
                    label
                )}</strong></td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
        )
        .join("");
}

export async function sendMail(opts: { subject: string; replyTo: string; text: string; html: string }) {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        throw new Error("Faltan EMAIL_USER / EMAIL_PASS");
    }
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
    await transporter.sendMail({
        from: `"Web Contact" <${process.env.EMAIL_USER}>`,
        to: INBOX,
        replyTo: opts.replyTo,
        subject: opts.subject.replace(/[\r\n]+/g, " "),
        text: opts.text,
        html: opts.html,
    });
}
