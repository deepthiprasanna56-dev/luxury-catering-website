import { useEffect } from 'react'

const REVEAL_SELECTOR = '.reveal:not(.is-visible)'
const REVEAL_THRESHOLD = 0.1
const VISIBLE_CLASS = 'is-visible'

/**
 * Observes all `.reveal` elements and marks them `.is-visible` when they enter the viewport.
 * Uses a MutationObserver to automatically pick up newly mounted elements (e.g. filtered items).
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add(VISIBLE_CLASS))
      return undefined
    }

    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add(VISIBLE_CLASS))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(VISIBLE_CLASS)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: REVEAL_THRESHOLD, rootMargin: '0px 0px -40px 0px' }
    )

    const observeNewElements = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => observer.observe(el))
    }

    observeNewElements()

    // Observe dynamically mounted children (e.g., tab changes)
    const mutationObserver = new MutationObserver(() => {
      observeNewElements()
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
