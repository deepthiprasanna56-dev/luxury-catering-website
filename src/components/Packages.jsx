import { ArrowRight, Check, Sparkles, Clock, Wine } from 'lucide-react'
import { packages, foodImages } from '../data/site'
import { Eyebrow } from './Eyebrow'

export function Packages({ onSelectPackage }) {
  const handleSelect = (pkg) => {
    if (onSelectPackage) {
      onSelectPackage(pkg.name)
    }
  }

  return (
    <section className="packages-section" id="packages">
      {/* Editorial Mood Banner */}
      <div className="packages-mood-banner">
        <div className="packages-banner-img">
          <img
            src={foodImages.dinnerParty}
            alt="Intimate candlelit supper party with friends enjoying seasonal courses"
            loading="lazy"
          />
          <div className="banner-overlay" />
        </div>
        <div className="packages-banner-copy reveal">
          <Eyebrow light>CURATED FEASTS & PACKAGES</Eyebrow>
          <h2 className="packages-banner-title">
            For the big vows and the <em>little moments.</em>
          </h2>
          <p className="packages-banner-desc">
            We take care of the menu architecture, artisanal linens, local wine pairings, and silent attentive table service. You simply bring your people.
          </p>
          <div className="packages-banner-badges">
            <span className="banner-badge">
              <Sparkles size={13} /> Full Setup & Teardown Included
            </span>
            <span className="banner-badge">
              <Wine size={13} /> Sommelier-Paired Wines
            </span>
            <span className="banner-badge">
              <Clock size={13} /> Flexible Multi-Course Flow
            </span>
          </div>
        </div>
      </div>

      {/* Package Cards Grid */}
      <div className="packages-cards-wrap section-container">
        <div className="packages-grid">
          {packages.map((pkg, index) => {
            return (
              <div
                key={pkg.id}
                className={`package-card-item reveal ${pkg.popular ? 'package-card-featured' : ''}`}
                style={{ '--reveal-delay': `${index * 80}ms` }}
              >
                {/* Popular / Feature Tag */}
                {pkg.badge && (
                  <div className="package-tag-pill">
                    {pkg.popular && <Sparkles size={12} className="tag-spark" />}
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div className="package-card-header">
                  <span className="package-code">{pkg.number}</span>
                  <h3 className="package-title">{pkg.name}</h3>
                  <p className="package-subtitle">{pkg.subtitle}</p>
                </div>

                <div className="package-price-wrap">
                  <span className="package-currency">{pkg.price}</span>
                  <span className="package-unit"> / {pkg.unit}</span>
                </div>

                <p className="package-desc">{pkg.description}</p>

                {/* Inclusions */}
                <div className="package-inclusions">
                  <strong className="inclusions-title">What’s Included:</strong>
                  <ul className="inclusions-list">
                    {pkg.inclusions.map((item, incIdx) => (
                      <li key={incIdx} className="inclusion-item">
                        <Check size={14} className="inclusion-check" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <div className="package-action-wrap">
                  <a
                    href="#contact"
                    className={`button ${pkg.popular ? 'button-dark' : 'button-outline'} package-select-btn`}
                    onClick={() => handleSelect(pkg)}
                    aria-label={`Select ${pkg.name} package`}
                  >
                    <span>Select This Package</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
