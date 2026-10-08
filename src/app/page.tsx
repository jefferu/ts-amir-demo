'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { ProgramsSection } from '@/components/ProgramsSection';
import { AboutCoach } from '@/components/AboutCoach';
import { PricingCalculator } from '@/components/PricingCalculator';
import { CampsAndEvents } from '@/components/CampsAndEvents';
import { SuccessStories } from '@/components/SuccessStories';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { InteractiveBookingModal } from '@/components/InteractiveBookingModal';
import { PricingPlan } from '@/lib/types';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>('Schnupperstunde (Kostenlos)');

  const handleOpenBooking = (programName?: string) => {
    if (programName) {
      setSelectedProgram(programName);
    } else {
      setSelectedProgram('Schnupperstunde (Kostenlos)');
    }
    setIsBookingOpen(true);
  };

  const handleSelectProgram = (programId: string) => {
    const titles: Record<string, string> = {
      'group-lessons': 'Kids / Jugend / Erwachsenen Gruppentraining',
      'private-lessons': 'Privattraining 10er Karte (€550)',
      'camps-clinics': 'Tenniscamp 2026 Weiterstadt',
    };
    handleOpenBooking(titles[programId] || 'Gruppentraining');
  };

  const handleSelectPricingPlan = (plan: PricingPlan) => {
    handleOpenBooking(`${plan.title} - ${plan.season === 'winter' ? 'Winter 2026/27' : 'Sommer 2026'} (€${plan.price})`);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-tennis-accent selection:text-slate-950">

      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <Hero onOpenBooking={() => handleOpenBooking()} />

      <TrustBadges />

      <ProgramsSection onSelectProgram={handleSelectProgram} />

      <AboutCoach />

      <PricingCalculator onSelectPlan={handleSelectPricingPlan} />

      <CampsAndEvents onBookCamp={() => handleOpenBooking('Tenniscamp 2026 Weiterstadt')} />

      <SuccessStories />

      <ContactSection />

      <Footer />

      <InteractiveBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedProgram={selectedProgram}
      />
    </div>
  );
}

