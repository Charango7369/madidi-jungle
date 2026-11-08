'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { FAQS_DATA } from '../data/mockData';

interface FAQAccordionProps {
  currentLang: Language;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ currentLang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const t = translations[currentLang].faq;

  const categories = [
    { id: 'all', label: t.tabAll },
    { id: 'transport', label: t.tabTransport },
    { id: 'health', label: t.tabHealth },
    { id: 'gear', label: t.tabGear },
    { id: 'payment', label: t.tabPayment },
  ];

  const filteredFaqs = activeCategory === 'all'
    ? FAQS_DATA
    : FAQS_DATA.filter((f) => f.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-jungle-900 text-white relative border-t border-jungle-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-800/40">
            {t.sectionBadge}
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-white">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-sand-100/80">
            {t.subtitle}
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCategory(c.id);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === c.id
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-jungle-950 text-sand-200 hover:bg-jungle-850'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3" role="region" aria-label="Frequently Asked Questions">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-jungle-950/80 border border-jungle-800 rounded-2xl overflow-hidden transition-colors hover:border-emerald-500/40"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between space-x-4 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-white flex items-center space-x-2.5">
                    <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-sand-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-sand-100/90 leading-relaxed border-t border-jungle-800/60 animate-in fade-in duration-150"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
