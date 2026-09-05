import { useMemo, useState } from 'react'
import { useSeo } from '../hooks/useSeo'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import Lightbox from '../components/ui/Lightbox'
import CtaBanner from '../components/sections/CtaBanner'
import { images } from '../utils/images'

const CATEGORIES = ['All', ...new Set(images.gallery.map((g) => g.category))]

export default function Gallery() {
  useSeo({
    title: 'Gallery',
    description: 'A look inside Muscle Town Fitness Studio — our training floor, group classes and community, in Mandaveli, Chennai.',
  })

  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = useMemo(
    () => (activeCategory === 'All' ? images.gallery : images.gallery.filter((g) => g.category === activeCategory)),
    [activeCategory]
  )

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look inside Muscle Town"
        description="Our training floor, our group classes, and the people who train here."
        image={images.heroGallery}
      />

      <section className="bg-canvas py-16 md:py-24">
        <Container className="flex flex-col gap-10">
          <Reveal className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`cursor-pointer rounded-lg px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary-deep text-white'
                    : 'border border-line text-ink-soft hover:border-primary/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={i * 50}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(images.gallery.findIndex((g) => g.id === item.id))}
                  className="block w-full cursor-pointer overflow-hidden rounded-lg"
                  aria-label={`View larger image: ${item.alt}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-40 w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-52"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          items={images.gallery}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}

      <CtaBanner
        title="Like what you see?"
        description="Come experience the studio in person — book your free trial session today."
      />
    </>
  )
}
