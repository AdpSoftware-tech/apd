"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Loader() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulamos la carga o esperamos a que el DOM esté listo
        const timer = setTimeout(() => setLoading(false), 2500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    exit={{ opacity: 0, transition: { duration: 0.8 } }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-apd-dark"
                >
                    {/* Círculo de Carga Estilo Circuito */}
                    <div className="relative flex items-center justify-center">
                        <motion.div
                            animate={{
                                rotate: 360,
                                borderColor: ["#3b82f6", "#93c5fd", "#3b82f6"]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-24 h-24 border-4 border-t-transparent rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                        />
                        <div className="absolute text-white font-black text-xl">
                            APD
                        </div>
                    </div>

                    {/* Texto Animado */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 text-center"
                    >
                        <h2 className="text-apd-light font-bold tracking-[0.3em] uppercase text-xs">
                            Iniciando Sistemas
                        </h2>
                        <div className="flex gap-1 mt-2 justify-center">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                    className="w-1.5 h-1.5 bg-apd-primary rounded-full"
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}