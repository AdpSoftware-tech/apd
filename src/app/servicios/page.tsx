// app/servicios/page.tsx
import Link from "next/link";

export default function ServiciosPage() {
    return (
        <main className="min-h-screen bg-apd-dark text-white">
            <div className="container mx-auto px-6 py-20">
                <div className="flex items-center justify-between gap-4">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Servicios <span className="text-apd-primary">Tecnológicos</span>
                    </h1>

                    <Link
                        href="/#contacto"
                        className="px-5 py-2 rounded-md bg-apd-primary text-black font-semibold"
                    >
                        Cotizar
                    </Link>
                </div>

                <p className="mt-4 text-gray-300 max-w-2xl">
                    Soluciones a la medida: desarrollo, QA, apps móviles y arquitectura de datos.
                </p>

                <section className="mt-12 grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold">Desarrollo de Software</h2>
                        <p className="mt-2 text-gray-300">
                            Sistemas web, APIs, dashboards y automatizaciones para tu negocio.
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold">QA Automation</h2>
                        <p className="mt-2 text-gray-300">
                            Pruebas automatizadas, pipelines, reportes y calidad continua.
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold">Mobile Apps (Flutter)</h2>
                        <p className="mt-2 text-gray-300">
                            Apps iOS/Android con diseño moderno y rendimiento sólido.
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                        <h2 className="text-2xl font-bold">Arquitectura de Datos</h2>
                        <p className="mt-2 text-gray-300">
                            Modelado, escalabilidad, performance y seguridad de información.
                        </p>
                    </div>
                </section>

                <div className="mt-14">
                    <Link href="/" className="text-gray-300 hover:underline">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </main>
    );
}