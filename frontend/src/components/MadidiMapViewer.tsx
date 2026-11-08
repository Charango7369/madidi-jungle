'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Waves, Trees } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface MadidiMapViewerProps {
  currentLang: Language;
}

export const MadidiMapViewer: React.FC<MadidiMapViewerProps> = ({ currentLang }) => {
  const [activePoint, setActivePoint] = useState<number>(2);

  const t = translations[currentLang].mapSection;

  const waypoints = [
    {
      id: 0,
      name: '1. Rurrenabaque Gateway Town',
      type: 'Town & Airport',
      desc: 'Arrival at tropical airport from La Paz. Welcome by our native staff and transfer to the river pier.',
      coordinates: 'Elevation: 220 m.a.s.l.',
    },
    {
      id: 1,
      name: '2. Bala Canyon (Cañón del Bala)',
      type: 'River Passage',
      desc: 'Dramatic gorge where the Beni river cuts through the Serranía del Bala. Spectacular stone cliffs and river herons.',
      coordinates: 'Beni River navigation',
    },
    {
      id: 2,
      name: '3. Madidi Jungle Ecolodge (Tuichi River)',
      type: 'Primary Rainforest Sanctuary',
      desc: 'Deep inside Madidi National Park along the crystal-clear Tuichi River. Gateway to 40+ km of thematic trails.',
      coordinates: '14°28\'S, 67°55\'W',
    },
    {
      id: 3,
      name: '4. Farallón de Parabas (Macaw Clay Wall)',
      type: 'Wildlife Hotspot',
      desc: 'Towering red clay cliff where red-and-green macaws, parakeets, and parrots nest and lick minerals.',
      coordinates: '25 min boat upriver from lodge',
    },
  ];

  return (
    <section id="parque-madidi" className="py-20 bg-jungle-950 text-white relative">
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
        </div>

        {/* 3 Step Journey Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-jungle-900/60 border border-jungle-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-4">
                <Navigation className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                {t.step1Title}
              </h3>
              <p className="text-xs sm:text-sm text-sand-100/80 leading-relaxed">
                {t.step1Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-jungle-800 text-[11px] text-emerald-400 font-semibold">
              Daily flights operated by local airlines
            </div>
          </div>

          <div className="bg-jungle-900/60 border border-jungle-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sand-500/20 text-sand-500 flex items-center justify-center mb-4">
                <Waves className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                {t.step2Title}
              </h3>
              <p className="text-xs sm:text-sm text-sand-100/80 leading-relaxed">
                {t.step2Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-jungle-800 text-[11px] text-sand-400 font-semibold">
              Spotting caimans and capybaras along beaches
            </div>
          </div>

          <div className="bg-jungle-900/60 border border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between shadow-xl shadow-emerald-950/40">
            <div>
              <div className="w-10 h-10 rounded-xl bg-clay-500/20 text-clay-400 flex items-center justify-center mb-4">
                <Trees className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                {t.step3Title}
              </h3>
              <p className="text-xs sm:text-sm text-sand-100/80 leading-relaxed">
                {t.step3Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-jungle-800 text-[11px] text-clay-400 font-semibold">
              100% Indigenous San José de Uchupiamonas Reserve
            </div>
          </div>
        </div>

        {/* Interactive Map Visualizer */}
        <div className="bg-jungle-900 border border-jungle-750 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* SVG Stylized Map */}
            <div className="w-full lg:w-3/5 bg-jungle-950 rounded-2xl p-4 sm:p-6 border border-jungle-800 relative overflow-hidden">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                <Compass className="w-4 h-4" />
                <span>Madidi National Park River Route</span>
              </div>

              {/* Stylized River Vector */}
              <svg viewBox="0 0 500 300" className="w-full h-auto drop-shadow">
                {/* Background Jungle Texture */}
                <rect width="500" height="300" fill="#07150E" rx="16" />
                
                {/* Beni River (Broad) */}
                <path
                  d="M 50 20 Q 150 90 220 120"
                  stroke="#1E593D"
                  strokeWidth="14"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Tuichi River (Tributary entering primary forest) */}
                <path
                  d="M 220 120 Q 280 150 350 180 T 450 250"
                  stroke="#2D7D56"
                  strokeWidth="9"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Bala Canyon Notch */}
                <path
                  d="M 210 110 L 230 130"
                  stroke="#C85A32"
                  strokeWidth="3"
                />

                {/* Waypoint 0: Rurrenabaque */}
                <circle
                  cx="50"
                  cy="20"
                  r={activePoint === 0 ? 9 : 6}
                  fill={activePoint === 0 ? "#C85A32" : "#DDA15E"}
                  className="cursor-pointer transition-all"
                  onClick={() => setActivePoint(0)}
                />
                <text x="65" y="25" fill="#EAE4D7" fontSize="10" fontWeight="bold">Rurrenabaque (Muelle)</text>

                {/* Waypoint 1: Bala Canyon */}
                <circle
                  cx="220"
                  cy="120"
                  r={activePoint === 1 ? 9 : 6}
                  fill={activePoint === 1 ? "#C85A32" : "#DDA15E"}
                  className="cursor-pointer transition-all"
                  onClick={() => setActivePoint(1)}
                />
                <text x="235" y="125" fill="#EAE4D7" fontSize="10" fontWeight="bold">Cañón del Bala</text>

                {/* Waypoint 2: Madidi Jungle Ecolodge */}
                <circle
                  cx="350"
                  cy="180"
                  r={activePoint === 2 ? 11 : 8}
                  fill={activePoint === 2 ? "#52B788" : "#2D7D56"}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  className="cursor-pointer transition-all animate-pulse"
                  onClick={() => setActivePoint(2)}
                />
                <text x="365" y="185" fill="#52B788" fontSize="11" fontWeight="extrabold">★ MADIDI JUNGLE ECOLODGE</text>

                {/* Waypoint 3: Macaw Cliff */}
                <circle
                  cx="450"
                  cy="250"
                  r={activePoint === 3 ? 9 : 6}
                  fill={activePoint === 3 ? "#C85A32" : "#DDA15E"}
                  className="cursor-pointer transition-all"
                  onClick={() => setActivePoint(3)}
                />
                <text x="360" y="270" fill="#EAE4D7" fontSize="10" fontWeight="bold">Farallón de Parabas</text>
              </svg>

              <div className="mt-2 text-[10px] text-sand-500 text-center">
                Click on waypoints to view logistical details
              </div>
            </div>

            {/* Selected Waypoint Detail Card */}
            <div className="w-full lg:w-2/5 space-y-4">
              <div className="p-5 rounded-2xl bg-jungle-950 border border-emerald-500/30">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                  {waypoints[activePoint].type}
                </span>
                <h4 className="font-display font-bold text-xl text-white">
                  {waypoints[activePoint].name}
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-sand-100/90 leading-relaxed">
                  {waypoints[activePoint].desc}
                </p>
                <div className="mt-4 pt-3 border-t border-jungle-800 flex items-center justify-between text-xs text-sand-500">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-sand-500" />
                    <span>{waypoints[activePoint].coordinates}</span>
                  </span>
                </div>
              </div>

              {/* Quick Navigation Buttons */}
              <div className="grid grid-cols-2 gap-2">
                {waypoints.map((wp) => (
                  <button
                    key={wp.id}
                    onClick={() => setActivePoint(wp.id)}
                    className={`p-2 rounded-xl text-xs font-semibold border transition-all text-left truncate ${
                      activePoint === wp.id
                        ? 'bg-emerald-600/30 border-emerald-400 text-emerald-300'
                        : 'bg-jungle-950 border-jungle-800 text-sand-200 hover:bg-jungle-800'
                    }`}
                  >
                    {wp.name.split('.')[1] || wp.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
