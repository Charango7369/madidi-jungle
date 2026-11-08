'use client';

import React, { useState } from 'react';
import { Calendar, Users, MapPin, Search } from 'lucide-react';
import { Language, Currency } from '../types';
import { translations } from '../i18n/translations';
import { TOURS_DATA } from '../data/mockData';

interface QuickSearchProps {
  currentLang: Language;
  currentCurrency: Currency;
  onOpenBooking: (tourCode?: string) => void;
}

export const QuickSearch: React.FC<QuickSearchProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const [selectedTour, setSelectedTour] = useState<string>('P3');
  const [travelDate, setTravelDate] = useState<string>('');
  const [travelers, setTravelers] = useState<number>(2);

  const t = translations[currentLang].quickSearch;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(selectedTour);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-jungle-900/90 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md text-left text-white"
      aria-label="Trip planning search"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-end">
        {/* Tour Selection */}
        <div>
          <label htmlFor="quick-tour" className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.tourLabel}</span>
          </label>
          <select
            id="quick-tour"
            value={selectedTour}
            onChange={(e) => setSelectedTour(e.target.value)}
            className="w-full bg-jungle-950/80 border border-jungle-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 font-medium cursor-pointer"
          >
            {TOURS_DATA.map((tour) => (
              <option key={tour.code} value={tour.code} className="bg-jungle-950 text-white">
                {tour.name} ({tour.days}D/{tour.nights}N) - From ${tour.price_shared_usd}
              </option>
            ))}
          </select>
        </div>

        {/* Date Selector */}
        <div>
          <label htmlFor="quick-date" className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.datesLabel}</span>
          </label>
          <input
            id="quick-date"
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full bg-jungle-950/80 border border-jungle-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 font-medium"
          />
        </div>

        {/* Guests Selector */}
        <div>
          <label htmlFor="quick-pax" className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.travelersLabel}</span>
          </label>
          <select
            id="quick-pax"
            value={travelers}
            onChange={(e) => setTravelers(Number(e.target.value))}
            className="w-full bg-jungle-950/80 border border-jungle-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 font-medium cursor-pointer"
          >
            <option value={1} className="bg-jungle-950">1 Traveler (Solo)</option>
            <option value={2} className="bg-jungle-950">2 Travelers (Couple/Friends)</option>
            <option value={3} className="bg-jungle-950">3 Travelers (Small Group)</option>
            <option value={4} className="bg-jungle-950">4 Travelers (Family)</option>
            <option value={5} className="bg-jungle-950">5+ Travelers (Private Boat)</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-lg bg-clay-500 hover:bg-clay-600 active:bg-clay-700 text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-clay-400"
          >
            <Search className="w-4 h-4" />
            <span>{t.checkQuote}</span>
          </button>
        </div>
      </div>
    </form>
  );
};
