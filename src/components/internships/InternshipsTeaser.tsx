import Link from "next/link"
import { ArrowRight, GraduationCap, School } from "lucide-react"
import { Container } from "../ui"

/* Franja destacada en la home que lleva a /pasantias */
export default function InternshipsTeaser() {
    return (
        <section aria-labelledby="pasantias-teaser" className="bg-apd-paper pb-24 sm:pb-32">
            <Container>
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-apd-accent via-apd-dark to-apd-ink p-8 text-white sm:p-12 lg:p-14">
                    <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_right,black_10%,transparent_70%)]" />
                    <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-apd-sky/30 blur-[100px]" />

                    <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-apd-sky ring-1 ring-white/15">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300" />
                                Programa de pasantías
                            </span>
                            <h2 id="pasantias-teaser" className="mt-6 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                                ¿Estás pensando dónde realizar tu pasantía?
                            </h2>
                            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                                Vive tu primera experiencia profesional en proyectos reales de desarrollo web y aplicaciones
                                móviles, acompañado por nuestro equipo.
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/pasantias"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-apd-dark transition hover:bg-apd-sky"
                                >
                                    Conoce el programa
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    href="/pasantias#aplicar"
                                    className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                                >
                                    Aplicar ahora
                                </Link>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            {[
                                { icon: School, title: "Colegios técnicos", desc: "Pasantías desde 2 semanas" },
                                { icon: GraduationCap, title: "Universidades estatales", desc: "Prácticas de 1 a 2 meses o más" },
                            ].map(({ icon: Icon, title, desc }) => (
                                <div key={title} className="flex items-center gap-4 rounded-2xl bg-white/[0.07] p-5 ring-1 ring-white/10 backdrop-blur">
                                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-apd-sky">
                                        <Icon className="h-6 w-6" />
                                    </span>
                                    <div>
                                        <p className="font-display font-bold">{title}</p>
                                        <p className="text-sm text-white/65">{desc}</p>
                                    </div>
                                </div>
                            ))}
                            <p className="px-1 text-sm text-white/60">Web · Android · iOS · Flutter</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
