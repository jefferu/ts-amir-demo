'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Calendar, Send, User, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { logger } from '@/lib/logger';
import { getAssetPath } from '@/lib/utils';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
}

export const InteractiveBookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedProgram,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: preselectedProgram || 'Schnupperstunde (Kostenlos)',
    location: 'SG Weiterstadt',
    experienceLevel: 'Anfänger / Einsteiger',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedProgram) {
      setFormData((prev) => ({ ...prev, program: preselectedProgram }));
    }
  }, [preselectedProgram]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      logger.info('Simulated trial booking submission', {
        program: formData.program,
        location: formData.location,
        hasPhone: Boolean(formData.phone),
      });

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 700);
    } catch (err) {
      logger.error('Failed to submit booking inquiry', { err });
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-white/15 p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >

            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (

              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Vielen Dank für deine Anfrage!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                  Cheftrainer Amir Reza oder unser Team meldet sich innerhalb von 24 Stunden persönlich bei Ihnen zur Terminabsprache für Ihre Stunde bei der SG Weiterstadt.
                </p>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-slate-300 max-w-sm mx-auto mb-6">
                  <div className="font-bold text-white mb-1">Dringende Frage?</div>
                  <div>Rufen Sie uns direkt an unter <a href="tel:01624207661" className="text-tennis-accent font-bold">0162 - 420 76 61</a></div>
                </div>
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-3 rounded-xl bg-tennis-accent text-slate-950 font-bold text-xs uppercase tracking-wider shadow-glow"
                >
                  Fertig
                </button>
              </div>
            ) : (

              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-12 h-12 flex-shrink-0">
                    <img
                      src={getAssetPath('/images/logo.png')}
                      alt="Tennisschule Amir Logo"
                      className="w-full h-full object-contain filter drop-shadow-md"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-tennis-accent/10 text-tennis-accent text-xs font-bold uppercase tracking-wider mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Unverbindliche Buchungsanfrage
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                      Schnupperstunde oder Kurs buchen
                    </h3>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Gewünschtes Angebot:
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:ring-2 focus:ring-tennis-400 focus:outline-none"
                    >
                      <option value="Schnupperstunde (Kostenlos)" className="bg-slate-900">
                        Kostenlose Schnupperstunde
                      </option>
                      <option value="Kids Ballschule (5–8 Jahre)" className="bg-slate-900">
                        Kids Ballschule (5–8 Jahre)
                      </option>
                      <option value="Jugendtraining (9–17 Jahre)" className="bg-slate-900">
                        Jugendtraining (9–17 Jahre)
                      </option>
                      <option value="Erwachsenentraining" className="bg-slate-900">
                        Erwachsenentraining
                      </option>
                      <option value="Privattraining 10er Karte (€550)" className="bg-slate-900">
                        Privattraining 10er-Karte (€550)
                      </option>
                      <option value="Tenniscamp 2026 Weiterstadt" className="bg-slate-900">
                        Tenniscamp 2026 (Oster- / Sommerferien)
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Spielstärke:
                      </label>
                      <select
                        value={formData.experienceLevel}
                        onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:ring-2 focus:ring-tennis-400 focus:outline-none"
                      >
                        <option value="Anfänger / Noch nie gespielt" className="bg-slate-900">Anfänger</option>
                        <option value="Wiedereinsteiger" className="bg-slate-900">Wiedereinsteiger</option>
                        <option value="Fortgeschritten" className="bg-slate-900">Fortgeschritten</option>
                        <option value="Meden- / Turnierspieler" className="bg-slate-900">Medenspieler / LK</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Trainingsort:
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:ring-2 focus:ring-tennis-400 focus:outline-none"
                      >
                        <option value="SG Weiterstadt" className="bg-slate-900">SG Weiterstadt</option>
                        <option value="Region Pfungstadt / Darmstadt" className="bg-slate-900">Pfungstadt / Darmstadt</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Name & Vorname:
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Max Mustermann"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:ring-2 focus:ring-tennis-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Telefonnummer:
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0162 1234567"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:ring-2 focus:ring-tennis-400 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      E-Mail-Adresse:
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="beispiel@mail.de"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:ring-2 focus:ring-tennis-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Wunschzeiten oder Notizen (optional):
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="z.B. Bevorzugt Dienstag nachmittags oder Samstags..."
                      className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:ring-2 focus:ring-tennis-400 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-tennis-accent hover:bg-tennis-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-glow hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Wird gesendet...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Anfrage absenden</span>
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-slate-500 text-center mt-2">
                      Ihre Daten werden vertraulich behandelt und nicht weitergegeben.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

