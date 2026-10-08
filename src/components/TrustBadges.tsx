'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Star, Trophy, Sparkles } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const credentials = [
    {
      badge: "GPTCA / ATP",
      title: "ATP Certified A-Level Coach",
      subtitle: "Höchste internationale Trainer-Akkreditierung",
      icon: Trophy,
    },
    {
      badge: "Rafa Nadal Academy",
      title: "Offizieller Talent Scout",
      subtitle: "Direkter Pfad zur Weltklasse-Akademie Mallorca",
      icon: Star,
    },
    {
      badge: "USTA & DTB",
      title: "Diplom & Leistungssport",
      subtitle: "US-amerikanische & deutsche Spitzenlizenzen",
      icon: ShieldCheck,
    },
    {
      badge: "SG Weiterstadt",
      title: "Offizieller Trainingsbetrieb",
      subtitle: "Winter- & Sommersaison für Jugend & Erwachsene",
      icon: Award,
    },
    {
      badge: "Yonex Tennis",
      title: "Offizieller Ausrüstungspartner",
      subtitle: "Modernste Racket- & Bespannungstechnologie",
      icon: Sparkles,
    }
  ];

  return (
    <section className="relative z-20 py-8 bg-slate-900/90 border-y border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest font-bold text-slate-400 mb-6">
          Zertifizierte Spitzenförderung & Renommierte Partnerschaften
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <motion.div
                key={cred.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-tennis-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-tennis-400/10 text-tennis-300 border border-tennis-400/20">
                    {cred.badge}
                  </span>
                  <Icon className="w-4 h-4 text-tennis-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight mb-1">
                    {cred.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {cred.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

