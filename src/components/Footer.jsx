import { useState } from 'react'
import { ArrowUp, ArrowUpRight, Check, Heart } from 'lucide-react'
import { brand, navLinks, services } from '../data/site'
import { Wordmark } from './Wordmark'
import { SocialIcon } from './BrandIcons'

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (newsletterEmail) {
      setNewsletterSubscribed(true)
      setNewsletterEmail('')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="footer-top-grid section-container">
        {/* Brand Info Column */}
        <div className="footer-brand-col">
          <Wordmark href="#home" className="wordmark footer-wordmark" />
          <p className="footer-mission">
            Good food is infinitely better when there’s room for one more. We craft soulful, seasonal feasts for gathered tables across New York, the Hudson Valley, and destinations worldwide.
          </p>

          <div className="footer-social-row" aria-label="Social media channels">
            {[
              { id: 'instagram', label: 'Instagram', href: brand.instagram },
              { id: 'pinterest', label: 'Pinterest', href: brand.pinterest },
              { id: 'facebook', label: 'Facebook', href: brand.facebook },
              { id: 'linkedin', label: 'LinkedIn', href: brand.linkedin },
            ].map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label={social.label}
              >
                <SocialIcon name={social.id} size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-link-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="footer-link">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="footer-link footer-link-highlight">
                Reserve Event Date <ArrowUpRight size={12} />
              </a>
            </li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Offerings</h4>
          <ul className="footer-link-list">
            {services.map((srv) => (
              <li key={srv.id}>
                <a href="#services" className="footer-link">
                  {srv.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#packages" className="footer-link">
                Curated Packages
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Seasonal Notes Column */}
        <div className="footer-newsletter-col">
          <h4 className="footer-col-title">Seasonal Table Notes</h4>
          <p className="footer-newsletter-desc">
            Receive private seasonal menu releases, wine pairing suggestions, and intimate event inspiration twice a month.
          </p>

          {newsletterSubscribed ? (
            <div className="newsletter-success" role="status">
              <Check size={16} className="text-green" />
              <span>You're on the list! Welcome to our table.</span>
            </div>
          ) : (
            <form className="footer-newsletter-form" onSubmit={handleNewsletter}>
              <div className="newsletter-input-wrap">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="newsletter-input"
                  aria-label="Email address for seasonal notes"
                />
                <button
                  type="submit"
                  className="newsletter-submit-btn"
                  aria-label="Subscribe to notes"
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>
              <span className="newsletter-subhint">
                No spam, ever. Only delicious notes.
              </span>
            </form>
          )}
        </div>
      </div>

      {/* Sub-footer Row */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner section-container">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {brand.name} Catering LLC. All rights reserved.
          </p>

          <div className="footer-crafted-by">
            <span>Locally rooted. Lovingly made with</span>
            <Heart size={12} className="footer-heart-icon" fill="currentColor" />
            <span>in Hudson Valley & NYC</span>
          </div>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
