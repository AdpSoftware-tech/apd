import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Methodology from "@/components/Methodology"
import StatsSection from "@/components/StatsSection"
import ContactForm from "@/components/ContactForm"
import Loader from "@/components/Loader"
import Reveal from "@/components/Reveal"
import TechStack from "@/components/TechStack"
import ServicesSection from "@/components/ServicesSection" // ✅ AGREGAR

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
        <Experience />
      </Reveal>

      <Reveal>
        <Methodology />
      </Reveal>

      <Reveal>
        <TechStack />
      </Reveal>

      <Reveal>
        <ContactForm />
      </Reveal>
    </section>
  )
}