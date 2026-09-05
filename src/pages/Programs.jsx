import { useSeo } from '../hooks/useSeo'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import ServiceCard from '../components/ui/ServiceCard'
import CtaBanner from '../components/sections/CtaBanner'
import { serviceCategories } from '../data/services'
import { images } from '../utils/images'

export default function Programs() {
  useSeo({
    title: 'Programs & Classes',
    description: 'Explore all training programs at Muscle Town Fitness Studio — strength training, personal training, group classes, weight loss and nutrition coaching.',
  })

  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Every program, coached from day one"
        description="Browse the full range of training programs below, grouped by what they help you achieve."
        image={images.heroPrograms}
      />

      {serviceCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={index % 2 === 0 ? 'bg-canvas py-20 md:py-24' : 'bg-surface py-20 md:py-24'}
        >
          <Container className="flex flex-col gap-10">
            <Reveal className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={images.programCategoryImages[category.id]}
                  alt=""
                  className="h-56 w-full object-cover lg:h-full"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  {String(index + 1).padStart(2, '0')} / {String(serviceCategories.length).padStart(2, '0')}
                </span>
                <h2 className="mt-2 font-display text-4xl uppercase text-ink md:text-5xl">
                  {category.name}
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">{category.blurb}</p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service, i) => (
                <ServiceCard key={service.slug} service={service} delay={i * 60} detailed />
              ))}
            </div>
          </Container>
        </section>
      ))}

      <CtaBanner
        title="Not sure which program fits you?"
        description="Book a free trial and we'll help you figure out the right starting point."
      />
    </>
  )
}
