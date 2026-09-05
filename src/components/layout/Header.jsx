import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { business, telLink } from '../../config/business'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/membership', label: 'Membership' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/faq', label: 'FAQ' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-canvas/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M3 12h2M19 12h2M6 8v8M18 8v8M9 10v4M15 10v4M9 12h6" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl uppercase text-ink">{business.name}</span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent">
              {business.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-lg px-3.5 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  isActive ? 'bg-primary-soft text-primary' : 'text-ink-soft hover:bg-surface-alt hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink()}
            className="flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-primary"
          >
            <Phone size={16} />
            {business.phoneDisplay}
          </a>
          <Button to="/contact" size="md">
            Join Now
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-ink lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((o) => !o)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {isOpen && (
        <div className="border-t border-line bg-canvas lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-base font-semibold uppercase tracking-wide ${
                    isActive ? 'bg-primary-soft text-primary' : 'text-ink-soft'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-line pt-4">
              <a
                href={telLink()}
                className="flex items-center justify-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-semibold text-ink"
              >
                <Phone size={16} />
                {business.phoneDisplay}
              </a>
              <Button to="/contact" size="md" onClick={() => setIsOpen(false)}>
                Join Now
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
