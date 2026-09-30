import { useState, useEffect } from 'react'
import { ArrowUpRight, Camera, Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { galleryItems } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null)

  const categories = ['All', 'Table Styling', 'Plated Art', 'Celebrations', 'Craft Cocktails']

  const filteredItems = selectedFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedFilter)

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return
      if (e.key === 'Escape') setActiveLightboxIndex(null)
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length)
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeLightboxIndex, filteredItems.length])

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeLightboxIndex])

  return (
    <section className="gallery-section" id="gallery">
      <div className="section-container">
      <SectionHeading
        eyebrow="AROUND OUR TABLE"
        title={
          <>
            A little look at <em>the good stuff.</em>
          </>
        }
        aside={
          <a
            className="text-link gallery-social-link"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Camera size={16} aria-hidden="true" />
            <span>Follow our table on Instagram</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        }
      />

      {/* Gallery Filter Chips */}
      <div className="gallery-filter-bar reveal">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`gallery-filter-btn ${selectedFilter === cat ? 'gallery-filter-active' : ''}`}
            onClick={() => setSelectedFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-masonry reveal" style={{ '--reveal-delay': '100ms' }}>
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className={`gallery-card gallery-aspect-${item.aspect}`}
            onClick={() => setActiveLightboxIndex(index)}
            role="button"
            tabIndex={0}
            aria-label={`View photo: ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setActiveLightboxIndex(index)
              }
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="gallery-img"
            />
            <div className="gallery-overlay">
              <span className="gallery-tag">
                <Sparkles size={12} className="text-lime" />
                {item.category}
              </span>
              <h4 className="gallery-item-title">{item.title}</h4>
              <p className="gallery-item-caption">{item.caption}</p>
              <div className="gallery-expand-hint">
                <Maximize2 size={14} />
                <span>Tap to view</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          className="lightbox-backdrop"
          onClick={() => setActiveLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Preview"
        >
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setActiveLightboxIndex(null)}
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              className="lightbox-nav-btn lightbox-prev-btn"
              onClick={() =>
                setActiveLightboxIndex(
                  (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
                )
              }
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="lightbox-content">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                className="lightbox-image"
              />
              <div className="lightbox-info">
                <div className="lightbox-meta">
                  <span className="lightbox-category">
                    {filteredItems[activeLightboxIndex].category}
                  </span>
                  <span className="lightbox-counter">
                    {activeLightboxIndex + 1} / {filteredItems.length}
                  </span>
                </div>
                <h3 className="lightbox-title">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
                <p className="lightbox-desc">
                  {filteredItems[activeLightboxIndex].caption}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="lightbox-nav-btn lightbox-next-btn"
              onClick={() =>
                setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length)
              }
              aria-label="Next photo"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
