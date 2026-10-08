'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, MapPin, Users, HelpCircle, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '@/data/tennisData';
import { PricingPlan } from '@/lib/types';

interface PricingCalculatorProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onSelectPlan }) => {
  const [activeSeason, setActiveSeason] = useState<'winter' | 'summer' | 'private'>('winter');

  const filteredPlans = PRICING_PLANS.filter((plan) => plan.season === activeSeason);

  return (
    <section id="preise" className="py-24 bg-slate-950 relative overflow-hidden">

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-700/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tennis-400/10 border border-tennis-400/20 text-tennis-300 text-xs font-bold uppercase tracking-wider mb-4">
            Transparente Konditionen
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Trainingsangebote & Preise
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Offizielle Kursgebühren für Vereinsmitglieder der SG Weiterstadt und Gastspieler.
            Keine versteckten Nebenkosten – Hallengebühren sind in den Saisonkursen bereits enthalten.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveSeason('winter')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeSeason === 'winter'
                  ? 'bg-tennis-accent text-slate-950 shadow-glow'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Winter 2026 / 2027 (Halle)
            </button>
            <button
              onClick={() => setActiveSeason('summer')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeSeason === 'summer'
                  ? 'bg-tennis-accent text-slate-950 shadow-glow'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Sommer 2026 (Freiplatz)
            </button>
            <button
              onClick={() => setActiveSeason('private')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeSeason === 'private'
                  ? 'bg-tennis-accent text-slate-950 shadow-glow'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Privattraining & Schnuppern
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredPlans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 ${
                  plan.featured
                    ? 'bg-gradient-to-b from-slate-900/90 to-court-950 border-2 border-tennis-accent/80 shadow-glow hover:shadow-2xl'
                    : 'bg-slate-900/60 border border-white/10 hover:border-white/20'
                }`}
              >

                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-tennis-accent text-slate-950 text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Empfohlen & Beliebt</span>
                  </div>
                )}

                <div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-tennis-400 uppercase tracking-wider">
                      {plan.targetGroup}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                      <MapPin className="w-3 h-3 text-tennis-400" />
                      {plan.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white tracking-tight mb-4">
                    {plan.title}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                    {plan.price === 'Kostenlos' ? (
                      <span className="text-4xl font-black text-white">Kostenlos</span>
                    ) : (
                      <>
                        <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                          €{plan.price}
                        </span>
                        <span className="text-slate-400 text-xs font-semibold uppercase">
                          / {plan.period}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[11px]">
                    <div>
                      <span className="text-slate-400 block font-medium">Gruppengröße:</span>
                      <span className="font-bold text-slate-200">{plan.groupSize}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-medium">Trainerschlüssel:</span>
                      <span className="font-bold text-tennis-300">{plan.trainerRatio}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.includedDetails.map((detail) => (
                      <div key={detail} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                        <div className="mt-0.5 p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
                    plan.featured
                      ? 'bg-tennis-accent hover:bg-tennis-300 text-slate-950 shadow-glow'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                >
                  <span>Jetzt verbindlich oder unverbindlich anfragen</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-tennis-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white block mb-0.5">
                Hinweis zur Kooperation mit der SG Weiterstadt:
              </span>
              Ab der Wintersaison übernimmt die Tennisschule Amir die gesamte sportliche Leitung und das Vereinstraining der SG Weiterstadt.
              Fragen zur Vereinsmitgliedschaft und Spielberechtigung beantwortet der Vorstand gerne unter <a href="mailto:tennis@sg-weiterstadt.de" className="text-tennis-accent underline">tennis@sg-weiterstadt.de</a>.
            </div>
          </div>
          <a
            href="tel:01624207661"
            className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold whitespace-nowrap border border-white/10 transition-colors"
          >
            Fragen? 0162 - 420 76 61
          </a>
        </div>

      </div>
    </section>
  );
};

