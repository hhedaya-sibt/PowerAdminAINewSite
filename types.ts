import { LucideIcon } from 'lucide-react';

export interface TierProps {
  title: string;
  priceLevel: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
}
