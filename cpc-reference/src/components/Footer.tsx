import React from 'react';
import { company, navLinks } from '@/data/content';
import { ArrowUp, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/utils';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-line text-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-line">
          {/* Coluna 1: Marca (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#inicio" className="flex items-center gap-3 group mb-4">
              <img
                src="/cpc-logo.png"
                alt="Logo CPC Commerce"
                className="w-9 h-10 object-contain"
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

            <p className="text-xs text-muted max-w-sm leading-relaxed mb-6">
              Estratégia e performance para e-commerce. Conectamos gestão de mídia à realidade
              comercial da sua loja virtual para acelerar crescimento sustentável.
            </p>

            <a
              href={company.googlePartnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-line text-[11px] font-semibold text-fg hover:border-brand-yellow/60 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-brand-yellow" />
              <span>Agência Certificada Google Partner</span>
              <ArrowUpRight className="w-3 h-3 text-muted" />
            </a>
          </div>

          {/* Coluna 2: Navegação Rápida (3 cols) */}
          <div className="md:col-span-3">
            <span className="text-xs font-bold uppercase tracking-wider text-fg block mb-4">
              Navegação
            </span>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-fg transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fg transition-colors font-semibold text-accent-ink"
                >
                  Falar no WhatsApp ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Dados Cadastrais e Legais (4 cols) */}
          <div className="md:col-span-4 text-xs space-y-2 leading-relaxed">
            <span className="text-xs font-bold uppercase tracking-wider text-fg block mb-4">
              Dados Institucionais
            </span>
            <p className="font-semibold text-fg">{company.legalName}</p>
            <p className="text-muted">CNPJ: {company.cnpj}</p>
            <p className="text-muted">
              {company.address.street} · {company.address.complement}
              <br />
              {company.address.district} · {company.address.city}
              <br />
              CEP {company.address.zip}
            </p>
            <p className="pt-2 text-fg font-medium">
              WhatsApp:{' '}
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-ink"
              >
                {company.whatsapp.display}
              </a>
            </p>
          </div>
        </div>

        {/* Rodapé inferior com Copyright e botão Voltar ao Topo */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            © {new Date().getFullYear()} CPC Commerce. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            {company.social.map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fg transition-colors"
              >
                {soc.label}
              </a>
            ))}

            <a
              href="#inicio"
              aria-label="Voltar ao início"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-line bg-surface-2 hover:bg-surface text-fg transition-all"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
