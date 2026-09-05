import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import TestimonialCard from '../ui/TestimonialCard'
import Button from '../ui/Button'
import { testimonials } from '../../data/testimonials'

export default function TestimonialsPreview() {
  const featured = testimonials.slice(0, 3)

  return (
    <section className="bg-canvas py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Member Stories"
          title="What members say after they start"
          description="A few sample reviews to show how this section looks — replace with your own members’ words."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} delay={i * 80} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button to="/testimonials" variant="outline" icon={ArrowRight}>
            Read More Reviews
          </Button>
        </div>
      </Container>
    </section>
  )
}
