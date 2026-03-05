"use client"

import { motion } from "framer-motion"
// Iconos para los pilares
// Iconos para los pilares
import { FiHeart, FiShield, FiUsers } from "react-icons/fi"

export default function About() {
    const pillars = [
        {
            title: "Empatía Activa",
            desc: "No somos solo programadores; somos socios estratégicos. Entendemos su negocio antes de proponer una sola línea de código.",
            icon: <FiHeart className="text-red-400" />
        },
        {
            title: "QA al Frente",
            desc: "La calidad no es el paso final, es nuestra base. Garantizamos robustez desde el primer boceto hasta el despliegue.",
            icon: <FiShield className="text-green-400" /> // <--- Cambiado a FiShield
        },
        {
            title: "Co-creación",
            desc: "Usted es el experto en su negocio; nosotros en tecnología. Juntos diseñamos la solución perfecta.",
            icon: <FiUsers className="text-blue-400" />
        },
    ]

    return (
        <section id="nosotros" className="py-24 bg-apd-dark relative overflow-hidden">
            {/* Decoración de fondo sutil */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-apd-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-8"
                    >
                        Nuestra Propuesta de <span className="text-apd-primary">Valor</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-gray-400 leading-relaxed"
                    >
                        En <span className="text-white font-semibold">A.P.D. Solutions</span>, nos especializamos en transformar desafíos operativos en ventajas competitivas. Aplicamos nuestra <span className="text-apd-primary font-medium">Metodología DCS</span> para asegurar que cada solución aporte un valor real, medible y escalable.
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
                            className="relative group p-10 bg-white/[0.02] border border-white/10 rounded-3xl hover:border-apd-primary/40 hover:bg-white/[0.04] transition-all duration-500"
                        >
                            {/* Icono Flotante */}
                            <div className="text-4xl mb-6 inline-block p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                {pillar.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-apd-primary transition-colors">
                                {pillar.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {pillar.desc}
                            </p>

                            {/* Brillo en la esquina al hacer hover */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-apd-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}