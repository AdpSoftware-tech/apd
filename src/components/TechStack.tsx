import {
    SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
    SiNodedotjs, SiPostgresql, SiMongodb, SiFirebase,
    SiDocker, SiGooglecloud, SiPython, SiPostman,
} from "react-icons/si"
import { RiFlutterFill } from "react-icons/ri"
import type { IconType } from "react-icons"
import { Container, SectionHeading } from "./ui"

const row1: { name: string; icon: IconType }[] = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "Flutter", icon: RiFlutterFill },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: SiNodedotjs },
]

const row2: { name: string; icon: IconType }[] = [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Firebase", icon: SiFirebase },
    { name: "Python", icon: SiPython },
    { name: "Docker", icon: SiDocker },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "Postman / QA", icon: SiPostman },
]

function MarqueeRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
    // Se duplica la lista para que la animación sea continua
    const loop = [...items, ...items, ...items, ...items]
    return (
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <ul className={`flex w-max shrink-0 gap-4 pr-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
                {loop.map((t, i) => {
                    const Icon = t.icon
                    return (
                        <li
                            key={`${t.name}-${i}`}
                            aria-hidden={i >= items.length}
                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-white/80"
                        >
                            <Icon className="h-6 w-6 text-apd-sky" />
                            <span className="whitespace-nowrap text-sm font-semibold">{t.name}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default function TechStack() {
    return (
        <section id="tecnologias" className="relative overflow-hidden bg-apd-dark py-24 text-white sm:py-28">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-apd-sky/10 blur-[120px]" />
            <Container className="relative">
                <SectionHeading
                    dark
                    align="center"
                    eyebrow="Tecnología"
                    title="Un stack moderno, probado y escalable"
                    description="Elegimos tecnologías robustas para garantizar rendimiento, seguridad y crecimiento en cada proyecto."
                />
            </Container>
            <div className="relative mt-14 space-y-4">
                <MarqueeRow items={row1} />
                <MarqueeRow items={row2} reverse />
            </div>
        </section>
    )
}
