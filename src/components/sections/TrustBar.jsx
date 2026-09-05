import { Dumbbell, Target, Wallet, HeartHandshake } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'

const POINTS = [
  { icon: Dumbbell, label: 'Clean, Well-Maintained Equipment' },
  { icon: Target, label: 'Personalized Training Plans' },
  { icon: Wallet, label: 'Flexible Membership Options' },
  { icon: HeartHandshake, label: 'Supportive, Judgment-Free Space' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-surface py-8">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {POINTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <span className="text-sm font-semibold text-ink-soft">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
