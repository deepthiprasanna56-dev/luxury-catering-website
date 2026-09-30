import { useState } from 'react'
import { ArrowUpRight, Check, Users } from 'lucide-react'
import { services } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function Services({ onSelectService }) {
  const [hoveredId, setHoveredId] = useState(null)

  const handleInquire = (service) => {
    if (onSelectService) {
      onSelectService(service.name)
    }
  }

  return (
    <section className="services-section" id="services">
      <div className="section-container">
        <SectionHeading
          eyebrow="TAILORED HOSPITALITY"
          title={
            <>
              Something to <em>celebrate?</em>
            </>
          }
          aside={
            <p className="section-aside-text">
              Whether an intimate terrace dinner or a 400-guest estate wedding, we bring culinary artistry and effortless grace to your gathering.
            </p>
          }
        />

        <div className="service-grid">
          {services.map((service, index) => {
            const isHovered = hoveredId === service.id

            return (
              <div
                key={service.id}
                className={`service-card reveal ${isHovered ? 'service-card-active' : ''}`}
                style={{ '--reveal-delay': `${index * 80}ms` }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Card Header */}
                <div className="service-topline">
                  <span className="service-index">{service.number} / 04</span>
                  <span className="service-capacity">
                    <Users size={12} aria-hidden="true" />
                    {service.capacity}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="service-body">
                  <h3 className="service-title">{service.name}</h3>
                  <p className="service-tagline">{service.tagline}</p>
                  <p className="service-copy">{service.copy}</p>

                  {/* Highlights list */}
                  <ul className="service-highlights" aria-label={`Highlights for ${service.name}`}>
                    {service.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="service-highlight-item">
                        <Check size={13} className="highlight-check" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer / Action */}
                <div className="service-footer">
                  <a
                    href="#contact"
                    className="service-action-btn"
                    onClick={() => handleInquire(service)}
                    aria-label={`Inquire about ${service.name}`}
                  >
                    <span>Inquire for this service</span>
                    <div className="service-btn-arrow">
                      <ArrowUpRight size={16} />
                    </div>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <div className="services-footnote reveal">
          <p>
            Need a fully bespoke format? We design roving oyster bars, live wood-fired asado pits, and champagne towers upon request.{' '}
            <a href="#contact" onClick={() => onSelectService && onSelectService('Other Custom Celebration')}>
              Consult with our creative team &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
