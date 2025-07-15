import { Testimonials } from "@/components/testimonials"
import { CustomerStories } from "@/components/customer-stories"
import { RatingSummary } from "@/components/rating-summary"

export default function TestimonialsPage() {
  return (
    <>
      <Testimonials />
      <CustomerStories /> {/* New section for longer stories */}
      <RatingSummary /> {/* New section for rating overview */}
    </>
  )
}
