import { useEffect, useState } from 'react'

const PROBE_RATIO = 0.32
const BOTTOM_TOLERANCE = 2

/**
 * Returns the id of the section currently under the reading line, so the nav
 * can highlight where you are.
 *
 * A rAF-throttled scroll listener is used rather than IntersectionObserver
 * because the final section on the page is often shorter than the viewport —
 * an observer would never mark it active, whereas this also explicitly snaps
 * to the last section once the page is scrolled to the bottom.
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0

      const probe = window.innerHeight * PROBE_RATIO
      let current = sectionIds[0] ?? ''

      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= probe) current = id
      })

      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - BOTTOM_TOLERANCE
      if (scrolledToBottom) current = sectionIds[sectionIds.length - 1] ?? current

      setActiveId((previous) => (previous === current ? previous : current))
    }

    const schedule = () => {
      if (frame) return
      frame = window.requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [sectionIds])

  return activeId
}
