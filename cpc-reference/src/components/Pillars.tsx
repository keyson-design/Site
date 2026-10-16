import React from 'react';
import { motion } from 'framer-motion';
import { pillars } from '@/data/content';
import { brandTheme } from '@/lib/brand';
import { ArrowUpRight } from 'lucide-react';

export const Pillars: React.FC = () => {
  return (
    <section id="metodo" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-muted uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-coral" />
            <span>O Método CPC Commerce</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.08] text-fg">
            E-commerce é um negócio.
            <br />
            <span className="text-muted font-normal italic">
              É assim que olhamos para ele.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
            A CPC Commerce conecta a gestão de tráfego pago à realidade comercial da loja.
            Estoque, margem, calendário promocional, jornada de compra e fidelização não podem
            operar em silos isolados.
          </p>
        </div>

        {/* Grid dos 3 Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const theme = brandTheme[pillar.color];

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`group relative rounded-2xl p-8 bg-surface border border-line hover:${theme.border} transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden`}
              >
                {/* Glow decorativo suave no hover */}
                <div
                  className={`absolute -top-24 -right-24 w-48 h-48 rounded-full ${theme.soft} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div>
                  {/* Topo: Índice + Indicador de cor */}
                  <div className="flex items-center justify-between pb-6 border-b border-line mb-6">
                    <span className="font-mono text-xs font-bold tracking-wider text-muted">
                      {pillar.index} / {pillar.verb.toUpperCase()}
                    </span>
                    <span className={`w-2.5 h-2.5 rounded-full ${theme.dot}`} />
                  </div>

                  {/* Título */}
                  <h3 className="font-display font-bold text-2xl text-fg mb-4 tracking-tight">
                    {pillar.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Alavancas Práticas */}
                  <div className="mb-6">
                    <span className="text-[10px] font-bold tracking-wider text-muted uppercase block mb-3">
                      Alavancas de Atuação
                    </span>
                    <ul className="space-y-2">
                      {pillar.levers.map((lever) => (
                        <li key={lever} className="flex items-center gap-2 text-xs text-fg/90">
                          <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                          <span>{lever}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Métricas-chave (Rodapé do Card) */}
                <div className="pt-6 border-t border-line">
                  <span className="text-[10px] font-bold tracking-wider text-muted uppercase block mb-2">
                    Métricas de Sucesso
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-2.5 py-1 rounded-md bg-surface-2 text-[11px] font-medium text-fg/80 border border-line/60"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#solucoes"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-fg group-hover:underline underline-offset-4"
                  >
                    <span>Ver soluções conectadas</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
