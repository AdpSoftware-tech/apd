"use client"

import { motion } from "framer-motion"
import { FiSearch, FiUsers, FiRepeat, FiSend } from "react-icons/fi"

export default function Methodology() {
    const phases = [
        {
            num: "01",
            title: "Descubrimiento",
            desc: "Analizamos tus necesidades, objetivos y procesos para definir la mejor solución.",
            color: "from-blue-400/30 to-blue-100/10",
            icon: <FiSearch className="text-blue-500 text-3xl" />
        },
        {
            num: "02",
            title: "Diseño",
            desc: "Diseñamos una propuesta funcional y clara, enfocada en usabilidad y resultados.",
            color: "from-purple-400/30 to-pink-100/10",
            icon: <FiUsers className="text-purple-500 text-3xl" />
        },
        {
            num: "03",
            title: "Desarrollo",
            desc: "Construimos la solución con tecnología moderna, calidad y visión orientada al negocio.",
            color: "from-cyan-400/30 to-cyan-100/10",
            icon: <FiRepeat className="text-cyan-500 text-3xl" />
        },
        {
            num: "04",
            title: "Soporte",
            desc: "Te acompañamos después del lanzamiento para mejorar, mantener y escalar la solución.",
            color: "from-apd-accent/30 to-apd-light/10",
            icon: <FiSend className="text-apd-accent text-3xl" />
        },
    ];

    return (
        <section id="metodologia" className="py-24 bg-apd-dark relative overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-apd-primary/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-blue-500 font-semibold tracking-widest uppercase mb-3">Nuestra propuesta de valor</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                        Una metodología clara para <span className="text-apd-primary">convertir ideas en soluciones reales</span>
                    </h3>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Cada proyecto pasa por un proceso estructurado que combina estrategia, diseño, desarrollo y validación para entregar resultados medibles.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={phase.num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, scale: 1.04, boxShadow: "0 8px 40px 8px rgba(6,89,155,0.18)" }}
                            transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
                            viewport={{ once: true }}
                            className={`relative group p-8 rounded-2xl bg-gradient-to-b ${phase.color} border border-white/10 hover:border-apd-accent focus-within:border-apd-accent transition-all duration-500 shadow-xl`}
                        >
                            {/* Número decorativo de fondo */}
                            <span className="absolute top-4 right-6 text-6xl font-black text-white/5 group-hover:text-apd-accent/10 transition-colors duration-300">
                                {phase.num}
                            </span>

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-12 h-12 flex items-center justify-center mb-6 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.2)] bg-white/70">
                                    {phase.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-apd-accent transition-colors duration-300">
                                    {phase.title}
                                </h4>
                                <p className="text-apd-dark2 leading-relaxed text-sm">
                                    {phase.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}