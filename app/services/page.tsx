import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { ServiceDetails } from "@/components/service-details"
import { PricingSection } from "@/components/pricing-section"
import { ContactCTA } from "@/components/contact-cta"

export default function ServicesPage() {
  return (
    <>
      <Services />
      <ServiceDetails />
      <HowItWorks />
      <PricingSection />
      <ContactCTA />
    </>
  )
}
