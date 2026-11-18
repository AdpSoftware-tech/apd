import Link from "next/link"
import Image from "next/image"
import { FiLinkedin, FiInstagram, FiMail, FiMapPin } from "react-icons/fi"
import { ArrowRight } from "lucide-react"
import { Container } from "./ui"

const socialLinks = [
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/adonis-aleman/", label: "LinkedIn" },
    { icon: FiInstagram, href: "https://www.instagram.com/a.p.d.software_solutions/", label: "Instagram" },
]

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Casos de éxito", href: "/#casos" },
    { name: "Proceso", href: "/#proceso" },
    { name: "Pasantías", href: "/pasantias" },
    { name: "Contacto", href: "/#contacto" },
]

const specialties = ["Desarrollo Fullstack", "QA Automation", "Apps móviles (Flutter)", "Sistemas SaaS", "Consultoría tecnológica"]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative overflow-hidden bg-apd-ink text-white">
            <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full bg-apd-accent/20 blur-[140px]" />

            <Container className="relative">
                {/* Banda CTA */}
                <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 py-16 md:flex-row md:items-center">
                    <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl">
                        Desbloquea el potencial de tu proyecto.
                    </h2>
                    <Link
                        href="/#contacto"
                        className="group inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-apd-dark transition hover:bg-apd-sky"
                    >
                        Conversemos
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
                    <div>
                        <Link href="/" className="flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white">
                                <Image src="/apd.png" alt="" width={40} height={40} className="object-cover" />
                            </span>
                            <span className="font-display text-lg font-bold">A.P.D. Software Solutions</span>
                        </Link>
                        <p className="mt-5 max-w-sm leading-relaxed text-apd-mist">
                            Soluciones integrales para PYMES, medianas y grandes empresas: desde el soporte técnico hasta la
                            transformación digital y la consultoría especializada.
                        </p>
                        <div className="mt-6 flex gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-apd-mist transition hover:-translate-y-0.5 hover:border-apd-sky hover:text-apd-sky"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Navegación</h3>
                        <ul className="mt-5 space-y-3">
                            {navLinks.map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-apd-mist transition hover:text-white">
                                        {l.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Especialidades</h3>
                        <ul className="mt-5 space-y-3 text-apd-mist">
                            {specialties.map((s) => (
                                <li key={s}>{s}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Contacto directo</h3>
                        <ul className="mt-5 space-y-4 text-apd-mist">
                            <li>
                                <a href="mailto:apdsolutions5@gmail.com" className="flex items-center gap-3 transition hover:text-white">
                                    <FiMail className="text-apd-sky" /> apdsolutions5@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiMapPin className="text-apd-sky" /> Alajuela, Costa Rica
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-white/40 md:flex-row">
                    <p>© {currentYear} A.P.D. Software Solutions. Todos los derechos reservados.</p>
                    <Link href="/privacy" className="transition hover:text-white">
                        Política de privacidad
                    </Link>
                </div>
            </Container>
        </footer>
    )
}
