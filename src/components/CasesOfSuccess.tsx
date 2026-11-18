"use client"

import { motion } from "framer-motion"
import { Container, SectionHeading } from "./ui"

type Case = {
    name: string
    headline: string
    sector: string
    challenge: string
    value: string
    status: "Completado" | "En desarrollo"
    tech: string[]
}

const cases: Case[] = [
    {
        name: "Pedx Calc",
        headline: "Precisión en el cálculo médico pediátrico",
        sector: "Salud",
        challenge: "En entornos donde el margen de error debe ser cero, los cálculos manuales eran un riesgo crítico y una pérdida de tiempo valioso.",
        value: "Motor de cálculo de alta precisión con interfaz ultra simple y QA riguroso: resultados exactos en segundos y decisiones más seguras.",
        status: "Completado",
        tech: ["Flutter", "iOS", "Android"],
    },
    {
        name: "ADAdmin",
        headline: "Control total de la gestión administrativa",
        sector: "Gestión empresarial",
        challenge: "Datos dispersos y sin centralizar impedían a la gerencia ver el estado real del negocio.",
        value: "Plataforma central con flujos administrativos, reportes financieros y dashboard co-creado con los administradores.",
        status: "Completado",
        tech: ["React", "PostgreSQL", "Node.js"],
    },
    {
        name: "Iglesias Integradas",
        headline: "Gestión de comunidades a gran escala",
        sector: "Organizaciones",
        challenge: "Miembros, eventos y finanzas gestionados a mano generaban cuellos de botella y poca transparencia.",
        value: "Ecosistema con registro, asistencia y finanzas transparentes sobre una arquitectura que crece con la organización.",
        status: "Completado",
        tech: ["Flutter", "Firebase", "Web"],
    },
    {
        name: "EsteticaPro",
        headline: "Gestión integral para salones de belleza",
        sector: "Belleza y bienestar",
        challenge: "Citas, inventario y clientes administrados a mano causaban sobrecarga y ventas perdidas.",
        value: "Agenda en línea, inventario, historial de clientes y recordatorios automáticos con reportes en tiempo real.",
        status: "Completado",
        tech: ["Next.js", "Firebase", "Tailwind"],
    },
    {
        name: "POS Heladerías",
        headline: "Productividad en el punto de venta",
        sector: "Retail",
        challenge: "La personalización de productos ralentizaba el servicio y dificultaba el control de turnos.",
        value: "Interfaz táctil con selección dinámica de sabores y registro de turnos por cajero para trazabilidad total.",
        status: "En desarrollo",
        tech: ["Next.js", "PostgreSQL", "Tailwind"],
    },
]

export default function CasesOfSuccess() {
    return (
        <section id="casos" className="relative overflow-hidden bg-apd-ink py-24 text-white sm:py-32">
            <div className="pointer-events-none absolute inset-0">
                <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
                <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-apd-accent/20 blur-[140px]" />
            </div>

            <Container className="relative">
                <SectionHeading
                    dark
                    eyebrow="Casos de éxito"
                    title={<>Soluciones en acción, <span className="text-gradient">resultados reales</span></>}
                    description="Cada proyecto demuestra que la tecnología adaptada a la operación transforma cualquier sector."
                />

                <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
                    {cases.map((c, i) => (
                        <motion.article
                            key={c.name}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                            className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 transition-all duration-300 hover:border-apd-sky/40 hover:from-white/[0.09] sm:p-8 ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"
                                }`}
                        >
                            <div className="flex items-center justify-between gap-3">
                                <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-apd-mist">
                                    {c.sector}
                                </span>
                                <span
                                    className={`inline-flex items-center gap-1.5 text-xs font-medium ${c.status === "Completado" ? "text-emerald-300" : "text-amber-300"
                                        }`}
                                >
                                    <span className={`h-1.5 w-1.5 rounded-full ${c.status === "Completado" ? "bg-emerald-400" : "bg-amber-400 animate-pulse"}`} />
                                    {c.status}
                                </span>
                            </div>

                            <p className="mt-8 font-display text-sm font-bold uppercase tracking-[0.18em] text-apd-sky">{c.name}</p>
                            <h3 className="mt-2 font-display text-2xl font-bold leading-snug tracking-tight">{c.headline}</h3>

                            <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                                <div>
                                    <dt className="font-semibold text-white/90">El desafío</dt>
                                    <dd className="mt-1 text-apd-mist">{c.challenge}</dd>
                                </div>
                                <div>
                                    <dt className="font-semibold text-white/90">Solución y valor</dt>
                                    <dd className="mt-1 text-apd-mist">{c.value}</dd>
                                </div>
                            </dl>

                            <div className="mt-auto flex flex-wrap gap-2 pt-7">
                                {c.tech.map((t) => (
                                    <span key={t} className="rounded-lg bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-white/80">
                                        {t}
                                    </span>
                                ))}
                            </div>

                        </motion.article>
                    ))}
                </div>
            </Container>
        </section>
    )
}
