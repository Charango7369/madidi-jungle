'use client';

import React, { useState } from 'react';
import { Language, Currency } from '../types';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TourGrid } from '../components/TourGrid';
import { PricingComparisonTable } from '../components/PricingComparisonTable';
import { MadidiMapViewer } from '../components/MadidiMapViewer';
import { AccommodationsSection } from '../components/AccommodationsSection';
import { CommunityConservation } from '../components/CommunityConservation';
import { ReviewsSection } from '../components/ReviewsSection';
import { FAQAccordion } from '../components/FAQAccordion';
import { Footer } from '../components/Footer';
import { WhatsAppFloatingWidget } from '../components/WhatsAppFloatingWidget';
import { InteractiveBookingWizard } from '../components/InteractiveBookingWizard';
import { LeadMagnetModal } from '../components/LeadMagnetModal';

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('USD');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTourCode, setSelectedTourCode] = useState<string>('P3');
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const handleOpenBooking = (tourCode?: string) => {
    if (tourCode) {
      setSelectedTourCode(tourCode);
    }
    setIsBookingOpen(true);
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent('Hola Madidi Jungle Ecolodge, quisiera consultar disponibilidad y tours en el Parque Madidi.');
    window.open(`https://wa.me/59172288339?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Navigation Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenBooking={handleOpenBooking}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Main Content Landmark for WCAG 2.2 */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          currentCurrency={currentCurrency}
          onOpenBooking={handleOpenBooking}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Programs & Tours Grid with Itinerary Explorer */}
        <TourGrid
          currentLang={currentLang}
          currentCurrency={currentCurrency}
          onOpenBooking={handleOpenBooking}
        />

        {/* Pricing Comparison Table & Calculator */}
        <PricingComparisonTable
          currentLang={currentLang}
          currentCurrency={currentCurrency}
          onOpenBooking={handleOpenBooking}
        />

        {/* Interactive Madidi Route & Logistical Map */}
        <MadidiMapViewer
          currentLang={currentLang}
        />

        {/* Jatata Eco-Cabins Showcase */}
        <AccommodationsSection
          currentLang={currentLang}
          currentCurrency={currentCurrency}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Indigenous Heritage & Conservation Narrative */}
        <CommunityConservation
          currentLang={currentLang}
        />

        {/* TripAdvisor Verified Guest Reviews */}
        <ReviewsSection
          currentLang={currentLang}
        />

        {/* Frequently Asked Questions */}
        <FAQAccordion
          currentLang={currentLang}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
        onOpenLeadModal={() => setIsLeadModalOpen(true)}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Persistent WhatsApp Floating Concierge Widget */}
      <WhatsAppFloatingWidget
        currentLang={currentLang}
      />

      {/* Interactive 3-Step Booking Wizard */}
      <InteractiveBookingWizard
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedTourCode={selectedTourCode}
        currentLang={currentLang}
        currentCurrency={currentCurrency}
      />

      {/* Free Field Guide Download Lead Magnet */}
      <LeadMagnetModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        currentLang={currentLang}
      />
    </>
  );
}
