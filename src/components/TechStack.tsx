"use client"

import { motion } from "framer-motion"
// Importamos los iconos necesarios. Nota que Flutter usa 'Ri' y Postgres 'Si'
import {
    SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
    SiNodedotjs, SiPostgresql, SiMongodb, SiFramer,
    SiDocker, SiGooglecloud, SiPython, SiPostman
} from "react-icons/si"
import { RiFlutterFill } from "react-icons/ri" // Icono de Flutter

export default function TechStack() {
    const techs = [
        { name: "Next.js", icon: <SiNextdotjs />, color: "hover:text-white" },
        { name: "React", icon: <SiReact />, color: "hover:text-cyan-400" },
        { name: "Flutter", icon: <RiFlutterFill />, color: "hover:text-blue-400" },
        { name: "TypeScript", icon: <SiTypescript />, color: "hover:text-blue-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "hover:text-sky-400" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "hover:text-green-500" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "hover:text-blue-300" },
        { name: "MongoDB", icon: <SiMongodb />, color: "hover:text-green-400" },
        { name: "Python", icon: <SiPython />, color: "hover:text-yellow-500" },
        { name: "Docker", icon: <SiDocker />, color: "hover:text-blue-600" },
        { name: "GCP", icon: <SiGooglecloud />, color: "hover:text-red-400" },
        { name: "QA / Postman", icon: <SiPostman />, color: "hover:text-orange-500" },
    ];

    return (
        <section id="tecnologias" className="py-24 bg-apd-dark relative overflow-hidden">
            {/* Glow central de fondo para dar profundidad */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-apd-primary/10 blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-blue-500 font-semibold tracking-[0.2em] uppercase text-sm mb-4">Ecosistema Tecnológico</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                        Nuestro <span className="text-apd-primary">Tech Stack</span>
                    </h3>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Utilizamos las tecnologías más robustas y modernas para garantizar escalabilidad y rendimiento en cada proyecto.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {techs.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.2 },
                                backgroundColor: "rgba(59, 130, 246, 0.05)"
                            }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group flex flex-col items-center justify-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-apd-primary/50 transition-all duration-300 shadow-xl"
                        >
                            <div className={`text-5xl text-gray-600 mb-4 transition-all duration-300 group-hover:scale-110 ${tech.color}`}>
                                {tech.icon}
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 tracking-[0.15em] uppercase group-hover:text-white transition-colors">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}