"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

/**
 * Componente Counter:
 * Anima los números de 0 al valor objetivo usando un estado de React
 * para máxima compatibilidad con el compilador de Next.js.
 */
function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
    const [count, setCount] = useState(0)
    // Extraemos el número (ej: "100" de "100%")
    const numericValue = parseInt(value.replace(/\D/g, "")) || 0
    // Extraemos el sufijo (ej: "%" de "100%")
    const suffix = value.replace(/[0-9]/g, "")

    useEffect(() => {
        // Importamos dinámicamente animate para asegurar que se ejecute en el cliente
        import("framer-motion").then(({ animate }) => {
            const controls = animate(0, numericValue, {
                duration: duration,
                ease: "easeOut",
                onUpdate(latest) {
                    setCount(Math.round(latest))
                }
            })
            return () => controls.stop()
        })
    }, [numericValue, duration])

    return <span>{count}{suffix}</span>
}

export default function StatsSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    const stats = [
        {
            number: "4+",
            label: "Proyectos Entregados",
            description: "Soluciones robustas ya en producción"
        },
        {
            number: "100%",
            label: "Clientes Satisfechos",
            description: "Compromiso total con resultados reales"
        },
        {
            number: "QA",
            label: "Calidad Garantizada",
            description: "QA al frente desde la primera fase"
        },
        {
            number: "24 / 7",
            label: "Soporte Continuo",
            description: "Acompañamiento total post-despliegue"
        },
    ]

    return (
        <section ref={ref} className="py-24 bg-apd-dark overflow-hidden relative border-t border-white/5">
            {/* Brillo de fondo (Glow) para profundidad tecnológica */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-apd-primary/5 blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-white tracking-tight">
                    Resultados que Hablan por <span className="text-apd-primary">Nosotros</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="relative mb-6">
                                <div className="text-6xl md:text-7xl font-black text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                                    {inView && (
                                        /[0-9]/.test(stat.number) ?
                                            <Counter value={stat.number} /> :
                                            stat.number
                                    )}
                                </div>
                                {/* Línea decorativa estilo circuito */}
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-apd-primary rounded-full group-hover:w-20 transition-all duration-500"></div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-apd-light uppercase tracking-wider">
                                {stat.label}
                            </h3>
                            <p className="text-gray-400 text-base leading-relaxed max-w-[200px]">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Pie de sección con mención a tus proyectos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-24 text-center border-t border-white/5 pt-12"
                >
                    <p className="text-gray-500 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                        Experiencia comprobada en sistemas como <span className="text-white font-semibold">Pedx Calc</span>, <span className="text-white font-semibold">ADAdmin</span> e <span className="text-white font-semibold">Iglesias Integradas</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}