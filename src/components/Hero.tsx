'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Trophy, PhoneCall } from 'lucide-react';
import { STATS } from '@/data/tennisData';
import { getAssetPath } from '@/lib/utils';

interface HeroProps {
  onOpenBooking: () => void;
}

/**
 * Modern Hero section mirroring Living For Tennis's clean athletic aesthetic,
 * elevated with Google Antigravity glassmorphism, fluid typography, and authoritative ATP badges.
 *
 * @param onOpenBooking Callback to trigger the booking / trial session flow.
 */
export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-36 sm:pt-42 lg:pt-44 pb-20 sm:pb-24 overflow-hidden bg-slate-950">
      {/* Background Court Lighting & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-tennis-500/10 rounded-full blur-[120px]" />
        {/* Subtle Tennis Court Line Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-6"
            >
              <Sparkles className="w-4 h-4 text-tennis-accent" />
              <span className="text-xs font-semibold text-slate-300">
                Offizieller Partner SG Weiterstadt & Rafa Nadal Academy
              </span>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-6"
            >
              Tennistraining, das dein Spiel auf das{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tennis-accent via-tennis-400 to-emerald-400">
                nächste Level
              </span>{' '}
              hebt.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal"
            >
              Maßgeschneidertes Tennistraining für Kinder, Jugendliche und Erwachsene in Darmstadt & Weiterstadt.
              Unter der Leitung von Cheftrainer Amir Reza – ehemaliger Davis-Cup-Spieler und höchstzertifizierter ATP A-Lizenz Coach.
            </motion.p>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-300 mb-8"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tennis-400" />
                Kleine Gruppen (max. 4 Spieler)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tennis-400" />
                Ab 5 Spielern: 2 Trainer
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tennis-400" />
                Inklusive Hallenplatzgebühr
              </span>
            </motion.div>

            {/* Interactive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-tennis-accent hover:bg-tennis-300 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-glow hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>Schnupperstunde buchen</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#preise"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Programme & Preise ansehen</span>
              </a>
            </motion.div>

            {/* Quick Stat Counter Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {stat.value}{' '}
                    <span className="text-xs font-semibold text-tennis-accent">{stat.suffix}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Card with Glassmorphic Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-slate-800/40 to-slate-900/80 shadow-2xl backdrop-blur-md p-3 group">
              
              {/* High Quality Tennis Action Imagery */}
              <div className="relative h-[430px] w-full rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1000&q=85"
                  alt="Tennisschule Amir Training"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Integrated Top Badges Bar - No Overlap */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/15 text-xs font-bold text-white shadow-lg">
                    <ShieldCheck className="w-4 h-4 text-tennis-accent" />
                    <span>ATP A-Level Certified</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-tennis-400/30 text-xs font-bold text-white shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-tennis-accent animate-ping" />
                    <span>Saison 2026/27 frei</span>
                  </div>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/15 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-tennis-400/30 p-1 flex items-center justify-center flex-shrink-0 shadow-md">
                      <img
                        src={getAssetPath('/images/logo.png')}
                        alt="Tennisschule Amir"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        Cheftrainer Amir Reza
                      </h4>
                      <p className="text-xs text-slate-300">
                        Ehem. Davis Cup Spieler • Rafa Nadal Academy Talent Scout
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
