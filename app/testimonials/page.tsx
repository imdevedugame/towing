import { Testimonials } from "@/components/testimonials"
import { CustomerStories } from "@/components/customer-stories"
import { RatingSummary } from "@/components/rating-summary"
import { ContactCTA } from "@/components/contact-cta"

export default function TestimonialsPage() {
  return (
    <>
      <Testimonials />
      <CustomerStories />
      <RatingSummary />
      <ContactCTA />
    </>
  )
}
