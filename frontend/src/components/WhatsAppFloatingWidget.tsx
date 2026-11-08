'use client';

import React, { useState } from 'react';
import { Phone, X, Send, MessageCircle, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface WhatsAppFloatingWidgetProps {
  currentLang: Language;
}

export const WhatsAppFloatingWidget: React.FC<WhatsAppFloatingWidgetProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickQuestions = [
    {
      label: currentLang === 'es' ? 'Disponibilidad para este mes' : 'Availability for this month',
      text: 'Hola Madidi Jungle, deseo consultar disponibilidad de cabañas para este mes.',
    },
    {
      label: currentLang === 'es' ? 'Vuelos La Paz a Rurrenabaque' : 'Flights from La Paz to Rurrenabaque',
      text: 'Hola, ¿podrían orientarme sobre los vuelos y conexiones desde La Paz a Rurrenabaque?',
    },
    {
      label: currentLang === 'es' ? 'Tour de observación de aves' : 'Specialized Birdwatching tour',
      text: 'Hola, somos interesados en aviturismo y fotografía de naturaleza. ¿Tienen guía ornitólogo privado?',
    },
  ];

  const handleSend = (text: string) => {
    const encoded = encodeURIComponent(text || 'Hola Madidi Jungle, me gustaría solicitar información.');
    window.open(`https://wa.me/59172288339?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-jungle-950 border border-emerald-500/40 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-800 to-jungle-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-700 border-2 border-emerald-400 flex items-center justify-center font-bold text-white text-sm">
                  MJ
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-jungle-950 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Madidi Jungle Concierge</h4>
                <span className="text-[11px] text-emerald-200 block">
                  Online • Native Guide & Booking Desk
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Bubble Area */}
          <div className="p-4 bg-jungle-900/90 text-xs space-y-3">
            <div className="bg-jungle-950 border border-jungle-800 rounded-2xl rounded-tl-none p-3.5 text-sand-100 shadow-sm leading-relaxed">
              <p className="font-medium text-emerald-300 mb-1 flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>San José de Uchupiamonas Team</span>
              </p>
              Kamisaraki! Welcome to Madidi Jungle. How can we help organize your Amazon expedition today?
            </div>

            {/* Quick Chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] text-sand-500 uppercase tracking-wider font-semibold block">
                Quick Inquiries:
              </span>
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q.text)}
                  className="w-full text-left p-2 rounded-xl bg-jungle-950/70 hover:bg-emerald-950/50 border border-jungle-800 hover:border-emerald-600/50 text-[11px] text-sand-100 transition-colors flex items-center justify-between"
                >
                  <span>{q.label}</span>
                  <Send className="w-3 h-3 text-emerald-400 shrink-0 ml-2" />
                </button>
              ))}
            </div>

            {/* Input field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(customMsg);
              }}
              className="pt-2 flex items-center space-x-2"
            >
              <input
                type="text"
                placeholder="Type your message..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="flex-1 bg-jungle-950 border border-jungle-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center space-x-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-2xl shadow-emerald-500/40 border border-emerald-300/40 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
        aria-label="Chat with Madidi Jungle on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp Direct</span>
      </button>
    </div>
  );
};
