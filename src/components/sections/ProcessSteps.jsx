import { CalendarCheck, ClipboardList, Target, Flame } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

const STEPS = [
  { icon: CalendarCheck, title: 'Book a Free Trial', text: 'Call, WhatsApp or use the site form to schedule your first visit — no commitment required.' },
  { icon: ClipboardList, title: 'Fitness Assessment', text: 'A coach reviews your current fitness level, goals and any limitations before building your plan.' },
  { icon: Target, title: 'Personalized Plan', text: 'A training program — and nutrition guidance if needed — built around your specific goal and schedule.' },
  { icon: Flame, title: 'Start Training', text: 'Join your batch, track your progress, and adjust the plan with your coach as you get stronger.' },
]

export default function ProcessSteps() {
  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="How It Works"
          title="Getting started takes four steps"
          description="No guesswork about what happens after you walk in — here’s exactly how your first month looks."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 90} className="relative flex flex-col gap-4 rounded-xl bg-surface p-6 border border-line">
              <span className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-canvas">
                {i + 1}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                <step.icon size={22} strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display text-xl uppercase text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
