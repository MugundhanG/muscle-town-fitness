import Container from './Container'
import Reveal from './Reveal'

export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/50" />
      <Container className="relative flex flex-col items-center gap-4 text-center">
        <Reveal className="flex flex-col items-center gap-4">
          {eyebrow && (
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-5xl uppercase text-white md:text-6xl">{title}</h1>
          {description && (
            <p className="max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{description}</p>
          )}
        </Reveal>
      </Container>
    </section>
  )
}
