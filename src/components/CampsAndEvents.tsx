'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sun, Trophy, Utensils, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface CampsAndEventsProps {
  onBookCamp: () => void;
}

/**
 * Camps & Holiday Clinics feature section.
 * Highlights the high-volume holiday camps, structured daily schedules, and full catering at SG Weiterstadt.
 *
 * @param onBookCamp Triggers booking modal with camp interest pre-selected.
 */
export const CampsAndEvents: React.FC<CampsAndEventsProps> = ({ onBookCamp }) => {
  const campPerks = [
    {
      icon: Users,
      title: "Über 100 Teilnehmer jährlich",
      description: "Bewährte Camp-Tradition mit homogenen Leistungsgruppen für maximalen Lerneffekt und Spaß."
    },
    {
      icon: Sun,
      title: "Oster- & Sommer-Editionen",
      description: "Mehrwöchige Camps in den Schulferien auf der gepflegten Anlage der SG Weiterstadt."
    },
    {
      icon: Utensils,
      title: "Vollverpflegung & Betreuung",
      description: "Gemeinsames warmes Mittagessen, gesunde Snacks und Rundumbetreuung durch lizensierte Coaches."
    },
    {
      icon: Trophy,
      title: "Abschlussturnier & Pokale",
      description: "Spannende Matchpraxis am Finaltag mit Siegerehrung, Urkunden und exklusiven Yonex-Sachpreisen."
    }
  ];

  return (
    <section id="camps" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-tennis-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Grid */}
        <div className="rounded-3xl bg-slate-900/90 border border-white/15 p-8 sm:p-12 lg:p-16 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          
          {/* Subtle Tennis Court Line Motif */}
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full border border-tennis-400/10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tennis-accent/10 border border-tennis-accent/30 text-tennis-accent text-xs font-bold uppercase tracking-wider mb-6">
                <Calendar className="w-3.5 h-3.5" />
                Tenniscamps 2026 – Jetzt Plätze sichern
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                Unvergessliche Tenniscamps in Weiterstadt & Pfungstadt
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                In den Schulferien verwandeln wir die Tennisplätze in ein echtes Tennis-Camp! 
                Mit täglichem Schlagtraining, Taktikschulung, Athletikübungen und viel Action schaffen wir die perfekte Kombination aus sportlicher Weiterentwicklung und Ferienspaß. Sowohl für Anfänger als auch für ambitionierte Turnierspieler.
              </p>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {campPerks.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <div key={perk.title} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-tennis-accent/10 text-tennis-accent flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{perk.title}</h4>
                        <p className="text-[11px] text-slate-400 leading-snug">{perk.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onBookCamp}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-tennis-accent hover:bg-tennis-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-glow hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>Camp-Platz anfragen</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-400">
                  Frühbucher-Vorteil für SG Weiterstadt Mitglieder
                </span>
              </div>
            </div>

            {/* Right Visual Highlight */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950 aspect-[4/3] relative group">
                <img
                  src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=800&q=80"
                  alt="Tenniscamp Weiterstadt Impressionen"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-court-800 text-tennis-accent">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Oster- & Sommercamps</div>
                      <div className="text-[11px] text-slate-400">Täglich von 09:30 bis 15:30 Uhr</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
