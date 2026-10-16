import React from 'react';
import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { CpcCube } from './CpcCube';
import { buildWhatsAppUrl } from '@/lib/utils';
import { whatsappMessages } from '@/data/content';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 radial-glow pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker Superior */}
        <div className="flex items-center justify-between pb-6 border-b border-line text-[11px] font-bold tracking-[0.2em] text-muted uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span>CPC COMMERCE</span>
          </div>
          <span className="hidden sm:inline text-right text-[10px] tracking-[0.25em]">
            PERFORMANCE & GROWTH PARA E-COMMERCE
          </span>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-10 md:py-16">
          {/* Coluna de Texto (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-line text-xs font-semibold text-muted mb-6">
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
              <span>Aceleradora e Consultoria de Performance</span>
            </div>

            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.04em] leading-[0.98] text-fg">
              Conhecimento.
              <br />
              Estratégia.
              <br />
              <span className="text-brand-yellow underline decoration-brand-yellow/40 decoration-wavy decoration-from-font">
                E-commerce.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted max-w-xl leading-relaxed">
              Uma visão completa do negócio. Experiência prática desde 2010 para conectar gestão de
              mídia, estratégia comercial e relacionamento com clientes.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#metodo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-brand-yellow text-ink hover:bg-brand-yellow/90 transition-all duration-200 shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                <span>Conheça o Método CPC</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={buildWhatsAppUrl(whatsappMessages.meeting)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-bold bg-surface hover:bg-surface-2 border border-line text-fg transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Agendar Google Meet</span>
                <ArrowUpRight className="w-4 h-4 text-muted" />
              </a>

              <a
                href="#sobre"
                className="text-xs font-semibold text-muted hover:text-fg underline underline-offset-4 decoration-line transition-colors ml-1"
              >
                Quem está à frente ↗
              </a>
            </div>
          </motion.div>

          {/* Coluna Visual (5 cols) — Cubo CPC Interativo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <CpcCube />
          </motion.div>
        </div>

        {/* Rodapé da Hero — Resumo das credenciais */}
        <div className="pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-medium text-muted">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
            <span>Especialistas em lojas virtuais</span>
            <span className="text-line">•</span>
            <span>Mídia · Estratégia comercial · Relacionamento</span>
          </div>
          <div className="text-[11px] text-muted/80">
            Mais de 150 projetos de e-commerce e R$ 4 mi/mês em vendas geridas
          </div>
        </div>
      </div>
    </section>
  );
};
