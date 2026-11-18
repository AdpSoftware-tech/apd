import { NextResponse } from "next/server";
import { EMAIL_RE, isHoneypotFilled, isRateLimited, readFields, rowsHtml, sendMail } from "@/lib/mail";
import { AREAS, DURATIONS, LEVELS } from "@/components/internships/data";

const LIMITS = {
    name: 120,
    email: 254,
    phone: 30,
    level: 40,
    institution: 120,
    program: 120,
    area: 60,
    duration: 60,
    start: 60,
    message: 2000,
};

export async function POST(request: Request) {
    if (isRateLimited(request)) {
        return NextResponse.json({ error: "Demasiadas solicitudes. Intenta más tarde." }, { status: 429 });
    }

    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 });
    }

    if (isHoneypotFilled(body)) return NextResponse.json({ success: true });

    const result = readFields(body, LIMITS, ["message"]);
    if ("invalid" in result) {
        return NextResponse.json({ error: `Campo inválido: ${result.invalid}` }, { status: 400 });
    }
    const d = result.data;

    if (!EMAIL_RE.test(d.email)) {
        return NextResponse.json({ error: "Correo inválido" }, { status: 400 });
    }
    if (
        !LEVELS.some((l) => l.value === d.level) ||
        !AREAS.some((a) => a.title === d.area) ||
        !DURATIONS.some((x) => x.label === d.duration)
    ) {
        return NextResponse.json({ error: "Opción inválida" }, { status: 400 });
    }

    const levelLabel = LEVELS.find((l) => l.value === d.level)!.label;
    const rows: [string, string][] = [
        ["Nombre", d.name],
        ["Email", d.email],
        ["WhatsApp", d.phone],
        ["Tipo de institución", levelLabel],
        ["Institución", d.institution],
        ["Especialidad / carrera", d.program],
        ["Área de interés", d.area],
        ["Duración", d.duration],
        ["Inicio aproximado", d.start],
        ["Mensaje", d.message || "—"],
    ];

    try {
        await sendMail({
            subject: `🎓 Solicitud de pasantía: ${d.name} (${d.area})`,
            replyTo: d.email,
            text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
            html: `
                <div style="font-family: sans-serif; color: #333;">
                    <h2>Nueva solicitud de pasantía</h2>
                    <table>${rowsHtml(rows)}</table>
                </div>
            `,
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("[pasantias] Error al enviar correo:", error instanceof Error ? error.message : error);
        return NextResponse.json({ error: "No se pudo enviar la solicitud" }, { status: 500 });
    }
}
