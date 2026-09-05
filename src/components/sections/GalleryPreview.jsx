import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { images } from '../../utils/images'

const PREVIEW = images.gallery.slice(0, 6)

export default function GalleryPreview() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Take a Look Inside"
            title="A floor built for lifting, not lounging"
          />
          <Button to="/gallery" variant="outline" icon={ArrowRight} className="shrink-0">
            View Full Gallery
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {PREVIEW.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 60}
              className={i === 0 ? 'col-span-2 row-span-2' : ''}
            >
              <div className={`overflow-hidden rounded-xl ${i === 0 ? 'h-full' : ''}`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-300 hover:scale-105 ${
                    i === 0 ? 'h-full min-h-[240px]' : 'h-[140px] sm:h-[160px]'
                  }`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
