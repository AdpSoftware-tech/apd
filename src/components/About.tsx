"use client"

import { motion } from "framer-motion"
import { Code2, ShieldCheck, Users } from "lucide-react"
import { Container, SectionHeading } from "./ui"

const pillars = [
    {
        title: "Desarrollo a medida",
        desc: "Soluciones pensadas para resolver necesidades reales de negocio, con foco en funcionalidad, escalabilidad y resultados.",
        icon: Code2,
    },
    {
        title: "Calidad garantizada",
        desc: "El QA está presente desde el diseño hasta la implementación final, para entregar software robusto y confiable.",
        icon: ShieldCheck,
    },
    {
        title: "Co-creación",
        desc: "Trabajamos junto a tu equipo para convertir procesos complejos en experiencias digitales claras, rápidas y eficientes.",
        icon: Users,
    },
]

export default function About() {
    return (
        <section id="nosotros" className="relative bg-apd-paper py-24 sm:py-32">
            <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="lg:sticky lg:top-28 lg:self-start"
                >
                    <SectionHeading
                        eyebrow="Quiénes somos"
                        title={<>Tecnología con propósito para <span className="text-apd-primary">mejorar tu operación</span></>}
                        description="Somos una empresa de software en Costa Rica especializada en soluciones digitales para empresas. Diseñamos y desarrollamos plataformas, automatizaciones y aplicaciones que aumentan la productividad y transforman procesos complejos en experiencias eficientes."
                    />
                    <a
                        href="#contacto"
                        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-apd-accent underline-offset-4 hover:underline"
                    >
                        Conversemos sobre tu proyecto →
                    </a>
                </motion.div>

                <div className="space-y-5">
                    {pillars.map((p, i) => {
                        const Icon = p.icon
                        return (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group flex gap-6 rounded-3xl border border-[#E1E7EC] bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-apd-primary/40 hover:shadow-[0_24px_50px_-20px_rgba(4,35,58,0.18)] sm:p-8"
                            >
                                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-apd-dark text-apd-sky transition-colors group-hover:bg-apd-accent group-hover:text-white">
                                    <Icon className="h-6 w-6" />
                                </span>
                                <div>
                                    <div className="flex items-baseline gap-3">
                                        <span className="font-display text-sm font-bold text-apd-light">0{i + 1}</span>
                                        <h3 className="font-display text-xl font-bold text-apd-dark">{p.title}</h3>
                                    </div>
                                    <p className="mt-2 leading-relaxed text-apd-gray">{p.desc}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}
