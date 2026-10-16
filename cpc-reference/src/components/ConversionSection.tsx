import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle, Clock, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { company, platformOptions, whatsappMessages } from '@/data/content';
import { buildWhatsAppUrl } from '@/lib/utils';

export const ConversionSection: React.FC = () => {
  const [name, setName] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [platform, setPlatform] = useState('');
  const [revenue, setRevenue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá Felipe! Me chamo ${name || 'um lojista'}.${
      storeUrl ? ` Minha loja é ${storeUrl}.` : ''
    }${platform ? ` Plataforma: ${platform}.` : ''}${
      revenue ? ` Faixa de faturamento: ${revenue}.` : ''
    } Gostaria de conversar sobre a aceleração do meu e-commerce.`;

    const url = buildWhatsAppUrl(msg);
    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-surface border border-line shadow-xl relative overflow-hidden">
          {/* Luz de fundo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            {/* Coluna 1: Informações e Contato Direto (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-muted uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                <span>Vamos Conversar</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-fg leading-tight">
                Conheça de perto
                <br />
                <span className="text-brand-yellow">a CPC Commerce.</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed max-w-lg">
                Converse diretamente com nosso time sobre o momento do seu e-commerce, metas e
                prioridades de crescimento.
              </p>

              {/* Botão direto WhatsApp */}
              <a
                href={buildWhatsAppUrl(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 px-6 py-4 rounded-full text-sm font-bold bg-brand-yellow text-ink hover:bg-brand-yellow/90 transition-all duration-200 shadow-md hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Conversar pelo WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Detalhes de Atendimento */}
              <div className="mt-10 pt-8 border-t border-line space-y-4 w-full text-xs text-muted">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span className="text-fg font-semibold">
                    {company.whatsapp.display} (Atendimento direto)
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                  <span>
                    {company.address.street} · {company.address.complement}
                    <br />
                    {company.address.district} · {company.address.city} · CEP {company.address.zip}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span>Segunda a Sexta · 09h às 18h</span>
                </div>
              </div>
            </div>

            {/* Coluna 2: Formulário Rápido de Diagnóstico (6 cols) */}
            <div className="lg:col-span-6 rounded-2xl p-6 sm:p-8 bg-surface-2 border border-line">
              <span className="text-xs font-bold tracking-wider text-fg uppercase block mb-1">
                Diagnóstico Inicial Sem Compromisso
              </span>
              <p className="text-xs text-muted mb-6">
                Preencha os dados abaixo para direcionar a conversa com contexto:
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-fg mb-1.5">
                    Seu nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Felipe Fontan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-line text-sm text-fg placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-yellow/60"
                  />
                </div>

                <div>
                  <label htmlFor="storeUrl" className="block text-xs font-semibold text-fg mb-1.5">
                    Link da sua loja virtual (ou Instagram)
                  </label>
                  <input
                    id="storeUrl"
                    type="text"
                    value={storeUrl}
                    onChange={(e) => setStoreUrl(e.target.value)}
                    placeholder="sualoja.com.br"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-line text-sm text-fg placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-yellow/60"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="platform" className="block text-xs font-semibold text-fg mb-1.5">
                      Plataforma atual
                    </label>
                    <select
                      id="platform"
                      value={platform}
                      onChange={(e) => setPlatform(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-line text-sm text-fg focus:outline-none focus:ring-2 focus:ring-brand-yellow/60"
                    >
                      <option value="">Selecione...</option>
                      {platformOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="revenue" className="block text-xs font-semibold text-fg mb-1.5">
                      Faturamento mensal
                    </label>
                    <select
                      id="revenue"
                      value={revenue}
                      onChange={(e) => setRevenue(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-line text-sm text-fg focus:outline-none focus:ring-2 focus:ring-brand-yellow/60"
                    >
                      <option value="">Selecione...</option>
                      <option value="Iniciando operação">Iniciando operação</option>
                      <option value="Até R$ 50 mil/mês">Até R$ 50 mil/mês</option>
                      <option value="R$ 50 mil a R$ 200 mil/mês">R$ 50 mil a R$ 200 mil/mês</option>
                      <option value="Acima de R$ 200 mil/mês">Acima de R$ 200 mil/mês</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-bold bg-fg text-bg hover:opacity-95 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                >
                  <Send className="w-4 h-4 text-brand-yellow" />
                  <span>Enviar Diagnóstico e Iniciar Conversa</span>
                </button>

                {submitted && (
                  <div className="flex items-center gap-2 text-xs text-brand-teal pt-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>Redirecionando para o WhatsApp...</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
