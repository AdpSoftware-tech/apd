import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LocaleProvider } from "../context/LocaleContext";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "A.P.D. Solutions | Desarrollo de Software y QA Automation en Costa Rica",
  description:
    "Empresa de desarrollo de software en Costa Rica especializada en desafíos operativos en soluciones digitales de alto impacto. Especialistas en Desarrollo Fullstack, Mobile con Flutter y QA Automation en Costa Rica.",
  keywords: [
    "Desarrollo de Software",
    "QA Automation",
    "Flutter",
    "Next.js",
    "Costa Rica",
    "A.P.D. Solutions",
  ],
  authors: [{ name: "Adonis Aleman" }],
  openGraph: {
    title: "A.P.D. Solutions | Innovación Tecnológica",
    description:
      "Expertos en creación de software a medida y control de calidad garantizado.",
    url: "https://apdsoftwaresolutions.com",
    siteName: "A.P.D. Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "A.P.D. Solutions - Tech Solutions",
      },
    ],
    locale: "es_CR",
    type: "website",
  },
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white text-black px-3 py-2 rounded"
        >
          Saltar al contenido
        </a>

        <LocaleProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />

            <main id="main" className="flex-grow container mx-auto px-6 py-12 max-w-6xl">
              {children}
            </main>

            <Footer />
          </div>

          <WhatsAppFloat />
        </LocaleProvider>

        <noscript className="block text-center text-sm text-gray-400">
          Este sitio funciona mejor con JavaScript activado.
        </noscript>
      </body>
    </html>
  );
}