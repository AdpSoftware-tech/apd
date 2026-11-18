// Contenido de la sección de pasantías. Edita aquí textos, áreas y duraciones.

export const LEVELS = [
    { value: "colegio", label: "Colegio técnico" },
    { value: "universidad", label: "Universidad estatal" },
] as const;

export const AREAS = [
    {
        title: "Desarrollo Web",
        desc: "Interfaces y sistemas web modernos, desde el frontend hasta APIs y bases de datos.",
        tech: ["React", "Next.js", "TypeScript", "Node.js"],
    },
    {
        title: "Android nativo",
        desc: "Aplicaciones nativas para Android con buenas prácticas y arquitectura limpia.",
        tech: ["Kotlin", "Jetpack Compose", "Android Studio"],
    },
    {
        title: "iOS nativo",
        desc: "Apps para iPhone y iPad con las herramientas oficiales de Apple.",
        tech: ["Swift", "SwiftUI", "Xcode"],
    },
    {
        title: "Flutter multiplataforma",
        desc: "Una sola base de código para Android, iOS y web, como en nuestros proyectos reales.",
        tech: ["Flutter", "Dart", "Firebase"],
    },
] as const;

export const DURATIONS = [
    { label: "2 semanas", desc: "Ideal para pasantías cortas de colegios técnicos." },
    { label: "1 mes", desc: "Participas en un módulo completo de un proyecto." },
    { label: "2 meses o más", desc: "Práctica profesional supervisada con entregables de principio a fin." },
] as const;
