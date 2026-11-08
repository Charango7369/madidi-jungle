'use client';

import React from 'react';
import { Clock, PawPrint, CheckCircle2, ChevronRight, Calculator } from 'lucide-react';
import { Tour, Language, Currency } from '../types';
import { translations } from '../i18n/translations';

interface TourCardProps {
  tour: Tour;
  currentLang: Language;
  currentCurrency: Currency;
  onOpenBooking: (tourCode: string) => void;
  onOpenItinerary: (tour: Tour) => void;
}

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  currentLang,
  currentCurrency,
  onOpenBooking,
  onOpenItinerary,
}) => {
  const t = translations[currentLang].programs;

  const convertPrice = (usd: number): string => {
    if (currentCurrency === 'EUR') return `€${Math.round(usd * 0.92)}`;
    if (currentCurrency === 'BOB') return `Bs.${Math.round(usd * 6.96)}`;
    return `$${usd}`;
  };

  const getDifficultyLabel = (diff: Tour['difficulty']) => {
    switch (diff) {
      case 'easy': return t.difficultyEasy;
      case 'moderate': return t.difficultyModerate;
      case 'challenging': return t.difficultyChallenging;
      case 'expedition': return t.difficultyExpedition;
    }
  };

  const difficultyColors = {
    easy: 'bg-emerald-900/60 text-emerald-300 border-emerald-500/30',
    moderate: 'bg-teal-900/60 text-teal-300 border-teal-500/30',
    challenging: 'bg-amber-900/60 text-amber-300 border-amber-500/30',
    expedition: 'bg-clay-900/60 text-clay-300 border-clay-500/30',
  };

  return (
    <article className="group bg-jungle-900/70 rounded-2xl overflow-hidden border border-jungle-800/80 hover:border-emerald-500/50 shadow-xl hover:shadow-2xl hover:shadow-emerald-950/40 transition-all duration-300 flex flex-col justify-between">
      {/* Tour Image Header with Badges */}
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={tour.hero_image}
          alt={tour.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jungle-950 via-jungle-950/30 to-transparent" />

        {/* Featured Ribbon */}
        {tour.is_featured && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-clay-500 text-white text-xs font-bold uppercase tracking-wider shadow-md">
            ★ Most Popular
          </div>
        )}

        {/* Duration Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold flex items-center space-x-1.5 border border-white/20">
          <Clock className="w-3.5 h-3.5 text-emerald-400" />
          <span>
            {tour.days} {t.days} / {tour.nights} {t.nights}
          </span>
        </div>

        {/* Difficulty Pill at bottom of image */}
        <div className="absolute bottom-3 left-3">
          <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${difficultyColors[tour.difficulty]}`}>
            {getDifficultyLabel(tour.difficulty)}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">
            Program {tour.code}
          </div>
          <h3 className="font-display text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
            {tour.name}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-sand-100/80 line-clamp-2 leading-relaxed">
            {tour.tagline}
          </p>

          {/* Wildlife Highlights */}
          <div className="mt-3 pt-3 border-t border-jungle-800/60">
            <div className="text-[11px] font-semibold text-sand-500 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
              <PawPrint className="w-3.5 h-3.5 text-sand-500" />
              <span>Target Wildlife</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tour.highlight_wildlife.map((animal, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-800/50 text-[11px] text-emerald-200"
                >
                  {animal}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing and Action CTAs */}
        <div className="pt-4 border-t border-jungle-800">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-xs text-sand-200/70 mr-1.5">{t.from}</span>
              <span className="text-2xl font-extrabold text-white font-display">
                {convertPrice(tour.price_shared_usd)}
              </span>
              <span className="text-xs text-sand-200/70 ml-1">{t.perPerson}</span>
            </div>
            <span className="text-[11px] text-emerald-400/90 font-medium">
              Private Bath: {convertPrice(tour.price_private_usd)}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onOpenItinerary(tour)}
              className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-sand-100 text-xs font-semibold border border-white/15 transition-colors flex items-center justify-center space-x-1 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <span>{t.exploreItinerary}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => onOpenBooking(tour.code)}
              className="py-2.5 px-3 rounded-xl bg-clay-500 hover:bg-clay-600 active:bg-clay-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-clay-500/20 flex items-center justify-center space-x-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-clay-400"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>{t.quickQuote}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
