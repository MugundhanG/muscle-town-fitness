import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={isVisible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
