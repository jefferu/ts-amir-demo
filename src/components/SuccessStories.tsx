'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal, Quote, UserCheck } from 'lucide-react';
import { ACHIEVEMENTS, TESTIMONIALS } from '@/data/tennisData';

export const SuccessStories: React.FC = () => {
  return (
    <section id="erfolge" className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">

      <div className="absolute top-1/3 left-0 w-80 h-80 bg-court-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tennis-400/10 border border-tennis-400/20 text-tennis-300 text-xs font-bold uppercase tracking-wider mb-4">
            Messbare Resultate
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Erfolgsgeschichten & Turniersiege
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Vom ersten Ballkontakt bis zu offiziellen DTB-Ranglisten- und Bezirksmeistertiteln.
            Unsere Schülerinnen und Schüler beweisen regelmäßig Spitzenleistungen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {ACHIEVEMENTS.map((achieve, idx) => (
            <motion.div
              key={achieve.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-tennis-400/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-court-500/20 text-tennis-300 border border-court-500/30">
                    {achieve.category}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{achieve.year}</span>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-tennis-accent/10 text-tennis-accent flex-shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white leading-tight">
                      {achieve.title}
                    </h3>
                    <div className="text-xs font-bold text-tennis-400 mt-0.5">
                      {achieve.player}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {achieve.tournament}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400">Ergebnis:</span>
                <span className="font-extrabold text-tennis-accent flex items-center gap-1">
                  <Medal className="w-3.5 h-3.5" />
                  {achieve.placement}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Was Eltern & Spieler sagen
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Authentisches Feedback aus unserer Tennisschul-Community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-md flex flex-col justify-between"
              >
                <div>

                  <div className="flex items-center gap-1 mb-4 text-tennis-accent">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-tennis-accent text-tennis-accent" />
                    ))}
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                    &bdquo;{t.content}&ldquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-court-800 border border-white/10 flex items-center justify-center text-tennis-accent">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">{t.name}</h4>
                    <p className="text-[11px] text-slate-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

