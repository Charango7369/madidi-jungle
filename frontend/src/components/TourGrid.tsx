'use client';

import React, { useState } from 'react';
import { Tour, Language, Currency } from '../types';
import { translations } from '../i18n/translations';
import { TOURS_DATA } from '../data/mockData';
import { TourCard } from './TourCard';
import { ItineraryModal } from './ItineraryModal';

interface TourGridProps {
  currentLang: Language;
  currentCurrency: Currency;
  onOpenBooking: (tourCode: string) => void;
}

export const TourGrid: React.FC<TourGridProps> = ({
  currentLang,
  currentCurrency,
  onOpenBooking,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'short' | 'classic' | 'expedition'>('all');
  const [selectedItineraryTour, setSelectedItineraryTour] = useState<Tour | null>(null);

  const t = translations[currentLang].programs;

  const filteredTours = TOURS_DATA.filter((tour) => {
    if (activeFilter === 'short') return tour.days <= 2;
    if (activeFilter === 'classic') return tour.days === 3;
    if (activeFilter === 'expedition') return tour.days >= 4;
    return true;
  });

  return (
    <section id="programas" className="py-20 bg-jungle-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-800/40">
            {t.sectionBadge}
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            {t.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-sand-100/80 leading-relaxed text-balance">
            {t.subtitle}
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-700/30'
                  : 'bg-jungle-900 text-sand-200 hover:bg-jungle-850'
              }`}
            >
              {t.filterAll}
            </button>
            <button
              onClick={() => setActiveFilter('short')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'short'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-700/30'
                  : 'bg-jungle-900 text-sand-200 hover:bg-jungle-850'
              }`}
            >
              {t.filterShort}
            </button>
            <button
              onClick={() => setActiveFilter('classic')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'classic'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-700/30'
                  : 'bg-jungle-900 text-sand-200 hover:bg-jungle-850'
              }`}
            >
              {t.filterClassic}
            </button>
            <button
              onClick={() => setActiveFilter('expedition')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'expedition'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-700/30'
                  : 'bg-jungle-900 text-sand-200 hover:bg-jungle-850'
              }`}
            >
              {t.filterExpedition}
            </button>
          </div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <TourCard
              key={tour.code}
              tour={tour}
              currentLang={currentLang}
              currentCurrency={currentCurrency}
              onOpenBooking={onOpenBooking}
              onOpenItinerary={(t) => setSelectedItineraryTour(t)}
            />
          ))}
        </div>
      </div>

      {/* Itinerary Modal */}
      <ItineraryModal
        tour={selectedItineraryTour}
        isOpen={!!selectedItineraryTour}
        onClose={() => setSelectedItineraryTour(null)}
        currentLang={currentLang}
        currentCurrency={currentCurrency}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
};
