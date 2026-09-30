import { useState } from 'react'
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react'
import { faqs } from '../data/site'
import { Eyebrow } from './Eyebrow'

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="section-container faq-layout">
        <div className="faq-sidebar reveal">
          <Eyebrow>COMMON INQUIRIES</Eyebrow>
          <h2 className="faq-title">
            Everything you need to know about <em>gathering with us.</em>
          </h2>
          <p className="faq-desc">
            Have questions about calendar holds, dietary accommodations, tableware styling, or menu customization? Here are our most frequent answers.
          </p>
          <div className="faq-sidebar-box">
            <HelpCircle size={20} className="text-coral" />
            <div>
              <strong>Have a custom question?</strong>
              <p>Our event producers are happy to chat through your unique vision.</p>
              <a href="#contact" className="faq-sidebar-link">
                Speak with our team <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="faq-accordion reveal" style={{ '--reveal-delay': '100ms' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`faq-icon ${isOpen ? 'faq-icon-rotated' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer-panel">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
