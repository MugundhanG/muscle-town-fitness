import { MessageCircle } from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import MembershipCard from '../components/ui/MembershipCard'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { membershipTiers, membershipAddOns } from '../data/membership'
import { images } from '../utils/images'
import { whatsappLink } from '../config/business'

export default function Membership() {
  useSeo({
    title: 'Membership Plans',
    description: 'Compare membership plans at Muscle Town Fitness Studio — Basic, Standard and Premium tiers covering gym access, group classes, personal training and nutrition coaching.',
  })

  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Plans built around your goal"
        description="Every tier includes full gym floor access. Pricing is shared directly on WhatsApp since it depends on the plan and duration you choose."
        image={images.heroMembership}
      />

      <section className="bg-canvas py-16 md:py-24">
        <Container className="flex flex-col gap-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {membershipTiers.map((tier, i) => (
              <MembershipCard key={tier.id} tier={tier} delay={i * 90} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Add-Ons"
            title="Extend any membership"
            description="Add these on top of any plan, or ask about them separately."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {membershipAddOns.map((addon, i) => (
              <Reveal key={addon.name} delay={i * 80} className="rounded-xl border border-line bg-surface-alt p-6">
                <h3 className="font-display text-xl uppercase text-ink">{addon.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{addon.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-black py-16 md:py-20">
        <Container className="flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-2xl font-display text-3xl uppercase text-white md:text-4xl">
            Still deciding which plan fits?
          </h2>
          <p className="max-w-lg text-white/80">
            Message us your fitness goal and schedule — we'll recommend the right plan and share exact pricing.
          </p>
          <Button href={whatsappLink()} target="_blank" size="lg" variant="accent" icon={MessageCircle}>
            Ask on WhatsApp
          </Button>
        </Container>
      </section>
    </>
  )
}
