"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react"
import { AREAS, DURATIONS, LEVELS } from "./data"

export default function InternshipForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [level, setLevel] = useState<string>(LEVELS[0].value)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus("loading")
        const form = e.currentTarget
        const data = Object.fromEntries(new FormData(form))
        try {
            const res = await fetch("/api/pasantias", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
            if (res.ok) {
                setStatus("success")
                form.reset()
                setLevel(LEVELS[0].value)
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

    if (status === "success") {
        return (
            <div className="flex flex-col items-center justify-center p-10 text-center sm:p-14">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-apd-dark">¡Solicitud recibida!</h3>
                <p className="mt-3 max-w-sm text-apd-gray">
                    Revisaremos tu información y te contactaremos por correo o WhatsApp para coordinar una entrevista corta.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-sm font-semibold text-apd-accent underline-offset-4 hover:underline"
                >
                    Enviar otra solicitud
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="relative space-y-5 p-8 sm:p-12">
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="website-i">Website</label>
                <input id="website-i" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            {/* Tipo de institución como selector segmentado */}
            <fieldset>
                <legend className={label}>¿Desde dónde vienes?</legend>
                <div className="grid grid-cols-2 gap-2 rounded-2xl bg-apd-paper p-1.5 ring-1 ring-[#E1E7EC]">
                    {LEVELS.map((l) => (
                        <label
                            key={l.value}
                            className={`cursor-pointer rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition ${level === l.value ? "bg-apd-dark text-white shadow" : "text-apd-gray hover:text-apd-dark"
                                }`}
                        >
                            <input
                                type="radio"
                                name="level"
                                value={l.value}
                                checked={level === l.value}
                                onChange={() => setLevel(l.value)}
                                className="sr-only"
                            />
                            {l.label}
                        </label>
                    ))}
                </div>
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="i-name" className={label}>Nombre completo</label>
                    <input id="i-name" name="name" required maxLength={120} autoComplete="name" className={input} placeholder="María Rodríguez" />
                </div>
                <div>
                    <label htmlFor="i-email" className={label}>Correo</label>
                    <input id="i-email" name="email" type="email" required maxLength={254} autoComplete="email" className={input} placeholder="maria@correo.com" />
                </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="i-phone" className={label}>WhatsApp</label>
                    <input id="i-phone" name="phone" type="tel" required maxLength={30} autoComplete="tel" className={input} placeholder="+506 0000-0000" />
                </div>
                <div>
                    <label htmlFor="i-inst" className={label}>{level === "colegio" ? "Colegio" : "Universidad"}</label>
                    <input
                        id="i-inst"
                        name="institution"
                        required
                        maxLength={120}
                        className={input}
                        placeholder={level === "colegio" ? "CTP de ..." : "Nombre de la universidad"}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="i-program" className={label}>{level === "colegio" ? "Especialidad técnica" : "Carrera"}</label>
                <input
                    id="i-program"
                    name="program"
                    required
                    maxLength={120}
                    className={input}
                    placeholder={level === "colegio" ? "Ej. Desarrollo de Software, Informática en Redes..." : "Ej. Ingeniería en Computación, Informática..."}
                />
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
                <div className="sm:col-span-1">
                    <label htmlFor="i-area" className={label}>Área de interés</label>
                    <select id="i-area" name="area" required defaultValue="" className={input}>
                        <option value="" disabled>Elige una</option>
                        {AREAS.map((a) => (
                            <option key={a.title} value={a.title}>{a.title}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="i-duration" className={label}>Duración</label>
                    <select id="i-duration" name="duration" required defaultValue="" className={input}>
                        <option value="" disabled>Elige una</option>
                        {DURATIONS.map((d) => (
                            <option key={d.label} value={d.label}>{d.label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="i-start" className={label}>Inicio aproximado</label>
                    <input id="i-start" name="start" required maxLength={60} className={input} placeholder="Ej. Febrero 2027" />
                </div>
            </div>

            <div>
                <label htmlFor="i-msg" className={label}>
                    Cuéntanos de ti <span className="font-normal text-apd-gray">(opcional)</span>
                </label>
                <textarea
                    id="i-msg"
                    name="message"
                    maxLength={2000}
                    rows={4}
                    className={`${input} resize-none`}
                    placeholder="¿Qué te gustaría aprender? ¿Has hecho algún proyecto? Puedes compartir tu GitHub o portafolio."
                />
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-apd-gray">Te responderemos por correo o WhatsApp.</p>
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
                {status === "error" && (
                    <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                        <AlertCircle className="h-5 w-5" /> Hubo un error. Escríbenos a apdsolutions5@gmail.com.
                    </p>
                )}
            </div>
        </form>
    )
}
