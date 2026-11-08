'use client';

import React, { useState } from 'react';
import { Check, X, Shield, ArrowRight } from 'lucide-react';
import { Language, Currency, BathroomPreference } from '../types';
import { translations } from '../i18n/translations';
import { TOURS_DATA } from '../data/mockData';

interface PricingComparisonTableProps {
  currentLang: Language;
  currentCurrency: Currency;
  onOpenBooking: (tourCode: string) => void;
}

export const PricingComparisonTable: React.FC<PricingComparisonTableProps> = ({
  currentLang,
  currentCurrency,
  onOpenBooking,
}) => {
  const [selectedBathroom, setSelectedBathroom] = useState<BathroomPreference>('private');

  const t = translations[currentLang].comparison;

  const convertPrice = (usd: number): string => {
    if (currentCurrency === 'EUR') return `€${Math.round(usd * 0.92)}`;
    if (currentCurrency === 'BOB') return `Bs.${Math.round(usd * 6.96)}`;
    return `$${usd}`;
  };

  return (
    <section id="precios" className="py-20 bg-jungle-900 text-white border-t border-jungle-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest text-sand-500 uppercase bg-sand-900/30 px-3.5 py-1.5 rounded-full border border-sand-500/30">
            {t.sectionBadge}
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-white">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-sand-100/80">
            {t.subtitle}
          </p>

          {/* Bathroom Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-jungle-950 border border-jungle-700">
            <button
              onClick={() => setSelectedBathroom('private')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedBathroom === 'private'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-sand-200 hover:text-white'
              }`}
            >
              {t.privateBathroom}
            </button>
            <button
              onClick={() => setSelectedBathroom('shared')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedBathroom === 'shared'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-sand-200 hover:text-white'
              }`}
            >
              {t.sharedBathroom}
            </button>
          </div>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-jungle-750 shadow-2xl bg-jungle-950/70">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-jungle-800 bg-jungle-950">
                <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-sand-200">
                  Program Code & Name
                </th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-sand-200 text-center">
                  {t.duration}
                </th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-sand-200">
                  {t.keyHighlights}
                </th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-sand-200 text-center">
                  Direct Rate
                </th>
                <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-sand-200 text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-jungle-800/60 text-sm">
              {TOURS_DATA.map((tour) => {
                const price = selectedBathroom === 'private' ? tour.price_private_usd : tour.price_shared_usd;
                return (
                  <tr
                    key={tour.code}
                    className={`hover:bg-jungle-850/60 transition-colors ${
                      tour.is_featured ? 'bg-emerald-950/30' : ''
                    }`}
                  >
                    <td className="py-4 px-5">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-emerald-400 text-xs px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800">
                          {tour.code}
                        </span>
                        <div>
                          <div className="font-bold text-white text-sm sm:text-base">
                            {tour.name}
                          </div>
                          {tour.is_featured && (
                            <span className="text-[11px] text-clay-400 font-semibold uppercase">
                              ★ Most Recommended
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4 text-center font-medium text-sand-100 whitespace-nowrap">
                      {tour.days}D / {tour.nights}N
                    </td>

                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1">
                        {tour.highlight_wildlife.slice(0, 3).map((w, i) => (
                          <span
                            key={i}
                            className="text-[11px] px-2 py-0.5 rounded bg-jungle-900 text-emerald-300 border border-jungle-750"
                          >
                            {w}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="py-4 px-4 text-center whitespace-nowrap">
                      <div className="font-display font-extrabold text-xl text-white">
                        {convertPrice(price)}
                      </div>
                      <div className="text-[10px] text-sand-200/70">USD per person</div>
                    </td>

                    <td className="py-4 px-5 text-right whitespace-nowrap">
                      <button
                        onClick={() => onOpenBooking(tour.code)}
                        className="px-4 py-2 rounded-xl bg-clay-500 hover:bg-clay-600 text-white text-xs font-bold uppercase tracking-wider shadow transition-all focus:outline-none focus:ring-2 focus:ring-clay-400"
                      >
                        {t.bookTour}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Inclusions Banner */}
        <div className="mt-8 bg-jungle-950/80 border border-jungle-800 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-emerald-400 shrink-0" />
            <div className="text-xs text-sand-100">
              <span className="font-bold text-white uppercase tracking-wider block mb-0.5">
                Every Program Includes:
              </span>
              Roundtrip riverboat transfers, native guide, all meals & purified water, rubber boots, and solar cabin stay.
            </div>
          </div>
          <div className="text-xs text-clay-400 font-medium shrink-0">
            * Park entrance ticket (200 BOB ~ 30 USD) payable in cash at SERNAP river checkpoint.
          </div>
        </div>
      </div>
    </section>
  );
};
