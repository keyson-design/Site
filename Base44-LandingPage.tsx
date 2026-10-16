import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  TrendingUp,
  Target,
  Users,
  BarChart3,
  Search,
  ShoppingCart,
  Send,
  HelpCircle,
  ChevronDown,
  Moon,
  Sun,
  Instagram,
  Linkedin,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Award,
  Layers,
  GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================================================
// DADOS INSTITUCIONAIS CPC COMMERCE (Single Source of Truth)
// ============================================================================
export const cpcData = {
  brand: {
    name: 'CPC Commerce',
    tagline: 'Conhecimento. Estratégia. E-commerce.',
    description: 'Aceleradora e consultoria de performance especializada em lojas virtuais que faturam acima de R$ 30k/mês.',
    whatsapp: '5511999999999',
    cnpj: '28.241.296/0001-51',
    address: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP',
  },
  metrics: [
    { value: '+150', label: 'Projetos de E-commerce atendidos' },
    { value: '+R$ 4 mi/mês', label: 'Em vendas gerenciadas (só loja virtual)' },
    { value: '+R$ 400k/mês', label: 'Em investimento em mídia de performance' },
    { value: '+900', label: 'Alunos formados no ecossistema' },
  ],
  pillars: [
    {
      id: 'atrair',
      number: '01',
      title: 'Atrair',
      subtitle: 'Mídia Paga & Tráfego Qualificado',
      color: '#f24764',
      badgeClass: 'text-[#f24764] bg-[#f24764]/10 border-[#f24764]/20',
      description: 'Atraia quem realmente tem intenção de compra. Estruturamos campanhas orientadas a ROAS e margem de contribuição real da sua loja.',
      deliverables: [
        'Meta Ads (Facebook & Instagram) focado em catálogo e conversão',
        'Google Ads (Shopping, Performance Max, Busca de alta intenção)',
        'Estrutura de criativos dinâmicos com testes contínuos A/B',
        'Remarketing inteligente segmentado por estágio de interesse',
      ],
    },
    {
      id: 'converter',
      number: '02',
      title: 'Converter',
      subtitle: 'Ofertas, CRO & Experiência de Compra',
      color: '#ffbd2d',
      badgeClass: 'text-[#ffbd2d] bg-[#ffbd2d]/10 border-[#ffbd2d]/20',
      description: 'Tráfego sem conversão é custo. Otimizamos a página do produto, o carrinho, o checkout e a esteira de ofertas para elevar a taxa de conversão.',
      deliverables: [
        'Auditoria completa de usabilidade (CRO mobile & desktop)',
        'Estratégia comercial: kits, bundles e order bumps',
        'Redução de abandono de carrinho e atritos no checkout',
        'Copywriting e páginas focadas nas dores do seu cliente',
      ],
    },
    {
      id: 'relacionar',
      number: '03',
      title: 'Relacionar',
      subtitle: 'CRM, LTV & Recompra Contínua',
      color: '#00b9bb',
      badgeClass: 'text-[#00b9bb] bg-[#00b9bb]/10 border-[#00b9bb]/20',
      description: 'O maior lucro do e-commerce está na recompra. Transformamos compradores pontuais em clientes fiéis através de réguas automáticas de CRM.',
      deliverables: [
        'Réguas automatizadas de e-mail marketing e WhatsApp',
        'Segmentação por comportamento de compra e ticket médio',
        'Campanhas de pós-venda, aniversários e recompra programada',
        'Estratégias de fidelização que multiplicam o LTV da base',
      ],
    },
  ],
  services: [
    {
      title: 'Gestão de Mídia & Tráfego Pago',
      category: 'Atração',
      desc: 'Gestão técnica de Meta Ads, Google Ads e TikTok Ads com foco obsessivo em ROAS real e margem.',
      icon: Target,
      highlight: 'ROAS & Escala',
    },
    {
      title: 'CRO & Otimização de Conversão',
      category: 'Conversão',
      desc: 'Testes de usabilidade e melhorias na experiência de navegação mobile para dobrar sua taxa de conversão.',
      icon: TrendingUp,
      highlight: '+ Conversão',
    },
    {
      title: 'Estratégia Comercial & Ofertas',
      category: 'Conversão',
      desc: 'Desenho de campanhas sazonais, combos de produtos, aumento de ticket médio e esteiras promocionais.',
      icon: ShoppingCart,
      highlight: 'Ticket Médio',
    },
    {
      title: 'CRM & Automação de Recompra',
      category: 'Relacionamento',
      desc: 'Fluxos automáticos de WhatsApp e e-mail marketing para gerar vendas sem custo adicional de mídia.',
      icon: Users,
      highlight: '+ LTV',
    },
    {
      title: 'Consultoria Estratégica Quinzenal',
      category: 'Gestão',
      desc: 'Reuniões de alinhamento com a diretoria técnica da CPC para direcionar decisões e traçar metas.',
      icon: BarChart3,
      highlight: 'Diretoria',
    },
    {
      title: 'Diagnóstico & Auditoria 360°',
      category: 'Diagnóstico',
      desc: 'Análise profunda de métricas, produtos campeões, furos operacionais e plano de crescimento para 90 dias.',
      icon: Search,
      highlight: 'Plano 90D',
    },
  ],
  steps: [
    { step: '01', title: 'Diagnóstico 360°', desc: 'Análise profunda dos números, margens, produtos campeões e gargalos do e-commerce.' },
    { step: '02', title: 'Plano Tático 90D', desc: 'Metas semanais, orçamento de mídia e calendário de ofertas alinhados com o time da loja.' },
    { step: '03', title: 'Execução Integrada', desc: 'Tráfego pago, página de produto e réguas de CRM rodando em perfeita sincronia.' },
    { step: '04', title: 'Análise & Escala', desc: 'Acompanhamento diário das métricas e realocação ágil de verba para os canais de maior lucro.' },
  ],
  founder: {
    name: 'Felipe Fontan',
    role: 'CEO & Diretor Técnico da CPC Commerce',
    bio: [
      'Especialista em performance para e-commerce desde 2010 com foco exclusivo em lojas virtuais.',
      'Graduado em Ciências da Computação e Pós-Graduado em Marketing Digital & E-commerce, unindo profundidade técnica e visão estratégica comercial.',
      'Já liderou mais de 150 operações de lojas virtuais, com mais de 85 mentorias individuais executivas e R$ 4 milhões em faturamento gerenciado por mês.',
    ],
    credentials: [
      'Graduado em Ciências da Computação',
      'Pós-Graduado em Marketing Digital e E-commerce',
      '+150 Projetos de E-commerce atendidos',
      '+85 Mentorias Executivas individuais',
      '+900 Alunos formados no ecossistema',
      '+R$ 4 mi/mês em vendas sob gestão',
    ],
    platforms: ['VTEX', 'Shopify', 'Nuvemshop', 'Tray', 'WooCommerce', 'Loja Integrada', 'Magento'],
  },
  faqs: [
    {
      q: 'Para quais e-commerces a CPC Commerce é indicada?',
      a: 'Nosso método é ideal para e-commerces que já faturam a partir de R$ 30k a R$ 50k por mês e desejam ultrapassar os 6 e 7 dígitos de forma sustentável e lucrativa.',
    },
    {
      q: 'Qual é o diferencial da CPC frente a agências tradicionais?',
      a: 'Agências comuns olham apenas para cliques e impressões. A CPC atua como consultoria e aceleradora técnica de ponta a ponta: olhamos margem de contribuição, CRO, ofertas e retenção em CRM, não só o gerenciador de anúncios.',
    },
    {
      q: 'Quais plataformas de e-commerce vocês atendem?',
      a: 'Atendemos todas as principais plataformas do mercado nacional e global: VTEX, Shopify, Nuvemshop, Tray, WooCommerce, Loja Integrada, Magento e Wake.',
    },
    {
      q: 'Existe contrato com fidelidade abusiva?',
      a: 'Trabalhamos com modelo transparente focado em resultados. O nosso foco é que você continue conosco pelo crescimento gerado na sua loja, com reuniões quinzenais de prestação de contas.',
    },
    {
      q: 'Como funciona o diagnóstico inicial gratuito?',
      a: 'Você preenche o formulário rápido de qualificação ou nos chama no WhatsApp. Nosso time técnico analisa os seus números e apresenta um plano com as principais alavancas de crescimento para a sua loja.',
    },
  ],
};

