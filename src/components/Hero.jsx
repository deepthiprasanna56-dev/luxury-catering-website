import { ArrowRight, ArrowDownRight, Star, Sparkles, Utensils } from 'lucide-react'
import { foodImages } from '../data/site'
import { Eyebrow } from './Eyebrow'

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container section-container">
        <div className="hero-copy reveal">
          <Eyebrow>ARTISANAL FARM-TO-TABLE CATERING</Eyebrow>

          <h1 className="hero-title">
            Pull up a chair.<br />
            Stay <em>a little longer.</em>
          </h1>

          <p className="hero-desc">
            Thoughtful food, easy company, and the kind of table everyone wants to gather around.
            From intimate candlelit suppers to 400-guest wedding banquets, we craft feasts that become memories.
          </p>

          <div className="hero-actions">
            <a className="button button-dark hero-btn-primary" href="#contact">
              <span>Plan Your Gathering</span>
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="button button-outline hero-btn-secondary" href="#menu">
              <span>Explore Seasonal Menus</span>
              <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </div>

          {/* Social Proof & Trust Metric */}
          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span className="avatar-pill">J</span>
              <span className="avatar-pill">M</span>
              <span className="avatar-pill">L</span>
              <span className="avatar-pill">A</span>
            </div>
            <div className="proof-text">
              <div className="proof-stars" aria-label="5 out of 5 stars">
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <span className="proof-rating">5.0</span>
              </div>
              <p className="proof-detail">
                <strong>650+ Unforgettable Events</strong> across New York & Destinations
              </p>
            </div>
          </div>

          {/* Decorative background element */}
          <div className="hero-flower" aria-hidden="true">
            &#10039;
          </div>
        </div>

        <div className="hero-visual reveal" style={{ '--reveal-delay': '120ms' }}>
          <div className="hero-image-wrap">
            <img
              src={foodImages.hero}
              alt="Candlelit long wedding banquet table with artisanal food platters, wine glasses, and fresh botanical flowers"
              className="hero-main-img"
              fetchPriority="high"
            />
            <div className="hero-image-frame" aria-hidden="true" />
          </div>

          {/* Rotating Circular Brand Stamp */}
          <div className="photo-stamp" aria-label="100% Seasonal and Farm to Table">
            <svg className="stamp-svg" viewBox="0 0 100 100">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="stamp-text">
                <textPath href="#circlePath" startOffset="0%">
                  ✦ GOOD FOOD ✦ GOOD COMPANY ✦ CRAFTED WITH LOVE
                </textPath>
              </text>
            </svg>
            <div className="stamp-center" aria-hidden="true">&#10039;</div>
          </div>

          {/* Floating Feature Tags */}
          <div className="hero-feature-card hero-feature-top">
            <div className="feature-icon-badge">
              <Utensils size={14} />
            </div>
            <div>
              <strong>100% Scratch Kitchen</strong>
              <span>Local Regenerative Farms</span>
            </div>
          </div>

          <div className="hero-feature-card hero-feature-bottom">
            <div className="feature-icon-badge badge-coral">
              <Sparkles size={14} />
            </div>
            <div>
              <strong>Tailored Menus</strong>
              <span>Designed Around Your Story</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
