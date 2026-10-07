/**
 * Domain types for Tennisschule Amir web platform.
 */

export interface ProgramTier {
  id: string;
  title: string;
  subtitle: string;
  ageGroup: string;
  description: string;
  features: string[];
  badge?: string;
  image: string;
  category: 'group' | 'private' | 'camp';
}

export interface PricingPlan {
  id: string;
  title: string;
  season: 'winter' | 'summer' | 'private';
  price: string;
  period: string;
  targetGroup: string;
  groupSize: string;
  trainerRatio: string;
  includedDetails: string[];
  featured?: boolean;
  courtFeeIncluded: boolean;
  location: string;
}

export interface CoachProfile {
  name: string;
  role: string;
  experience: string;
  bio: string;
  philosophy: string;
  qualifications: string[];
  achievements: string[];
  partnerships: string[];
  image: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  player: string;
  tournament: string;
  placement: string;
  year: string;
  category: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
