'use client';

import React from 'react';
import { ArrowUp, Heart, Phone, Mail, MapPin } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex-shrink-0">
                <img
                  src={getAssetPath('/images/logo.png')}
                  alt="Tennisschule Amir"
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>
              <span className="text-white font-extrabold text-base tracking-tight">
                TENNISSCHULE <span className="text-tennis-accent">AMIR</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Professionelles Tennistraining auf der Anlage der SG Weiterstadt und in der Region Darmstadt. Geleitet von ATP A-Level Coach & ehem. Davis Cup Spieler Amir Reza.
            </p>
            <div className="text-[11px] text-slate-500">
              Powered by <span className="text-white font-semibold">Yonex</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#ueber-uns" className="hover:text-tennis-accent transition-colors">Über Cheftrainer Amir</a>
              </li>
              <li>
                <a href="#programme" className="hover:text-tennis-accent transition-colors">Trainingsprogramme</a>
              </li>
              <li>
                <a href="#preise" className="hover:text-tennis-accent transition-colors">Preise & Saison 2026/27</a>
              </li>
              <li>
                <a href="#camps" className="hover:text-tennis-accent transition-colors">Feriencamps & Clinics</a>
              </li>
              <li>
                <a href="#erfolge" className="hover:text-tennis-accent transition-colors">Turniererfolge & Galerie</a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-tennis-accent transition-colors">Kontakt & Anfahrt</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Trainingsorte
            </h4>
            <div className="space-y-3">
              <div>
                <span className="font-bold text-slate-200 block">SG Weiterstadt (Hauptstützpunkt)</span>
                <span className="text-slate-400 text-[11px]">Am Sportzentrum 1, 64331 Weiterstadt</span>
              </div>
              <div>
                <span className="font-bold text-slate-200 block">Region Pfungstadt / Darmstadt</span>
                <span className="text-slate-400 text-[11px]">Kooperation mit lokalen Vereinen & Schulen</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direktkontakt
            </h4>
            <div className="space-y-2 text-xs">
              <a href="tel:01624207661" className="flex items-center gap-2 text-tennis-accent hover:underline font-bold">
                <Phone className="w-3.5 h-3.5" />
                <span>0162 - 420 76 61</span>
              </a>
              <a href="mailto:info@ts-amir.de" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>info@ts-amir.de</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>Gerlachshöhe 28a, 64367 Mühltal</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500">
            &copy; 2026 Tennisschule Amir Reza. Alle Rechte vorbehalten. In Kooperation mit SG Weiterstadt & Rafa Nadal Academy.
          </p>

          <div className="flex items-center gap-6 text-[11px]">
            <a href="#kontakt" className="hover:text-white transition-colors">Impressum</a>
            <a href="#kontakt" className="hover:text-white transition-colors">Datenschutz</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Nach oben scrollen"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Nach oben</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

