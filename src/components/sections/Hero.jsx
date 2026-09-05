import { Flame, MessageCircle, ShieldCheck } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { images } from '../../utils/images'
import { whatsappLink, business } from '../../config/business'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-12 pb-16 md:pt-16 md:pb-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <Reveal className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-md bg-primary-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary">
            <Flame size={14} /> Fitness Studio in {business.locality}
          </span>

          <h1 className="font-display text-5xl uppercase leading-[0.95] text-ink sm:text-6xl lg:text-[4.2rem]">
            Stronger body.
            <br />
            <span className="text-primary">Sharper mind.</span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-ink-soft md:text-lg">
            Muscle Town Fitness Studio brings strength training, personal coaching, group classes
            and nutrition guidance together in {business.locality}, Chennai — built for people who
            want to look confident and feel unstoppable, not just work out.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button to="/contact" size="lg" icon={Flame}>
              Book a Free Trial
            </Button>
            <Button href={whatsappLink()} target="_blank" variant="outline" size="lg" icon={MessageCircle}>
              WhatsApp Us
            </Button>
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-6 border-t border-line pt-6">
            {[
              ['9+', 'Programs & Classes'],
              ['1-on-1', 'Personal Coaching'],
              ['All Levels', 'Beginner to Advanced'],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl text-primary">{value}</dt>
                <dd className="text-xs uppercase tracking-wide text-ink-soft">{label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-black/40">
            <img
              src={images.heroHome}
              alt="Member performing a barbell deadlift on the gym floor"
              className="h-[420px] w-full object-cover sm:h-[480px]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-xl border border-line bg-surface p-4 shadow-lg shadow-black/40 sm:left-6 sm:w-auto sm:translate-x-0">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <ShieldCheck size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Judgment-free training space</p>
                <p className="text-xs text-ink-soft">Every member, every level</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
