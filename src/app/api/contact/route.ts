import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    console.log("Configuración cargada:", process.env.EMAIL_USER ? "SÍ" : "NO");
    console.log("Usuario configurado:", process.env.EMAIL_USER);
    try {
        const body = await request.json();
        const { name, lastname, email, phone, subject, message } = body;

        // Validamos que las variables existan
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            return NextResponse.json({ error: "Configuración de servidor incompleta" }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Web Contact" <${process.env.EMAIL_USER}>`,
            to: 'adonisaleman60@gmail.com', // Correo destino
            replyTo: email,
            subject: `🚀 Nuevo Proyecto: ${subject}`,
            html: `
                <div style="font-family: sans-serif; color: #333;">
                    <h2>Nuevo mensaje de contacto</h2>
                    <p><strong>Nombre:</strong> ${name} ${lastname}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>WhatsApp:</strong> ${phone}</p>
                    <p><strong>Mensaje:</strong></p>
                    <p style="background: #f4f4f4; padding: 10px;">${message}</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });

    } catch (error: any) {
        console.error("Error detallado:", error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}