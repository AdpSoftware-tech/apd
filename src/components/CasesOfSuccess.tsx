"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cases = [
    {
        title: "Pedx Calc: Precisión en el Cálculo Especializado",
        challenge: "En entornos donde el margen de error debe ser cero, los cálculos manuales representan un riesgo crítico y una pérdida de tiempo valioso.",
        solution: "Desarrollamos un motor de cálculo de alta precisión con una interfaz ultra-simplificada, permitiendo obtener resultados exactos en segundos. Aplicamos un rigor de QA al frente extremo.",
        value: "Rapidez operativa y seguridad total en la toma de decisiones basadas en datos precisos.",
        image: "https://img.utdstc.com/screen/cd7/cc3/cd7cc3b90e1480dd6111c9f1dbc04d8297c21b9d8eb23fcfe55765858a3a2709:600",
        status: "Completado" as const,
        tech: ["Flutter", "iOS", "Android"],
    },
    {
        title: "ADAdmin: Control Total de la Gestión Administrativa",
        challenge: "La desorganización de datos y la falta de centralización impedían a la gerencia tener una visión clara del estado real de su negocio en tiempo real.",
        solution: "Creamos una plataforma centralizada que integra flujos de trabajo administrativos, reportes financieros y gestión de recursos. Co-creamos el dashboard junto a los administradores.",
        value: "Incremento de la eficiencia administrativa y una toma de decisiones informada que reduce costos operativos.",
        image: "https://insightsoftware.com/wp-content/uploads/2022/01/Performance-Analysis-1024x823.png",
        status: "Completado" as const,
        tech: ["React", "PostgreSQL", "Node.js"],
    },
    {
        title: "Iglesias Integradas: Gestión de Comunidades a Gran Escala",
        challenge: "Manejar grandes volúmenes de miembros, eventos y registros financieros de forma manual causaba cuellos de botella en la comunicación y falta de transparencia.",
        solution: "Implementamos un ecosistema digital integral con módulos de registro, seguimiento de asistencia y gestión financiera transparente, bajo arquitectura escalable.",
        value: "Fortalecimiento del sentido de comunidad, orden administrativo total y plataforma que crece con la organización.",
        image: "https://cdn.dribbble.com/userupload/42584082/file/original-a0f9eda414db2ae918dfba05b70c2ebc.png",
        status: "Completado" as const,
        tech: ["Flutter", "Firebase", "Web"],
    },
    {
        title: "POS Heladerías: Productividad en el Punto de Venta (Proyecto Actual)",
        challenge: "La complejidad en la personalización de productos ralentizaba el servicio y dificultaba el control de turnos.",
        solution: "Diseñamos interfaz táctil intuitiva con selección dinámica de sabores + registro de turnos por cajero para trazabilidad total.",
        value: "Mayor flujo de clientes por hora, reducción de errores y control administrativo absoluto.",
        image: "https://chituvem.com/wp-content/uploads/2026/01/ice-cream-vending-machine.webp",
        status: "En desarrollo" as const,
        tech: ["Next.js", "PostgreSQL", "Tailwind"],
    },
    {
        title: "EsteticaPro: Gestión Integral para Salones de Belleza",
        challenge: "La administración manual de citas, inventario y clientes generaba confusión, sobrecarga de trabajo y pérdida de oportunidades de venta en el salón.",
        solution: "Desarrollamos una plataforma digital personalizada que permite agendar citas en línea, gestionar el inventario de productos y llevar un historial detallado de cada cliente. El sistema incluye recordatorios automáticos y reportes de ventas en tiempo real.",
        value: "Reducción del ausentismo, mayor satisfacción de los clientes y optimización de los recursos del salón, permitiendo un crecimiento sostenido del negocio.",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
        status: "Completado" as const,
        tech: ["Next.js", "Firebase", "Tailwind"],
    },
] as const;

type StatusType = typeof cases[number]["status"];

const statusColors: Record<StatusType, string> = {
    "Completado": "bg-green-100 text-green-700 border-green-300",
    "En desarrollo": "bg-yellow-400 text-[#02233B] border-yellow-600 shadow-md",
};

