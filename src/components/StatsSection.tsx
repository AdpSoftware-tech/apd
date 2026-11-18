import { Container } from "./ui"

const stats = [
    { prefix: "Desde ", value: "2018", label: "Construyendo software" },
    { value: "7", suffix: "+", label: "Proyectos entregados" },
    { value: "5", label: "Sectores atendidos" },
    { value: "100", suffix: "%", label: "De entregas con QA" },
]

export default function StatsSection() {
    return (
        <section aria-label="Indicadores" className="relative bg-apd-ink pb-20 text-white">
            <Container>
                <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-4">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            className={`p-6 sm:p-8 ${i % 2 === 1 ? "border-l border-white/10" : ""} ${i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""
                                } ${i === 2 ? "lg:border-l" : ""}`}
                        >
                            <p className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
                                {s.prefix && <span className="text-lg font-semibold text-apd-mist sm:text-2xl">{s.prefix}</span>}
                                {s.value}
                                {s.suffix && <span className="text-apd-sky">{s.suffix}</span>}
                            </p>
                            <p className="mt-2 text-sm text-apd-mist">{s.label}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
