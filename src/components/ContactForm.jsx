import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import Button from './ui/Button'
import { allServices } from '../data/services'
import { whatsappLink } from '../config/business'

const initialState = { name: '', phone: '', program: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.phone.trim()) next.phone = 'Please enter a phone number.'
    else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone.trim())) next.phone = 'Please enter a valid phone number.'
    return next
  }

  function handleSubmit(e) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    const message = `Hi Muscle Town Fitness Studio, I'm ${form.name}. I'd like to know more${
      form.program ? ` about ${form.program}` : ' about your membership plans'
    }.${form.message ? ` Note: ${form.message}` : ''}`

    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-primary/30 bg-primary-soft/40 p-8 text-center">
        <CheckCircle2 size={40} className="text-primary" />
        <h3 className="font-display text-2xl uppercase text-ink">Request received</h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
          Thanks, {form.name.split(' ')[0]}. We've noted your details — our team will reach out shortly.
          For a faster response, message us directly on WhatsApp.
        </p>
        <Button href={whatsappLink(message)} target="_blank" variant="accent">
          Continue on WhatsApp
        </Button>
        <button
          type="button"
          onClick={() => {
            setForm(initialState)
            setSubmitted(false)
          }}
          className="text-sm font-medium text-primary underline underline-offset-2"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
          Full name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink">
          Phone number
        </label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="98765 43210"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-xs text-red-400">{errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="program" className="mb-1.5 block text-sm font-semibold text-ink">
          Interested in <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <select
          id="program"
          value={form.program}
          onChange={(e) => update('program', e.target.value)}
          className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option value="">Not sure yet / general enquiry</option>
          {allServices.map((s) => (
            <option key={s.slug} value={s.name}>{s.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
          Message <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className="w-full resize-none rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="Tell us a bit about your fitness goal, or a preferred time to visit."
        />
      </div>

      <Button type="submit" size="lg" icon={Send} className="w-full sm:w-auto">
        Send Enquiry
      </Button>
    </form>
  )
}