// ============================================================================
// COMPONENTE: CUBO CPC ISOMÉTRICO 3D COM ÓRBITAS DINÂMICAS
// ============================================================================
export const CpcCubeVisual: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center select-none w-full max-w-[440px] aspect-square">
      {/* Glow radial de fundo dinâmico */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f24764]/15 via-[#ffbd2d]/15 to-[#00b9bb]/15 blur-3xl pointer-events-none animate-pulse" />

      {/* Órbita 1: Externa (Amarelo / Conversão) */}
      <motion.div
        className="absolute w-[330px] h-[330px] sm:w-[400px] sm:h-[400px] pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full border border-current opacity-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <span className="absolute w-4 h-4 rounded-full bg-[#ffbd2d]/30 animate-ping" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2d] shadow-[0_0_14px_#ffbd2d]" />
          </div>
        </div>
      </motion.div>

      {/* Órbita 2: Intermediária Tracejada (Teal / Relacionamento) */}
      <motion.div
        className="absolute w-[265px] h-[265px] sm:w-[320px] sm:h-[320px] pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full border border-dashed border-current opacity-25 relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00b9bb] shadow-[0_0_12px_#00b9bb]" />
          </div>
        </div>
      </motion.div>

      {/* Órbita 3: Interna Fina (Coral / Atração) */}
      <motion.div
        className="absolute w-[205px] h-[205px] sm:w-[245px] sm:h-[245px] pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full border border-[#f24764]/30 relative">
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#f24764] shadow-[0_0_10px_#f24764]" />
          </div>
        </div>
      </motion.div>

      {/* SVG do Cubo com animação de flutuação */}
      <motion.div
        className="relative z-10 w-[230px] sm:w-[275px] drop-shadow-[0_24px_38px_rgba(0,0,0,0.35)] cursor-pointer"
        animate={{
          y: [-5, 5, -5],
          rotate: [-0.8, 0.8, -0.8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg viewBox="0 0 200 220" className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
          {/* Sombra de apoio respirando */}
          <ellipse cx="100" cy="208" rx="65" ry="12" fill="rgba(0,0,0,0.22)" />

          {/* Face 1: Amarelo (Superior / Converter) */}
          <polygon
            points="100,12 178,57 178,142 100,97"
            fill="#ffbd2d"
            stroke="#131615"
            strokeWidth="4"
            strokeLinejoin="round"
            className="transition-all duration-200 hover:brightness-110"
          />

          {/* Face 2: Coral (Esquerda / Atrair) */}
          <polygon
            points="100,12 22,57 22,142 100,97"
            fill="#f24764"
            stroke="#131615"
            strokeWidth="4"
            strokeLinejoin="round"
            className="transition-all duration-200 hover:brightness-110"
          />

          {/* Face 3: Teal (Inferior / Relacionar) */}
          <polygon
            points="100,97 178,142 100,187 22,142"
            fill="#00b9bb"
            stroke="#131615"
            strokeWidth="4"
            strokeLinejoin="round"
            className="transition-all duration-200 hover:brightness-110"
          />
        </svg>
      </motion.div>
    </div>
  );
};

// ============================================================================
// COMPONENTE PRINCIPAL CONSOLIDADO PARA BASE44
// ============================================================================
export default function CpcCommerceLandingPage() {
  const [isDark, setIsDark] = useState(true);
  const [activePillarTab, setActivePillarTab] = useState<'atrair' | 'converter' | 'relacionar'>('atrair');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    urlLoja: '',
    faturamento: 'R$ 30k a R$ 80k/mês',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Toggle do modo escuro / claro
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const whatsappBaseUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
    'Olá Felipe e equipe CPC Commerce! Gostaria de agendar um diagnóstico de performance para a minha loja virtual.'
  )}`;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const msg = `Olá CPC Commerce! Gostaria de um diagnóstico.%0A%0ANome: ${formState.nome}%0ALoja: ${formState.urlLoja}%0AFaturamento: ${formState.faturamento}%0AWhatsApp: ${formState.whatsapp}`;
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-[#0c0e0d] text-[#f2f4f3]' : 'bg-[#f7f9f8] text-[#131615]'
      }`}
    >
      {/* ==================================================================== */}
      {/* HEADER STICKY */}
      {/* ==================================================================== */}
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-300 ${
          isDark ? 'bg-[#0c0e0d]/85 border-white/10' : 'bg-[#f7f9f8]/90 border-black/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#ffbd2d] flex items-center justify-center font-display font-black text-black text-sm">
              CPC
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-extrabold text-lg tracking-tight">CPC</span>
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#86908b] uppercase mt-0.5">
                COMMERCE
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wide uppercase text-[#86908b]">
            <a href="#metodo" className="hover:text-current transition-colors">
              Método
            </a>
            <a href="#solucoes" className="hover:text-current transition-colors">
              Soluções
            </a>
            <a href="#processo" className="hover:text-current transition-colors">
              Processo
            </a>
            <a href="#sobre" className="hover:text-current transition-colors">
              Sobre
            </a>
            <a href="#faq" className="hover:text-current transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl border border-current/10 hover:border-current/30 transition-colors"
              title="Alternar Tema"
            >
              {isDark ? <Sun className="w-4 h-4 text-[#ffbd2d]" /> : <Moon className="w-4 h-4 text-gray-700" />}
            </button>

            <a
              href="#diagnostico"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#ffbd2d] text-black hover:bg-[#ffcd48] transition-all shadow-md hover:scale-105"
            >
              <span>Diagnóstico Gratuito</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ==================================================================== */}
      {/* HERO SECTION */}
      {/* ==================================================================== */}
      <section id="inicio" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between pb-6 border-b border-current/10 text-[11px] font-bold tracking-[0.2em] text-[#86908b] uppercase">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffbd2d]" />
              <span>CPC COMMERCE</span>
            </div>
            <span className="hidden sm:inline text-right text-[10px] tracking-[0.25em]">
              PERFORMANCE & GROWTH PARA E-COMMERCE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-10 md:py-16">
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-current/10 text-xs font-semibold text-[#86908b] mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#ffbd2d]" />
                <span>Aceleradora e Consultoria de Performance</span>
              </div>

              <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.04em] leading-[0.98]">
                Conhecimento.
                <br />
                Estratégia.
                <br />
                <span className="text-[#ffbd2d] underline decoration-[#ffbd2d]/40 decoration-wavy">
                  E-commerce.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#86908b] max-w-xl leading-relaxed">
                Tráfego sem conversão é custo. Conversão sem retenção é desperdício. Nós unimos os 3 pilares da
                performance para escalar o lucro da sua loja virtual.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href="#diagnostico"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-[#ffbd2d] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg hover:bg-[#ffcd48] transition-all hover:scale-105"
                >
                  <span>Agendar Diagnóstico Gratuito</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>

                <a
                  href={whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-current/20 font-bold text-sm hover:border-current/50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <CpcCubeVisual />
            </div>
          </div>

          <div className="pt-6 border-t border-current/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-medium text-[#86908b]">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2d]" />
              <span>Especialistas em lojas virtuais</span>
              <span>•</span>
              <span>Mídia · Estratégia comercial · Relacionamento</span>
            </div>
            <div className="text-[11px] text-[#86908b]/80">
              Mais de 150 projetos de e-commerce e R$ 4 mi/mês em vendas geridas
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* NÚMEROS E PROVA SOCIAL */}
      {/* ==================================================================== */}
      <section className="py-12 border-y border-current/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cpcData.metrics.map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#ffbd2d]">
                  {m.value}
                </span>
                <span className="text-xs text-[#86908b] mt-1 font-medium">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* OS 3 PILARES DO MÉTODO CPC */}
      {/* ==================================================================== */}
      <section id="metodo" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#86908b] uppercase block mb-3">
              Metodologia Proprietária
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Os 3 Pilares da Performance <span className="text-[#ffbd2d]">para E-commerce</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#86908b]">
              A maioria das agências só cuida de anúncios. A CPC trabalha os 3 pilares essenciais para fazer o
              e-commerce lucrar no curto e no longo prazo.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cpcData.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-8 rounded-3xl border border-current/10 relative flex flex-col justify-between hover:border-current/30 transition-all shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="font-mono text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider"
                      style={{ color: pillar.color, backgroundColor: `${pillar.color}20` }}
                    >
                      Pilar {pillar.number}
                    </span>
                    <span className="text-2xl font-black opacity-20">0{pillar.number}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl mb-1">{pillar.title}</h3>
                  <span className="text-xs font-semibold text-[#86908b] block mb-4">
                    {pillar.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-[#86908b] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-6 border-t border-current/10">
                  {pillar.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: pillar.color }} />
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SOLUÇÕES E ENTREGAS */}
      {/* ==================================================================== */}
      <section id="solucoes" className="py-20 border-t border-current/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#86908b] uppercase block mb-3">
                Soluções Técnicas
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
                Como aceleramos a sua loja virtual
              </h2>
            </div>
            <a
              href="#diagnostico"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#ffbd2d] hover:underline uppercase tracking-wider"
            >
              <span>Solicitar auditoria personalizada</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cpcData.services.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.title}
                  className="p-6 rounded-2xl border border-current/10 hover:border-current/30 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-current/5 flex items-center justify-center text-[#ffbd2d] mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#86908b] block mb-1">
                      {srv.category}
                    </span>
                    <h3 className="font-display font-bold text-lg mb-2">{srv.title}</h3>
                    <p className="text-xs sm:text-sm text-[#86908b] leading-relaxed">{srv.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-current/5 flex items-center justify-between text-xs font-bold">
                    <span className="text-[#ffbd2d]">{srv.highlight}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* PROCESSO DE 4 PASSOS */}
      {/* ==================================================================== */}
      <section id="processo" className="py-20 border-t border-current/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#86908b] uppercase block mb-3">
              Passo a Passo
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
              Como trabalhamos juntos
            </h2>
            <p className="mt-3 text-sm text-[#86908b]">
              Uma jornada clara para levar o seu e-commerce do estado atual para a escala lucrativa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cpcData.steps.map((st) => (
              <div key={st.step} className="p-6 rounded-2xl border border-current/10 relative">
                <span className="font-mono text-xs font-bold text-[#86908b] block pb-4 border-b border-current/10 mb-4">
                  PASSO {st.step}
                </span>
                <h3 className="font-display font-bold text-lg mb-2">{st.title}</h3>
                <p className="text-xs sm:text-sm text-[#86908b] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* QUEM ESTÁ À FRENTE (FELIPE FONTAN) */}
      {/* ==================================================================== */}
      <section id="sobre" className="py-20 md:py-28 border-t border-current/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Foto do Fundador */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-current/10 shadow-2xl">
                <img
                  src="/felipe-fontan.jpg"
                  alt="Felipe Fontan - CEO da CPC Commerce"
                  className="w-full h-auto object-cover object-top aspect-[3/4]"
                  onError={(e) => {
                    // Fallback se não encontrar localmente
                    (e.target as HTMLImageElement).src =
                      'https://cpccommerce.com.br/wp-content/uploads/2018/01/foto-felipe-fontan.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#ffbd2d] uppercase block mb-1">
                    Liderança Técnica
                  </span>
                  <strong className="text-xl font-display font-bold block">{cpcData.founder.name}</strong>
                  <span className="text-xs text-white/80 block">{cpcData.founder.role}</span>
                </div>
              </div>
            </div>

            {/* Bio e Credenciais */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#86908b] uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-[#ffbd2d]" />
                <span>Quem está à frente da CPC Commerce</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
                Conhecimento construído <span className="text-[#ffbd2d]">na prática do e-commerce.</span>
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-[#86908b] leading-relaxed max-w-2xl">
                {cpcData.founder.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
                {cpcData.founder.credentials.map((cred) => (
                  <div
                    key={cred}
                    className="flex items-center gap-3 p-3 rounded-xl border border-current/10 text-xs font-medium"
                  >
                    <Award className="w-4 h-4 text-[#ffbd2d] shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-current/10 w-full">
                <span className="text-[10px] font-bold tracking-wider text-[#86908b] uppercase block mb-3">
                  Plataformas & Tecnologias
                </span>
                <div className="flex flex-wrap gap-2">
                  {cpcData.founder.platforms.map((plat) => (
                    <span
                      key={plat}
                      className="px-3 py-1 rounded-full text-xs font-semibold border border-current/10 bg-current/5"
                    >
                      {plat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/felipe_fontan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold hover:text-[#ffbd2d] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram @felipe_fontan</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SEÇÃO DE CONVERSÃO / DIAGNÓSTICO */}
      {/* ==================================================================== */}
      <section id="diagnostico" className="py-20 md:py-28 border-t border-current/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-xs font-bold tracking-[0.2em] text-[#ffbd2d] uppercase block mb-3">
                Sua Loja Virtual Pronta Para Escalar
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
                Receba um diagnóstico completo de performance.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#86908b] leading-relaxed">
                Nossos especialistas vão analisar o momento do seu e-commerce, identificar onde você está
                perdendo dinheiro e desenhar as alavancas imediatas de crescimento.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#ffbd2d]" />
                  <span>Análise detalhada de tráfego, conversão e retenção</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#ffbd2d]" />
                  <span>Identificação dos gargalos de checkout e catálogo</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#ffbd2d]" />
                  <span>Sem compromisso e 100% focado no seu negócio</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-current/10 flex items-center gap-4">
                <a
                  href={whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-500 hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Prefere falar direto no WhatsApp? Clique aqui ↗</span>
                </a>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl border border-current/15 shadow-xl bg-current/5">
                <h3 className="font-display font-bold text-2xl mb-2">Solicitar Diagnóstico</h3>
                <p className="text-xs text-[#86908b] mb-6">
                  Preencha os dados da sua loja para receber o contato do nosso time.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
                    <strong>Solicitação enviada com sucesso!</strong>
                    <p className="text-xs mt-1 text-current opacity-90">
                      Redirecionando para o WhatsApp da CPC Commerce para atendimento prioritário...
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#86908b] block mb-1">
                        Seu Nome Completo
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.nome}
                        onChange={(e) => setFormState({ ...formState, nome: e.target.value })}
                        placeholder="Ex: João Silva"
                        className="w-full px-4 py-3 rounded-xl border border-current/20 bg-transparent text-sm focus:outline-none focus:border-[#ffbd2d]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-[#86908b] block mb-1">
                          E-mail Corporativo
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="joao@sualoja.com.br"
                          className="w-full px-4 py-3 rounded-xl border border-current/20 bg-transparent text-sm focus:outline-none focus:border-[#ffbd2d]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-[#86908b] block mb-1">
                          WhatsApp com DDD
                        </label>
                        <input
                          type="tel"
                          required
                          value={formState.whatsapp}
                          onChange={(e) => setFormState({ ...formState, whatsapp: e.target.value })}
                          placeholder="(11) 99999-9999"
                          className="w-full px-4 py-3 rounded-xl border border-current/20 bg-transparent text-sm focus:outline-none focus:border-[#ffbd2d]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#86908b] block mb-1">
                        Link da sua Loja Virtual
                      </label>
                      <input
                        type="url"
                        required
                        value={formState.urlLoja}
                        onChange={(e) => setFormState({ ...formState, urlLoja: e.target.value })}
                        placeholder="https://sualoja.com.br"
                        className="w-full px-4 py-3 rounded-xl border border-current/20 bg-transparent text-sm focus:outline-none focus:border-[#ffbd2d]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#86908b] block mb-1">
                        Faixa Atual de Faturamento Mensal
                      </label>
                      <select
                        value={formState.faturamento}
                        onChange={(e) => setFormState({ ...formState, faturamento: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-current/20 bg-transparent text-sm focus:outline-none focus:border-[#ffbd2d]"
                      >
                        <option value="Até R$ 30k/mês" className="text-black">
                          Iniciando (Até R$ 30k/mês)
                        </option>
                        <option value="R$ 30k a R$ 80k/mês" className="text-black">
                          R$ 30k a R$ 80k/mês
                        </option>
                        <option value="R$ 80k a R$ 200k/mês" className="text-black">
                          R$ 80k a R$ 200k/mês
                        </option>
                        <option value="R$ 200k a R$ 500k/mês" className="text-black">
                          R$ 200k a R$ 500k/mês
                        </option>
                        <option value="Acima de R$ 500k/mês" className="text-black">
                          Escala (+ R$ 500k/mês)
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 mt-2 rounded-xl bg-[#ffbd2d] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-[#ffcd48] transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Quero Meu Diagnóstico Gratuito</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FAQ SECTION */}
      {/* ==================================================================== */}
      <section id="faq" className="py-20 border-t border-current/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-[#86908b] uppercase block mb-3">
              Perguntas Frequentes
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
              Tire suas dúvidas sobre a CPC
            </h2>
          </div>

          <div className="space-y-4">
            {cpcData.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className="rounded-2xl border border-current/10 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#ffbd2d] transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-[#86908b] leading-relaxed border-t border-current/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FOOTER INSTITUCIONAL */}
      {/* ==================================================================== */}
      <footer className="py-16 border-t border-current/10 text-xs text-[#86908b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#ffbd2d] flex items-center justify-center font-display font-black text-black text-xs">
                  CPC
                </div>
                <span className="font-display font-extrabold text-base tracking-tight text-current">
                  CPC COMMERCE
                </span>
              </div>
              <p className="max-w-sm leading-relaxed mb-4">
                Aceleradora e consultoria de performance digital para e-commerce. Especialistas em fazer lojas
                virtuais venderem mais com margem e consistência.
              </p>
              <div className="space-y-1 text-[11px]">
                <p>CNPJ: {cpcData.brand.cnpj}</p>
                <p>{cpcData.brand.address}</p>
              </div>
            </div>

            <div>
              <strong className="text-current uppercase tracking-wider text-[11px] block mb-4">
                Navegação
              </strong>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="hover:text-current">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#metodo" className="hover:text-current">
                    Os 3 Pilares
                  </a>
                </li>
                <li>
                  <a href="#solucoes" className="hover:text-current">
                    Soluções
                  </a>
                </li>
                <li>
                  <a href="#processo" className="hover:text-current">
                    Processo
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-current">
                    Felipe Fontan
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-current">
                    Perguntas Frequentes
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="text-current uppercase tracking-wider text-[11px] block mb-4">
                Contato & Social
              </strong>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.instagram.com/felipe_fontan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-current flex items-center gap-2"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>@felipe_fontan</span>
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-current flex items-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Comercial</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-current/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
            <p>© {new Date().getFullYear()} CPC Commerce. Todos os direitos reservados.</p>
            <p>Construído para performance sustentável em e-commerce.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
