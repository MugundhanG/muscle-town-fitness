import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { business, telLink, whatsappLink, mapsLink } from '../../config/business'

export default function LocationCta() {
  return (
    <section className="bg-black py-20 md:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
            Visit Muscle Town Fitness Studio
          </span>
          <h2 className="font-display text-4xl uppercase leading-tight text-white md:text-5xl">
            Ready when you are — walk in or book ahead.
          </h2>
          <ul className="flex flex-col gap-4 text-white/80">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-primary" />
              <span>{business.address}, {business.locality}, Chennai</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="shrink-0 text-primary" />
              <span>{business.phoneDisplay}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={20} className="mt-0.5 shrink-0 text-primary" />
              <span>Mon–Sat: {business.hours.weekdays} &nbsp;·&nbsp; Sunday: {business.hours.sunday}</span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button to="/contact" size="lg" variant="accent">
              Book a Free Trial
            </Button>
            <Button href={whatsappLink()} target="_blank" size="lg" variant="white" icon={MessageCircle}>
              WhatsApp Us
            </Button>
            <Button href={telLink()} size="lg" variant="ghost" icon={Phone} className="text-white hover:bg-white/10">
              Call Now
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150} className="overflow-hidden rounded-2xl border border-white/10">
          <a href={mapsLink()} target="_blank" rel="noopener noreferrer" className="block">
            <iframe
              title="Muscle Town Fitness Studio location map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(business.mapEmbedQuery)}&z=15&output=embed`}
              className="h-[340px] w-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
