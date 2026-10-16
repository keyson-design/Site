import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '@/data/content';

export const Process: React.FC = () => {
  return (
    <section id="processo" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-muted uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-teal" />
            <span>Como Trabalhamos</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-fg leading-tight">
            Método claro.
            <br />
            <span className="text-muted font-normal">Execução contínua em 4 passos.</span>
          </h2>
        </div>

        {/* 4 Passos do Processo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl bg-surface border border-line flex flex-col justify-between group hover:border-brand-yellow/60 transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-line mb-4">
                    <span className="font-mono text-xs font-bold text-muted">
                      PASSO {step.index}
                    </span>
                    <Icon className="w-4 h-4 text-brand-yellow" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-fg mb-2 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
