import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/site'
import { useTestimonialCarousel } from '../hooks/useTestimonialCarousel'
import { Eyebrow } from './Eyebrow'

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false)
  const { index, goTo, next, prev } = useTestimonialCarousel(testimonials.length, isPaused)

  const current = testimonials[index]

  return (
    <section
      className="testimonial-section"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Customer Testimonials"
    >
      {/* Decorative Quote Mark */}
      <div className="testimonial-mark" aria-hidden="true">
        &ldquo;
      </div>

      <div className="testimonial-container reveal">
        <div className="testimonial-eyebrow-wrap">
          <Eyebrow>KIND WORDS & MEMORIES</Eyebrow>
        </div>

        {/* Carousel Slide Area */}
        <div className="testimonial-card" key={current.id}>
          {/* Star Rating */}
          <div className="stars" aria-label={`${current.rating} out of 5 stars`}>
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>

          <blockquote className="testimonial-quote">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          <div className="quote-byline">
            <span className="quote-avatar" aria-hidden="true">
              {current.initial}
            </span>
            <div className="quote-author-info">
              <strong className="quote-name">{current.name}</strong>
              <span className="quote-detail">{current.detail}</span>
              <span className="quote-location">{current.location}</span>
            </div>
            <span className="quote-tag">{current.tag}</span>
          </div>
        </div>

        {/* Controls Bar: Navigation Arrows & Indicator Dots */}
        <div className="testimonial-controls">
          <button
            type="button"
            className="testimonial-nav-btn prev-btn"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="testimonial-dots" role="tablist" aria-label="Select slide">
            {testimonials.map((item, dotIdx) => (
              <button
                key={item.id}
                type="button"
                className={`testimonial-dot ${index === dotIdx ? 'dot-active' : ''}`}
                onClick={() => goTo(dotIdx)}
                role="tab"
                aria-selected={index === dotIdx}
                aria-label={`Go to slide ${dotIdx + 1} by ${item.name}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="testimonial-nav-btn next-btn"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dynamic Counter */}
        <div className="testimonial-counter" aria-live="polite">
          <span className="counter-current">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="counter-divider">/</span>
          <span className="counter-total">
            {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}
