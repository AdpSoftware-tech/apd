"use client"

import { useState } from "react"
import { ArrowRight, Mail, MapPin, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react"
import { Container, Eyebrow } from "./ui"

const WHATSAPP_URL = `https://wa.me/50662346599?text=${encodeURIComponent(
    "Hola, estoy interesado en los servicios de desarrollo de software de A.P.D. Solutions."
)}`

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus("loading")

        const form = e.currentTarget
        const data = Object.fromEntries(new FormData(form))

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
            if (res.ok) {
                setStatus("success")
                form.reset()
                setTimeout(() => setStatus("idle"), 6000)
            } else {
                setStatus("error")
            }
        } catch {
            setStatus("error")
        }
    }

    const input =
        "w-full rounded-xl border border-[#DCE3E9] bg-white px-4 py-3 text-apd-dark placeholder:text-[#9AAAB7] transition focus:border-apd-primary focus:outline-none focus:ring-4 focus:ring-apd-primary/15"
    const label = "mb-1.5 block text-sm font-medium text-apd-dark"

    return (
        <section id="contacto" className="relative bg-apd-paper py-24 sm:py-32">
            <Container>
                <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_80px_-40px_rgba(4,35,58,0.35)] ring-1 ring-[#E1E7EC] lg:grid-cols-[0.9fr_1.1fr]">
                    {/* Panel informativo */}
                    <div className="relative overflow-hidden bg-apd-ink p-8 text-white sm:p-12">
                        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_10%,transparent_70%)]" />
                        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-apd-accent/40 blur-[100px]" />

                        <div className="relative">
                            <Eyebrow dark>Contacto</Eyebrow>
                            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl">
                                ¿Tienes una idea en mente? <span className="text-gradient">Construyámosla juntos.</span>
                            </h2>
                            <p className="mt-5 leading-relaxed text-apd-mist">
                                Cuéntanos sobre tu proyecto y te ayudamos a definir la mejor solución para tu negocio.
                            </p>

                            <ul className="mt-10 space-y-5">
                                <li>
                                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-apd-sky transition group-hover:bg-white/15">
                                            <MessageCircle className="h-5 w-5" />
                                        </span>
                                        <span>
                                            <span className="block text-xs uppercase tracking-wider text-apd-mist">WhatsApp</span>
                                            <span className="font-medium group-hover:text-apd-sky">+506 6234-6599</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:apdsolutions5@gmail.com" className="group flex items-center gap-4">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-apd-sky transition group-hover:bg-white/15">
                                            <Mail className="h-5 w-5" />
                                        </span>
                                        <span>
                                            <span className="block text-xs uppercase tracking-wider text-apd-mist">Correo</span>
                                            <span className="font-medium group-hover:text-apd-sky">apdsolutions5@gmail.com</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-apd-sky">
                                        <MapPin className="h-5 w-5" />
                                    </span>
                                    <span>
                                        <span className="block text-xs uppercase tracking-wider text-apd-mist">Ubicación</span>
                                        <span className="font-medium">Alajuela, Costa Rica</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Formulario */}
                    <form onSubmit={handleSubmit} className="relative space-y-5 p-8 sm:p-12">
                        {/* Honeypot anti-spam: invisible para personas, los bots lo llenan */}
                        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                            <label htmlFor="website">Website</label>
                            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className={label}>Nombre</label>
                                <input id="name" name="name" required maxLength={80} autoComplete="given-name" className={input} placeholder="Juan" />
                            </div>
                            <div>
                                <label htmlFor="lastname" className={label}>Apellido</label>
                                <input id="lastname" name="lastname" required maxLength={80} autoComplete="family-name" className={input} placeholder="Pérez" />
                            </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="email" className={label}>Correo</label>
                                <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" className={input} placeholder="correo@empresa.com" />
                            </div>
                            <div>
                                <label htmlFor="phone" className={label}>WhatsApp</label>
                                <input id="phone" name="phone" type="tel" required maxLength={30} autoComplete="tel" className={input} placeholder="+506 0000-0000" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className={label}>Asunto</label>
                            <input id="subject" name="subject" required maxLength={150} className={input} placeholder="Ej. Desarrollo de software a medida" />
                        </div>

                        <div>
                            <label htmlFor="message" className={label}>Mensaje</label>
                            <textarea id="message" name="message" required maxLength={5000} rows={5} className={`${input} resize-none`} placeholder="Cuéntanos un poco sobre tu proyecto..." />
                        </div>

                        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-xs text-apd-gray">Todos los campos son obligatorios.</p>
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-apd-dark px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-apd-accent disabled:opacity-60"
                            >
                                {status === "loading" ? "Enviando..." : "Enviar solicitud"}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>

                        <div aria-live="polite">
                            {status === "success" && (
                                <p className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                                    <CheckCircle2 className="h-5 w-5" /> ¡Mensaje enviado! Te contactaremos pronto.
                                </p>
                            )}
                            {status === "error" && (
                                <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                                    <AlertCircle className="h-5 w-5" /> Hubo un error. Escríbenos a apdsolutions5@gmail.com.
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    )
}
