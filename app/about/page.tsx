import { About } from "@/components/about"
import { WhyChooseUs } from "@/components/why-choose-us"
import { OurTeam } from "@/components/our-team"
import { OurValues } from "@/components/our-values"
import { ContactCTA } from "@/components/contact-cta"

export default function AboutPage() {
  return (
    <>
      <About />
      <WhyChooseUs />
      <OurTeam />
      <OurValues />
      <ContactCTA />
    </>
  )
}
