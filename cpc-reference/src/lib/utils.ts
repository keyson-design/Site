import { company, whatsappMessages } from '@/data/content';

export function buildWhatsAppUrl(message: string = whatsappMessages.default): string {
  return `https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
