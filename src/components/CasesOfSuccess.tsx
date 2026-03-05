"use client"

import { motion } from "framer-motion"

const cases = [
    {
        title: "Pedx Calc: Precisión en el Cálculo Especializado",
        challenge: "En entornos donde el margen de error debe ser cero, los cálculos manuales representan un riesgo crítico y una pérdida de tiempo valioso.",
        solution: "Desarrollamos un motor de cálculo de alta precisión con una interfaz ultra-simplificada, permitiendo obtener resultados exactos en segundos. Aplicamos un rigor de QA al frente extremo.",
        value: "Rapidez operativa y seguridad total en la toma de decisiones basadas en datos precisos.",
        image: "https://img.utdstc.com/screen/cd7/cc3/cd7cc3b90e1480dd6111c9f1dbc04d8297c21b9d8eb23fcfe55765858a3a2709:600",
        status: "Completado" as const,
        tech: ["Next.js", "TypeScript", "UI/UX"],
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
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // Imagen de ejemplo de estética
        status: "Completado" as const,
        tech: ["Next.js", "Firebase", "Tailwind"],
    },
] as const;

type StatusType = typeof cases[number]["status"];

const statusColors: Record<StatusType, string> = {
    "Completado": "bg-green-100 text-green-700 border-green-300",
    "En desarrollo": "bg-yellow-100 text-yellow-800 border-yellow-300",
}

export default function CasesOfSuccess() {
    return (
        <section id="casos-exito" className="py-20 bg-apd-bglogo">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-apd-dark mb-12">
                    Casos de Éxito: Soluciones en Acción
                </h2>
                <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-apd-gray">
                    Cada proyecto es una prueba de que la tecnología adaptada transforma cualquier sector.
                </p>
                <div className="grid gap-12 md:grid-cols-2">
                    {cases.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                            className="bg-white rounded-2xl shadow-xl border border-apd-light flex flex-col h-full hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Imagen eliminada para un diseño más limpio */}
                            <div className="flex-1 flex flex-col p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-apd-dark2 leading-tight">
                                        {item.title}
                                    </h3>
                                    <span className={`px-4 py-1 rounded-full text-xs font-semibold border ${statusColors[item.status]}`}>{item.status}</span>
                                </div>
                                <div className="mb-3">
                                    <strong className="block text-apd-accent mb-1">El Desafío:</strong>
                                    <p className="text-apd-dark text-base mb-2">{item.challenge}</p>
                                </div>
                                <div className="mb-3">
                                    <strong className="block text-apd-accent mb-1">La Solución (DCS):</strong>
                                    <p className="text-apd-dark text-base mb-2">{item.solution}</p>
                                </div>
                                <div className="mb-4">
                                    <strong className="block text-apd-accent mb-1">El Valor:</strong>
                                    <p className="text-apd-dark text-base">{item.value}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {item.tech && item.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full bg-apd-light text-apd-accent text-xs font-semibold border border-apd-accent/20 shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}