'use client';

import React from 'react';
import { HeartHandshake, TreePine, Droplet, Sun, Users, Award } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface CommunityConservationProps {
  currentLang: Language;
}

export const CommunityConservation: React.FC<CommunityConservationProps> = ({ currentLang }) => {
  const t = translations[currentLang].community;

  return (
    <section id="comunidad" className="py-20 bg-jungle-900 text-white relative border-t border-jungle-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-800/40">
                {t.sectionBadge}
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                {t.title}
              </h2>
              <p className="mt-4 text-base text-sand-100/90 leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-jungle-950/60 border border-jungle-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">{t.story1Title}</h3>
                  <p className="text-xs text-sand-100/80 mt-1 leading-relaxed">
                    {t.story1Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-jungle-950/60 border border-jungle-800">
                <div className="w-10 h-10 rounded-xl bg-sand-500/20 text-sand-500 flex items-center justify-center shrink-0">
                  <TreePine className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">{t.story2Title}</h3>
                  <p className="text-xs text-sand-100/80 mt-1 leading-relaxed">
                    {t.story2Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-jungle-950/60 border border-jungle-800">
                <div className="w-10 h-10 rounded-xl bg-clay-500/20 text-clay-400 flex items-center justify-center shrink-0">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">{t.story3Title}</h3>
                  <p className="text-xs text-sand-100/80 mt-1 leading-relaxed">
                    {t.story3Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Collage and Certifications */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-jungle-750">
              <img
                src="https://www.madidijungle.com/archivos/aboutus1.jpg"
                alt="San Jose de Uchupiamonas indigenous community and Madidi Jungle guides"
                className="w-full h-[460px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jungle-950 via-transparent to-transparent" />
            </div>

            {/* Floating Impact Card */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:left-6 max-w-xs bg-jungle-950/95 border border-emerald-500/40 rounded-2xl p-4 shadow-2xl backdrop-blur-md">
              <div className="flex items-center space-x-2 text-emerald-400 mb-1">
                <Award className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">SERNAP Authorized</span>
              </div>
              <p className="text-[11px] text-sand-100/80 leading-relaxed">
                Regulated ecotourism concession inside Madidi National Park. 100% of lodge revenue benefits native conservation and education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
