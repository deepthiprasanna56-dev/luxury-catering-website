export function Eyebrow({ children, light = false }) {
  return (
    <div className={light ? 'eyebrow eyebrow-light' : 'eyebrow'}>
      <span className="eyebrow-line" aria-hidden="true" />
      {children}
    </div>
  )
}
