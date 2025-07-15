import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { ServiceDetails } from "@/components/service-details"
import { PricingSection } from "@/components/pricing-section"

export default function ServicesPage() {
  return (
    <>
      <Services />
      <ServiceDetails /> {/* New section for detailed service */}
      <HowItWorks />
      <PricingSection /> {/* New section for pricing */}
    </>
  )
}
