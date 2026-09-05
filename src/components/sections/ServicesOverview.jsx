import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'
import Button from '../ui/Button'
import { allServices } from '../../data/services'

const FEATURED_SLUGS = [
  'strength-training',
  'personal-training',
  'hiit-classes',
  'weight-loss-program',
  'nutrition-coaching',
  'womens-batch',
]

export default function ServicesOverview() {
  const featured = FEATURED_SLUGS.map((slug) => allServices.find((s) => s.slug === slug)).filter(Boolean)

  return (
    <section className="bg-canvas py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our Programs"
            title="Every way to train, under one roof"
            description="From your first workout to a structured transformation plan — every program is coached, tracked and adjusted as you progress."
          />
          <Button to="/programs" variant="outline" icon={ArrowRight} className="shrink-0">
            View All Programs
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <ServiceCard key={service.slug} service={service} delay={i * 60} />
          ))}
        </div>
      </Container>
    </section>
  )
}
