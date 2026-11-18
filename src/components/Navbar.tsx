"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
    { href: "/#servicios", label: "Servicios" },
    { href: "/#casos", label: "Casos de éxito" },
    { href: "/#proceso", label: "Proceso" },
    { href: "/pasantias", label: "Pasantías" },
    { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const menuBtnRef = useRef<HTMLButtonElement | null>(null);
    const pathname = usePathname();

    const closeMobile = useCallback(() => setMobileOpen(false), []);

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
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1024) setMobileOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        if (!mobileOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";
        const btn = menuBtnRef.current;
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
            btn?.focus();
        };
    }, [mobileOpen]);

    // Las páginas con portada oscura propia empiezan transparentes
    const hasDarkHero = pathname === "/" || pathname === "/servicios" || pathname === "/pasantias";
    const solid = isScrolled || mobileOpen || !hasDarkHero;

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid
                ? "border-b border-white/10 bg-apd-ink/85 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
                : "border-b border-transparent bg-transparent py-5"
                }`}
        >
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8">
                <Link href="/" className="flex items-center gap-3" onClick={closeMobile}>
                    <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-white/20">
                        <Image src="/apd.png" alt="" width={36} height={36} className="object-cover" priority />
                    </span>
                    <span className="font-display text-base font-bold tracking-tight text-white sm:text-lg">
                        A.P.D. <span className="font-semibold text-apd-mist">Software Solutions</span>
                    </span>
                </Link>

                <div className="hidden items-center gap-1 lg:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="rounded-full px-4 py-2 text-sm font-medium text-apd-mist transition-colors hover:bg-white/5 hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:block">
                    <Link
                        href="/#contacto"
                        className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-apd-dark transition hover:bg-apd-sky"
                    >
                        Cotizar proyecto
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </div>

                <button
                    ref={menuBtnRef}
                    className="rounded-full p-2 text-white hover:bg-white/10 lg:hidden"
                    aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen((v) => !v)}
                >
                    {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="lg:hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pb-6 pt-4 sm:px-8">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMobile}
                                    className="rounded-xl px-4 py-3 text-lg font-medium text-white hover:bg-white/5"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/#contacto"
                                onClick={closeMobile}
                                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-apd-dark"
                            >
                                Cotizar proyecto <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
