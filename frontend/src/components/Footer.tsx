'use client';

import React from 'react';
import { Compass, Phone, Mail, MapPin, Shield, Download, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { TOURS_DATA } from '../data/mockData';

interface FooterProps {
  currentLang: Language;
  onOpenBooking: (tourCode?: string) => void;
  onOpenLeadModal: () => void;
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenBooking,
  onOpenLeadModal,
  onOpenWhatsApp,
}) => {
  const t = translations[currentLang].footer;

  return (
    <footer className="bg-jungle-950 text-sand-100 border-t border-jungle-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-jungle-800">
          {/* Brand & Community Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                <Compass className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-wider text-white uppercase">
                  Madidi Jungle
                </span>
                <span className="text-[10px] tracking-widest text-emerald-400 font-medium uppercase">
                  Ecolodge • Bolivia
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-sand-100/80 leading-relaxed max-w-sm">
              {t.description}
            </p>

            {/* Field Guide Download Banner */}
            <div className="pt-2">
              <button
                onClick={onOpenLeadModal}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-jungle-900 border border-emerald-500/40 hover:bg-emerald-950/40 text-xs text-emerald-300 font-semibold transition-colors"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download Free Madidi Bird & Wildlife Field Guide</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-sand-100/80">
              <li>
                <a href="#programas" className="hover:text-emerald-400 transition-colors">
                  Tours & Expeditions
                </a>
              </li>
              <li>
                <a href="#precios" className="hover:text-emerald-400 transition-colors">
                  Pricing Matrix
                </a>
              </li>
              <li>
                <a href="#alojamiento" className="hover:text-emerald-400 transition-colors">
                  Jatata Eco-Cabins
                </a>
              </li>
              <li>
                <a href="#parque-madidi" className="hover:text-emerald-400 transition-colors">
                  Madidi National Park Route
                </a>
              </li>
              <li>
                <a href="#comunidad" className="hover:text-emerald-400 transition-colors">
                  San José de Uchupiamonas
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Vaccines & Logistics FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Programs */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              {t.toursList}
            </h4>
            <ul className="space-y-2 text-xs text-sand-100/80">
              {TOURS_DATA.map((tour) => (
                <li key={tour.code}>
                  <button
                    onClick={() => onOpenBooking(tour.code)}
                    className="hover:text-emerald-400 transition-colors text-left"
                  >
                    {tour.name} ({tour.days}D/{tour.nights}N)
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details in Rurrenabaque */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              {t.contactInfo}
            </h4>
            <ul className="space-y-2.5 text-xs text-sand-100/80">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Calle Comercio s/n, Rurrenabaque, Beni, Bolivia</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <button onClick={onOpenWhatsApp} className="hover:text-emerald-400">
                  +591 72288339 (WhatsApp 24/7)
                </button>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>info@madidijungle.com</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-2 px-3 rounded-lg bg-clay-500 hover:bg-clay-600 text-white font-bold uppercase tracking-wider text-[11px] shadow transition-all"
                >
                  Direct Booking Request
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal, Privacy & SERNAP Regulatory Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sand-200/60">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.sernapNotice}</span>
          </div>

          <div className="flex items-center space-x-3 text-[11px]">
            <a href="/privacy" className="hover:text-emerald-400 underline transition-colors">
              Privacy Policy (GDPR)
            </a>
            <span>•</span>
            <a href="/privacy#cookies" className="hover:text-emerald-400 underline transition-colors">
              Cookie Policy
            </a>
          </div>

          <div className="flex items-center space-x-1">
            <span>© {new Date().getFullYear()} Madidi Jungle Ecolodge. Made with</span>
            <Heart className="w-3.5 h-3.5 text-clay-400 fill-clay-400 inline" />
            <span>by native guardians of the Amazon.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
