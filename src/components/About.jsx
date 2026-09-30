import { ArrowUpRight, Leaf, Sparkles, HeartHandshake } from 'lucide-react'
import { foodImages, stats } from '../data/site'
import { Eyebrow } from './Eyebrow'

export function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container about-container">
        {/* Visual Column */}
        <div className="about-visual reveal">
          <div className="about-image-wrapper">
            <img
              src={foodImages.about}
              alt="Chefs in an open artisanal kitchen thoughtfully preparing seasonal ingredients"
              loading="lazy"
              className="about-img"
            />
            <div className="about-frame" aria-hidden="true" />
          </div>

          {/* Tilted note card */}
          <div className="about-note">
            <span className="about-note-spark" aria-hidden="true">&#10039;</span>
            <p>
              The best bit<br />
              <em>is being together.</em>
            </p>
          </div>

          {/* Floating pill badge */}
          <div className="about-badge">
            <Leaf size={14} className="text-green" />
            <span>Local Hudson Valley & NYC</span>
          </div>
        </div>

        {/* Copy Column */}
        <div className="about-copy reveal" style={{ '--reveal-delay': '100ms' }}>
          <Eyebrow>A NOTE FROM OUR TABLE</Eyebrow>
          
          <h2 className="about-title">
            We believe the best ingredient is <em>together.</em>
          </h2>

          <p className="about-intro">
            We are a team of devoted culinary craftsmen and hospitality romantics who believe a really good feast can transform an afternoon into a cherished milestone.
          </p>

          <p className="about-subtext">
            Inspired by the shifting seasons, every dish is cooked from scratch on-site, honoring regenerative agriculture, heritage grains, and sustainable coastal fisheries. We don’t just serve dinner — we set the stage for laughter, clinking glasses, and stories that linger well after midnight.
          </p>

          {/* 3 Pillars */}
          <div className="about-pillars">
            <div className="pillar-item">
              <div className="pillar-icon-box">
                <Leaf size={16} />
              </div>
              <div>
                <h4 className="pillar-title">Regenerative Sourcing</h4>
                <p className="pillar-desc">Direct partnerships with 14 family-run farms for peak seasonal flavors.</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <Sparkles size={16} />
              </div>
              <div>
                <h4 className="pillar-title">Bespoke Curation</h4>
                <p className="pillar-desc">Custom tasting sessions and personalized menus honoring your taste & heritage.</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <HeartHandshake size={16} />
              </div>
              <div>
                <h4 className="pillar-title">White-Glove Hospitality</h4>
                <p className="pillar-desc">From handmade ceramic tableware to effortless cleanup — be a guest at your own feast.</p>
              </div>
            </div>
          </div>

          <div className="about-footer-row">
            <div className="signature">
              <span>With love & a pinch of sea salt,</span>
              <strong>Julian & Clara Vance</strong>
              <small>Executive Culinary Directors</small>
            </div>

            <a href="#services" className="text-link about-link">
              <span>Explore our catering services</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Metric Stats Banner */}
        <div className="about-stats-grid reveal" style={{ '--reveal-delay': '150ms' }}>
          {stats.map((stat, i) => (
            <div className="stat-card" key={i}>
              <span className="stat-value">{stat.value}</span>
              <strong className="stat-label">{stat.label}</strong>
              <p className="stat-detail">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
