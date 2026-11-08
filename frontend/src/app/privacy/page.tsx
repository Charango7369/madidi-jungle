import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy & GDPR Compliance | Madidi Jungle Ecolodge',
  description: 'How Madidi Jungle Ecolodge protects your personal data, handles bookings under GDPR regulations, and respects your privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-jungle-950 text-sand-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Madidi Jungle Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-jungle-800 pb-8 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Privacy & Data Protection Policy</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy & GDPR Compliance
          </h1>
          <p className="text-xs sm:text-sm text-sand-500">
            Last Updated: November 2026 • Compliant with EU General Data Protection Regulation (GDPR) and Bolivian Commercial Law.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm leading-relaxed text-sand-100/90">
          {/* 1. Data Controller */}
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white flex items-center space-x-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center text-xs">1</span>
              <span>Data Controller</span>
            </h2>
            <p>
              Madidi Jungle Ecolodge is an authentic indigenous ecotourism enterprise established and operated by native Uchupiamonas families inside the Madidi National Park.
            </p>
            <div className="p-4 rounded-2xl bg-jungle-900 border border-jungle-800 text-xs space-y-1 font-mono text-sand-500">
              <p><strong>Entity:</strong> Madidi Jungle Ecolodge</p>
              <p><strong>Head Office:</strong> Calle Comercio s/n, Rurrenabaque, Beni, Bolivia</p>
              <p><strong>Lodge Location:</strong> Tuichi River, Madidi National Park Integrated Management Natural Area</p>
              <p><strong>Official Privacy Email:</strong> info@madidijungle.com</p>
              <p><strong>Data Protection Officer (DPO):</strong> dpo@madidijungle.com</p>
            </div>
          </section>

          {/* 2. Personal Data We Collect */}
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white flex items-center space-x-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center text-xs">2</span>
              <span>Personal Data We Collect</span>
            </h2>
            <p>
              We only collect personal information that you voluntarily provide when requesting a tour quote, initiating a reservation, downloading our wildlife guide, or communicating via WhatsApp:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-sand-100/80">
              <li><strong>Contact Information:</strong> Full name, email address, telephone / WhatsApp number, country of residence.</li>
              <li><strong>Travel Logistics:</strong> Travel dates, flight arrival details in Rurrenabaque, number of passengers, cabin bathroom preference.</li>
              <li><strong>Special Category Data (GDPR Art. 9):</strong> Dietary restrictions and physical/medical considerations you explicitly submit so our kitchen and native guides can ensure your safety and comfort in the remote Amazon.</li>
            </ul>
          </section>

          {/* 3. Legal Basis for Processing */}
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white flex items-center space-x-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center text-xs">3</span>
              <span>Legal Basis for Processing</span>
            </h2>
            <p>
              Under Article 6 and Article 9 of the EU GDPR, we process your personal data under the following lawful grounds:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-jungle-900 border border-jungle-800">
                <h3 className="font-bold text-emerald-400 text-xs uppercase mb-1">Contractual Necessity (Art. 6.1.b)</h3>
                <p className="text-xs text-sand-500">
                  Processing is required to issue your reservation code, confirm cabin availability, and organize riverboat transfers on the Beni and Tuichi rivers.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-jungle-900 border border-jungle-800">
                <h3 className="font-bold text-emerald-400 text-xs uppercase mb-1">Explicit Consent (Art. 9.2.a)</h3>
                <p className="text-xs text-sand-500">
                  Special dietary notes or health guidelines are processed strictly with your affirmative consent for your personal safety in the rainforest.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Your Rights under GDPR */}
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white flex items-center space-x-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center text-xs">4</span>
              <span>Your Data Rights (Right to be Forgotten)</span>
            </h2>
            <p>
              As a visitor or customer, you have full control over your data. Under GDPR, you have the right to:
            </p>
            <ul className="space-y-2 text-xs text-sand-100/80">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Right of Access:</strong> Request a copy of all personal records we hold about you.</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Right to Rectification:</strong> Update or correct inaccurate contact details.</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request immediate and permanent deletion of your booking details from our database once your travel has concluded.</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Right to Restrict Processing:</strong> Request suspension of communications or lead marketing at any time.</span>
              </li>
            </ul>
            <p className="text-xs pt-1">
              To exercise any of these rights, email us at <a href="mailto:info@madidijungle.com" className="text-emerald-400 underline">info@madidijungle.com</a> with the subject line <em>&quot;GDPR Rights Request&quot;</em>. Requests are fulfilled within 72 hours.
            </p>
          </section>

          {/* 5. Cookie Policy */}
          <section id="cookies" className="space-y-3 pt-4 border-t border-jungle-800">
            <h2 className="font-display text-xl font-bold text-white flex items-center space-x-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center text-xs">5</span>
              <span>Cookie Policy</span>
            </h2>
            <p>
              We use minimal, privacy-friendly cookies and local storage tokens strictly required for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-sand-100/80">
              <li>Remembering your preferred language (English, Spanish, French, German).</li>
              <li>Remembering your active currency conversion (USD, EUR, BOB).</li>
              <li>Maintaining session security and protecting against Cross-Site Request Forgery (CSRF).</li>
            </ul>
            <p className="text-xs">
              We do <strong>not</strong> sell your data to third-party data brokers or behavioral advertising networks.
            </p>
          </section>

          {/* 6. Security Architecture */}
          <section className="space-y-3 pt-4 border-t border-jungle-800">
            <h2 className="font-display text-xl font-bold text-white flex items-center space-x-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center text-xs">6</span>
              <span>Security Controls</span>
            </h2>
            <p className="text-xs text-sand-100/80">
              All communications between your browser and our servers are encrypted with TLS 1.3. Our database runs in an isolated network segment without direct public exposure, and API mutations are safeguarded by cryptographic tokenization and automated rate-limiting defenses.
            </p>
          </section>
        </div>

        {/* Footer Back Link */}
        <div className="pt-8 border-t border-jungle-800 flex justify-between items-center text-xs text-sand-500">
          <span>© {new Date().getFullYear()} Madidi Jungle Ecolodge. All rights reserved.</span>
          <Link href="/" className="text-emerald-400 hover:text-emerald-300 underline">
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
