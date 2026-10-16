import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/data/content';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import type { PillarId } from '@/types/content';

export const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | PillarId>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredServices = services.filter((s) => {
    if (activeFilter === 'all') return true;
    return s.pillars.includes(activeFilter);
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="solucoes" className="py-20 md:py-32 bg-surface/40 border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Topo da seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-muted uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" />
              <span>Nossas Soluções</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-fg leading-tight">
              Especialização em cada frente.
              <br />
              <span className="text-muted font-normal">Visão do todo.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
              Nossa atuação reúne análise, planejamento e execução diária. Cada frente considera o
              contexto comercial e o momento de escala da sua operação.
            </p>
          </div>

          {/* Filtros rápidos por pilar */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-150 border ${
                activeFilter === 'all'
                  ? 'bg-fg text-bg border-fg shadow-sm'
                  : 'bg-surface text-muted border-line hover:text-fg hover:bg-surface-2'
              }`}
            >
              Todas (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('atrair')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-150 border ${
                activeFilter === 'atrair'
                  ? 'bg-brand-coral text-white border-brand-coral shadow-sm'
                  : 'bg-surface text-muted border-line hover:text-fg hover:bg-surface-2'
              }`}
            >
              Atrair
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('converter')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-150 border ${
                activeFilter === 'converter'
                  ? 'bg-brand-yellow text-ink border-brand-yellow shadow-sm'
                  : 'bg-surface text-muted border-line hover:text-fg hover:bg-surface-2'
              }`}
            >
              Converter
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('relacionar')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-150 border ${
                activeFilter === 'relacionar'
                  ? 'bg-brand-teal text-white border-brand-teal shadow-sm'
                  : 'bg-surface text-muted border-line hover:text-fg hover:bg-surface-2'
              }`}
            >
              Relacionar
            </button>
          </div>
        </div>

        {/* Grid dos Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => {
            const isExpanded = expandedId === service.id;
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`rounded-2xl p-7 bg-surface border transition-all duration-200 flex flex-col justify-between ${
                  isExpanded ? 'border-brand-yellow/80 shadow-md ring-1 ring-brand-yellow/30' : 'border-line hover:border-line/80'
                }`}
              >
                <div>
                  {/* Topo do card: Ícone + Índice */}
                  <div className="flex items-center justify-between pb-5 border-b border-line mb-5">
                    <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-fg border border-line">
                      <Icon className="w-5 h-5 text-brand-yellow" />
                    </div>
                    <span className="font-mono text-xs font-bold text-muted">
                      {service.index}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="font-display font-bold text-xl text-fg mb-3 tracking-tight leading-snug">
                    {service.title}
                  </h3>

                  {/* Resumo */}
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5">
                    {service.summary}
                  </p>
                </div>

                {/* Acordeão de entregas práticas */}
                <div className="pt-4 border-t border-line">
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between text-xs font-bold text-fg py-1 focus:outline-none group"
                  >
                    <span className="group-hover:text-accent-ink transition-colors">
                      {isExpanded ? 'Ocultar entregas' : 'Conheça as entregas'} ({service.deliverables.length})
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4 text-muted group-hover:text-fg" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 pt-3 border-t border-line/60 space-y-2.5">
                          {service.deliverables.map((deliv) => (
                            <li
                              key={deliv}
                              className="flex items-start gap-2 text-xs text-muted leading-relaxed"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                              <span className="text-fg/90">{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
