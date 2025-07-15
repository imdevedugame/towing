import { Contact } from "@/components/contact"
// import { LocationMap } from "@/components/location-map" // Removed LocationMap
import { BusinessHours } from "@/components/business-hours"
import { FAQ } from "@/components/faq" // Re-using FAQ here

export default function ContactPage() {
  return (
    <>
      <Contact />
      {/* LocationMap is now in Footer */}
      <BusinessHours />
      <FAQ />
    </>
  )
}
