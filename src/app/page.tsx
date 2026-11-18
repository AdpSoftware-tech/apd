import Hero from "@/components/Hero"
import About from "@/components/About"
import Methodology from "@/components/Methodology"
import StatsSection from "@/components/StatsSection"
import ContactForm from "@/components/ContactForm"
import Reveal from "@/components/Reveal"
import TechStack from "@/components/TechStack"
import CasesOfSuccess from "@/components/CasesOfSuccess"
import ServicesSection from "@/components/ServicesSection"

export default function Home() {
  return (
    <section className="space-y-16">
      <Hero />

      <Reveal>
        <StatsSection />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <ServicesSection />
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

      <section className="mt-16 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4 text-apd-dark">
          Software para empresas que quieren crecer con claridad
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          En <strong>A.P.D. Software Solutions</strong> desarrollamos software a medida para
          empresas en Costa Rica que buscan mejorar procesos, acelerar decisiones y escalar
          con tecnología.
        </p>
      </section>

      <Reveal>
        <ContactForm />
      </Reveal>
    </section>
  )
}