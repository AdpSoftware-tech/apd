"use client"

import { motion } from "framer-motion"

export default function Methodology() {
    const phases = [
        {
            num: "01",
            title: "Inmersión",
            desc: "Observamos y escuchamos tus necesidades para entender el ADN de tu negocio.",
            color: "from-blue-500/20"
        },
        {
            num: "02",
            title: "Co-creación",
            desc: "Diseñamos la arquitectura tecnológica mano a mano con tu equipo.",
            color: "from-purple-500/20"
        },
        {
            num: "03",
            title: "Desarrollo Iterativo",
            desc: "Entregas rápidas con QA continuo para garantizar un software robusto.",
            color: "from-cyan-500/20"
        },
        {
            num: "04",
            title: "Despliegue y Éxito",
            desc: "Lanzamiento estratégico y acompañamiento post-implementación.",
            color: "from-apd-primary/20"
        },
    ];

    return (
        <section id="metodologia" className="py-24 bg-apd-dark relative overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-apd-primary/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-blue-500 font-semibold tracking-widest uppercase mb-3">Proceso</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                        Metodología <span className="text-apd-primary">DCS</span>
                    </h3>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Un enfoque ágil diseñado para transformar ideas complejas en soluciones digitales de alto rendimiento.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={phase.num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative group p-8 rounded-2xl bg-gradient-to-b ${phase.color} to-transparent border border-white/10 hover:border-apd-primary/50 transition-all duration-500`}
                        >
                            {/* Número decorativo de fondo */}
                            <span className="absolute top-4 right-6 text-6xl font-black text-white/5 group-hover:text-apd-primary/10 transition-colors">
                                {phase.num}
                            </span>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-apd-primary rounded-lg flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    <span className="text-white font-bold">{phase.num}</span>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-apd-primary transition-colors">
                                    {phase.title}
                                </h4>
                                <p className="text-gray-400 leading-relaxed text-sm">
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