'use client';

import React, { useState } from 'react';
import { X, BookOpen, Download, CheckCircle, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const t = translations[currentLang].leadMagnet;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8010';
    try {
      await fetch(`${apiUrl}/api/leads/field-guide`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          first_name: name,
          preferred_language: currentLang,
        }),
      });
    } catch {
      // Local fallback
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
    >
      <div className="relative bg-jungle-950 border border-emerald-500/40 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl p-6 sm:p-8 text-white animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-sand-500 hover:text-white hover:bg-white/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-400/40">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold">
              Your Guide is on the Way!
            </h3>
            <p className="text-xs sm:text-sm text-sand-100/80">
              We have emailed you the download link for the <strong>Madidi Wildlife & Birding Field Guide (PDF)</strong>.
            </p>
            <div className="p-3 rounded-xl bg-jungle-900 border border-jungle-750 text-xs text-sand-500 font-mono">
              Direct booking bonus code: <strong>MADIDI-DIRECT-2026</strong> (5% off direct reservations)
            </div>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-clay-500 hover:bg-clay-600 text-white font-bold text-xs uppercase"
            >
              Continue Exploring
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                  Free Field Guide (PDF)
                </span>
                <h3 id="lead-modal-title" className="font-display text-lg sm:text-xl font-bold text-white">
                  {t.title}
                </h3>
              </div>
            </div>

            <p className="text-xs text-sand-100/90 leading-relaxed">
              {t.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-sand-500 mb-1">
                  {t.placeholderName}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-jungle-900 border border-jungle-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-sand-500 mb-1">
                  {t.placeholderEmail}
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@naturephotography.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-jungle-900 border border-jungle-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              {/* GDPR Privacy Consent */}
              <div className="pt-0.5">
                <label className="flex items-start space-x-2 text-[10px] text-sand-200/80 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={acceptedPrivacy}
                    onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                    className="mt-0.5 rounded border-jungle-700 bg-jungle-900 text-emerald-500 focus:ring-emerald-400 shrink-0"
                  />
                  <span>
                    I agree to receive the guide and accept the{' '}
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 underline hover:text-emerald-300"
                    >
                      Privacy Policy (GDPR)
                    </a>.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading || !acceptedPrivacy}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 transition-all ${
                  acceptedPrivacy && !loading
                    ? 'bg-clay-500 hover:bg-clay-600 active:bg-clay-700 text-white'
                    : 'bg-jungle-800 text-sand-500 cursor-not-allowed'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>{loading ? 'Preparing Guide...' : t.buttonText}</span>
              </button>

              <div className="flex items-center justify-center space-x-1.5 text-[11px] text-sand-200/60 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.disclaimer}</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
