import { useSeo } from '../hooks/useSeo'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import TestimonialCard from '../components/ui/TestimonialCard'
import CtaBanner from '../components/sections/CtaBanner'
import { testimonials } from '../data/testimonials'
import { images } from '../utils/images'

export default function Testimonials() {
  useSeo({
    title: 'Member Testimonials',
    description: 'See what members say about their experience training at Muscle Town Fitness Studio in Mandaveli, Chennai.',
  })

  return (
    <>
      <PageHero
        eyebrow="Member Stories"
        title="What members say after they start"
        description="Real experiences shared by members — because sticking with a plan matters as much as the plan itself."
        image={images.heroTestimonials}
      />

      <section className="bg-canvas py-16 md:py-24">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Demo Reviews"
            title="A sample of member feedback"
            description="These are sample testimonials to show how this section looks. Replace with genuine reviews from your own members before launch."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} delay={i * 60} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to become our next success story?"
        description="Book a free trial and see the difference a coached, structured plan makes."
      />
    </>
  )
}
