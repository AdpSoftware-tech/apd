"use client"

import { useLocale } from "../../context/LocaleContext";

export default function PrivacyPage() {

    return (
        <main className="bg-[#ffffff] min-h-screen py-24">
            <div className="max-w-4xl mx-auto px-6">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
                    Información legal
                </p>

                <h1 className="text-6xl md:text-7xl font-extrabold text-[#04233B] tracking-tight mb-13">
                    Política de Privacidad
                </h1>

                <section className="space-y-8 text-gray-700 leading-relaxed">

                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Introducción
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            A.P.D. Solutions reconoce la importancia de proteger la privacidad de sus clientes y prospectos.
                            Nos comprometemos a recopilar la información mínima necesaria para garantizar una comunicación
                            segura y profesional. Aplicamos estándares de seguridad rigurosos para proteger la integridad
                            de los datos que gestionamos.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Alcance
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Esta política se aplica a la información personal recopilada a través de nuestro sitio web oficial
                            y las interacciones directas con A.P.D. Solutions. Nuestro sitio web tiene un propósito informativo
                            y de contacto; no incluye funciones de inicio de sesión para usuarios finales, por lo que la
                            recopilación de información personal es limitada.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Recopilación de Información
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Recopilamos datos proporcionados voluntariamente por los visitantes (nombres, correos electrónicos,
                            teléfonos) exclusivamente a través de formularios de consulta o comunicación directa.
                            No se recopilan cuentas de usuario dentro del sitio web.
                        </p>

                        <p className="text-lg leading-relaxed text-gray-700">
                            Podemos recopilar datos técnicos no identificables (dirección IP, tipo de navegador) mediante
                            cookies para optimizar la experiencia de navegación y el rendimiento del sitio.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Uso de la Información
                        </h2>

                        <ul className="list-disc ml-6 space-y-2 marker:text-[#04233B]">
                            <li className="text-lg leading-relaxed text-gray-700">Responder consultas sobre nuestros servicios tecnológicos, consultoría o licitaciones.</li>
                            <li className="text-lg leading-relaxed text-gray-700">Proporcionar seguimiento técnico a solicitudes específicas.</li>
                            <li className="text-lg leading-relaxed text-gray-700">Mejorar la calidad de nuestra oferta de servicios.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Divulgación y Seguridad
                        </h2>

                        <p className="text-lg leading-relaxed text-gray-700">
                            A.P.D. Solutions no vende ni alquila información personal. Solo divulgaremos datos ante
                            requerimientos legales de buena fe o para proteger los derechos de la empresa y terceros.
                        </p>

                        <p className="text-lg leading-relaxed text-gray-700">
                            Mantenemos altos estándares de seguridad técnica para proteger los datos en tránsito y en reposo.
                            Recomendamos a nuestros usuarios mantener precaución al enviar información sensible a través de internet.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Servicios de Terceros
                        </h2>

                        <p className="text-lg leading-relaxed text-gray-700">
                            Podemos utilizar proveedores externos para el alojamiento (Hosting) y análisis del sitio web.
                            Estos proveedores operan bajo sus propias políticas de privacidad, las cuales recomendamos revisar.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Contacto
                        </h2>

                        <p className="text-lg leading-relaxed text-gray-700">
                            Para dudas o inquietudes sobre esta política, comuníquese con nuestro equipo al correo:
                        </p>

                        <p className="mt-2 font-semibold text-gray-900">
                            apdsolutions5@gmail.com
                        </p>
                    </div>

                </section>
            </div>
        </main>
    )
}