import { Star, Quote } from 'lucide-react'
import Reveal from './Reveal'

export default function TestimonialCard({ testimonial, delay = 0 }) {
  const initial = testimonial.name.charAt(0)

  return (
    <Reveal delay={delay} className="h-full">
      <figure className="flex h-full flex-col gap-5 rounded-xl border border-line bg-surface p-7">
        <Quote className="text-accent/50" size={28} strokeWidth={1.5} aria-hidden="true" />
        <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
          “{testimonial.quote}”
        </blockquote>
        <figcaption className="flex items-center gap-3 border-t border-line pt-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-soft font-display text-lg text-primary">
            {initial}
          </span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
            <p className="text-xs text-ink-soft">{testimonial.treatment}</p>
          </div>
          <div className="flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < testimonial.rating ? 'fill-accent text-accent' : 'text-line'}
              />
            ))}
          </div>
        </figcaption>
      </figure>
    </Reveal>
  )
}
