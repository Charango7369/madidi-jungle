'use client';

import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Check, X } from 'lucide-react';

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('madidi_cookie_consent');
      if (!consent) {
        // Show after a brief delay for optimal UX
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage access restricted (e.g. strict privacy mode)
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('madidi_cookie_consent', 'accepted');
    } catch {}
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    try {
      localStorage.setItem('madidi_cookie_consent', 'essential');
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      role="region"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-jungle-950/95 backdrop-blur-md border-t border-emerald-500/30 text-white shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start space-x-3.5 max-w-3xl">
          <div className="w-10 h-10 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-sand-100/90 leading-relaxed">
            <p>
              <strong>We respect your privacy.</strong> Madidi Jungle Ecolodge uses essential cookies to ensure site security, remember your language and currency preferences, and anonymously analyze traffic in accordance with <strong>GDPR / EU regulations</strong>.{' '}
              <a
                href="/privacy"
                className="text-emerald-400 underline hover:text-emerald-300 ml-1"
              >
                Learn more in our Privacy Policy
              </a>.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 w-full md:w-auto justify-end shrink-0">
          <button
            type="button"
            onClick={handleEssentialOnly}
            className="flex-1 md:flex-none px-4 py-2 rounded-xl border border-jungle-700 bg-jungle-900/80 hover:bg-jungle-800 text-xs font-semibold text-sand-200 transition-colors"
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="flex-1 md:flex-none px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold uppercase tracking-wider text-white shadow transition-all flex items-center justify-center space-x-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Accept All</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
