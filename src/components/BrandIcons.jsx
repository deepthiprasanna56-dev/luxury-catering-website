/**
 * Social brand marks drawn as thin outline glyphs so they sit consistently
 * alongside the lucide line icons used everywhere else.
 */

const STROKE = 1.6

function svgProps(size) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: STROKE,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
    focusable: 'false',
  }
}

export function InstagramIcon({ size = 18 }) {
  return (
    <svg {...svgProps(size)}>
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.35" cy="6.65" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ size = 18 }) {
  return (
    <svg {...svgProps(size)}>
      <path d="M13.6 3.4h-1.9A3.3 3.3 0 0 0 8.4 6.7V21" />
      <path d="M6.6 12.3h6.5" />
    </svg>
  )
}

export function PinterestIcon({ size = 18 }) {
  return (
    <svg {...svgProps(size)}>
      <path d="M9.8 20.8V5.3h3.8a3.9 3.9 0 0 1 0 7.8H9.8" />
    </svg>
  )
}

export function LinkedinIcon({ size = 18 }) {
  return (
    <svg {...svgProps(size)}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const GLYPHS = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  pinterest: PinterestIcon,
  linkedin: LinkedinIcon,
}

export function SocialIcon({ name, size = 18 }) {
  const Glyph = GLYPHS[name]
  if (!Glyph) return null
  return <Glyph size={size} />
}
