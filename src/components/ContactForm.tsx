"use client"

import { useState } from "react"

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus("loading")

        const form = e.currentTarget;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData)

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if (res.ok) {
                setStatus("success")
                form.reset() // <--- Limpia todos los campos del formulario

                // Opcional: El mensaje de éxito desaparece tras 5 segundos
                setTimeout(() => {
                    setStatus("idle")
                }, 5000)
            } else {
                setStatus("error")
            }
        } catch {
            setStatus("error")
        }
    }

    // Estilos para DARK MODE
    const inputStyle = "w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-apd-primary focus:outline-none transition-all placeholder:text-gray-600"
    const labelStyle = "block text-lg font-semibold text-apd-light uppercase tracking-wider"
    const requiredStyle = "text-xs font-normal text-gray-500 ml-1 lowercase"

    return (
        <section id="contacto" className="py-24 bg-apd-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-apd-primary/5 blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-3xl relative z-10">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        ¿Listo para <span className="text-apd-primary">empezar?</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Cuéntanos sobre tu proyecto y diseñemos juntos una solución de alto impacto.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-6">
                        <label className={labelStyle}>Nombre Completo</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <input name="name" required className={inputStyle} id="name" placeholder="Ej. Juan" />
                                <label htmlFor="name" className="text-xs text-gray-500 mt-2 block uppercase tracking-tighter">
                                    Nombre <span className={requiredStyle}>(obligatorio)</span>
                                </label>
                            </div>
                            <div>
                                <input name="lastname" required className={inputStyle} id="lastname" placeholder="Ej. Pérez" />
                                <label htmlFor="lastname" className="text-xs text-gray-500 mt-2 block uppercase tracking-tighter">
                                    Apellido <span className={requiredStyle}>(obligatorio)</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-2">
                            <label className={labelStyle}>
                                Correo <span className={requiredStyle}>(obligatorio)</span>
                            </label>
                            <input name="email" type="email" required className={inputStyle} placeholder="correo@ejemplo.com" />
                        </div>
                        <div className="space-y-2">
                            <label className={labelStyle}>
                                WhatsApp <span className={requiredStyle}>(obligatorio)</span>
                            </label>
                            <input name="phone" type="tel" required placeholder="+506 0000-0000" className={inputStyle} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className={labelStyle}>
                            Asunto <span className={requiredStyle}>(obligatorio)</span>
                        </label>
                        <input name="subject" required className={inputStyle} placeholder="Ej. Desarrollo de Software a medida" />
                    </div>

                    <div className="space-y-2">
                        <label className={labelStyle}>
                            Mensaje <span className={requiredStyle}>(obligatorio)</span>
                        </label>
                        <textarea name="message" required rows={2} className={`${inputStyle} resize-none`} placeholder="Cuéntanos un poco más..." />
                    </div>

                    <div className="pt-6">
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="group relative bg-apd-primary hover:bg-apd-light text-white font-bold px-16 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] disabled:opacity-50"
                        >
                            <span className="flex items-center gap-2">
                                {status === "loading" ? "Procesando..." : "Enviar Solicitud"}
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                        </button>
                    </div>
                </form>

                <div className="mt-8 h-8">
                    {status === "success" && (
                        <p className="text-green-400 font-medium flex items-center gap-2 animate-fade-in">
                            ✓ ¡Mensaje enviado! Nos contactaremos pronto con usted.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-red-400 font-medium animate-shake">
                            ✕ Hubo un error. Por favor, escriba a info@apd.solutions directamente.
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}