export default function CasesOfSuccess() {
    const [current, setCurrent] = useState(0);
    const total = cases.length;

    const goTo = (idx: number) => setCurrent((idx + total) % total);
    const next = () => goTo(current + 1);
    const prev = () => goTo(current - 1);

    // Color de fondo dinámico según status
    const bgGradient = cases[current].status === "En desarrollo"
        ? "bg-gradient-to-br from-yellow-50 via-white to-white"
        : "bg-gradient-to-br from-white via-apd-bglogo to-apd-light/30";

    return (
        <section id="casos-exito" className="py-12 md:py-20 bg-apd-bglogo">
            <div className="container mx-auto px-2 md:px-4 max-w-2xl flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-serif italic font-bold text-center mb-8 md:mb-12 text-[#02233B]">
                    Casos de Éxito: Soluciones en Acción
                </h2>
                <p className="text-lg md:text-xl text-center mb-6 md:mb-10 max-w-3xl mx-auto text-apd-dark font-sans">
                    Cada proyecto es una prueba de que la tecnología adaptada transforma cualquier sector.
                </p>
                <div className="relative w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, scale: 0.96, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: -40 }}
                            transition={{ duration: 0.5, type: "spring", bounce: 0.18 }}
                            className={`rounded-2xl border border-apd-light flex flex-col h-full p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${bgGradient}`}
                        >
                            <div className="flex items-center justify-between mb-4 flex-nowrap">
                                <h3 className="text-xl md:text-3xl font-extrabold leading-tight font-sans text-[#02233B]">
                                    {cases[current].title}
                                </h3>
                                <span className={`px-4 py-1 rounded-full text-xs font-semibold border ${statusColors[cases[current].status]} whitespace-nowrap ml-2`}>{cases[current].status}</span>
                            </div>
                            <div className="mb-3">
                                <strong className="block text-[#748A91] italic mb-1">El Desafío:</strong>
                                <p className="text-apd-dark text-base md:text-lg mb-2 font-sans">{cases[current].challenge}</p>
                            </div>
                            <div className="mb-3">
                                <strong className="block text-[#748A91] italic mb-1">La Solución (DCS):</strong>
                                <p className="text-apd-dark text-base md:text-lg mb-2 font-sans">{cases[current].solution}</p>
                            </div>
                            <div className="mb-4">
                                <strong className="block text-[#748A91] italic mb-1">El Valor:</strong>
                                <p className="text-apd-dark text-base md:text-lg font-sans">{cases[current].value}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {cases[current].tech && cases[current].tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full bg-apd-light text-apd-accent text-xs font-semibold border border-apd-accent/20 shadow-sm font-sans"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    {/* Flechas navegación - responsivas y con animación */}
                    <button
                        aria-label="Anterior"
                        onClick={prev}
                        className="absolute left-[-56px] top-1/2 -translate-y-1/2 bg-white border border-apd-light rounded-full w-12 h-12 md:w-10 md:h-10 flex items-center justify-center shadow hover:bg-apd-accent/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-apd-accent"
                    >
                        <span className="sr-only">Anterior</span>
                        <svg width="22" height="22" fill="none" stroke="#153656" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        aria-label="Siguiente"
                        onClick={next}
                        className="absolute right-[-56px] top-1/2 -translate-y-1/2 bg-white border border-apd-light rounded-full w-12 h-12 md:w-10 md:h-10 flex items-center justify-center shadow hover:bg-apd-accent/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-apd-accent"
                    >
                        <span className="sr-only">Siguiente</span>
                        <svg width="22" height="22" fill="none" stroke="#153656" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
                {/* Indicadores */}
                <div className="flex gap-2 mt-8">
                    {cases.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goTo(idx)}
                            className={`w-3 h-3 md:w-3 md:h-3 rounded-full border border-apd-accent transition-all duration-200 ${current === idx ? "bg-apd-accent scale-125" : "bg-apd-light"}`}
                            aria-label={`Ir al caso ${idx + 1}`}
                        />
                    ))}
                </div>
                {/* Progreso visual */}
                <div className="mt-4 text-apd-gray text-xs md:text-sm">
                    Caso {current + 1} de {total}
                </div>
            </div>
        </section>
    );
}