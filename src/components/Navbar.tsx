"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const menuBtnRef = useRef<HTMLButtonElement | null>(null);

    const links = useMemo(
        () => [
            { href: "/", label: "Inicio" },
            { href: "/servicios", label: "Servicios" },
            { href: "/#contacto", label: "Contacto" },
        ],
        []
    );

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

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
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

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
            menuBtnRef.current?.focus();
        };
    }, [mobileOpen]);

    function NavLinks({ variant }: { variant: "desktop" | "mobile" }) {
        return (
            <>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={
                            variant === "desktop"
                                ? "text-sm uppercase tracking-widest font-medium text-gray-300 hover:text-apd-light transition-colors px-2 py-1 rounded"
                                : "text-lg font-semibold text-white hover:text-apd-primary transition"
                        }
                        onClick={variant === "mobile" ? closeMobile : undefined}
                    >
                        {link.label}
                    </Link>
                ))}
            </>
        );
    }

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-apd-dark/95 backdrop-blur-sm border-b border-apd-accent/30 py-3 shadow-lg"
                : "bg-apd-dark py-4"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">

                <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={closeMobile}
                >
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20">
                        <Image
                            src="/apd.png"
                            alt="A.P.D. Solutions"
                            width={36}
                            height={36}
                            className="object-cover"
                            priority
                        />
                    </div>
                    <span className="text-lg md:text-xl font-bold tracking-tight text-apd-bglogo">
                        A.P.D. Solutions
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <NavLinks variant="desktop" />

                    <Link
                        href="/#contacto"
                        className="text-sm font-semibold px-4 py-2 rounded-md bg-apd-accent text-apd-bglogo hover:bg-apd-dark2"
                    >
                        Cotizar
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        ref={menuBtnRef}
                        className="text-apd-bglogo p-2"
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        ☰
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="md:hidden fixed inset-0 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            className="absolute inset-0 bg-black/40"
                            onClick={closeMobile}
                        />

                        <motion.div
                            className="absolute inset-x-0 top-[64px] bg-apd-dark2 border-t border-apd-accent/20"
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: -10 }}
                        >
                            <div className="flex flex-col items-center py-8 gap-6">
                                <NavLinks variant="mobile" />

                                <Link
                                    href="/#contacto"
                                    className="px-6 py-2 rounded-md bg-apd-accent text-apd-bglogo font-semibold"
                                    onClick={closeMobile}
                                >
                                    Cotizar
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}