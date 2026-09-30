import { useCallback, useEffect, useState } from 'react'

const AUTOPLAY_INTERVAL_MS = 6000
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Index state for the testimonial slider: bounded, wrapping, with an autoplay
 * that pauses on hover/focus and respects prefers-reduced-motion.
 */
export function useTestimonialCarousel(total, paused = false) {
  const [index, setIndex] = useState(0)

  const goTo = useCallback(
    (next) => {
      if (total < 1) return
      setIndex(((next % total) + total) % total)
    },
    [total],
  )

  const step = useCallback(
    (offset) => {
      if (total < 1) return
      setIndex((current) => (current + offset + total) % total)
    },
    [total],
  )

  const next = useCallback(() => step(1), [step])
  const prev = useCallback(() => step(-1), [step])

  useEffect(() => {
    if (paused || total < 2) return undefined
    if (typeof window !== 'undefined' && window.matchMedia(REDUCED_MOTION_QUERY).matches) return undefined

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total)
    }, AUTOPLAY_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [paused, total])

  return { index, goTo, step, next, prev }
}
