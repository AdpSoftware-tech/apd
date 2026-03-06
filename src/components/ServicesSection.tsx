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
import { useLocale } from "../context/LocaleContext";

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
            className="relative overflow-hidden bg-[#EEEEEE] py-24 md:py-28"
        >
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white via-[#F4F4F4] to-[#EEEEEE]" />

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/20 blur-[140px]" />
                <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-100/25 blur-[140px]" />
                <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-indigo-100/20 blur-[140px]" />
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.035)_1px,transparent_0)] [background-size:36px_36px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <span className="inline-flex rounded-full border border-gray-300 bg-white/80 px-4 py-1.5 text-sm font-medium text-gray-700 backdrop-blur-sm">
                        Servicios profesionales
                    </span>

                    <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                        Soluciones en{" "}
                        <span className="bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                            tecnología, consultoría y software
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-gray-600">
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
                                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100 blur-3xl" />
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                                        <Icon className="h-7 w-7" />
                                    </div>

                                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                                        {group.title}
                                    </h3>

                                    <p className="mt-3 text-base leading-7 text-gray-600">
                                        {group.description}
                                    </p>

                                    <div className="mt-6 space-y-3">
                                        {group.items.map((item) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                                                <span className="text-sm leading-6 text-gray-700">
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
                    className="mx-auto mt-14 max-w-5xl rounded-3xl border border-gray-200 bg-white px-6 py-8 shadow-sm md:px-10"
                >
                    <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                        <div className="max-w-3xl">
                            <h4 className="text-xl font-semibold text-gray-900">
                                ¿Necesitas una solución a la medida?
                            </h4>
                            <p className="mt-2 text-base leading-relaxed text-gray-600">
                                Podemos ayudarte desde la idea inicial hasta la implementación,
                                soporte y mejora continua de tu proyecto o institución.
                            </p>
                        </div>

                        <a
                            href="#contacto"
                            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black"
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