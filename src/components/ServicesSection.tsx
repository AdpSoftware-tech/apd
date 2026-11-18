"use client";

import { motion } from "framer-motion";
import { MonitorCog, GraduationCap, Boxes, ArrowRight, Check } from "lucide-react";
import { Container, SectionHeading } from "./ui";

const serviceGroups = [
    {
        icon: MonitorCog,
        title: "Soluciones Tecnológicas",
        description:
            "Desarrollo, infraestructura, soporte y modernización tecnológica para empresas y proyectos.",
        items: [
            "Desarrollo de software",
            "Aplicaciones móviles",
            "Sistemas SaaS",
            "Implementación de sistemas",
            "Hosting y servidores",
            "Redes y soporte técnico",
            "Mantenimiento de equipos",
        ],
    },
    {
        icon: GraduationCap,
        title: "Consultoría y Capacitación",
        description:
            "Acompañamiento profesional para procesos institucionales y estratégicos con enfoque técnico y analítico.",
        items: [
            "Transformación digital",
            "Planificación estratégica",
            "Evaluaciones técnicas",
            "Capacitación institucional",
            "Diseño curricular",
            "Asesoría en estadística y matemáticas",
        ],
    },
    {
        icon: Boxes,
        title: "Proveedor de Software",
        description:
            "Suministro, implementación y mantenimiento de plataformas para organizaciones que requieren soluciones confiables.",
        items: [
            "Licencias",
            "Desarrollo de sistemas",
            "Implementación de plataformas",
            "Mantenimiento de sistemas",
        ],
    },
];

export default function ServicesSection() {
    return (
        <section id="servicios" className="relative overflow-hidden bg-white py-24 sm:py-32">
            <div className="bg-grid-light pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />

            <Container className="relative">
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                    <SectionHeading
                        eyebrow="Servicios"
                        title={<>Servicios diseñados para <span className="text-apd-primary">impulsar tu negocio</span></>}
                        description="Creamos soluciones digitales para empresas que necesitan mejorar procesos, automatizar tareas y operar con mayor eficiencia y confianza."
                    />
                    <a
                        href="#contacto"
                        className="group inline-flex flex-shrink-0 items-center gap-2 self-start rounded-full bg-apd-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-apd-accent lg:self-auto"
                    >
                        Cotizar servicio
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                <div className="mt-16 grid gap-6 lg:grid-cols-3">
                    {serviceGroups.map((group, index) => {
                        const Icon = group.icon;
                        return (
                            <motion.article
                                key={group.title}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#E1E7EC] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_30px_60px_-25px_rgba(4,35,58,0.35)]"
                            >
                                {/* Línea de acento superior al hover */}
                                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-apd-accent to-apd-sky transition-transform duration-500 group-hover:scale-x-100" />

                                <div className="flex items-start justify-between">
                                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-apd-paper text-apd-accent ring-1 ring-[#E1E7EC] transition-colors group-hover:bg-apd-dark group-hover:text-apd-sky">
                                        <Icon className="h-7 w-7" />
                                    </span>
                                    <span className="font-display text-5xl font-extrabold text-[#EDF1F4]">0{index + 1}</span>
                                </div>

                                <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-apd-dark">{group.title}</h3>
                                <p className="mt-3 leading-relaxed text-apd-gray">{group.description}</p>

                                <ul className="mt-7 space-y-3 border-t border-[#EDF1F4] pt-6">
                                    {group.items.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-[#3E5468]">
                                            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-apd-primary/10 text-apd-primary">
                                                <Check className="h-3 w-3" strokeWidth={3} />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
