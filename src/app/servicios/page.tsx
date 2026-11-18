import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";
import Methodology from "@/components/Methodology";
import { Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
    title: "Servicios | A.P.D. Software Solutions",
    description:
        "Desarrollo de software a medida, aplicaciones móviles, sistemas SaaS, QA, consultoría tecnológica y proveeduría de software en Costa Rica.",
};

export default function ServiciosPage() {
    return (
        <>
            <header className="relative overflow-hidden bg-apd-ink pb-20 pt-36 text-white sm:pt-44">
                <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
                <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-apd-accent/30 blur-[140px]" />
                <Container className="relative max-w-4xl text-center">
                    <Eyebrow dark>Servicios profesionales</Eyebrow>
                    <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.06] tracking-[-0.035em] sm:text-6xl">
                        Soluciones en <span className="text-gradient">tecnología, consultoría y software</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-apd-mist">
                        Servicios integrales para empresas, instituciones y proyectos que necesitan acompañamiento técnico,
                        estratégico y digital.
                    </p>
                </Container>
            </header>
            <ServicesSection />
            <Methodology />
        </>
    );
}
