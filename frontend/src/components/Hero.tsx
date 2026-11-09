'use client';

import React from 'react';
import { ShieldCheck, Award, Users, ArrowRight, MessageSquareQuote } from 'lucide-react';
import { Language, Currency } from '../types';
import { translations } from '../i18n/translations';
import { QuickSearch } from './QuickSearch';

interface HeroProps {
  currentLang: Language;
  currentCurrency: Currency;
  onOpenBooking: (tourCode?: string) => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  currentCurrency,
  onOpenBooking,
  onOpenWhatsApp,
}) => {
  const t = translations[currentLang].hero;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-jungle-950">
      {/* Background Media with Dark Gradient Overlay for Maximum WCAG Text Contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.madidijungle.com/images/slideshow1.jpg"
          alt="Beni and Tuichi river canyon in Madidi National Park Bolivia - Madidi Jungle Ecolodge"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center filter brightness-[0.42] scale-105 transform animate-fade-in"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jungle-950 via-jungle-950/60 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        {/* Top Community Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md mb-6 animate-pulse-subtle">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{t.badge}</span>
        </div>

        {/* Main Semantic H1 Title: Brand + Targeted Intent */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl text-balance">
          <span className="sr-only">Madidi Jungle Ecolodge — </span>
          {t.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg lg:text-xl text-sand-100/90 max-w-2xl font-normal leading-relaxed text-balance">
          {t.subtitle}
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#programas"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-clay-500 hover:bg-clay-600 active:bg-clay-700 text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-clay-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-clay-400"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenWhatsApp}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-semibold text-sm sm:text-base border border-white/25 backdrop-blur-md transition-all flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <MessageSquareQuote className="w-5 h-5 text-emerald-400" />
            <span>{t.ctaSecondary}</span>
          </button>
        </div>

        {/* Quick Search Bar Component Overlay */}
        <div className="mt-12 w-full max-w-4xl">
          <QuickSearch
            currentLang={currentLang}
            currentCurrency={currentCurrency}
            onOpenBooking={onOpenBooking}
          />
        </div>

        {/* High Credibility Stats & Social Proof */}
        <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-12 pt-8 border-t border-white/15 w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {t.stat1Value}
            </span>
            <span className="text-xs sm:text-sm text-sand-200/80 mt-1 font-medium">
              {t.stat1Label}
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-white/10">
            <span className="text-2xl sm:text-3xl font-extrabold text-sand-500 font-display flex items-center space-x-1">
              <span>5.0</span>
              <span className="text-yellow-400 text-xl">★★★★★</span>
            </span>
            <span className="text-xs sm:text-sm text-sand-200/80 mt-1 font-medium">
              TripAdvisor Traveler Choice
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">
              {t.stat3Value}
            </span>
            <span className="text-xs sm:text-sm text-sand-200/80 mt-1 font-medium">
              {t.stat3Label}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
