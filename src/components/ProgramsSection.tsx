'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Users, User, Flame } from 'lucide-react';
import { PROGRAMS } from '@/data/tennisData';

interface ProgramsSectionProps {
  onSelectProgram: (programId: string) => void;
}

/**
 * Three-tier offerings section directly modeled on Living For Tennis's signature layout.
 * Showcases Group Lessons, Private Coaching, and Camps with glassmorphic cards and clear CTAs.
 *
 * @param onSelectProgram Callback to pre-select a specific training format in the booking flow.
 */
export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  const getProgramIcon = (category: string) => {
    switch (category) {
      case 'group':
        return <Users className="w-5 h-5 text-tennis-accent" />;
      case 'private':
        return <User className="w-5 h-5 text-tennis-accent" />;
      case 'camp':
        return <Flame className="w-5 h-5 text-tennis-accent" />;
      default:
        return <Users className="w-5 h-5 text-tennis-accent" />;
    }
  };

  return (
    <section id="programme" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tennis-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tennis-400/10 border border-tennis-400/20 text-tennis-300 text-xs font-bold uppercase tracking-wider mb-4"
          >
            Unser Trainingsangebot
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4"
          >
            Tennisunterricht für Kinder, Jugendliche & Erwachsene
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Egal ob Sie die ersten Schritte auf dem Platz machen, Ihre LK verbessern oder Ihr Kind spielerisch an den Tennissport heranführen möchten: Wir haben das passende Format.
          </motion.p>
        </div>

        {/* 3-Column Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative rounded-3xl bg-slate-900/60 border border-white/10 hover:border-tennis-400/40 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
            >
              {/* Card Image Banner */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                {/* Badge Overlay */}
                {program.badge && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-tennis-400/30 text-xs font-bold text-tennis-300 shadow-md">
                    <span>{program.badge}</span>
                  </div>
                )}

                {/* Symmetrical Target Group & Category Icon Bar */}
                <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between gap-3 h-10">
                  <div className="flex-1 min-w-0 flex items-center">
                    <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-lg bg-slate-950/80 text-white backdrop-blur-md border border-white/10 shadow-sm truncate">
                      {program.ageGroup}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 flex items-center justify-center flex-shrink-0 shadow-md text-tennis-accent">
                    {getProgramIcon(program.category)}
                  </div>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                    {program.title}
                  </h3>
                  <p className="text-xs font-semibold text-tennis-400 uppercase tracking-wider mb-4">
                    {program.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2.5 mb-8">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                        <div className="mt-0.5 p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Button */}
                <button
                  onClick={() => onSelectProgram(program.id)}
                  className="w-full py-3.5 px-4 rounded-xl bg-white/5 hover:bg-tennis-accent text-white hover:text-slate-950 font-bold text-xs uppercase tracking-wider border border-white/15 hover:border-tennis-accent transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-glow"
                >
                  <span>Jetzt anfragen / Schnupperstunde</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
