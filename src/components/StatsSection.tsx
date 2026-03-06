"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

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
            label: "Proyectos entregados",
            description:
                "Soluciones robustas implementadas y listas para operar en entornos reales.",
        },
        {
            number: "100%",
            label: "Clientes satisfechos",
            description:
                "Enfoque orientado a resultados, confianza y relaciones de largo plazo.",
        },
        {
            number: "QA",
            label: "Calidad garantizada",
            description:
                "Control de calidad desde el diseño hasta la validación final del producto.",
        },
        {
            number: "24/7",
            label: "Soporte continuo",
            description:
                "Acompañamiento técnico y funcional después del despliegue.",
        },
    ]

    return (
        <section
            ref={ref}
            className="relative overflow-hidden bg-[#EEEEEE] py-24 md:py-28"
        >
            {/* Transición suave superior */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-[#F4F4F4] to-[#EEEEEE]" />

            {/* Fondo decorativo */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/15 blur-[150px]" />
                <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-100/20 blur-[150px]" />
                <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-blue-100/20 blur-[150px]" />

                {/* patrón tecnológico muy sutil */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.035)_1px,transparent_0)] [background-size:36px_36px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6">

                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <span className="mb-4 inline-flex rounded-full border border-gray-300 bg-white/70 px-4 py-1.5 text-sm font-medium text-gray-700 backdrop-blur-sm">
                        Indicadores clave
                    </span>

                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Resultados que reflejan{" "}
                        <span className="bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                            confianza, calidad y continuidad
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
                        Cada proyecto se desarrolla con enfoque estratégico, validación
                        técnica y acompañamiento constante para asegurar una entrega sólida.
                    </p>
                </motion.div>

                {/* Grid de estadísticas */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

                    {stats.map((stat, index) => {
                        const hasNumber = /[0-9]/.test(stat.number)

                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 24 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.55, delay: index * 0.12 }}
                                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                {/* glow suave hover */}
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100 blur-3xl" />
                                </div>

                                <div className="relative z-10">

                                    <div className="mb-6 flex items-center justify-between">
                                        <div className="h-px w-12 bg-gradient-to-r from-blue-600 to-transparent" />
                                        <span className="text-xs uppercase tracking-[0.25em] text-gray-400">
                                            APD
                                        </span>
                                    </div>

                                    <div className="mb-4 text-5xl font-black tracking-tight text-gray-900 md:text-6xl">
                                        {inView
                                            ? hasNumber
                                                ? <Counter value={stat.number} />
                                                : stat.number
                                            : hasNumber
                                                ? "0"
                                                : stat.number}
                                    </div>

                                    <h3 className="mb-3 text-lg font-semibold uppercase tracking-[0.14em] text-gray-800">
                                        {stat.label}
                                    </h3>

                                    <p className="text-sm leading-7 text-gray-600">
                                        {stat.description}
                                    </p>

                                </div>
                            </motion.div>
                        )
                    })}

                </div>

                {/* Bloque inferior */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mx-auto mt-14 max-w-5xl rounded-3xl border border-gray-200 bg-white px-6 py-8 text-center shadow-sm md:px-10"
                >
                    <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                        Experiencia aplicada en soluciones como{" "}
                        <span className="font-semibold text-gray-900">Pedx Calc</span>,{" "}
                        <span className="font-semibold text-gray-900">ADAdmin</span> e{" "}
                        <span className="font-semibold text-gray-900">
                            Iglesias Integradas
                        </span>,
                        con visión de producto, escalabilidad y enfoque real en negocio.
                    </p>
                </motion.div>

            </div>
        </section>
    )
}