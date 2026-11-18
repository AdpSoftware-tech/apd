"use client"

import { motion } from "framer-motion"
import { Search, PenTool, Code2, LifeBuoy } from "lucide-react"
import { Container, SectionHeading } from "./ui"

const phases = [
    {
        title: "Descubrimiento",
        desc: "Analizamos tus necesidades, objetivos y procesos para definir la mejor solución.",
        icon: Search,
    },
    {
        title: "Diseño",
        desc: "Diseñamos una propuesta funcional y clara, enfocada en usabilidad y resultados.",
        icon: PenTool,
    },
    {
        title: "Desarrollo y QA",
        desc: "Construimos con tecnología moderna y validamos cada entrega con pruebas automatizadas.",
        icon: Code2,
    },
    {
        title: "Soporte",
        desc: "Te acompañamos después del lanzamiento para mantener, mejorar y escalar la solución.",
        icon: LifeBuoy,
    },
]

export default function Methodology() {
    return (
        <section id="proceso" className="relative bg-apd-paper py-24 sm:py-32">
            <Container>
                <SectionHeading
                    align="center"
                    eyebrow="Cómo trabajamos"
                    title={<>Un proceso claro para <span className="text-apd-primary">convertir ideas en soluciones reales</span></>}
                    description="Cada proyecto combina estrategia, diseño, desarrollo y validación para entregar resultados medibles."
                />

                <div className="relative mt-20">
                    {/* Línea conectora (escritorio) */}
                    <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-transparent via-apd-light/60 to-transparent lg:block" />

                    <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                        {phases.map((phase, i) => {
                            const Icon = phase.icon
                            return (
                                <motion.li
                                    key={phase.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: i * 0.12 }}
                                    className="relative text-center"
                                >
                                    <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-apd-dark text-apd-sky shadow-[0_15px_35px_-12px_rgba(4,35,58,0.6)]">
                                        <Icon className="h-7 w-7" />
                                        <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white font-display text-[11px] font-bold text-apd-dark ring-1 ring-[#E1E7EC]">
                                            {i + 1}
                                        </span>
                                    </div>
                                    <h3 className="mt-6 font-display text-xl font-bold text-apd-dark">{phase.title}</h3>
                                    <p className="mx-auto mt-3 max-w-xs leading-relaxed text-apd-gray">{phase.desc}</p>
                                </motion.li>
                            )
                        })}
                    </ol>
                </div>
            </Container>
        </section>
    )
}
