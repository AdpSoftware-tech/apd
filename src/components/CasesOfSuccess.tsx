"use client"

import { motion } from "framer-motion"

const cases = [
    {
        title: "Pedx Calc: Precisión en el Cálculo Especializado",
        challenge: "En entornos donde el margen de error debe ser cero, los cálculos manuales representan un riesgo crítico y una pérdida de tiempo valioso.",
        solution: "Desarrollamos un motor de cálculo de alta precisión con una interfaz ultra-simplificada, permitiendo obtener resultados exactos en segundos. Aplicamos un rigor de QA al frente extremo.",
        value: "Rapidez operativa y seguridad total en la toma de decisiones basadas en datos precisos.",
        image: "https://img.utdstc.com/screen/cd7/cc3/cd7cc3b90e1480dd6111c9f1dbc04d8297c21b9d8eb23fcfe55765858a3a2709:600" // [image:12] scientific calculator example
    },
    {
        title: "ADAdmin: Control Total de la Gestión Administrativa",
        challenge: "La desorganización de datos y la falta de centralización impedían a la gerencia tener una visión clara del estado real de su negocio en tiempo real.",
        solution: "Creamos una plataforma centralizada que integra flujos de trabajo administrativos, reportes financieros y gestión de recursos. Co-creamos el dashboard junto a los administradores.",
        value: "Incremento de la eficiencia administrativa y una toma de decisiones informada que reduce costos operativos.",
        image: "https://insightsoftware.com/wp-content/uploads/2022/01/Performance-Analysis-1024x823.png" // [image:0] dashboard administrativo
    },
    {
        title: "Iglesias Integradas: Gestión de Comunidades a Gran Escala",
        challenge: "Manejar grandes volúmenes de miembros, eventos y registros financieros de forma manual causaba cuellos de botella en la comunicación y falta de transparencia.",
        solution: "Implementamos un ecosistema digital integral con módulos de registro, seguimiento de asistencia y gestión financiera transparente, bajo arquitectura escalable.",
        value: "Fortalecimiento del sentido de comunidad, orden administrativo total y plataforma que crece con la organización.",
        image: "https://cdn.dribbble.com/userupload/42584082/file/original-a0f9eda414db2ae918dfba05b70c2ebc.png" // [image:4] church management dashboard
    },
    {
        title: "POS Heladerías: Productividad en el Punto de Venta (Proyecto Actual)",
        challenge: "La complejidad en la personalización de productos ralentizaba el servicio y dificultaba el control de turnos.",
        solution: "Diseñamos interfaz táctil intuitiva con selección dinámica de sabores + registro de turnos por cajero para trazabilidad total.",
        value: "Mayor flujo de clientes por hora, reducción de errores y control administrativo absoluto.",
        image: "https://chituvem.com/wp-content/uploads/2026/01/ice-cream-vending-machine.webp" // [image:7] POS heladeria touchscreen example
    },
]

export default function CasesOfSuccess() {
    return (
        <section id="casos-exito" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-apd-dark mb-12">
                    Casos de Éxito: Soluciones en Acción
                </h2>
                <p className="text-xl text-center mb-16 max-w-4xl mx-auto">
                    Cada proyecto es una prueba de que la tecnología adaptada transforma cualquier sector.
                </p>

                <div className="space-y-20">
                    {cases.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                            className="grid md:grid-cols-2 gap-12 items-center"
                        >
                            <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                                <h3 className="text-3xl font-bold text-apd-primary mb-6">{item.title}</h3>
                                <div className="space-y-6">
                                    <div>
                                        <strong className="block text-lg text-apd-dark mb-2">El Desafío:</strong>
                                        <p className="text-gray-700">{item.challenge}</p>
                                    </div>
                                    <div>
                                        <strong className="block text-lg text-apd-dark mb-2">La Solución (DCS):</strong>
                                        <p className="text-gray-700">{item.solution}</p>
                                    </div>
                                    <div>
                                        <strong className="block text-lg text-apd-dark mb-2">El Valor:</strong>
                                        <p className="text-gray-700">{item.value}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                                    width={800}
                                    height={600}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}