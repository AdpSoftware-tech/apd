import type { Metadata } from "next";
import {
    ArrowRight, CheckCircle2, School, GraduationCap, Globe, Smartphone, Apple, Layers,
    GitBranch, Users, Rocket, FileCheck2, MessagesSquare, Briefcase, Send, CalendarCheck, ClipboardList, Play,
    Clock, ChevronDown,
} from "lucide-react";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import InternshipForm from "@/components/internships/InternshipForm";
import { AREAS, DURATIONS } from "@/components/internships/data";

export const metadata: Metadata = {
    title: "Pasantías en desarrollo de software | A.P.D. Software Solutions",
    description:
        "Realiza tu pasantía en desarrollo web, Android, iOS o Flutter. Programa para estudiantes de colegios técnicos y universidades estatales en Costa Rica.",
};

const areaIcons = [Globe, Smartphone, Apple, Layers];

const audiences = [
    {
        icon: School,
        title: "Colegios técnicos",
        desc: "Para estudiantes de especialidades como Desarrollo de Software, Informática o afines que necesitan cumplir su pasantía.",
        points: ["Pasantías desde 2 semanas", "Acompañamiento diario", "Evaluación para tu colegio"],
    },
    {
        icon: GraduationCap,
        title: "Universidades estatales",
        desc: "Para estudiantes que buscan su práctica profesional o experiencia en un equipo real de desarrollo.",
        points: ["Prácticas de 1 a 2 meses o más", "Entregables en proyectos reales", "Coordinación con tu universidad"],
    },
];

const benefits = [
    { icon: Rocket, title: "Proyectos reales", desc: "Trabajas en funcionalidades que llegan a usuarios, no en ejercicios de práctica." },
    { icon: Users, title: "Mentoría cercana", desc: "Un desarrollador del equipo te guía, resuelve dudas y revisa tu avance." },
    { icon: GitBranch, title: "Flujo profesional", desc: "Git, pull requests, revisión de código y tablero de tareas, como en la industria." },
    { icon: MessagesSquare, title: "Metodología ágil", desc: "Reuniones cortas, entregas por etapas y retroalimentación constante." },
    { icon: Briefcase, title: "Portafolio", desc: "Terminas con experiencia demostrable para tu currículum y tu GitHub." },
    { icon: FileCheck2, title: "Documentación para tu institución", desc: "Completamos las evaluaciones y constancias que solicite tu colegio o universidad." },
];

const steps = [
    { icon: Send, title: "Envía tu solicitud", desc: "Completa el formulario con tus datos, área de interés y fechas." },
    { icon: MessagesSquare, title: "Entrevista corta", desc: "Una conversación informal para conocerte y entender tus objetivos." },
    { icon: ClipboardList, title: "Plan de trabajo", desc: "Definimos tareas y horario según los requisitos de tu institución." },
    { icon: Play, title: "¡Inicia tu pasantía!", desc: "Te integras al equipo y empiezas a construir desde el primer día." },
];

const requirements = [
    "Ser estudiante activo de un colegio técnico o universidad estatal.",
    "Carta o solicitud de pasantía emitida por tu institución.",
    "Conocimientos básicos de programación (no necesitas ser experto).",
    "Ganas de aprender, preguntar y trabajar en equipo.",
];

const faqs = [
    {
        q: "¿Necesito experiencia previa?",
        a: "No. Buscamos estudiantes con bases de programación y muchas ganas de aprender. Adaptamos las tareas a tu nivel.",
    },
    {
        q: "¿Puedo elegir la tecnología?",
        a: "Sí. En el formulario eliges tu área de interés (Web, Android, iOS o Flutter) y armamos el plan de trabajo alrededor de ella.",
    },
    {
        q: "¿La pasantía es presencial o remota?",
        a: "Depende del proyecto y de lo que permita tu institución. Lo definimos juntos durante la entrevista.",
    },
    {
        q: "¿Firman los documentos que pide mi colegio o universidad?",
        a: "Sí. Completamos las evaluaciones, bitácoras y constancias que solicite tu institución.",
    },
    {
        q: "¿Cuándo debo aplicar?",
        a: "Lo ideal es aplicar con al menos un mes de anticipación a tu fecha de inicio, ya que los espacios son limitados.",
    },
];

