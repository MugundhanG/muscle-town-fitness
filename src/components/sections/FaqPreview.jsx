import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import FaqAccordion from '../ui/FaqAccordion'
import Button from '../ui/Button'
import { allFaqs } from '../../data/faqs'

export default function FaqPreview() {
  const preview = allFaqs.slice(0, 4)

  return (
    <section className="bg-surface py-20 md:py-28">
      <Container className="mx-auto flex max-w-3xl flex-col gap-10">
        <SectionHeading eyebrow="Good to Know" title="Frequently asked questions" />
        <FaqAccordion faqs={preview} />
        <div className="flex justify-center">
          <Button to="/faq" variant="ghost" icon={ArrowRight}>
            See All FAQs
          </Button>
        </div>
      </Container>
    </section>
  )
}
