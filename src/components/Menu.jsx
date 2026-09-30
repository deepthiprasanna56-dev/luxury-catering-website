import { useState, useMemo, useEffect } from 'react'
import { ArrowRight, Sparkles, Filter, X } from 'lucide-react'
import { dishes, menuCategories } from '../data/site'
import { Eyebrow } from './Eyebrow'

export function Menu({ onSelectDish }) {
  const [activeCategory, setActiveCategory] = useState('All Dishes')
  const [dietaryFilter, setDietaryFilter] = useState('ALL')
  const [selectedDish, setSelectedDish] = useState(null)

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      const matchesCategory =
        activeCategory === 'All Dishes' || dish.type === activeCategory
      const matchesDietary = dietaryFilter === 'ALL'
        || (dietaryFilter === 'V'
          ? dish.dietary?.some((label) => label === 'V' || label === 'VG')
          : dish.dietary?.includes(dietaryFilter))
      return matchesCategory && matchesDietary
    })
  }, [activeCategory, dietaryFilter])

  useEffect(() => {
    if (!selectedDish) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedDish(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedDish])

  return (
    <section className="menu-section" id="menu">
      <div className="section-container">
      <div className="menu-heading reveal">
        <Eyebrow>A FEW THINGS WE LOVE MAKING</Eyebrow>
        <h2 className="menu-title">
          Fresh from <em>our artisans.</em>
        </h2>
        <p className="menu-subtitle">
          Our menus follow the farmers market, the micro-season, and whatever arrives too lovely to leave behind.
          Every dish can be tailored to your guest list.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="menu-tabs-wrapper reveal">
        <div className="menu-tabs" role="tablist" aria-label="Filter menu by course">
          {menuCategories.map((category) => {
            const isActive = activeCategory === category
            return (
              <button
                type="button"
                key={category}
                className={`menu-tab ${isActive ? 'menu-tab-active' : ''}`}
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={isActive}
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Quick Dietary Filter */}
        <div className="dietary-filter-bar">
          <span className="dietary-label">
            <Filter size={12} aria-hidden="true" />
            Dietary:
          </span>
          {[
            { id: 'ALL', label: 'All' },
            { id: 'GF', label: 'Gluten-Free' },
            { id: 'V', label: 'Vegetarian' },
            { id: 'DF', label: 'Dairy-Free' },
          ].map((tag) => (
            <button
              key={tag.id}
              type="button"
              className={`dietary-chip ${dietaryFilter === tag.id ? 'dietary-chip-active' : ''}`}
              onClick={() => setDietaryFilter(tag.id)}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dishes Grid */}
      <div className="dish-grid" key={`${activeCategory}-${dietaryFilter}`}>
        {filteredDishes.length === 0 ? (
          <div className="dish-empty-state">
            <p>No dishes match both filters. Try clearing the dietary filter.</p>
            <button
              type="button"
              className="button button-outline"
              onClick={() => {
                setActiveCategory('All Dishes')
                setDietaryFilter('ALL')
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredDishes.map((dish, index) => (
            <article
              className="dish-card reveal is-visible"
              key={dish.id}
              style={{ '--reveal-delay': `${index * 60}ms` }}
            >
              <div className="dish-image-box">
                <button
                  type="button"
                  className="dish-image-trigger"
                  onClick={() => setSelectedDish(dish)}
                  aria-label={`View details for ${dish.name}`}
                >
                  <img
                    src={dish.image}
                    alt=""
                    loading="lazy"
                    className="dish-img"
                  />
                  <span className="dish-open-hint">View dish <ArrowRight size={14} /></span>
                </button>
                <span className="dish-tag">{dish.tag}</span>
                {dish.dietary && (
                  <div className="dish-dietary-badges" aria-label="Dietary information">
                    {dish.dietary.map((d, dIdx) => (
                      <span key={dIdx} className="dietary-badge">
                        {d}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="dish-details">
                <div className="dish-meta-row">
                  <button
                    type="button"
                    className="dish-name-trigger"
                    onClick={() => setSelectedDish(dish)}
                    aria-label={`View details for ${dish.name}`}
                  >
                    <h3 className="dish-name">{dish.name}</h3>
                  </button>
                  <span className="dish-price">
                    {dish.price}
                    <small> / guest</small>
                  </span>
                </div>
                <p className="dish-desc">{dish.detail}</p>
                <div className="dish-card-footer">
                  <span className="dish-type-pill">{dish.type}</span>
                  <a
                    href="#contact"
                    className="dish-request-link"
                    onClick={() => onSelectDish && onSelectDish(dish.name)}
                  >
                    Request in Tasting <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))
        )}
      </div>

      {selectedDish && (
        <div
          className="dish-detail-backdrop"
          onClick={() => setSelectedDish(null)}
          role="presentation"
        >
          <section
            className="dish-detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dish-detail-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="dish-detail-close"
              onClick={() => setSelectedDish(null)}
              aria-label="Close dish details"
            >
              <X size={20} />
            </button>
            <img className="dish-detail-image" src={selectedDish.image} alt={selectedDish.name} />
            <div className="dish-detail-copy">
              <div className="dish-detail-meta">
                <span>{selectedDish.type}</span>
                <strong>{selectedDish.price}<small> / guest</small></strong>
              </div>
              <p className="dish-detail-tag">{selectedDish.tag}</p>
              <h3 id="dish-detail-title">{selectedDish.name}</h3>
              <p className="dish-detail-description">{selectedDish.detail}</p>
              {selectedDish.dietary?.length > 0 && (
                <div className="dish-detail-dietary" aria-label="Dietary information">
                  {selectedDish.dietary.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              )}
              <a
                href="#contact"
                className="button button-dark dish-detail-action"
                onClick={() => {
                  onSelectDish?.(selectedDish.name)
                  setSelectedDish(null)
                }}
              >
                Request this for my event <ArrowRight size={16} />
              </a>
            </div>
          </section>
        </div>
      )}

      {/* Menu Footnote */}
      <div className="menu-footnote reveal">
        <div className="footnote-box">
          <Sparkles size={16} className="text-coral" />
          <p>
            <strong>These menus are an inspiration, never a limitation.</strong> Have family heritage recipes or a favorite childhood dessert you’d love our chefs to reimagine?{' '}
            <a href="#contact">Tell us your culinary vision &rarr;</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}
