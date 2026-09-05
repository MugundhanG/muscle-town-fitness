import { Check } from 'lucide-react'
import Reveal from './Reveal'
import Button from './Button'
import { whatsappLink } from '../../config/business'

export default function MembershipCard({ tier, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={`flex h-full flex-col gap-6 rounded-2xl border p-7 ${
          tier.highlighted ? 'border-primary bg-primary-soft/50' : 'border-line bg-surface'
        }`}
      >
        {tier.highlighted && (
          <span className="w-fit rounded-full bg-primary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white">
            Most Popular
          </span>
        )}
        <div>
          <h3 className="font-display text-3xl uppercase text-ink">{tier.name}</h3>
          <p className="mt-1 text-sm text-ink-soft">{tier.tagline}</p>
        </div>

        <ul className="flex flex-1 flex-col gap-3">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-soft">
              <Check size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          href={whatsappLink(`Hi Muscle Town Fitness Studio, I'd like a quote for the ${tier.name} membership plan.`)}
          target="_blank"
          variant={tier.highlighted ? 'primary' : 'outline'}
          className="w-full"
        >
          Request a Quote
        </Button>
      </article>
    </Reveal>
  )
}
