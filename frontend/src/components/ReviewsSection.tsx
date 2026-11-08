'use client';

import React from 'react';
import { Star, CheckCircle, MessageSquareQuote } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { REVIEWS_DATA } from '../data/mockData';

interface ReviewsSectionProps {
  currentLang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].reviews;

  return (
    <section id="testimonios" className="py-20 bg-jungle-950 text-white relative">
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

          {/* Overall Rating Pill */}
          <div className="mt-6 inline-flex items-center space-x-3 bg-jungle-900 border border-jungle-750 px-5 py-2.5 rounded-2xl">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-sm text-white">5.0 / 5.0</span>
            <span className="text-xs text-sand-500 font-medium border-l border-jungle-750 pl-3">
              TripAdvisor Travelers&apos; Choice Award
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((rev, i) => (
            <div
              key={i}
              className="bg-jungle-900/60 border border-jungle-800 rounded-2xl p-5 flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
            >
              <div>
                {/* Rating stars & platform */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-sand-500 font-bold uppercase tracking-wider">
                    {rev.platform}
                  </span>
                </div>

                <h3 className="font-display font-bold text-sm text-white mb-2 line-clamp-1">
                  &ldquo;{rev.title}&rdquo;
                </h3>
                <p className="text-xs text-sand-100/80 leading-relaxed italic line-clamp-5">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author & Tour taken */}
              <div className="mt-5 pt-3 border-t border-jungle-800/80 flex items-center space-x-3">
                <img
                  src={rev.author_avatar}
                  alt={rev.author_name}
                  className="w-8 h-8 rounded-full object-cover border border-emerald-500/40"
                  loading="lazy"
                />
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-white flex items-center space-x-1 truncate">
                    <span>{rev.author_name}</span>
                    <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                  </div>
                  <div className="text-[10px] text-sand-500 truncate">
                    {rev.author_country} • {rev.tour_taken}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
