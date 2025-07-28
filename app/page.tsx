import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { ContactCTA } from "@/components/contact-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <main>
        <About />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <ContactCTA />
    </div>
  )
}
