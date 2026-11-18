"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    MonitorCog,
    GraduationCap,
    Boxes,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import { useLocale } from "../../context/LocaleContext";

export default function ServicesSection() {
    const { t } = useLocale();

    const serviceGroups = [
        {
            icon: MonitorCog,
            title: "Soluciones Tecnológicas",
            description:
                "Servicios enfocados en desarrollo, infraestructura, soporte y modernización tecnológica para empresas y proyectos.",
            items: [
                "Desarrollo de software",
                "Mantenimiento de computadoras",
                "Redes",
                "Soporte técnico",
                "Implementación de sistemas",
                "Hosting y servidores",
                "Aplicaciones móviles",
                "Sistemas SaaS",
            ],
        },
        {
            icon: GraduationCap,
            title: "Consultoría y Capacitación",
            description:
                "Acompañamiento profesional para procesos académicos, institucionales y estratégicos con enfoque técnico y analítico.",
            items: [
                "Consultoría en matemáticas",
                "Asesoría en estadística",
                "Diseño curricular",
                "Capacitación institucional",
                "Transformación digital",
                "Planificación estratégica",
                "Evaluaciones técnicas",
            ],
        },
        {
            icon: Boxes,
            title: "Proveedor de Software",
            description:
                "Suministro, implementación y mantenimiento de plataformas y sistemas para organizaciones que requieren soluciones confiables.",
            items: [
                "Licencias",
                "Desarrollo de sistemas",
                "Implementación de plataformas",
                "Mantenimiento de sistemas",
            ],
        },
    ];

    return (
        <section
            id="servicios"
            className="relative overflow-hidden bg-[#f3f2f0] py-24 md:py-28"
        >
            <div className="pointer-events-none absolute inset-0 opacity-80">
                <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#dfeaf2]/70 blur-[120px]" />
                <div className="absolute bottom-8 left-12 h-64 w-64 rounded-full bg-[#edf1f4]/80 blur-[120px]" />
                <div className="absolute right-10 top-1/3 h-64 w-64 rounded-full bg-[#e7edf3]/70 blur-[120px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <span className="inline-flex rounded-full border border-[#dfe6eb] bg-white/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#53677a] backdrop-blur-sm">
                        Servicios profesionales
                    </span>

                    <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-[#0d2238] md:text-5xl">
                        Soluciones en{" "}
                        <span className="text-[#5d7d96]">
                            tecnología, consultoría y software
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-[#53677a]">
                        Ofrecemos servicios integrales para empresas, instituciones y proyectos
                        que necesitan acompañamiento técnico, estratégico y digital.
                    </p>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {serviceGroups.map((group, index) => {
                        const Icon = group.icon;

                        return (
                            <motion.div
                                key={group.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.55, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-[1.8rem] border border-[#dfe6eb] bg-white/90 p-8 shadow-[0_18px_40px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(15,23,42,0.06)]"
                            >
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#dfeaf1] blur-3xl" />
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf3f7] text-[#0d2238] ring-1 ring-[#dfe6eb]">
                                        <Icon className="h-7 w-7" />
                                    </div>

                                    <h3 className="text-2xl font-bold tracking-[-0.04em] text-[#0d2238]">
                                        {group.title}
                                    </h3>

                                    <p className="mt-3 text-base leading-7 text-[#53677a]">
                                        {group.description}
                                    </p>

                                    <div className="mt-6 space-y-3">
                                        {group.items.map((item) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0d2238]" />
                                                <span className="text-sm leading-6 text-[#465a6e]">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.75, delay: 0.2 }}
                    className="mx-auto mt-14 max-w-5xl rounded-[1.8rem] border border-[#dfe6eb] bg-white px-6 py-8 shadow-[0_18px_40px_rgba(15,23,42,0.03)] md:px-10"
                >
                    <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                        <div className="max-w-3xl">
                            <h4 className="text-xl font-semibold text-[#0d2238]">
                                ¿Necesitas una solución a la medida?
                            </h4>
                            <p className="mt-2 text-base leading-relaxed text-[#53677a]">
                                Podemos ayudarte desde la idea inicial hasta la implementación,
                                soporte y mejora continua de tu proyecto o institución.
                            </p>
                        </div>

                        <a
                            href="/#contacto"
                            className="inline-flex items-center justify-center rounded-xl bg-[#0d2238] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#102a40]"
                        >
                            Cotizar servicio
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}