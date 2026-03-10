import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    "Empresa de desarrollo de software en Costa Rica especializada en soluciones digitales de alto impacto. Expertos en Desarrollo Fullstack, Mobile con Flutter y QA Automation.",
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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9VKCPR9C3P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9VKCPR9C3P');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vtsblimprk");
          `}
        </Script>
      </body>
    </html>
  );
}