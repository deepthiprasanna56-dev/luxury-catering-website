import { brand } from '../data/site'

const SPARK = '\u2733'

export function Wordmark({
  href = '#home',
  className = 'wordmark',
  label = 'Gather and Grain, home',
}) {
  return (
    <a className={className} href={href} aria-label={label}>
      <span className="wordmark-flower" aria-hidden="true">
        {SPARK}
      </span>
      <span>
        {brand.nameLead}
        <span className="wordmark-amp">{'&'}</span>
        {brand.nameTail}
        <small>{brand.tagline}</small>
      </span>
    </a>
  )
}
