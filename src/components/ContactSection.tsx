'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Shield } from 'lucide-react';
import { logger } from '@/lib/logger';
import { getAssetPath } from '@/lib/utils';

/**
 * Contact and Venue section adhering to ts-amir.de impressum guidelines,
 * combined with Living For Tennis's high-converting "Let's start improving your game!" CTA banner.
 */
export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    logger.info('Contact form submitted', {
      subject: formState.subject,
      emailLength: formState.email.length,
    });
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Background Accent Gradients */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[350px] bg-emerald-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Living For Tennis Signature Callout Banner */}
        <div className="mb-20 rounded-3xl bg-gradient-to-r from-court-950 via-slate-900 to-court-950 border border-tennis-400/20 p-8 sm:p-12 text-center relative overflow-hidden shadow-glow">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <img
                src={getAssetPath('/images/logo.png')}
                alt="Tennisschule Amir Logo"
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            </div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-tennis-accent mb-3 block">
              Bereit für dein bestes Tennis?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Tennisunterricht, den du lieben wirst.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-8">
              Melde dich jetzt für dein persönliches Schnuppertraining oder die Saison 2026/27 bei der SG Weiterstadt an.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:01624207661"
                className="px-6 py-3.5 rounded-xl bg-tennis-accent hover:bg-tennis-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-glow"
              >
                <Phone className="w-4 h-4" />
                <span>0162 - 420 76 61 anrufen</span>
              </a>
              <a
                href="mailto:info@ts-amir.de"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>info@ts-amir.de</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Details & Direct Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Club Venues */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                Kontaktdaten & Spielorte
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Wir trainieren ganzjährig auf den Freiplätzen und in der Tennishalle der SG Weiterstadt sowie in der Region Pfungstadt / Darmstadt.
              </p>
            </div>

            {/* Venue Card 1: SG Weiterstadt */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-tennis-accent/10 text-tennis-accent flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Hauptstützpunkt: SG Weiterstadt
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Am Sportzentrum 1, 64331 Weiterstadt<br />
                  <span className="text-slate-400 text-[11px]">Moderne Sandplätze & Halle (Winter- & Sommertraining)</span>
                </p>
              </div>
            </div>

            {/* Direct Line */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-court-500/20 text-tennis-300 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Mobil & WhatsApp
                </h4>
                <a href="tel:01624207661" className="text-sm font-bold text-tennis-accent hover:underline block">
                  0162 - 420 76 61
                </a>
                <span className="text-[11px] text-slate-400">Erreichbar Mo–So für Trainingsanfragen</span>
              </div>
            </div>

            {/* Email */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/5 text-slate-300 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  E-Mail-Kontakt
                </h4>
                <a href="mailto:info@ts-amir.de" className="text-xs text-slate-300 hover:text-white underline">
                  info@ts-amir.de
                </a>
              </div>
            </div>

            {/* Legal Notice */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 text-[11px] text-slate-400 space-y-1">
              <div className="font-bold text-slate-300 flex items-center gap-1.5 mb-2">
                <Shield className="w-3.5 h-3.5 text-tennis-400" />
                Impressumsangaben nach § 5 TMG:
              </div>
              <div>Inhaber: Amir Reza</div>
              <div>Gerlachshöhe 28a, 64367 Mühltal</div>
              <div>Steuernummer: 0786032189</div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-white/15 backdrop-blur-xl shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-1">
                Nachricht oder Anfrage senden
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Wir melden uns schnellstmöglich bei Ihnen zurück.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">Nachricht erfolgreich versendet!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto mb-6">
                    Vielen Dank für Ihre Kontaktaufnahme. Cheftrainer Amir Reza wird sich in Kürze mit Ihnen in Verbindung setzen.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="text-xs text-tennis-accent underline font-semibold"
                  >
                    Weitere Nachricht senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Ihr Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Name, Vorname"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:ring-2 focus:ring-tennis-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Ihre E-Mail-Adresse *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="email@beispiel.de"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:ring-2 focus:ring-tennis-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Telefonnummer
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="0162 1234567"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:ring-2 focus:ring-tennis-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Betreff *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="z.B. Schnupperstunde / SG Weiterstadt"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:ring-2 focus:ring-tennis-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Wie können wir Ihnen weiterhelfen? (z.B. Alter des Kindes, bisherige Tenniserfahrung, Wunschtermine)..."
                      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:ring-2 focus:ring-tennis-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-tennis-accent hover:bg-tennis-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-glow hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Nachricht jetzt absenden</span>
                  </button>

                  <p className="text-[10px] text-slate-500 text-center">
                    Ihre E-Mail wird vertraulich behandelt und nicht veröffentlicht.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
