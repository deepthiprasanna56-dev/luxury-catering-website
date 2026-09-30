export function MarqueeTicker() {
  const items = [
    'MADE WITH FEELING',
    'SEASONAL BY NATURE',
    'FARM-TO-TABLE LUXURY',
    'ALWAYS ROOM FOR ONE MORE',
    'MICHELIN-INSPIRED CRAFT',
    'ZERO-WASTE KITCHEN',
    'UNFORGETTABLE GATHERINGS',
    'BESPOKE TABLE STYLING',
  ]

  return (
    <section className="ticker" aria-label="Our Culinary Philosophy">
      <div className="ticker-track">
        {/* Doubled for seamless loop */}
        {[0, 1].map((repeatIndex) => (
          <div className="ticker-set" key={repeatIndex} aria-hidden={repeatIndex === 1}>
            {items.map((item, idx) => (
              <span className="ticker-item" key={idx}>
                <span>{item}</span>
                <b className="ticker-spark" aria-hidden="true">&#10039;</b>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
