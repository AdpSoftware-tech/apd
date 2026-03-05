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
                            className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:border-apd-primary/50 transition-all duration-500"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-apd-primary/10 rounded-2xl group-hover:bg-apd-primary/20 transition-colors">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-apd-primary transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                {project.status && (
                                    <span className={`text-[10px] font-bold ${project.status === 'En desarrollo' || project.status === 'In progress' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'} px-3 py-1 rounded-full uppercase tracking-tighter`}>
                                        {project.status}
                                    </span>
                                )}
                            </div>

                            <p className="text-gray-400 mb-8 leading-relaxed">{project.desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t: string) => (
                                    <span key={t} className="text-[10px] bg-white/5 text-gray-300 px-3 py-1 rounded-lg border border-white/5 uppercase font-medium">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Decoración sutil al hacer hover */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-apd-primary group-hover:w-full transition-all duration-500 rounded-b-3xl"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}