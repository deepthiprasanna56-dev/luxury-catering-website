import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
} from 'lucide-react'
import { brand, occasionOptions, guestOptions, packages } from '../data/site'
import { Eyebrow } from './Eyebrow'

export function BookingForm({ initialOccasion = '', initialPackage = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    occasion: initialOccasion || '',
    guests: '',
    packageChoice: initialPackage || '',
    dietary: '',
    notes: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate luxury booking processing animation
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 700)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      occasion: '',
      guests: '',
      packageChoice: '',
      dietary: '',
      notes: '',
    })
  }

  // Calculate today's date formatted for min date attribute
  const todayStr = new Date().toISOString().split('T')[0]

  return (
    <section className="contact-section" id="contact">
      <div className="section-container contact-layout">
      {/* Left Column: Contact Copy & Details */}
      <div className="contact-copy reveal">
        <Eyebrow>YOUR TABLE IS WAITING</Eyebrow>

        <h2 className="contact-title">
          Tell us what you're <em>dreaming up.</em>
        </h2>

        <p className="contact-desc">
          Share a few initial details with us. Our culinary producers will prepare a bespoke seasonal menu proposal tailored to your venue, guest list, and celebration style.
        </p>

        {/* Contact Info Badges */}
        <div className="contact-info-list">
          <div className="contact-info-item">
            <div className="contact-icon-bubble">
              <Phone size={16} />
            </div>
            <div>
              <span className="contact-label">Speak With Our Concierge</span>
              <a href={`tel:${brand.phone}`} className="contact-value">
                {brand.phone}
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon-bubble">
              <Mail size={16} />
            </div>
            <div>
              <span className="contact-label">Direct Correspondence</span>
              <a href={`mailto:${brand.email}`} className="contact-value">
                {brand.email}
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon-bubble">
              <MapPin size={16} />
            </div>
            <div>
              <span className="contact-label">Kitchen Studio & Tastings</span>
              <p className="contact-value-text">{brand.address}</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon-bubble">
              <Clock size={16} />
            </div>
            <div>
              <span className="contact-label">Studio Hours</span>
              <p className="contact-value-text">{brand.hours}</p>
            </div>
          </div>
        </div>

        <div className="contact-instagram-card">
          <Sparkles size={16} className="text-coral" />
          <span>
            Follow our daily kitchen prep & tablescapes:{' '}
            <a href={brand.instagram} target="_blank" rel="noreferrer">
              @gatherandgrain
            </a>
          </span>
        </div>
      </div>

      {/* Right Column: Interactive Form or Success State */}
      <div className="contact-form-wrap reveal" style={{ '--reveal-delay': '120ms' }}>
        {isSubmitted ? (
          <div className="booking-success-card" role="status" aria-live="polite">
            <div className="success-icon-badge">
              <CheckCircle2 size={44} />
            </div>
            <h3 className="success-title">Lovely! Your inquiry is received.</h3>
            <p className="success-message">
              Thank you, <strong>{formData.name || 'friend'}</strong>. Our executive chef and events director are reviewing your details for{' '}
              <strong>{formData.occasion || 'your gathering'}</strong>.
            </p>

            <div className="success-summary-box">
              <div className="summary-item">
                <span>Occasion:</span>
                <strong>{formData.occasion || 'Custom Celebration'}</strong>
              </div>
              {formData.date && (
                <div className="summary-item">
                  <span>Target Date:</span>
                  <strong>{formData.date}</strong>
                </div>
              )}
              {formData.guests && (
                <div className="summary-item">
                  <span>Estimated Party:</span>
                  <strong>{formData.guests}</strong>
                </div>
              )}
              {formData.packageChoice && (
                <div className="summary-item">
                  <span>Selected Package:</span>
                  <strong>{formData.packageChoice}</strong>
                </div>
              )}
            </div>

            <p className="success-note">
              We will contact you at <em>{formData.email}</em> within 24 business hours with custom menu sketches and calendar availability.
            </p>

            <button
              type="button"
              className="button button-outline success-reset-btn"
              onClick={handleReset}
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-header-bar">
              <h3 className="form-heading">Event Details & Inquiry</h3>
              <span className="form-required-hint">* Required fields</span>
            </div>

            {/* Row 1: Name & Email */}
            <div className="form-row">
              <label className="form-field">
                <span className="field-label">
                  Your Full Name <span className="req">*</span>
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Clara Harrington"
                  autoComplete="name"
                  required
                  className="form-input"
                />
              </label>

              <label className="form-field">
                <span className="field-label">
                  Email Address <span className="req">*</span>
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="clara@example.com"
                  autoComplete="email"
                  required
                  className="form-input"
                />
              </label>
            </div>

            {/* Row 2: Phone & Target Date */}
            <div className="form-row">
              <label className="form-field">
                <span className="field-label">Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  autoComplete="tel"
                  className="form-input"
                />
              </label>

              <label className="form-field">
                <span className="field-label">Event Date (or approximate)</span>
                <div className="input-with-icon">
                  <input
                    type="date"
                    name="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <Calendar size={16} className="field-inner-icon" aria-hidden="true" />
                </div>
              </label>
            </div>

            {/* Row 3: Occasion & Guests */}
            <div className="form-row">
              <label className="form-field">
                <span className="field-label">
                  What are we celebrating? <span className="req">*</span>
                </span>
                <div className="select-wrap">
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="" disabled>
                      Choose the occasion
                    </option>
                    {occasionOptions.map((occ) => (
                      <option key={occ} value={occ}>
                        {occ}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="select-arrow" aria-hidden="true" />
                </div>
              </label>

              <label className="form-field">
                <span className="field-label">Estimated Guest Count</span>
                <div className="select-wrap">
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="" disabled>
                      Approximate party size
                    </option>
                    {guestOptions.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="select-arrow" aria-hidden="true" />
                </div>
              </label>
            </div>

            {/* Row 4: Package Preference (optional) */}
            <div className="form-row form-row-single">
              <label className="form-field">
                <span className="field-label">Preferred Package (optional)</span>
                <div className="select-wrap">
                  <select
                    name="packageChoice"
                    value={formData.packageChoice}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Let our chefs suggest a custom proposal</option>
                    {packages.map((pkg) => (
                      <option key={pkg.id} value={pkg.name}>
                        {pkg.name} ({pkg.price} / guest)
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="select-arrow" aria-hidden="true" />
                </div>
              </label>
            </div>

            {/* Row 5: Notes & Dietary details */}
            <label className="form-field">
              <span className="field-label">
                Tell us about your venue, dietary considerations, or special wishes
              </span>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                placeholder="e.g. Backyard garden tent in Rhinebeck, gluten-free bride, late-night oyster shucking..."
                className="form-textarea"
              />
            </label>

            {/* Submit Bar */}
            <div className="form-submit-row">
              <button
                type="submit"
                className="button button-dark form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Preparing your proposal...</span>
                ) : (
                  <>
                    <span>Send Catering Inquiry</span>
                    <ArrowRight size={17} />
                  </>
                )}
              </button>

              <div className="form-guarantee">
                <Sparkles size={14} className="text-coral" />
                <span>No pressure, no automated bots. Direct human hospitality.</span>
              </div>
            </div>
          </form>
        )}
      </div>
      </div>
    </section>
  )
}
