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

/**
 * Main application landing page for Tennisschule Amir.
 * Combines Living For Tennis's modern architectural hierarchy with ts-amir.de's genuine credentials.
 */
export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>('Schnupperstunde (Kostenlos)');

  /**
   * Triggers the booking modal with a default or specific program title.
   * @param programName Name of the training program to pre-fill.
   */
  const handleOpenBooking = (programName?: string) => {
    if (programName) {
      setSelectedProgram(programName);
    } else {
      setSelectedProgram('Schnupperstunde (Kostenlos)');
    }
    setIsBookingOpen(true);
  };

  /**
   * Handles program card selection from the 3-tier programs section.
   */
  const handleSelectProgram = (programId: string) => {
    const titles: Record<string, string> = {
      'group-lessons': 'Kids / Jugend / Erwachsenen Gruppentraining',
      'private-lessons': 'Privattraining 10er Karte (€550)',
      'camps-clinics': 'Tenniscamp 2026 Weiterstadt',
    };
    handleOpenBooking(titles[programId] || 'Gruppentraining');
  };

  /**
   * Handles plan selection from the pricing calculator matrix.
   */
  const handleSelectPricingPlan = (plan: PricingPlan) => {
    handleOpenBooking(`${plan.title} - ${plan.season === 'winter' ? 'Winter 2026/27' : 'Sommer 2026'} (€${plan.price})`);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-tennis-accent selection:text-slate-950">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* Trust & Accreditations (ATP / Rafa Nadal Academy / SG Weiterstadt) */}
      <TrustBadges />

      {/* 3-Tier Programs (Living For Tennis Structure) */}
      <ProgramsSection onSelectProgram={handleSelectProgram} />

      {/* Instructor Showcase (Meet Your Coach Amir Reza) */}
      <AboutCoach />

      {/* Pricing Matrix with Season Tabs */}
      <PricingCalculator onSelectPlan={handleSelectPricingPlan} />

      {/* Feriencamps & Clinics */}
      <CampsAndEvents onBookCamp={() => handleOpenBooking('Tenniscamp 2026 Weiterstadt')} />

      {/* Success Stories & Testimonials */}
      <SuccessStories />

      {/* Contact, Impressum & SG Weiterstadt Venue */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Booking & Lead Generation Modal */}
      <InteractiveBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedProgram={selectedProgram}
      />
    </div>
  );
}
