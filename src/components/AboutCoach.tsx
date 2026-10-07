'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle2, Star, ShieldCheck, HeartHandshake, Quote } from 'lucide-react';
import { COACH_DATA } from '@/data/tennisData';
import { getAssetPath } from '@/lib/utils';

/**
 * "Meet your Tennis Instructor" section mirroring Living For Tennis's personal authority layout.
 * Accurately communicates Amir Reza's Davis Cup legacy, ATP credentials, and Rafa Nadal Academy role.
 */
export const AboutCoach: React.FC = () => {
  return (
    <section id="ueber-uns" className="py-24 bg-slate-900/60 relative overflow-hidden border-t border-white/5">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-court-800/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill & Title */}
        <div className="text-center lg:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tennis-400/10 border border-tennis-400/20 text-tennis-300 text-xs font-bold uppercase tracking-wider mb-4">
            Dein Cheftrainer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Lerne Cheftrainer Amir Reza kennen
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-2 max-w-2xl">
            Internationale Tourerfahrung kombiniert mit modernster Trainingswissenschaft der ATP & Rafa Nadal Academy.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Portrait with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-slate-800/80 to-slate-950 p-3 shadow-2xl backdrop-blur-xl">
              
              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/5] flex items-center justify-center">
                <img
                  src={getAssetPath(COACH_DATA.image)}
                  alt={COACH_DATA.name}
                  className="w-full h-full object-cover object-top filter brightness-100 contrast-105"
                  onError={(e) => {
                    // Fallback to high quality coach photo if origin blocks
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Overlay Name Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-extrabold text-white">{COACH_DATA.name}</h3>
                      <p className="text-xs text-tennis-400 font-semibold">{COACH_DATA.role}</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-court-800 border border-tennis-400/30 flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-tennis-accent" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Davis Cup Floating Tag */}
              <div className="absolute -top-3 -right-3 px-3.5 py-1.5 rounded-full bg-tennis-accent text-slate-950 font-black text-xs uppercase tracking-wider shadow-glow">
                Davis Cup Spieler
              </div>
            </div>

            {/* Quick Opponents Pill */}
            <div className="mt-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <span className="text-xs text-slate-400 font-medium block">
                ATP Challenger Matches u.a. gegen:
              </span>
              <span className="text-xs font-bold text-white tracking-wide">
                Thomas Johansson (ATP 7) • Sjeng Schalken (ATP 11) • Andrej Pavel (ATP 13)
              </span>
            </div>
          </motion.div>

          {/* Right Column: Bio, Philosophy & Qualifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {/* Bio Narrative */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-3">Vom Profi-Circuit zum leidenschaftlichen Mentor</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {COACH_DATA.bio}
              </p>
            </div>

            {/* Philosophy Glass Quote */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-900/60 border border-emerald-500/20 mb-8 backdrop-blur-md">
              <Quote className="w-8 h-8 text-tennis-400/40 absolute top-4 right-4" />
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-tennis-accent mb-2">
                <HeartHandshake className="w-4 h-4" />
                Trainingsphilosophie
              </div>
              <p className="text-sm text-slate-200 italic leading-relaxed">
                &bdquo;{COACH_DATA.philosophy}&ldquo;
              </p>
            </div>

            {/* Key Qualifications Grid */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-400 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-tennis-400" />
                Offizielle Trainerqualifikationen
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COACH_DATA.qualifications.map((qual) => (
                  <div key={qual} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-tennis-400 flex-shrink-0 mt-0.5" />
                    <span>{qual}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner Logos Pill */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Star className="w-4 h-4 text-tennis-accent" />
                <span>Offizieller Partner & Scout:</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-200">
                <span className="px-2.5 py-1 rounded-md bg-white/10">Rafa Nadal Academy</span>
                <span className="px-2.5 py-1 rounded-md bg-white/10">GPTCA / ATP</span>
                <span className="px-2.5 py-1 rounded-md bg-white/10">SG Weiterstadt</span>
                <span className="px-2.5 py-1 rounded-md bg-white/10">Yonex Tennis</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
