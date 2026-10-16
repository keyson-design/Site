import React from 'react';
import { motion } from 'framer-motion';
import { founder } from '@/data/content';
import { ArrowUpRight, Instagram, Linkedin } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-surface/50 border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro com Foto e Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna da Foto (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-line bg-surface-2 shadow-xl group">
              <img
                src={founder.photo}
                alt={founder.photoAlt}
                className="w-full h-auto object-cover object-top aspect-[3/4] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={360}
                height={480}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-yellow uppercase block mb-1">
                  Liderança Técnica
                </span>
                <strong className="text-xl font-display font-bold block">{founder.name}</strong>
                <span className="text-xs text-white/80 block">{founder.role}</span>
              </div>
            </div>
          </motion.div>

          {/* Coluna da Biografia e Credenciais (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col items-start"
          >
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-muted uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" />
              <span>Quem está à frente da CPC Commerce</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-fg leading-tight">
              Conhecimento construído
              <br />
              <span className="text-brand-yellow">na prática do e-commerce.</span>
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
              {founder.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Credenciais Formativas */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
              {founder.credentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={cred.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-line text-xs font-medium text-fg"
                  >
                    <Icon className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span>{cred.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Plataformas atendidas */}
            <div className="mt-8 pt-6 border-t border-line w-full">
              <span className="text-[10px] font-bold tracking-wider text-muted uppercase block mb-3">
                Plataformas & Tecnologias
              </span>
              <div className="flex flex-wrap gap-2">
                {founder.platforms.map((plat) => (
                  <span
                    key={plat}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-surface-2 text-fg/90 border border-line"
                  >
                    {plat}
                  </span>
                ))}
              </div>
            </div>

            {/* Links Sociais */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={founder.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-fg hover:text-brand-yellow transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram @felipe_fontan</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>

              <span className="text-line">•</span>

              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-fg hover:text-brand-yellow transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Grade de 6 Métricas de Autoridade (Stats) */}
        <div className="mt-16 pt-12 border-t border-line grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {founder.metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-surface border border-line text-center flex flex-col justify-center"
            >
              <strong className="font-display font-extrabold text-2xl sm:text-3xl text-brand-yellow tracking-tight leading-none block">
                {metric.prefix ?? ''}
                {metric.value}
                {metric.suffix ?? ''}
              </strong>
              <span className="text-[11px] text-muted font-medium mt-2 leading-tight block">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
