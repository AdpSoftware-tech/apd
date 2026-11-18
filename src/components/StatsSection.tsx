"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Rocket, Smile, ShieldCheck, Clock3 } from "lucide-react"

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
    const [count, setCount] = useState(0)

    const { numericValue, prefix, suffix } = useMemo(() => {
        const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/)

        if (!match) {
            return { numericValue: 0, prefix: "", suffix: value }
        }

        return {
            prefix: match[1] || "",
            numericValue: parseInt(match[2], 10) || 0,
            suffix: match[3] || "",
        }
    }, [value])

    useEffect(() => {
        let controls: { stop: () => void } | undefined

        const start = async () => {
            const { animate } = await import("framer-motion")

            controls = animate(0, numericValue, {
                duration,
                ease: "easeOut",
                onUpdate(latest) {
                    setCount(Math.round(latest))
                },
            })
        }

        start()

        return () => {
            controls?.stop()
        }
    }, [numericValue, duration])

    return (
        <span>
            {prefix}
            {count}
            {suffix}
        </span>
    )
}

export default function StatsSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    const stats = [
        {
            number: "7+",
            label: "Proyectos Entregados",
            description: "Soluciones robustas implementadas y listas para operar en entornos reales.",
            icon: Rocket,
        },
        {
            number: "100%",
            label: "Clientes Satisfechos",
            description: "Enfoque orientado a resultados, confianza y relaciones de largo plazo.",
            icon: Smile,
        },
        {
            number: "QA",
            label: "Calidad Garantizada",
            description: "Control de calidad desde el diseño hasta la validación final del producto.",
            icon: ShieldCheck,
        },
        {
            number: "24/7",
            label: "Soporte Continuo",
            description: "Acompañamiento técnico y funcional después del despliegue.",
            icon: Clock3,
        },
    ]

    return (
        <section ref={ref} className="relative overflow-hidden bg-[#f5f5f5] py-24 md:py-28">
            <div className="container relative z-10 mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-16 max-w-5xl text-center"
                >
                    <span className="inline-block text-[11px] font-medium uppercase tracking-[0.24em] text-[#2b3f52]">
                        Indicadores clave
                    </span>

                    <h2 className="mt-6 text-4xl font-black leading-[0.98] tracking-[-0.05em] text-[#0b2136] md:text-[4rem]">
                        Resultados que reflejan <span className="text-[#5c7a96]">confianza, calidad y</span>
                        <span className="block">continuidad</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#4d5d6c] md:text-lg">
                        Cada proyecto se desarrolla con un enfoque estratégico, validación técnica y
                        acompañamiento constante para asegurar una entrega sólida.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon
                        const hasNumber = /[0-9]/.test(stat.number)

                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 24 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.55, delay: index * 0.12 }}
                                className="group relative overflow-hidden rounded-[1.5rem] border border-[#dfe6eb] bg-[#edf2f5] p-7 shadow-[0_8px_30px_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(15,23,42,0.08)]"
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4dde4] bg-white/60 text-[#2b3f52]">
                                            <Icon className="h-5 w-5" strokeWidth={2.2} />
                                        </div>
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7a8a99]">
                                            APD
                                        </span>
                                    </div>

                                    <div className="mt-8 text-5xl font-black tracking-[-0.08em] text-[#0d2238] md:text-6xl">
                                        {inView
                                            ? hasNumber
                                                ? <Counter value={stat.number} />
                                                : stat.number
                                            : hasNumber
                                                ? "0"
                                                : stat.number}
                                    </div>

                                    <h3 className="mt-5 text-[1.05rem] font-black leading-[1.1] tracking-[-0.04em] text-[#0d2238] md:text-[1.8rem]">
                                        {stat.label}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-[#4d5d6c] md:text-[0.97rem]">
                                        {stat.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mx-auto mt-12 max-w-6xl rounded-[1.5rem] border border-[#dfe6eb] bg-[#eef2f5] px-6 py-5 text-center shadow-[0_8px_30px_rgba(15,23,42,0.02)] md:px-10"
                >
                    <p className="text-base leading-relaxed text-[#3e4c5b] md:text-[1.05rem]">
                        Experiencia aplicada en soluciones como <span className="font-bold text-[#0d2238]">Pedx Calc</span>, <span className="font-bold text-[#0d2238]">ADAdmin</span> e <span className="font-bold text-[#0d2238]">Iglesias Integradas</span>, con visión de producto, escalabilidad y enfoque real en el negocio.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}