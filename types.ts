import { LucideIcon } from 'lucide-react';

export interface TierProps {
  tierName: string;
  title: string;
  description: string;
  features: string[];
  perfectFor: string;
  value: string;
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