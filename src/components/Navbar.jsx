import { useState, useEffect } from 'react'
import { ArrowUpRight, Menu as MenuIcon, X, Phone, Calendar } from 'lucide-react'
import { announcement, brand, navLinks } from '../data/site'
import { Wordmark } from './Wordmark'

export function Navbar({ activeSection = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      {/* Top Announcement Bar */}
      <aside className="announcement" aria-label="Announcement">
        <div className="announcement-inner section-container">
          <div className="announcement-content">
            <span>{announcement.lead}</span>
            <span className="announcement-spark" aria-hidden="true">&#10039;</span>
            <strong className="announcement-highlight">{announcement.highlight}</strong>
          </div>
          <a href={announcement.ctaHref} className="announcement-cta">
            {announcement.ctaText} <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
        <div className="site-header-inner section-container">
          <Wordmark href="#home" />

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const sectionTarget = link.href.replace('#', '')
              const isActive = activeSection === sectionTarget
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                  {isActive && <span className="active-dot" aria-hidden="true" />}
                </a>
              )
            })}
          </nav>

          {/* Action Button */}
          <div className="header-actions">
            <a href="#contact" className="nav-cta">
              <Calendar size={14} aria-hidden="true" />
              <span>Book Your Date</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="nav-toggle"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`mobile-nav-drawer ${menuOpen ? 'drawer-open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <div className="mobile-nav-backdrop" onClick={() => setMenuOpen(false)} />
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            <div className="mobile-drawer-header">
              <span className="mobile-drawer-title">Navigation</span>
              <button
                type="button"
                className="mobile-close-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            {navLinks.map((link) => {
              const sectionTarget = link.href.replace('#', '')
              const isActive = activeSection === sectionTarget
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`mobile-link ${isActive ? 'mobile-link-active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={16} className="mobile-link-arrow" />
                </a>
              )
            })}
            <div className="mobile-drawer-footer">
              <a
                href="#contact"
                className="button button-dark mobile-book-btn"
                onClick={() => setMenuOpen(false)}
              >
                <span>Reserve Event Date</span>
                <ArrowUpRight size={16} />
              </a>
              <div className="mobile-contact-info">
                <a href={`tel:${brand.phone}`} className="mobile-phone-link">
                  <Phone size={14} />
                  <span>{brand.phone}</span>
                </a>
                <p className="mobile-tagline">{brand.tagline}</p>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
