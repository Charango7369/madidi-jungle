'use client';

import React from 'react';
import { X, Check, Clock, Utensils, Mountain, ArrowRight } from 'lucide-react';
import { Tour, Language, Currency } from '../types';
import { translations } from '../i18n/translations';

interface ItineraryModalProps {
  tour: Tour | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  currentCurrency: Currency;
  onOpenBooking: (tourCode: string) => void;
}

export const ItineraryModal: React.FC<ItineraryModalProps> = ({
  tour,
  isOpen,
  onClose,
  currentLang,
  currentCurrency,
  onOpenBooking,
}) => {
  if (!isOpen || !tour) return null;

  const t = translations[currentLang].programs;

  const convertPrice = (usd: number): string => {
    if (currentCurrency === 'EUR') return `€${Math.round(usd * 0.92)}`;
    if (currentCurrency === 'BOB') return `Bs.${Math.round(usd * 6.96)}`;
    return `$${usd}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-tour-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
    >
      <div className="relative bg-jungle-950 border border-jungle-700 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden shrink-0">
          <img
            src={tour.hero_image}
            alt={tour.name}
            className="w-full h-full object-cover filter brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-jungle-950 via-jungle-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-600/80 text-white text-xs font-bold uppercase tracking-wider">
                {tour.code} • {tour.days} {t.days} / {tour.nights} {t.nights}
              </span>
              <h2 id="modal-tour-title" className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {tour.name}
              </h2>
            </div>
            <div className="hidden sm:block text-right">
              <span className="text-xs text-sand-200">{t.from}</span>
              <div className="text-2xl font-bold text-white font-display">
                {convertPrice(tour.price_shared_usd)}
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Itinerary Body */}
        <div className="overflow-y-auto p-6 space-y-6 text-sand-100 flex-1">
          {/* Day by Day Breakdown */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 flex items-center space-x-2">
              <Mountain className="w-4 h-4" />
              <span>Day-by-Day Detailed Itinerary</span>
            </h3>
            <div className="space-y-4">
              {tour.itinerary.map((day) => (
                <div
                  key={day.day_number}
                  className="bg-jungle-900/60 border border-jungle-800 rounded-xl p-4 sm:p-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-2 mb-2 border-b border-jungle-800">
                    <span className="font-display font-bold text-base text-white">
                      Day {day.day_number}: {day.title}
                    </span>
                    <span className="inline-flex items-center space-x-1.5 text-xs text-sand-500 font-medium">
                      <Utensils className="w-3.5 h-3.5" />
                      <span>Meals: {day.meals}</span>
                    </span>
                  </div>
                  <p className="text-sm text-sand-100/90 leading-relaxed">
                    {day.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {day.activities.map((act, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded bg-black/40 text-emerald-300 border border-emerald-900/50">
                        ✓ {act}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Included / Excluded Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-jungle-800">
            <div className="bg-emerald-950/30 border border-emerald-800/40 rounded-xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2 flex items-center space-x-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Included in Rate</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-sand-100/80">
                {tour.included_items.map((inc, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-clay-950/20 border border-clay-800/40 rounded-xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-clay-300 mb-2 flex items-center space-x-1.5">
                <X className="w-4 h-4 text-clay-400" />
                <span>Not Included</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-sand-100/80">
                {tour.excluded_items.map((exc, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-clay-400 font-bold">•</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-jungle-950 border-t border-jungle-800 flex items-center justify-between">
          <div>
            <div className="text-xs text-sand-200">Shared: <span className="font-bold text-white">{convertPrice(tour.price_shared_usd)}</span></div>
            <div className="text-xs text-sand-200">Private: <span className="font-bold text-emerald-400">{convertPrice(tour.price_private_usd)}</span></div>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenBooking(tour.code);
            }}
            className="px-6 py-3 rounded-xl bg-clay-500 hover:bg-clay-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-clay-400"
          >
            <span>Book This Program</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
