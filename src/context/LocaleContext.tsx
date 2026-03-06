"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type Locale = "es" | "en"

const MESSAGES: Record<Locale, Record<string, any>> = {
  es: {
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      services: "Servicios",
      contact: "Contacto",
      consulting: "Consultoría",
    },
    hero: {
      badge: "Ingeniería de Software & QA",
      titlePrefix: "A.P.D.",
      titleSuffix: "Solutions",
      subtitle: "Soluciones integrales para PYMES, medianas y grandes empresas. Desde el soporte técnico hasta la transformación digital y consultoría especializada.",
      ctaPrimary: "Agendar Consultoría",
      ctaSecondary: "Ver Servicios",
      chips: ["Fullstack", "Mobile", "QA"],
      since: "Desde 2018",
      clients: "Proyectos entregados a empresas SaaS y B2B",
    },
    experience: {
      title: "Casos de Éxito",
      eyebrow: "Portfolio",
      subtitle: "Soluciones a medida que han transformado la operativa de nuestros clientes.",
      projects: [
        {
          title: "Pedx Calc",
          desc: "Software especializado de alta precisión para cálculos médicos pediátricos.",
          tech: ["Next.js", "TypeScript", "UI/UX"],
          status: "Completado"
        },
        {
          title: "ADAdmin",
          desc: "Sistema centralizado para la gestión administrativa y operativa empresarial.",
          tech: ["React", "PostgreSQL", "Node.js"],
          status: "Completado"
        },
        {
          title: "Iglesias Integradas",
          desc: "Ecosistema digital integral para la gestión de comunidades y membresías.",
          tech: ["Flutter", "Firebase", "Web"],
          status: "Completado"
        },
        {
          title: "POS Heladerías",
          desc: "Punto de venta optimizado para flujos rápidos y control de turnos en tiempo real.",
          tech: ["Next.js", "PostgreSQL", "Tailwind"],
          status: "En desarrollo"
        }
      ]
    },
    footer: {
      navigationTitle: "Navegación",
      specialtiesTitle: "Especialidades",
      contactTitle: "Contacto Directo",
      terms: "Términos de Servicio",
      privacy: "Política de Privacidad",
      copyrightSuffix: "TODOS LOS DERECHOS RESERVADOS.",
    },
  },
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      services: "Services",
      contact: "Contact",
      consulting: "Consulting",
    },
    hero: {
      badge: "Software Engineering & QA",
      titlePrefix: "A.P.D.",
      titleSuffix: "Solutions",
      subtitle: "Soluciones integrales para PYMES, medianas y grandes empresas. Desde el soporte técnico hasta la transformación digital y consultoría especializada.",
      ctaPrimary: "Agendar Consultoría",
      ctaSecondary: "Ver Servicios",
      chips: ["Fullstack", "Mobile", "QA"],
      since: "Desde 2018",
      clients: "Proyectos entregados a empresas SaaS y B2B",
    },
    experience: {
      title: "Casos de Éxito",
      eyebrow: "Portfolio",
      subtitle: "Soluciones personalizadas que han transformado la operativa de nuestros clientes.",
      projects: [
        {
          title: "Pedx Calc",
          desc: "Software de alta precisión para cálculos médicos pediátricos.",
          tech: ["Next.js", "TypeScript", "UI/UX"],
          status: "Completado"
        },
        {
          title: "ADAdmin",
          desc: "Sistema centralizado para la gestión administrativa y operativa empresarial.",
          tech: ["React", "PostgreSQL", "Node.js"],
          status: "Completado"
        },
        {
          title: "Iglesias Integradas",
          desc: "Ecosistema digital integrado para la gestión de comunidades y membresías.",
          tech: ["Flutter", "Firebase", "Web"],
          status: "Completado"
        },
        {
          title: "POS Heladerías",
          desc: "Punto de venta optimizado para flujos rápidos y control de turnos en tiempo real.",
          tech: ["Next.js", "PostgreSQL", "Tailwind"],
          status: "En desarrollo"
        }
      ]
    },
    footer: {
      navigationTitle: "Navegación",
      specialtiesTitle: "Especialidades",
      contactTitle: "Contacto Directo",
      terms: "Términos de Servicio",
      privacy: "Política de Privacidad",
      copyrightSuffix: "TODOS LOS DERECHOS RESERVADOS.",
    },
  },
}

type LocaleContextType = {
  locale: Locale
  toggleLocale: () => void
  t: (key: string) => any
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es")

  useEffect(() => {
    try {
      const saved = localStorage.getItem("locale") as Locale | null
      if (saved === "es" || saved === "en") {
        setLocale(saved)
        if (typeof document !== "undefined") document.documentElement.lang = saved
        return
      }
      if (typeof navigator !== "undefined" && navigator.language?.startsWith("en")) {
        setLocale("en")
        if (typeof document !== "undefined") document.documentElement.lang = "en"
      }
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem("locale", locale)
    } catch (e) { }
    if (typeof document !== "undefined") document.documentElement.lang = locale
  }, [locale])

  const toggleLocale = () => setLocale((l) => (l === "es" ? "en" : "es"))

  const t = (key: string) => {
    const parts = key.split(".")
    let cur: any = MESSAGES[locale]
    for (const p of parts) {
      if (cur && typeof cur === "object" && p in cur) cur = cur[p]
      else return key
    }
    return cur
  }

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider")
  return ctx
}
