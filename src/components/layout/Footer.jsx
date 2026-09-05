import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import Container from '../ui/Container'
import { business, telLink, mailLink, mapsLink, whatsappLink } from '../../config/business'
import { serviceCategories } from '../../data/services'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/programs', label: 'Programs' },
  { to: '/membership', label: 'Membership' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-black text-white/80">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <span className="font-display text-3xl uppercase text-white">{business.name}</span>
          <p className="text-sm leading-relaxed text-white/55">
            A gym and fitness studio in {business.locality} built around strength training,
            coaching and a schedule that fits real life — for anyone who wants to look and feel
            more confident.
          </p>
          <div className="flex gap-3 pt-1">
            <a
              href={business.social.instagram}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href={business.social.facebook}
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <FaFacebookF size={14} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Explore</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-white/55 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Programs</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {serviceCategories.map((cat) => (
              <li key={cat.id}>
                <Link to="/programs" className="text-white/55 hover:text-white">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Visit Us</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-white/55">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
              <a href={mapsLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {business.address}, {business.locality}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-primary" />
              <a href={telLink()} className="hover:text-white">{business.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-primary" />
              <a href={mailLink()} className="hover:text-white">{business.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>
                Mon–Sat: {business.hours.weekdays}
                <br />
                Sunday: {business.hours.sunday}
              </span>
            </li>
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white"
          >
            Chat on WhatsApp
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10 py-5">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/40 sm:flex-row">
          <p>© {year} {business.name}. All rights reserved.</p>
          <p>{business.locality}, Chennai</p>
        </Container>
      </div>
    </footer>
  )
}
