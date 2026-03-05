"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "../context/LocaleContext";

type LanguageToggleProps = {
    onAfterToggle?: () => void;
};

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { locale, toggleLocale, t } = useLocale();
    const menuBtnRef = useRef<HTMLButtonElement | null>(null);

    // ✅ Links que funcionan desde cualquier página
    const links = useMemo(
        () => [
            { href: "/", labelKey: "nav.home" },
            { href: "/#experiencia", labelKey: "nav.experience" },
            { href: "/servicios", labelKey: "nav.services" },
            { href: "/#contacto", labelKey: "nav.contact" },
        ],
        []
    );

    const closeMobile = useCallback(() => setMobileOpen(false), []);

    // Scroll: rAF throttle
    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 16);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Resize close
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener("resize", onResize, { passive: true });
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Escape + body lock + return focus
    useEffect(() => {
        if (!mobileOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileOpen(false);
        };

        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
            menuBtnRef.current?.focus();
        };
    }, [mobileOpen]);

    function LanguageToggle({ onAfterToggle }: LanguageToggleProps) {
        return (
            <button
                onClick={() => {
                    toggleLocale();
                    onAfterToggle?.();
                }}
                aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
                className="px-3 py-1 rounded-md bg-white/5 text-gray-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-apd-primary"
            >
                {locale === "es" ? "EN" : "ES"}
            </button>
        );
    }

    function NavLinks({ variant }: { variant: "desktop" | "mobile" }) {
        return (
            <>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={
                            variant === "desktop"
                                ? "text-sm uppercase tracking-widest font-medium text-gray-300 hover:text-apd-light transition-colors focus:outline-none focus:ring-2 focus:ring-apd-primary focus:ring-offset-2 px-2 py-1 rounded"
                                : "text-lg font-semibold text-white hover:text-apd-primary transition"
                        }
                        onClick={variant === "mobile" ? closeMobile : undefined}
                    >
                        {t(link.labelKey)}
                    </Link>
                ))}
            </>
        );
    }

    return (
        <motion.nav
            role="navigation"
            aria-label="Main navigation"
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${isScrolled
                    ? "bg-apd-dark/95 backdrop-blur-sm border-b border-apd-accent/30 py-3 shadow-lg shadow-black/10"
                    : "bg-apd-dark py-4"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link
                    href="/"
                    className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-apd-accent focus:ring-offset-2"
                    onClick={closeMobile}
                >
                    <Image src="/file.svg" alt="A.P.D. Solutions" width={36} height={36} priority />
                    <span className="text-lg md:text-xl font-bold tracking-tight text-apd-bglogo transition-colors group-hover:text-apd-accent">
                        A.P.D. Solutions
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <NavLinks variant="desktop" />

                    {/* ✅ CTA siempre a contacto del Home */}
                    <Link
                        href="/#contacto"
                        className="text-sm font-semibold px-4 py-2 rounded-md bg-apd-accent text-apd-bglogo hover:bg-apd-dark2 focus:outline-none focus:ring-2 focus:ring-apd-accent focus:ring-offset-2"
                    >
                        {t("nav.consulting")}
                    </Link>

                    <LanguageToggle />
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        ref={menuBtnRef}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                        aria-label={
                            mobileOpen
                                ? locale === "es"
                                    ? "Cerrar menú"
                                    : "Close menu"
                                : locale === "es"
                                    ? "Abrir menú"
                                    : "Open menu"
                        }
                        className="text-apd-bglogo p-2 focus:outline-none focus:ring-2 focus:ring-apd-accent rounded"
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span
                                className={`w-full h-0.5 bg-apd-bglogo transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""
                                    }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-apd-bglogo transition-all ${mobileOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-apd-bglogo transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile overlay + panel */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="md:hidden fixed inset-0 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <button
                            type="button"
                            aria-label={locale === "es" ? "Cerrar menú" : "Close menu"}
                            className="absolute inset-0 bg-black/40"
                            onClick={closeMobile}
                        />

                        {/* Panel */}
                        <motion.div
                            id="mobile-menu"
                            role="dialog"
                            aria-modal="true"
                            className="absolute inset-x-0 top-[64px] bg-apd-dark2/98 backdrop-blur-lg border-t border-apd-accent/20"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                        >
                            <div className="flex flex-col items-center justify-center py-8 gap-6">
                                <NavLinks variant="mobile" />

                                {/* ✅ CTA móvil siempre a contacto del Home */}
                                <Link
                                    href="/#contacto"
                                    className="mt-2 inline-flex items-center px-6 py-2 rounded-md bg-apd-accent text-apd-bglogo font-semibold"
                                    onClick={closeMobile}
                                >
                                    {t("nav.consulting")}
                                </Link>

                                <LanguageToggle onAfterToggle={closeMobile} />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}