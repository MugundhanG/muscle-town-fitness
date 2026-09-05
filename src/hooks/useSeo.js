import { useEffect } from 'react'

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Updates document title + meta description/OG tags per page. Falls back to
// index.html's defaults for anything not passed in.
export function useSeo({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — Muscle Town Fitness Studio` : 'Muscle Town Fitness Studio'
    document.title = fullTitle
    if (description) {
      setMeta('description', description)
      setMeta('og:title', fullTitle, 'property')
      setMeta('og:description', description, 'property')
      setMeta('twitter:title', fullTitle)
      setMeta('twitter:description', description)
    }
  }, [title, description])
}
