import { HeartHandshake, ShieldCheck, Eye, GraduationCap } from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import CtaBanner from '../components/sections/CtaBanner'
import { images } from '../utils/images'
import { business } from '../config/business'

const VALUES = [
  {
    icon: HeartHandshake,
    title: 'Member-First',
    text: 'Every plan starts with what actually fits your goal and schedule, not the routine that’s easiest to hand out.',
  },
  {
    icon: Eye,
    title: 'No Guesswork',
    text: 'You’ll always know what a plan involves and why — no vague routines, no mystery about what to do next.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety First',
    text: 'Correct form and sensible progression, followed for every member, at every level — every session.',
  },
  {
    icon: GraduationCap,
    title: 'Always Improving',
    text: 'Training methods evolve — so do our programs, coaching and equipment.',
  },
]

const TEAM = [
  {
    id: 'head-coach',
    name: '[Coach Name]',
    role: 'Head Coach & Founder',
    bio: '[Add qualifications, specialisation and experience here]',
  },
  {
    id: 'strength-coach',
    name: '[Coach Name]',
    role: 'Strength & Conditioning Coach',
    bio: '[Add qualifications, specialisation and experience here]',
  },
  {
    id: 'nutrition-coach',
    name: '[Coach Name]',
    role: 'Nutrition Coach',
    bio: '[Add qualifications, specialisation and experience here]',
  },
]

export default function About() {
  useSeo({
    title: 'About Us',
    description: 'Learn about Muscle Town Fitness Studio’s approach to coaching, training and community in Mandaveli, Chennai — our values, our team, and how we work.',
  })

  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Fitness built around consistency, not intensity alone"
        description="A studio founded on a simple idea: the best workout is the one you actually keep showing up for."
        image={images.heroAbout}
      />

      <section className="bg-canvas py-20 md:py-28">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-2xl">
            <img
              src={images.aboutStory}
              alt="Training floor at Muscle Town Fitness Studio"
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-5">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Our Philosophy
            </span>
            <h2 className="font-display text-4xl uppercase leading-tight text-ink md:text-5xl">
              Train smart, stay consistent
            </h2>
            <p className="text-base leading-relaxed text-ink-soft">
              The name isn’t just a name — it’s the idea that everyone deserves a place to build
              strength and confidence, whether that’s your first workout ever or your thousandth.
              No judgment, no intimidation, just structured coaching.
            </p>
            <p className="text-base leading-relaxed text-ink-soft">
              {business.name} was set up to bring that experience to {business.locality}, with
              coaches who actually watch how you move, not just count your reps.
            </p>
            <p className="text-sm italic text-ink-soft/80">
              [Add studio founding story, milestones and years of establishment here]
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface-alt py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="What We Stand For"
            title="The values behind every session"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 90} className="flex flex-col gap-4 rounded-xl bg-surface border border-line p-6 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <value.icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-xl uppercase text-ink">{value.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{value.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-canvas py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Meet the Coaches"
            title="The people behind your training plan"
            description="Demo coach profiles below — swap in real names, photos and qualifications before launch."
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, i) => {
              const img = images.team.find((t) => t.id === member.id)?.img
              return (
                <Reveal key={member.id} delay={i * 100} className="overflow-hidden rounded-2xl border border-line bg-surface">
                  <img src={img} alt={`Portrait placeholder for ${member.role}`} className="h-64 w-full object-cover" loading="lazy" />
                  <div className="p-6">
                    <h3 className="font-display text-2xl uppercase text-ink">{member.name}</h3>
                    <p className="text-sm font-semibold text-primary">{member.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{member.bio}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}
