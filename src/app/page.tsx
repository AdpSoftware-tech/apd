import Hero from "@/components/Hero"
import About from "@/components/About"
import Methodology from "@/components/Methodology"
import StatsSection from "@/components/StatsSection"
import ContactForm from "@/components/ContactForm"
import Loader from "@/components/Loader"
import Reveal from "@/components/Reveal"
import TechStack from "@/components/TechStack"
import CasesOfSuccess from "@/components/CasesOfSuccess";
import ServicesSection from "@/components/ServicesSection"

export default function Home() {
  return (
    <section className="space-y-16">
      <Loader />
      <Hero />

      <Reveal>
        <StatsSection />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <CasesOfSuccess />
      </Reveal>

      <Reveal>
        <Methodology />
      </Reveal>

      <Reveal>
        <TechStack />
      </Reveal>

      {/* 👇 SECCIÓN SEO PARA GOOGLE */}
      <section className="mt-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Desarrollo de Software en Costa Rica
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          En <strong>A.P.D. Software Solutions</strong> desarrollamos aplicaciones web,
          plataformas SaaS y soluciones tecnológicas para empresas en Costa Rica.
          Nuestro equipo está especializado en desarrollo Fullstack,
          QA Automation y aplicaciones móviles con Flutter.
        </p>
      </section>

      <Reveal>
        <ContactForm />
      </Reveal>
    </section>
  )
}