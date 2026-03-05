"use client"
import Link from "next/link";
import React from 'react'
import { useLocale } from '../context/LocaleContext'

export default function Hero() {
    const { t } = useLocale()

    const chips = t('hero.chips') as string[]

    return (
        <header role="banner" className="relative min-h-[75vh] flex items-center justify-center bg-apd-bglogo overflow-hidden">
            {/* Fondo muy sutil: un radial tenue para profundidad */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-apd-light/10 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 py-20 text-center relative z-10 max-w-5xl">

                {/* LOGO ESTÁTICO (más sobrio que el video) */}
                <div className="flex justify-center mb-8">
                    <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-lg overflow-hidden bg-apd-light/10 flex items-center justify-center">
                        <img src="/file.svg" alt="A.P.D. Solutions logo" className="w-20 h-20 md:w-28 md:h-28" />
                    </div>
                </div>

                {/* Badge Superior, más discreto */}
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-apd-light/20 text-sm text-apd-gray">
                    {t('hero.badge')}
                </div>

                <h1 className="text-4xl md:text-7xl font-bold mb-4 text-apd-dark tracking-tight">
                    {t('hero.titlePrefix')} <span className="text-apd-accent">{t('hero.titleSuffix')}</span>
                </h1>

                <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto text-apd-gray leading-relaxed">
                    {t('hero.subtitle')}
                </p>

                {/* Chips de servicios discretos */}
                <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
                    {chips.map((c: string) => (
                        <span key={c} className="text-sm px-3 py-1.5 rounded-full bg-apd-light/10 text-apd-dark2 border border-apd-light/30">{c}</span>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-6">
                    <a
                        href="#contacto"
                        aria-label="Agendar consultoría"
                        className="inline-flex items-center bg-apd-accent text-apd-bglogo font-medium text-base px-8 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-apd-accent focus:ring-offset-2 shadow hover:bg-apd-dark2 hover:text-apd-bglogo transition"
                    >
                        {t('hero.ctaPrimary')}
                    </a>

                    <Link
                        href="/servicios"
                        aria-label="Ver servicios"
                        className="text-base text-apd-dark2 px-4 py-2 rounded-md hover:underline hover:text-apd-accent"
                    >
                        {t("hero.ctaSecondary")}
                    </Link>
                </div>

            </div>
        </header>
    )
}