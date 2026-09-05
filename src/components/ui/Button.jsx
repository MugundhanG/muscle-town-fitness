import { Link } from 'react-router-dom'

const VARIANTS = {
  primary: 'bg-primary text-white hover:bg-primary-deep shadow-sm shadow-primary/30',
  accent: 'bg-accent text-canvas hover:bg-accent-deep shadow-sm shadow-accent/20',
  outline: 'border border-line text-ink hover:border-primary hover:text-primary',
  ghost: 'text-ink hover:bg-surface-alt',
  white: 'bg-white text-canvas hover:bg-white/85',
}

const SIZES = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon: Icon,
  className = '',
  children,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold uppercase tracking-wide transition-colors duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`

  const content = (
    <>
      {children}
      {Icon && <Icon size={18} strokeWidth={2.25} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target={rest.target} rel={rest.target ? 'noopener noreferrer' : undefined} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}
