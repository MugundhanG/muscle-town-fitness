import { Target, Users2, CalendarClock, Sparkles } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { images } from '../../utils/images'

const REASONS = [
  {
    icon: Target,
    title: 'Goal-based, not generic',
    text: 'Your program is built around what you actually want — strength, fat loss, or general fitness — not a one-size-fits-all routine handed to everyone.',
  },
  {
    icon: Users2,
    title: 'Coaches who watch your form',
    text: 'Every session is supervised, not just supplied. Coaches correct your technique in real time so you progress safely.',
  },
  {
    icon: CalendarClock,
    title: 'A schedule that fits real life',
    text: 'Morning and evening batches, plus a dedicated women’s timing, so training fits around your day instead of the other way round.',
  },
  {
    icon: Sparkles,
    title: 'A community that keeps you going',
    text: 'Training alongside others who show up consistently makes it easier for you to show up too — that’s the whole idea of Muscle Town.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal className="order-2 overflow-hidden rounded-2xl lg:order-1">
          <img
            src={images.aboutFacility}
            alt="Dumbbell rack along the wall of the training floor"
            className="h-[420px] w-full object-cover"
            loading="lazy"
          />
        </Reveal>

        <div className="order-1 flex flex-col gap-10 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Why Choose Us"
            title="Training built around how people actually stick with fitness"
            description="Most people don’t fail at the gym because they lack motivation on day one — they fail because the plan wasn’t built for their life. We built ours to fix that."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {REASONS.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 80} className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <reason.icon size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{reason.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{reason.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
