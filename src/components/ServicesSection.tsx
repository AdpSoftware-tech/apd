"use client";

import React from "react";
import { useLocale } from "../context/LocaleContext";
import Image from "next/image";

export default function ServicesSection() {
    const { t } = useLocale();

    const services = [
        {
            title: t("services.software.title") || "Desarrollo de Software",
            desc:
                t("services.software.desc") ||
                "Soluciones personalizadas para necesidades específicas de su negocio.",
        },
        {
            title: t("services.qa.title") || "QA Automation",
            desc:
                t("services.qa.desc") ||
                "Testing automatizado para garantizar la calidad de sus aplicaciones.",
        },
        {
            title: t("services.mobile.title") || "Mobile Apps (Flutter)",
            desc:
                t("services.mobile.desc") ||
                "Aplicaciones multiplataforma con diseño moderno y experiencia fluida.",
        },
        {
            title: t("services.data.title") || "Arquitectura de Datos",
            desc:
                t("services.data.desc") ||
                "Estructuras optimizadas para el manejo eficiente de su información.",
        },
    ];

    return (
        <section
            id="servicios"
            className="relative bg-apd-dark overflow-hidden py-20"
        >
            {/* Fondo tech (opcional): reemplaza por tu imagen */}
            <div className="absolute inset-0 opacity-25 pointer-events-none">
                <Image
                    src="/bg-tech.jpg"  // pon tu imagen aquí (o quítala)
                    alt=""
                    fill
                    className="object-cover"
                    priority={false}
                />
            </div>

            {/* Degradado para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        {t("services.title") || "SERVICIOS"}{" "}
                        <span className="text-apd-primary">
                            {t("services.titleAccent") || "TECNOLÓGICOS"}
                        </span>
                    </h2>

                    <p className="mt-4 text-gray-300 max-w-2xl">
                        {t("services.subtitle") ||
                            "Creamos soluciones de alto impacto para tu empresa, con enfoque en calidad, escalabilidad y experiencia de usuario."}
                    </p>

                    <div className="mt-10 space-y-8">
                        {services.map((s) => (
                            <div
                                key={s.title}
                                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/7 transition"
                            >
                                <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                                <p className="mt-2 text-gray-300 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#contacto"
                            className="inline-flex items-center px-6 py-3 rounded-md bg-apd-primary text-black font-semibold hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-apd-primary"
                        >
                            {t("services.cta") || "Contáctanos"}
                        </a>

                        <a
                            href="#"
                            className="inline-flex items-center px-6 py-3 rounded-md bg-white/5 text-gray-200 hover:bg-white/10 border border-white/10"
                        >
                            {t("services.cta2") || "Ver portafolio"}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}