import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <Reveal className={`flex flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-xs font-bold uppercase tracking-[0.25em] ${light ? 'text-accent' : 'text-primary'}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-[3rem] font-normal uppercase leading-[1.05] ${light ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base md:text-lg leading-relaxed ${light ? 'text-white/75' : 'text-ink-soft'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
