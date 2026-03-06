"use client"

import { motion } from "framer-motion"
import { useLocale } from "../context/LocaleContext"

export default function Experience() {
    const { t } = useLocale()
    const data = t('experience') as any
    const projects = data.projects as Array<any>

    return (
        <section id="experiencia" className="py-24 bg-apd-dark relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-3">{data.eyebrow}</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                        {data.title.split(' ')[0]} <span className="text-apd-primary">{data.title.split(' ').slice(1).join(' ')}</span>
                    </h3>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{data.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/5 border border-apd-light/30 p-8 rounded-3xl hover:shadow-2xl hover:scale-[1.025] hover:border-apd-accent/60 transition-all duration-400"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-apd-accent/10 rounded-2xl group-hover:bg-apd-accent/20 transition-colors">
                                    <h3 className="text-2xl font-bold text-apd-dark group-hover:text-apd-accent transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                {project.status && (
                                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter border ${project.status === 'En desarrollo' || project.status === 'In progress' ? 'bg-yellow-100 text-yellow-700 border-yellow-300' : 'bg-green-100 text-green-700 border-green-300'}`}>
                                        {project.status}
                                    </span>
                                )}
                            </div>

                            <p className="text-apd-dark mb-8 leading-relaxed font-sans text-base md:text-lg">{project.desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t: string) => (
                                    <span key={t} className="text-[11px] bg-apd-light/30 text-apd-accent px-3 py-1 rounded-full border border-apd-accent/20 font-semibold shadow-sm uppercase font-sans">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Decoración sutil al hacer hover */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-apd-accent group-hover:w-full transition-all duration-500 rounded-b-3xl"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}