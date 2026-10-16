import type { BrandColor } from '@/types/content';

/** Static class maps per brand color (kept literal so Tailwind can detect them). */
export const brandTheme: Record<
  BrandColor,
  { hex: string; dot: string; text: string; soft: string; border: string; glow: string }
> = {
  coral: {
    hex: '#f24764',
    dot: 'bg-brand-coral',
    text: 'text-coral-ink',
    soft: 'bg-brand-coral/10',
    border: 'border-brand-coral/50',
    glow: 'from-brand-coral/25',
  },
  yellow: {
    hex: '#ffbd2d',
    dot: 'bg-brand-yellow',
    text: 'text-accent-ink',
    soft: 'bg-brand-yellow/15',
    border: 'border-brand-yellow/60',
    glow: 'from-brand-yellow/25',
  },
  teal: {
    hex: '#00b9bb',
    dot: 'bg-brand-teal',
    text: 'text-teal-ink',
    soft: 'bg-brand-teal/10',
    border: 'border-brand-teal/50',
    glow: 'from-brand-teal/25',
  },
};
