import type { LucideIcon } from 'lucide-react';

/** The three faces of the CPC cube = the three business pillars. */
export type PillarId = 'atrair' | 'converter' | 'relacionar';
export type BrandColor = 'coral' | 'yellow' | 'teal';

export interface NavLink {
  label: string;
  href: `#${string}`;
}

export interface Pillar {
  id: PillarId;
  index: string;
  verb: string;
  title: string;
  description: string;
  color: BrandColor;
  levers: string[];
  metrics: string[];
}

export interface Service {
  id: string;
  index: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  pillars: PillarId[];
  deliverables: string[];
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Metric {
  value: number;
  /** Counter start value (defaults to 0). */
  from?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface Credential {
  icon: LucideIcon;
  label: string;
}

export interface Client {
  name: string;
  /** Tailwind classes for the temporary text wordmark (replace with real logos). */
  wordmark: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Company {
  name: string;
  legalName: string;
  cnpj: string;
  email: string;
  whatsapp: { number: string; display: string };
  address: { street: string; complement: string; district: string; city: string; zip: string };
  googlePartnerUrl: string;
  social: { label: string; href: string }[];
}

export interface Founder {
  name: string;
  role: string;
  headline: string;
  bio: string[];
  photo: string;
  photoAlt: string;
  instagram: string;
  linkedin: string;
  credentials: Credential[];
  platforms: string[];
  tools: string[];
  metrics: Metric[];
}
