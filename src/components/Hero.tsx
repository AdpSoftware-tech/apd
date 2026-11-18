"use client"
import Link from "next/link";
import React from 'react'
import { useLocale } from '../context/LocaleContext'
import Image from "next/image"

export default function Hero() {
    const { t } = useLocale()

    const chips = t('hero.chips') as string[]

    return (
        <header id="hero" className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#f7f7f5]">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(103,126,149,0.18),transparent_65%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(233,236,238,0.2))]"></div>
            </div>

            <div className="container mx-auto px-6 py-24 text-center relative z-10 max-w-5xl">

                {/* LOGO ESTÁTICO (más sobrio que el video) */}
                <div className="flex justify-center mb-8">
                    <div className="w-40 h-40 rounded-full overflow-hidden flex items-center justify-center">
                        <Image
                            src="/apd.png"
                            alt="A.P.D. Solutions logo"
                            width={200}
                            height={200}
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-apd-light/20 text-sm text-apd-gray">
                    Software para empresas
                </div>

                <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tight text-[#04233B]">
                    Software para empresas que quieren <span className="text-apd-accent">crecer con claridad</span>
                </h1>

                <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto text-apd-gray leading-relaxed">
                    Desarrollamos soluciones digitales a medida para mejorar procesos, optimizar
                    operaciones y acelerar resultados.
                </p>

                <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
                    {['Desarrollo a medida', 'QA y calidad', 'Automatización', 'Plataformas web'].map((c: string) => (
                        <span key={c} className="text-sm px-3 py-1.5 rounded-full bg-apd-light/10 text-apd-dark2 border border-apd-light/30">{c}</span>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-6">
                    <a
                        href="#contacto"
                        aria-label="Solicitar cotización"
                        className="inline-flex text-white items-center bg-apd-accent font-medium text-base px-8 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-apd-accent focus:ring-offset-2 shadow hover:bg-apd-dark2 hover:text-apd-bglogo transition"
                    >
                        Solicitar cotización
                    </a>

                    <Link
                        href="/servicios"
                        aria-label="Ver servicios"
                        className="text-base text-[#64808E] px-4 py-2 rounded-md hover:underline hover:text-apd-accent"
                    >
                        Ver servicios
                    </Link>
                </div>

            </div>
        </header>
    )
}