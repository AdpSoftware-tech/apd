import Hero from "@/components/Hero"
import StatsSection from "@/components/StatsSection"
import About from "@/components/About"
import ServicesSection from "@/components/ServicesSection"
import CasesOfSuccess from "@/components/CasesOfSuccess"
import Methodology from "@/components/Methodology"
import TechStack from "@/components/TechStack"
import ContactForm from "@/components/ContactForm"
import InternshipsTeaser from "@/components/internships/InternshipsTeaser"

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <About />
      <ServicesSection />
      <CasesOfSuccess />
      <Methodology />
      <InternshipsTeaser />
      <TechStack />
      <ContactForm />
    </>
  )
}
