import { ReactNode } from "react"

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
    return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
    return (
        <span
            className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${dark ? "text-apd-sky" : "text-apd-accent"
                }`}
        >
            <span className={`h-px w-8 ${dark ? "bg-apd-sky" : "bg-apd-accent"}`} />
            {children}
        </span>
    )
}

export function SectionHeading({
    eyebrow,
    title,
    description,
    dark = false,
    align = "left",
}: {
    eyebrow: string
    title: ReactNode
    description?: ReactNode
    dark?: boolean
    align?: "left" | "center"
}) {
    const centered = align === "center"
    return (
        <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
            <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
            <h2
                className={`mt-5 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-apd-dark"
                    }`}
            >
                {title}
            </h2>
            {description && (
                <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-apd-mist" : "text-apd-gray"}`}>
                    {description}
                </p>
            )}
        </div>
    )
}
