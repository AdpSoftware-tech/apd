import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LocaleProvider } from "../context/LocaleContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  // Lo que sale en la pestaña del navegador
  title: "A.P.D. Solutions | Ingeniería de Software & QA",
  description: "Transformamos desafíos operativos en soluciones digitales de alto impacto. Especialistas en Desarrollo Fullstack, Mobile con Flutter y QA Automation en Costa Rica.",
  keywords: ["Desarrollo de Software", "QA Automation", "Flutter", "Next.js", "Costa Rica", "A.P.D. Solutions"],
  authors: [{ name: "Adonis Aleman" }],

  // Cómo se ve cuando compartes el link (LinkedIn, WhatsApp, etc.)
  openGraph: {
    title: "A.P.D. Solutions | Innovación Tecnológica",
    description: "Expertos en creación de software a medida y control de calidad garantizado.",
    url: "https://tu-dominio.com", // Cambia esto cuando tengas tu dominio real
    siteName: "A.P.D. Solutions",
    images: [
      {
        url: "/og-image.png", // Debes poner una imagen en la carpeta 'public' con este nombre
        width: 1200,
        height: 630,
        alt: "A.P.D. Solutions - Tech Solutions",
      },
    ],
    locale: "es_CR",
    type: "website",
  },

  // Configuración para Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "A.P.D. Solutions",
    description: "Ingeniería de software de precisión y QA.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-apd-bglogo text-apd-dark antialiased`}>
        {/* Enlace para saltar al contenido - accesibilidad */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white text-black px-3 py-2 rounded"
        >
          Saltar al contenido
        </a>

        <div className="min-h-screen flex flex-col">
          <LocaleProvider>
            <Navbar />

            <main id="main" className="flex-grow container mx-auto px-6 py-12 max-w-6xl">
              {children}
            </main>

            <Footer />
          </LocaleProvider>
        </div>

        <noscript className="block text-center text-sm text-gray-400">Este sitio funciona mejor con JavaScript activado.</noscript>
      </body>
    </html>
  );
}