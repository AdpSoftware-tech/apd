"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, ShieldCheck, Smartphone, Workflow } from "lucide-react"
import { Container } from "./ui"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero() {
    return (
        <header id="hero" className="relative overflow-hidden bg-apd-ink pt-32 pb-20 text-white sm:pt-40 lg:pb-28">
            {/* Fondo: cuadrícula + halos de color */}
            <div className="pointer-events-none absolute inset-0">
                <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
                <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-apd-accent/30 blur-[140px]" />
                <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-apd-sky/10 blur-[120px]" />
            </div>

            <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
                <div>
                    <motion.span
                        {...fadeUp(0)}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-apd-mist backdrop-blur"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.6)]" />
                        Ingeniería de software y QA · Costa Rica
                    </motion.span>

                    <motion.h1
                        {...fadeUp(0.1)}
                        className="mt-7 font-display text-4xl font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-5xl lg:text-[4.1rem]"
                    >
                        Software para empresas que quieren{" "}
                        <span className="text-gradient">crecer con claridad</span>
                    </motion.h1>

                    <motion.p {...fadeUp(0.2)} className="mt-6 max-w-xl text-lg leading-relaxed text-apd-mist">
                        Diseñamos, desarrollamos y probamos soluciones digitales a medida que mejoran procesos,
                        optimizan la operación y aceleran resultados.
                    </motion.p>

                    <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#contacto"
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-apd-dark shadow-[0_10px_40px_rgba(91,179,240,0.25)] transition hover:bg-apd-sky"
                        >
                            Solicitar cotización
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <Link
                            href="/#casos"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                        >
                            Ver casos de éxito
                        </Link>
                    </motion.div>

                    <motion.ul {...fadeUp(0.4)} className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-apd-mist">
                        {["Desarrollo a medida", "QA en cada entrega", "Web, móvil y SaaS"].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-apd-sky" />
                                {item}
                            </li>
                        ))}
                    </motion.ul>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="relative hidden sm:block"
                >
                    <HeroVisual />
                </motion.div>
            </Container>
        </header>
    )
}

/* Composición ilustrativa: panel de producto + tarjetas flotantes (todo en CSS) */
function HeroVisual() {
    const bars = [38, 56, 44, 70, 62, 84, 76, 92]
    return (
        <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-apd-accent/30 via-transparent to-apd-sky/20 blur-2xl" />

            {/* Ventana principal */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1C2D]/90 shadow-[0_40px_80px_rgba(0,0,0,0.5)] backdrop-blur">
                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="ml-3 h-5 flex-1 rounded-md bg-white/5" />
                </div>

                <div className="grid grid-cols-[72px_1fr] gap-0">
                    <div className="space-y-3 border-r border-white/10 p-4">
                        <span className="block h-7 w-7 rounded-lg bg-apd-sky/80" />
                        {[0, 1, 2, 3].map((i) => (
                            <span key={i} className={`block h-2 rounded-full ${i === 0 ? "w-10 bg-white/40" : "w-8 bg-white/10"}`} />
                        ))}
                    </div>

                    <div className="space-y-5 p-5">
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { w: "w-12", c: "bg-apd-sky" },
                                { w: "w-9", c: "bg-emerald-400" },
                                { w: "w-14", c: "bg-white/60" },
                            ].map((k, i) => (
                                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                                    <span className="block h-1.5 w-10 rounded-full bg-white/15" />
                                    <span className={`mt-3 block h-3 ${k.w} rounded-full ${k.c}`} />
                                </div>
                            ))}
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                            <span className="block h-1.5 w-16 rounded-full bg-white/15" />
                            <div className="mt-4 flex h-28 items-end gap-2">
                                {bars.map((h, i) => (
                                    <span
                                        key={i}
                                        style={{ height: `${h}%` }}
                                        className={`flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-apd-sky" : "bg-gradient-to-t from-apd-accent/40 to-apd-sky/60"}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            {[80, 64, 72].map((w, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="h-6 w-6 rounded-md bg-white/10" />
                                    <span style={{ width: `${w}%` }} className="h-2 rounded-full bg-white/10" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tarjeta flotante: QA */}
            <div className="animate-float-slow absolute -bottom-8 -left-10 w-60 rounded-2xl border border-white/10 bg-[#0F2438]/95 p-4 shadow-2xl backdrop-blur">
                <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                        <ShieldCheck className="h-5 w-5" />
                    </span>
                    <div>
                        <p className="text-sm font-semibold text-white">Pruebas automatizadas</p>
                        <p className="text-xs text-emerald-300">Todas aprobadas</p>
                    </div>
                </div>
                <div className="mt-3 flex gap-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <span key={i} className="h-1.5 flex-1 rounded-full bg-emerald-400/70" />
                    ))}
                </div>
            </div>

            {/* Tarjeta flotante: plataformas */}
            <div className="animate-float-slow absolute -right-6 -top-8 rounded-2xl border border-white/10 bg-[#0F2438]/95 px-4 py-3 shadow-2xl backdrop-blur [animation-delay:1.5s]">
                <div className="flex items-center gap-3 text-sm font-medium text-white">
                    <Workflow className="h-4 w-4 text-apd-sky" /> Web
                    <span className="h-4 w-px bg-white/15" />
                    <Smartphone className="h-4 w-4 text-apd-sky" /> Móvil
                </div>
            </div>
        </div>
    )
}
