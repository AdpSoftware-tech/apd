"use client"

import { motion } from "framer-motion"
// Iconos para los pilares
// Iconos para los pilares
import { FiHeart, FiShield, FiUsers } from "react-icons/fi"

export default function About() {
    const pillars = [
        {
            title: "Desarrollo a medida",
            desc: "Creamos soluciones digitales pensadas para resolver necesidades reales de negocio, con enfoque en funcionalidad, escalabilidad y resultados.",
            icon: <FiHeart className="text-red-400" />
        },
        {
            title: "Calidad garantizada",
            desc: "La calidad está presente desde el diseño hasta la implementación final, para entregar software robusto y confiable.",
            icon: <FiShield className="text-green-400" />
        },
        {
            title: "Co-creación",
            desc: "Trabajamos con tu equipo para transformar procesos complejos en experiencias digitales más claras, rápidas y eficientes.",
            icon: <FiUsers className="text-blue-400" />
        },
    ]

    return (
        <section id="nosotros" className="py-24 bg-[#f3f3f1] relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[420px] h-[420px] bg-[#dfe8ef]/80 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#02233B] mb-8 tracking-[-0.04em]"
                    >
                        Soluciones digitales para empresas que buscan <span className="text-[#5d7d96]">mejorar su operación</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-[#3f4f60] leading-relaxed"
                    >
                        Somos una empresa de software en Costa Rica especializada en soluciones digitales para empresas. Diseñamos y desarrollamos plataformas, automatizaciones y aplicaciones que ayudan a mejorar la operación, aumentar la productividad y transformar procesos complejos en experiencias más eficientes.
                    </motion.p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group p-10 bg-white border border-[#dde5eb] rounded-[1.7rem] hover:border-[#b7c7d5] hover:shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition-all duration-500"
                        >
                            <div className="text-5xl mb-6 inline-block p-5 bg-[#eef4f8] border border-[#dfeaf1] rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                {pillar.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-[#0d2238] mb-4">
                                {pillar.title}
                            </h3>
                            <p className="text-[#4b5d6e] leading-relaxed font-medium">
                                {pillar.desc}
                            </p>
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#dfeaf1] blur-3xl opacity-40 group-hover:opacity-70 transition-opacity"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}