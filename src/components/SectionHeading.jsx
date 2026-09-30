import { Eyebrow } from './Eyebrow'

export function SectionHeading({ eyebrow, title, aside, className = 'section-heading' }) {
  return (
    <div className={`${className} reveal`}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {aside}
    </div>
  )
}
