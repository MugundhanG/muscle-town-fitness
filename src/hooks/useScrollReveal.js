import { useEffect, useRef, useState } from 'react'

// Adds the `is-visible` class (see .reveal in index.css) once the element
// scrolls into view, so sections animate in on first sight instead of all
// firing on page load.
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return { ref, isVisible }
}
