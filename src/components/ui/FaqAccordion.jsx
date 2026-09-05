import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FaqAccordion({ faqs, defaultOpenIndex = -1 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex)

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${faq.q.slice(0, 12).replace(/\s+/g, '-')}-${index}`

        return (
          <div
            key={faq.q}
            className={`overflow-hidden rounded-lg border transition-colors ${isOpen ? 'border-primary/40 bg-primary-soft/40' : 'border-line bg-surface'}`}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold text-ink">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              className={`grid transition-all duration-200 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-relaxed text-ink-soft">{faq.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
