import { useState, useCallback } from 'react'
import { sectionIds } from './data/site'
import { useActiveSection } from './hooks/useActiveSection'
import { useScrollReveal } from './hooks/useScrollReveal'

// Component Sections
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MarqueeTicker } from './components/MarqueeTicker'
import { About } from './components/About'
import { Services } from './components/Services'
import { Menu } from './components/Menu'
import { Packages } from './components/Packages'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { BookingForm } from './components/BookingForm'
import { Footer } from './components/Footer'

import './App.css'

export default function App() {
  const [selectedOccasion, setSelectedOccasion] = useState('')
  const [selectedPackage, setSelectedPackage] = useState('')

  // Active navigation tracker
  const activeSection = useActiveSection(sectionIds)

  // Scroll reveal observer
  useScrollReveal()

  // Handlers for cross-component interactions
  const handleSelectService = useCallback((serviceName) => {
    setSelectedOccasion(serviceName)
  }, [])

  const handleSelectPackage = useCallback((packageName) => {
    setSelectedPackage(packageName)
  }, [])

  const handleSelectDish = useCallback((dishName) => {
    setSelectedOccasion(`Tasting Menu Inquiry (including ${dishName})`)
  }, [])

  return (
    <div className="site-shell min-h-screen">
      <Navbar activeSection={activeSection} />

      <main id="main-content">
        <Hero />
        <MarqueeTicker />
        <About />
        <Services onSelectService={handleSelectService} />
        <Menu onSelectDish={handleSelectDish} />
        <Packages onSelectPackage={handleSelectPackage} />
        <Gallery />
        <Testimonials />
        <Faq />
        <BookingForm
          key={`${selectedOccasion}-${selectedPackage}`}
          initialOccasion={selectedOccasion}
          initialPackage={selectedPackage}
        />
      </main>

      <Footer />
    </div>
  )
}