export default function PasantiasPage() {
    return (
        <>
            {/* HERO */}
            <header className="relative overflow-hidden bg-apd-ink pb-20 pt-32 text-white sm:pt-40 lg:pb-28">
                <div className="pointer-events-none absolute inset-0">
                    <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
                    <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-apd-accent/30 blur-[140px]" />
                </div>

                <Container className="relative grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-apd-mist">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300" />
                            Programa de pasantías · Aplicaciones abiertas
                        </span>
                        <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-5xl lg:text-[4rem]">
                            ¿Estás pensando dónde realizar tu <span className="text-gradient">pasantía?</span>
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-apd-mist">
                            Vive tu primera experiencia profesional en desarrollo web y aplicaciones móviles. Para estudiantes
                            de <strong className="font-semibold text-white">colegios técnicos</strong> y{" "}
                            <strong className="font-semibold text-white">universidades estatales</strong>.
                        </p>
                        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#aplicar"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-apd-dark shadow-[0_10px_40px_rgba(91,179,240,0.25)] transition hover:bg-apd-sky"
                            >
                                Aplicar a una pasantía
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href="#areas"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                            >
                                Ver áreas
                            </a>
                        </div>
                    </div>

                    {/* Tarjeta resumen */}
                    <div className="relative">
                        <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-apd-accent/30 via-transparent to-apd-sky/20 blur-2xl" />
                        <div className="relative rounded-3xl border border-white/10 bg-[#0B1C2D]/90 p-7 shadow-[0_40px_80px_rgba(0,0,0,0.5)] backdrop-blur sm:p-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apd-sky">Tu pasantía en A.P.D.</p>
                            <div className="mt-6 grid grid-cols-2 gap-3">
                                {AREAS.map((a, i) => {
                                    const Icon = areaIcons[i];
                                    return (
                                        <div key={a.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                            <Icon className="h-5 w-5 text-apd-sky" />
                                            <p className="mt-3 text-sm font-semibold">{a.title}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/10">
                                <Clock className="h-5 w-5 flex-shrink-0 text-amber-300" />
                                <p className="text-sm text-apd-mist">
                                    Duración flexible: <span className="font-semibold text-white">2 semanas, 1 mes o 2+ meses</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>

            {/* PARA QUIÉN */}
            <section className="bg-apd-paper py-24 sm:py-28">
                <Container>
                    <SectionHeading
                        eyebrow="¿Para quién es?"
                        title={<>Un programa pensado para <span className="text-apd-primary">tu etapa de formación</span></>}
                        description="Adaptamos la experiencia a los requisitos de tu institución, ya sea una pasantía corta o una práctica profesional."
                    />
                    <div className="mt-14 grid gap-6 md:grid-cols-2">
                        {audiences.map(({ icon: Icon, title, desc, points }) => (
                            <article
                                key={title}
                                className="group rounded-3xl border border-[#E1E7EC] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(4,35,58,0.3)] sm:p-10"
                            >
                                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-apd-dark text-apd-sky">
                                    <Icon className="h-7 w-7" />
                                </span>
                                <h3 className="mt-6 font-display text-2xl font-bold text-apd-dark">{title}</h3>
                                <p className="mt-3 leading-relaxed text-apd-gray">{desc}</p>
                                <ul className="mt-6 space-y-3">
                                    {points.map((p) => (
                                        <li key={p} className="flex items-center gap-3 text-sm font-medium text-[#3E5468]">
                                            <CheckCircle2 className="h-5 w-5 text-apd-primary" /> {p}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ÁREAS */}
            <section id="areas" className="relative overflow-hidden bg-apd-ink py-24 text-white sm:py-28">
                <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
                <Container className="relative">
                    <SectionHeading
                        dark
                        eyebrow="Áreas de pasantía"
                        title={<>Elige dónde quieres <span className="text-gradient">crecer</span></>}
                        description="Trabaja con las mismas tecnologías que usamos en proyectos para nuestros clientes."
                    />
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {AREAS.map((a, i) => {
                            const Icon = areaIcons[i];
                            return (
                                <article
                                    key={a.title}
                                    className="flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-7 transition hover:border-apd-sky/40"
                                >
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-apd-sky/15 text-apd-sky">
                                        <Icon className="h-6 w-6" />
                                    </span>
                                    <h3 className="mt-6 font-display text-xl font-bold">{a.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-apd-mist">{a.desc}</p>
                                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                                        {a.tech.map((t) => (
                                            <span key={t} className="rounded-lg bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-white/80">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {/* Duraciones */}
                    <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                        <div className="flex items-center gap-3">
                            <CalendarCheck className="h-5 w-5 text-amber-300" />
                            <h3 className="font-display text-lg font-bold">Duración a tu medida</h3>
                        </div>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {DURATIONS.map((d) => (
                                <div key={d.label} className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
                                    <p className="font-display text-2xl font-extrabold">{d.label}</p>
                                    <p className="mt-2 text-sm text-apd-mist">{d.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* BENEFICIOS */}
            <section className="bg-white py-24 sm:py-28">
                <Container>
                    <SectionHeading
                        align="center"
                        eyebrow="Lo que vas a vivir"
                        title={<>Más que una pasantía, <span className="text-apd-primary">experiencia real</span></>}
                    />
                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {benefits.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="rounded-3xl border border-[#E1E7EC] bg-apd-paper/60 p-7">
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-apd-accent ring-1 ring-[#E1E7EC]">
                                    <Icon className="h-6 w-6" />
                                </span>
                                <h3 className="mt-5 font-display text-lg font-bold text-apd-dark">{title}</h3>
                                <p className="mt-2 leading-relaxed text-apd-gray">{desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* PROCESO + REQUISITOS */}
            <section className="bg-apd-paper py-24 sm:py-28">
                <Container className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
                    <div>
                        <SectionHeading eyebrow="Cómo aplicar" title="Cuatro pasos para empezar" />
                        <ol className="mt-10 space-y-4">
                            {steps.map(({ icon: Icon, title, desc }, i) => (
                                <li key={title} className="flex gap-5 rounded-2xl border border-[#E1E7EC] bg-white p-5">
                                    <span className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-apd-dark text-apd-sky">
                                        <Icon className="h-5 w-5" />
                                        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-apd-dark ring-1 ring-[#E1E7EC]">
                                            {i + 1}
                                        </span>
                                    </span>
                                    <div>
                                        <h3 className="font-display font-bold text-apd-dark">{title}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-apd-gray">{desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <aside className="self-start rounded-3xl bg-apd-dark p-8 text-white sm:p-10">
                        <Eyebrow dark>Requisitos</Eyebrow>
                        <h3 className="mt-4 font-display text-2xl font-bold">Lo que necesitas</h3>
                        <ul className="mt-6 space-y-4">
                            {requirements.map((r) => (
                                <li key={r} className="flex gap-3 text-apd-mist">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-apd-sky" />
                                    {r}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#aplicar"
                            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-apd-dark transition hover:bg-apd-sky"
                        >
                            Aplicar ahora <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </aside>
                </Container>
            </section>

            {/* FAQ */}
            <section className="bg-white py-24 sm:py-28">
                <Container className="max-w-3xl">
                    <SectionHeading align="center" eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas" />
                    <div className="mt-12 divide-y divide-[#E1E7EC] rounded-3xl border border-[#E1E7EC]">
                        {faqs.map((f) => (
                            <details key={f.q} className="group px-6 py-5 sm:px-8 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold text-apd-dark">
                                    {f.q}
                                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-apd-gray transition-transform group-open:rotate-180" />
                                </summary>
                                <p className="mt-3 leading-relaxed text-apd-gray">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </Container>
            </section>

            {/* FORMULARIO */}
            <section id="aplicar" className="bg-apd-paper py-24 sm:py-32">
                <Container>
                    <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_80px_-40px_rgba(4,35,58,0.35)] ring-1 ring-[#E1E7EC] lg:grid-cols-[0.8fr_1.2fr]">
                        <div className="relative overflow-hidden bg-apd-ink p-8 text-white sm:p-12">
                            <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_10%,transparent_70%)]" />
                            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-apd-accent/40 blur-[100px]" />
                            <div className="relative">
                                <Eyebrow dark>Aplica aquí</Eyebrow>
                                <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl">
                                    Da el primer paso en tu <span className="text-gradient">carrera tech</span>
                                </h2>
                                <p className="mt-5 leading-relaxed text-apd-mist">
                                    Cuéntanos sobre ti y tu institución. Los espacios por periodo son limitados, así que te
                                    recomendamos aplicar con anticipación.
                                </p>
                                <ul className="mt-8 space-y-3 text-sm text-apd-mist">
                                    {["Respuesta por correo o WhatsApp", "Entrevista corta y sin presión", "Plan adaptado a tu institución"].map((t) => (
                                        <li key={t} className="flex items-center gap-3">
                                            <CheckCircle2 className="h-4 w-4 text-apd-sky" /> {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <InternshipForm />
                    </div>
                </Container>
            </section>
        </>
    );
}
