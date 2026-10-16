import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { company, navLinks } from '@/data/content';
import { buildWhatsAppUrl } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-bg/85 glass-panel border-b border-line transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#inicio"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow/60 rounded-md"
          aria-label="CPC Commerce - Início"
        >
          <img
            src="/cpc-logo.png"
            alt="Logo CPC Commerce"
            className="w-9 h-10 object-contain transition-transform duration-200 group-hover:scale-105"
            width={36}
            height={40}
          />
          <div className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-lg tracking-tight text-fg">
              CPC
            </span>
            <span className="text-[10px] font-bold tracking-[0.22em] text-muted uppercase mt-0.5">
              COMMERCE
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wide uppercase text-muted"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-fg transition-colors duration-150 py-2 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-fg text-bg hover:opacity-90 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-muted hover:text-fg hover:bg-surface border border-line focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Alternar menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
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
            className="md:hidden border-b border-line bg-surface/95 glass-panel px-6 py-5 flex flex-col gap-4"
          >
            <nav className="flex flex-col gap-3 text-sm font-semibold text-muted">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-fg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-line flex flex-col gap-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-brand-yellow text-ink shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp ({company.whatsapp.display})</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
