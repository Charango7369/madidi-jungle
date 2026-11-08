'use client';

import React, { useState } from 'react';
import { Bed, Users, Shield, Droplets, Sun, Sparkles } from 'lucide-react';
import { Language, Currency } from '../types';
import { translations } from '../i18n/translations';
import { ACCOMMODATIONS_DATA } from '../data/mockData';

interface AccommodationsSectionProps {
  currentLang: Language;
  currentCurrency: Currency;
  onOpenBooking: () => void;
}

export const AccommodationsSection: React.FC<AccommodationsSectionProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const t = translations[currentLang].accommodations;

  const currentCabin = ACCOMMODATIONS_DATA[activeTab];

  return (
    <section id="alojamiento" className="py-20 bg-jungle-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-800/40">
            {t.sectionBadge}
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-white">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-sand-100/80">
            {t.subtitle}
          </p>

          {/* Cabin Switcher Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {ACCOMMODATIONS_DATA.map((cabin, idx) => (
              <button
                key={cabin.slug}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === idx
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-700/30'
                    : 'bg-jungle-900 text-sand-200 hover:bg-jungle-850'
                }`}
              >
                {cabin.name.split('(')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Cabin Card */}
        <div className="bg-jungle-900 border border-jungle-750 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Preview */}
            <div className="relative h-72 sm:h-96 lg:h-auto overflow-hidden">
              <img
                src={currentCabin.image_url}
                alt={currentCabin.name}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jungle-950 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                {currentCabin.cabin_type}
              </div>
            </div>

            {/* Cabin Details */}
            <div className="p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center space-x-3 text-xs text-sand-500 font-semibold uppercase tracking-wider mb-2">
                  <span className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <span>Up to {currentCabin.max_guests} {t.guests}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Bed className="w-4 h-4 text-emerald-400" />
                    <span>{currentCabin.bed_configuration}</span>
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {currentCabin.name}
                </h3>

                <p className="mt-4 text-sm text-sand-100/90 leading-relaxed">
                  {currentCabin.description}
                </p>

                {/* Amenities List */}
                <div className="mt-6 pt-6 border-t border-jungle-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sand-500 mb-3 flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.amenitiesTitle}</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentCabin.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-sand-100/90">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Eco Features Strip */}
              <div className="pt-4 border-t border-jungle-800 flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs text-sand-200">
                  <div className="flex items-center space-x-1.5">
                    <Droplets className="w-4 h-4 text-emerald-400" />
                    <span>Spring Water</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Sun className="w-4 h-4 text-sand-500" />
                    <span>Solar Lighting</span>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="px-5 py-2.5 rounded-xl bg-clay-500 hover:bg-clay-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-clay-400"
                >
                  Reserve Cabin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
