'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, Menu, X, Award, ChevronRight } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

interface NavbarProps {
  onOpenBooking: (prefillProgram?: string) => void;
}

/**
 * Responsive navigation bar featuring glassmorphic design and direct access CTAs.
 * Implements sticky scrolling state detection for visual elevation.
 *
 * @param onOpenBooking Callback to trigger the interactive booking modal.
 */
export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll offset to adjust background density for readability over dynamic content
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Über Amir', href: '#ueber-uns' },
    { label: 'Programme', href: '#programme' },
    { label: 'Preise & Saison', href: '#preise' },
    { label: 'Camps 2026', href: '#camps' },
    { label: 'Erfolge', href: '#erfolge' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-gradient-to-b from-slate-950/90 to-transparent backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Branding */}
          <a href="#" className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-tennis-400 rounded-xl p-1">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 flex-shrink-0 flex items-center justify-center">
              <img
                src={getAssetPath('/images/logo.png')}
                alt="Tennisschule Amir"
                className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-base sm:text-lg tracking-tight leading-none">
                TENNISSCHULE <span className="text-tennis-accent">AMIR</span>
              </span>
              <span className="text-slate-400 text-[10px] tracking-wider uppercase font-bold flex items-center gap-1.5 mt-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-tennis-400 animate-pulse"></span>
                ATP Coach & Rafa Nadal Scout
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Hauptnavigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-tennis-accent hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-tennis-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Call */}
            <a
              href="tel:01624207661"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-tennis-400"
              title="Direkt anrufen"
            >
              <Phone className="w-3.5 h-3.5 text-tennis-400" />
              <span>0162 - 420 76 61</span>
            </a>

            {/* Primary Booking Button */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-bold text-slate-950 bg-tennis-accent hover:bg-tennis-300 rounded-full shadow-glow hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-tennis-400"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schnupperstunde</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-tennis-accent rounded-full"
            >
              Buchen
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-tennis-400"
              aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-slate-200 hover:text-tennis-accent hover:bg-white/5 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="tel:01624207661"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-slate-200"
                >
                  <Phone className="w-4 h-4 text-tennis-400" />
                  <span>0162 - 420 76 61 anrufen</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-xl bg-tennis-accent text-slate-950 font-bold text-sm tracking-wide shadow-glow"
                >
                  Kostenlose Schnupperstunde buchen
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
