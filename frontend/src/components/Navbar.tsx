'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Phone, Globe, ChevronDown, Check } from 'lucide-react';
import { Language, Currency } from '../types';
import { translations } from '../i18n/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currentCurrency: Currency;
  onCurrencyChange: (curr: Currency) => void;
  onOpenBooking: (tourCode?: string) => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  currentCurrency,
  onCurrencyChange,
  onOpenBooking,
  onOpenWhatsApp,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currDropdownOpen, setCurrDropdownOpen] = useState(false);

  const t = translations[currentLang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇧🇴' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  ];

  const currencies: { code: Currency; symbol: string; label: string }[] = [
    { code: 'USD', symbol: '$', label: 'USD ($)' },
    { code: 'EUR', symbol: '€', label: 'EUR (€)' },
    { code: 'BOB', symbol: 'Bs', label: 'BOB (Bs.)' },
  ];

  return (
    <>
      {/* Skip to main content link for WCAG 2.2 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-clay-500 text-white font-medium rounded-md shadow-lg outline-none focus:ring-2 focus:ring-offset-2 focus:ring-clay-400"
      >
        Skip to main content / Saltar al contenido
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-jungle-950/95 backdrop-blur-md shadow-xl py-3 border-b border-jungle-800/50'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Identity (Accessible Root Link) */}
            <a href="/" className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg p-1" aria-label="Madidi Jungle Ecolodge - Home">
              <div className="w-10 h-10 rounded-full bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6 animate-pulse-subtle" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-wider text-white uppercase group-hover:text-emerald-400 transition-colors">
                  Madidi Jungle
                </span>
                <span className="text-[10px] tracking-widest text-emerald-300/80 font-medium uppercase">
                  Ecolodge • Bolivia
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              <a
                href="#programas"
                className="text-sm font-medium text-sand-100 hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded px-1"
              >
                {t.programs}
              </a>
              <a
                href="#precios"
                className="text-sm font-medium text-sand-100 hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded px-1"
              >
                {t.pricing}
              </a>
              <a
                href="#alojamiento"
                className="text-sm font-medium text-sand-100 hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded px-1"
              >
                {t.accommodations}
              </a>
              <a
                href="#parque-madidi"
                className="text-sm font-medium text-sand-100 hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded px-1"
              >
                {t.madidiPark}
              </a>
              <a
                href="#comunidad"
                className="text-sm font-medium text-sand-100 hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded px-1"
              >
                {t.community}
              </a>
              <a
                href="#testimonios"
                className="text-sm font-medium text-sand-100 hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded px-1"
              >
                {t.reviews}
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-sand-100 hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded px-1"
              >
                {t.faq}
              </a>
            </nav>

            {/* Right Action Controls: Lang, Currency, WhatsApp, Book Now */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setLangDropdownOpen(!langDropdownOpen);
                    setCurrDropdownOpen(false);
                  }}
                  className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  aria-expanded={langDropdownOpen}
                  aria-label="Select Language"
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="uppercase">{currentLang}</span>
                  <ChevronDown className="w-3 h-3 text-white/70" />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-jungle-950/95 border border-jungle-700/60 rounded-lg shadow-2xl py-1 z-50 backdrop-blur-md">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          onLanguageChange(l.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left ${
                          currentLang === l.code ? 'text-emerald-400 bg-emerald-950/50 font-bold' : 'text-gray-200 hover:bg-white/10'
                        }`}
                      >
                        <span className="flex items-center space-x-2">
                          <span>{l.flag}</span>
                          <span>{l.label}</span>
                        </span>
                        {currentLang === l.code && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Currency Selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setCurrDropdownOpen(!currDropdownOpen);
                    setLangDropdownOpen(false);
                  }}
                  className="flex items-center space-x-1 px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  aria-expanded={currDropdownOpen}
                  aria-label="Select Currency"
                >
                  <span>{currentCurrency}</span>
                  <ChevronDown className="w-3 h-3 text-white/70" />
                </button>

                {currDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-jungle-950/95 border border-jungle-700/60 rounded-lg shadow-2xl py-1 z-50 backdrop-blur-md">
                    {currencies.map((c) => (
                      <button
                        key={c.code}
                        onClick={() => {
                          onCurrencyChange(c.code);
                          setCurrDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left ${
                          currentCurrency === c.code ? 'text-emerald-400 bg-emerald-950/50 font-bold' : 'text-gray-200 hover:bg-white/10'
                        }`}
                      >
                        <span>{c.label}</span>
                        {currentCurrency === c.code && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* WhatsApp Quick Trigger */}
              <button
                onClick={onOpenWhatsApp}
                className="hidden xl:flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 text-xs font-semibold border border-emerald-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>

              {/* Primary CTA Book Now */}
              <button
                onClick={() => onOpenBooking()}
                className="px-4 py-2 rounded-lg bg-clay-500 hover:bg-clay-600 active:bg-clay-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-clay-500/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-clay-400"
              >
                {t.bookNow}
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 rounded bg-clay-500 text-white text-xs font-bold uppercase"
              >
                {t.bookNow}
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-white hover:text-emerald-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-jungle-950 border-b border-jungle-800 px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center justify-between pb-3 border-b border-jungle-800">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                <div className="flex space-x-1">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => onLanguageChange(l.code)}
                      className={`px-2 py-1 text-xs rounded ${currentLang === l.code ? 'bg-emerald-600 text-white font-bold' : 'text-gray-300'}`}
                    >
                      {l.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex space-x-1">
                {currencies.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => onCurrencyChange(c.code)}
                    className={`px-2 py-1 text-xs rounded ${currentCurrency === c.code ? 'bg-sand-500 text-jungle-950 font-bold' : 'text-gray-300'}`}
                  >
                    {c.code}
                  </button>
                ))}
              </div>
            </div>

            <nav className="flex flex-col space-y-3">
              <a
                href="#programas"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-sand-100 hover:text-emerald-400"
              >
                {t.programs}
              </a>
              <a
                href="#precios"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-sand-100 hover:text-emerald-400"
              >
                {t.pricing}
              </a>
              <a
                href="#alojamiento"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-sand-100 hover:text-emerald-400"
              >
                {t.accommodations}
              </a>
              <a
                href="#parque-madidi"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-sand-100 hover:text-emerald-400"
              >
                {t.madidiPark}
              </a>
              <a
                href="#comunidad"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-sand-100 hover:text-emerald-400"
              >
                {t.community}
              </a>
              <a
                href="#testimonios"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-sand-100 hover:text-emerald-400"
              >
                {t.reviews}
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-sand-100 hover:text-emerald-400"
              >
                {t.faq}
              </a>
            </nav>

            <div className="pt-2 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-emerald-700/40 text-emerald-300 text-sm font-semibold border border-emerald-500/50"
              >
                <Phone className="w-4 h-4" />
                <span>{t.chatWhatsApp}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
