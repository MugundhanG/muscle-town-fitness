import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/ui/Reveal'
import { business, telLink, mailLink, mapsLink, whatsappLink } from '../config/business'
import { images } from '../utils/images'

const INFO_CARDS = [
  { icon: MapPin, label: 'Address', value: `${business.address}, ${business.locality}, Chennai`, href: mapsLink(), external: true },
  { icon: Phone, label: 'Phone', value: business.phoneDisplay, href: telLink() },
  { icon: Mail, label: 'Email', value: business.email, href: mailLink() },
  { icon: Clock, label: 'Hours', value: `Mon–Sat: ${business.hours.weekdays}\nSunday: ${business.hours.sunday}` },
]

export default function Contact() {
  useSeo({
    title: 'Contact & Join Now',
    description: 'Join Muscle Town Fitness Studio in Mandaveli, Chennai — call, WhatsApp or fill in the form and we\'ll get back to you.',
  })

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Join Muscle Town"
        description="Reach us by phone, WhatsApp, or fill in the form below and we'll confirm your free trial slot."
        image={images.heroContact}
      />

      <section className="bg-canvas py-16 md:py-24">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INFO_CARDS.map((card, i) => {
            const content = (
              <>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
                  <card.icon size={20} strokeWidth={1.75} />
                </span>
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-ink-soft">{card.label}</p>
                <p className="mt-1 whitespace-pre-line text-sm font-medium text-ink">{card.value}</p>
              </>
            )
            return (
              <Reveal key={card.label} delay={i * 70}>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.external ? '_blank' : undefined}
                    rel={card.external ? 'noopener noreferrer' : undefined}
                    className="flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-primary/60"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex h-full flex-col rounded-xl border border-line bg-surface p-5">
                    {content}
                  </div>
                )}
              </Reveal>
            )
          })}
        </Container>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-line bg-surface-alt p-6 md:p-8">
            <h2 className="font-display text-3xl uppercase text-ink">Request a free trial</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Fill in your details and we'll confirm a time that works for you.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Muscle Town Fitness Studio location map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(business.mapEmbedQuery)}&z=15&output=embed`}
                className="h-[280px] w-full grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-2xl bg-black p-6 text-white">
              <h3 className="font-display text-xl uppercase">Prefer to message us?</h3>
              <p className="mt-1.5 text-sm text-white/70">
                WhatsApp is often the fastest way to reach the studio directly.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#075E54] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
