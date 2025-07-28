import { Contact } from "@/components/contact"
import { BusinessHours } from "@/components/business-hours"
import { FAQ } from "@/components/faq"
import { ContactCTA } from "@/components/contact-cta"

export default function ContactPage() {
  return (
    <>
      <Contact />
      <BusinessHours />
      <FAQ />
      <ContactCTA />
    </>
  )
}
