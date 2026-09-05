import {
  Dumbbell,
  UserRound,
  Activity,
  Flame,
  Music,
  Users,
  TrendingDown,
  Apple,
  Compass,
} from 'lucide-react'
import Reveal from './Reveal'

const SERVICE_ICONS = {
  Dumbbell,
  UserRound,
  Activity,
  Flame,
  Music,
  Users,
  TrendingDown,
  Apple,
  Compass,
}

export default function ServiceCard({ service, delay = 0, detailed = false }) {
  const Icon = SERVICE_ICONS[service.icon] || Dumbbell

  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col gap-4 rounded-xl border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/60">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
          <Icon size={24} strokeWidth={1.75} />
        </span>
        <div>
          <h3 className="font-display text-2xl uppercase text-ink">{service.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {detailed ? service.detail : service.summary}
          </p>
        </div>
      </article>
    </Reveal>
  )
}
