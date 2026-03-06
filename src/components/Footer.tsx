"use client"

import { motion } from "framer-motion"
import { FiLinkedin, FiInstagram, FiMail, FiMapPin } from "react-icons/fi"
import { useLocale } from "../context/LocaleContext"

export default function Footer() {
    const { t } = useLocale()
    // const currentYear = new Date().getFullYear()
    const currentYear = 2023

    const socialLinks = [
        {
            icon: <FiLinkedin />,
            href: "https://www.linkedin.com/in/adonis-aleman/",
            label: "LinkedIn"
        },
        {
            icon: <FiInstagram />,
            href: "https://www.instagram.com/a.p.d.software_solutions/",
            label: "Instagram"
        },
    ]

    const quickLinks = [
        { name: t('nav.home'), href: "#hero" },
        { name: t('nav.services'), href: "/servicios" },
        { name: t('nav.contact'), href: "#contacto" },
    ]

    return (
        <footer className="bg-apd-bglogo border-t border-apd-dark/10 pt-20 pb-10 relative overflow-hidden">
            {/* Glow decorativo sutil en la esquina inferior */}
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-apd-primary/10 blur-[100px] pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Columna 1: Branding y Propósito */}
                    <div className="col-span-1 lg:col-span-1">
                        <h4 className="text-2xl font-bold text-apd-dark mb-6">
                            A.P.D. <span className="text-apd-primary">Solutions</span>
                        </h4>
                        <p className="text-apd-dark/70 leading-relaxed mb-8">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, color: "#3B82F6" }}
                                    className="w-10 h-10 rounded-full bg-apd-dark/10 border border-apd-dark/10 flex items-center justify-center text-apd-dark hover:text-apd-primary transition-all"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Columna 2: Navegación */}
                    <div>
                        <h5 className="text-apd-dark font-bold mb-6 uppercase tracking-widest text-sm">{t('footer.navigationTitle')}</h5>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-apd-dark/70 hover:text-apd-accent focus:text-apd-accent focus:outline-none transition-colors duration-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 3: Servicios / Enfoque */}
                    <div>
                        <h5 className="text-apd-dark font-bold mb-6 uppercase tracking-widest text-sm">{t('footer.specialtiesTitle')}</h5>
                        <ul className="space-y-4 text-apd-dark/70">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-apd-primary"></span>
                                Desarrollo Fullstack
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-apd-primary"></span>
                                QA Automation
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-apd-primary"></span>
                                Mobile Apps (Flutter)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-apd-primary"></span>
                                Arquitectura de Datos
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Ubicación y Contacto */}
                    <div>
                        <h5 className="text-apd-dark font-bold mb-6 uppercase tracking-widest text-sm">{t('footer.contactTitle')}</h5>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-apd-dark/70">
                                <FiMail className="text-apd-primary" />
                                <span>apdsolutions5@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-apd-dark/70">
                                <FiMapPin className="text-apd-primary" />
                                <span>Alajuela, Costa Rica</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Línea final de Copyright */}
                <div className="pt-8 border-t border-apd-dark/10 flex flex-col md:flex-row justify-between items-center gap-4 text-apd-dark/50 text-xs tracking-widest">
                    <p>
                        © {currentYear} A.P.D. SOLUTIONS. {t('footer.copyrightSuffix')}
                    </p>
                    <div className="flex gap-6">
                        <a href="/terms" className="hover:text-apd-primary transition-colors">{t('footer.terms')}</a>
                        <a href="/privacy" className="hover:text-apd-primary transition-colors">{t('footer.privacy')}</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}