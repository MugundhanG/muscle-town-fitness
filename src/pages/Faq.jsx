import { useSeo } from '../hooks/useSeo'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import FaqAccordion from '../components/ui/FaqAccordion'
import CtaBanner from '../components/sections/CtaBanner'
import { faqCategories } from '../data/faqs'
import { images } from '../utils/images'

export default function Faq() {
  useSeo({
    title: 'Frequently Asked Questions',
    description: 'Answers to common questions about joining Muscle Town Fitness Studio — membership, training programs, facility and safety.',
  })

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions members ask us most"
        description="Can't find what you're looking for? Reach out and we'll answer directly."
        image={images.heroFaq}
      />

      <section className="bg-canvas py-16 md:py-24">
        <Container className="mx-auto flex max-w-3xl flex-col gap-14">
          {faqCategories.map((category) => (
            <div key={category.name} className="flex flex-col gap-5">
              <h2 className="font-display text-3xl uppercase text-ink">{category.name}</h2>
              <FaqAccordion faqs={category.faqs} />
            </div>
          ))}
        </Container>
      </section>

      <CtaBanner
        title="Still have questions?"
        description="Message us on WhatsApp or call the studio directly — we're happy to help."
      />
    </>
  )
}
