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
        { name: "Next.js", icon: <SiNextdotjs className="text-[#000000]" />, color: "hover:text-[#000000]", desc: "Framework React para SSR y SSG." },
        { name: "React", icon: <SiReact className="text-[#61DAFB]" />, color: "hover:text-[#61DAFB]", desc: "Librería para interfaces de usuario." },
        { name: "Flutter", icon: <RiFlutterFill className="text-[#02569B]" />, color: "hover:text-[#02569B]", desc: "Apps móviles multiplataforma." },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, color: "hover:text-[#3178C6]", desc: "JavaScript tipado para proyectos robustos." },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#38BDF8]" />, color: "hover:text-[#38BDF8]", desc: "CSS utility-first para desarrollo rápido." },
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, color: "hover:text-[#339933]", desc: "Entorno de ejecución backend JS." },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, color: "hover:text-[#336791]", desc: "Base de datos relacional avanzada." },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, color: "hover:text-[#47A248]", desc: "Base de datos NoSQL flexible." },
        { name: "Python", icon: <SiPython className="text-[#3776AB]" />, color: "hover:text-[#3776AB]", desc: "Lenguaje multipropósito y scripting." },
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" />, color: "hover:text-[#2496ED]", desc: "Contenedores para despliegue ágil." },
        { name: "GCP", icon: <SiGooglecloud className="text-[#4285F4]" />, color: "hover:text-[#4285F4]", desc: "Servicios cloud de Google." },
        { name: "QA / Postman", icon: <SiPostman className="text-[#FF6C37]" />, color: "hover:text-[#FF6C37]", desc: "Testing y APIs automatizadas." },
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

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-y-12 lg:gap-y-16">
                    {techs.map((tech, index) => (
                        <div
                            key={tech.name}
                            tabIndex={0}
                            className="group perspective-[1200px] focus:outline-none"
                        >
                            <div className="relative w-full h-40 md:h-48 transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotate-y-180 group-focus:rotate-y-180">
                                {/* Frente */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-apd-accent focus:border-apd-accent transition-all duration-300 shadow-xl [backface-visibility:hidden]">
                                    <div className={`text-5xl text-gray-600 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-focus:scale-110 group-focus:rotate-6 ${tech.color}`}>
                                        {tech.icon}
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-500 tracking-[0.15em] uppercase group-hover:text-apd-accent group-focus:text-apd-accent group-hover:bg-white group-focus:bg-white group-hover:px-2 group-focus:px-2 group-hover:py-1 group-focus:py-1 group-hover:rounded group-focus:rounded transition-all duration-300">
                                        {tech.name}
                                    </span>
                                </div>
                                {/* Reverso */}
                                <div className={`absolute inset-0 flex items-center justify-center p-6 rounded-2xl bg-apd-dark/90 text-sm font-semibold text-center shadow-xl rotate-y-180 [backface-visibility:hidden] ${tech.color.replace('hover:', '')}`}>
                                    {tech.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}