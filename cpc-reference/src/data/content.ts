import {
  Award,
  BadgeCheck,
  CalendarRange,
  Compass,
  GraduationCap,
  HeartHandshake,
  Map,
  MousePointerClick,
  Presentation,
  Radio,
  Rocket,
  ScanSearch,
  ShoppingBag,
  TrendingUp,
} from 'lucide-react';
import type {
  Client,
  Company,
  FaqItem,
  Founder,
  NavLink,
  Pillar,
  ProcessStep,
  Service,
} from '@/types/content';

/* -------------------------------------------------------------------------- */
/*  Empresa — dados institucionais (fonte: site atual + HTML de referência)     */
/* -------------------------------------------------------------------------- */

export const company: Company = {
  name: 'CPC Commerce',
  legalName: 'Felipe Fontan Augusto ME',
  cnpj: '28.241.296/0001-51',
  email: 'felipe@cpccommerce.com.br',
  whatsapp: { number: '5511964093547', display: '(11) 96409-3547' },
  address: {
    street: 'Rua Maria Aparecida do Amaral Godói, 87',
    complement: 'Sala Atenas',
    district: 'Jardim São Paulo',
    city: 'São Paulo · SP',
    zip: '02039-070',
  },
  googlePartnerUrl: 'https://www.google.com/partners/agency?id=7693892291',
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/felipe_fontan/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/felipe-fontan-augusto-99a23537/' },
    { label: 'Facebook', href: 'https://www.facebook.com/felipefontanecommerce' },
  ],
};

export const whatsappMessages = {
  default: 'Olá! Quero conversar sobre meu e-commerce.',
  meeting: 'Olá! Quero agendar uma reunião via Google Meet.',
};

export const navLinks: NavLink[] = [
  { label: 'Método', href: '#metodo' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Processo', href: '#processo' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'FAQ', href: '#faq' },
];

/* -------------------------------------------------------------------------- */
/*  Clientes                                                                   */
/* -------------------------------------------------------------------------- */

export const clients: Client[] = [
  { name: 'Brogan', wordmark: 'font-display font-extrabold tracking-[-0.04em]' },
  { name: 'outlet 360', wordmark: 'font-sans font-medium tracking-[-0.02em]' },
  { name: 'byara', wordmark: 'font-serif italic font-normal tracking-[-0.01em]' },
  { name: 'MISS', wordmark: 'font-sans font-semibold tracking-[0.35em]' },
];

/* -------------------------------------------------------------------------- */
/*  Os 3 pilares (as 3 faces do cubo CPC)                                      */
/* -------------------------------------------------------------------------- */

export const pillars: Pillar[] = [
  {
    id: 'atrair',
    index: '01',
    verb: 'Atrair',
    title: 'Aquisição de clientes',
    color: 'coral',
    description:
      'Mídia paga conectada ao momento da operação. O investimento vai para onde há margem, estoque e demanda — não apenas para onde há clique.',
    levers: ['Google Ads & Shopping', 'Meta Ads', 'Públicos e segmentação', 'Criativos e roteiros'],
    metrics: ['CAC', 'ROAS', 'CPA', 'Distribuição do investimento'],
  },
  {
    id: 'converter',
    index: '02',
    verb: 'Converter',
    title: 'Estratégia comercial',
    color: 'yellow',
    description:
      'Oferta, calendário e experiência de compra trabalhando juntos para transformar visita em pedido — com metas claras para orientar o time.',
    levers: ['Planejamento e metas', 'Calendário promocional', 'Live Shop', 'Funil e páginas de produto'],
    metrics: ['Taxa de conversão', 'Ticket médio', 'Abandono de carrinho', 'Faturamento vs. meta'],
  },
  {
    id: 'relacionar',
    index: '03',
    verb: 'Relacionar',
    title: 'Relacionamento e recompra',
    color: 'teal',
    description:
      'Quem já comprou é o ativo mais valioso da loja. CRM e automações para recuperar vendas, reativar clientes e construir recompra.',
    levers: ['Réguas de relacionamento', 'Automações', 'Segmentação da base', 'E-mail marketing'],
    metrics: ['Taxa de recompra', 'LTV', 'Receita via CRM', 'Clientes reativados'],
  },
];

/* -------------------------------------------------------------------------- */
/*  Soluções (6 frentes — fonte: HTML de referência)                           */
/* -------------------------------------------------------------------------- */

export const services: Service[] = [
  {
    id: 'planejamento',
    index: '01',
    title: 'Planejamento estratégico e comercial',
    summary:
      'Transformamos os objetivos do e-commerce em um plano de ação mensal, com prioridades claras para orientar a execução do time.',
    icon: CalendarRange,
    pillars: ['converter'],
    deliverables: [
      'Definição de metas mensais e semanais',
      'Organização do calendário comercial',
      'Planejamento de vendas por período',
      'Desenvolvimento de ofertas e ações promocionais',
      'Projeções de faturamento para apoiar decisões',
    ],
  },
  {
    id: 'midia',
    index: '02',
    title: 'Gestão estratégica de mídia paga',
    summary:
      'Conectamos Google Ads e Meta Ads ao momento da operação, com análise de desempenho para orientar o investimento e a evolução das campanhas.',
    icon: MousePointerClick,
    pillars: ['atrair'],
    deliverables: [
      'Planejamento integrado de Google Ads e Meta Ads',
      'Estruturação e gestão de campanhas',
      'Estratégias de públicos e segmentação',
      'Planejamento de conceitos e variações de criativos',
      'Desenvolvimento de roteiros para anúncios',
      'Acompanhamento de CAC, ROAS e indicadores de negócio',
    ],
  },
  {
    id: 'live-shop',
    index: '03',
    title: 'Estratégia para Live Shop',
    summary:
      'Planejamos a live como uma ação comercial completa, conectando conteúdo, produtos e ofertas à experiência de compra e ao pós-transmissão.',
    icon: Radio,
    pillars: ['converter', 'relacionar'],
    deliverables: [
      'Definição dos objetivos e da dinâmica da live',
      'Seleção de produtos e organização das ofertas',
      'Desenvolvimento do roteiro de apresentação',
      'Orientações para facilitar a jornada de compra',
      'Planejamento das ações após a transmissão',
      'Análise dos resultados da ação',
    ],
  },
  {
    id: 'conversao',
    index: '04',
    title: 'Experiência de compra e conversão',
    summary:
      'Analisamos a jornada dentro da loja para identificar dificuldades na navegação e tornar a compra mais simples e intuitiva.',
    icon: ShoppingBag,
    pillars: ['converter'],
    deliverables: [
      'Análise do funil de compra',
      'Avaliação das páginas de produto',
      'Revisão da navegação e da organização da loja',
      'Recomendações de usabilidade',
      'Priorização de melhorias e testes',
      'Acompanhamento do impacto das alterações',
    ],
  },
  {
    id: 'crm',
    index: '05',
    title: 'CRM e relacionamento com clientes',
    summary:
      'Estruturamos a comunicação ao longo da jornada, com ações de recuperação de vendas, reativação e construção de relacionamentos duradouros.',
    icon: HeartHandshake,
    pillars: ['relacionar'],
    deliverables: [
      'Planejamento de réguas de relacionamento',
      'Estruturação de automações',
      'Segmentação da base de clientes',
      'Campanhas de relacionamento e e-mail marketing',
      'Fluxos de comunicação por etapa da jornada',
      'Estratégias de retenção e recompra',
    ],
  },
  {
    id: 'consultoria',
    index: '06',
    title: 'Consultoria para e-commerce',
    summary:
      'Uma visão estratégica sobre a operação para identificar oportunidades, organizar prioridades e apoiar as decisões dos gestores.',
    icon: Compass,
    pillars: ['atrair', 'converter', 'relacionar'],
    deliverables: [
      'Análise do momento e dos desafios da loja',
      'Identificação de oportunidades de melhoria',
      'Definição de prioridades para a operação',
      'Orientação para decisões comerciais',
      'Acompanhamento dos indicadores do negócio',
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Processo                                                                   */
/* -------------------------------------------------------------------------- */

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Diagnóstico',
    description: 'Entendemos o momento da loja: números, produtos, margens, operação e os principais desafios.',
    icon: ScanSearch,
  },
  {
    index: '02',
    title: 'Plano de ação',
    description: 'Metas mensais e semanais, prioridades e calendário comercial definidos junto com o seu time.',
    icon: Map,
  },
  {
    index: '03',
    title: 'Execução integrada',
    description: 'Mídia, ofertas, experiência de compra e CRM avançando juntos, cada frente no seu papel.',
    icon: Rocket,
  },
  {
    index: '04',
    title: 'Análise e evolução',
    description: 'Indicadores de negócio acompanhados de perto para ajustar a rota a cada ciclo.',
    icon: TrendingUp,
  },
];

/* -------------------------------------------------------------------------- */
/*  Fundador                                                                   */
/* -------------------------------------------------------------------------- */

export const founder: Founder = {
  name: 'Felipe Fontan',
  role: 'CEO da CPC Commerce',
  headline: 'Especialista em Performance e Growth para E-commerce',
  bio: [
    'Desde 2010, Felipe atua no desenvolvimento de lojas virtuais, unindo mídia paga, estratégia comercial e visão de negócio.',
    'Graduado em Ciência da Computação e pós-graduado em Marketing Digital e E-commerce, também atua como professor e mentor de empresas, apoiando gestores nas decisões para o crescimento de suas operações.',
  ],
  photo: '/felipe-fontan.jpg',
  photoAlt: 'Felipe Fontan em evento de negócios',
  instagram: 'https://www.instagram.com/felipe_fontan/',
  linkedin: 'https://www.linkedin.com/in/felipe-fontan-augusto-99a23537/',
  credentials: [
    { icon: GraduationCap, label: 'Ciência da Computação' },
    { icon: Award, label: 'Pós em Marketing Digital e E-commerce' },
    { icon: BadgeCheck, label: 'Certificado Google Ads e Analytics' },
    { icon: Presentation, label: 'Professor e mentor de empresas' },
  ],
  platforms: ['VTEX', 'Magento', 'Loja Integrada', 'Opencart', 'Shoppub', 'Simplo7 / Dlojavirtual'],
  tools: ['Google Ads', 'Meta Ads', 'Google Analytics'],
  metrics: [
    { value: 2010, from: 1995, prefix: 'Desde ', label: 'Atuação em performance para e-commerce' },
    { value: 150, prefix: '+', label: 'Projetos de e-commerce' },
    { value: 900, prefix: '+', label: 'Alunos formados' },
    { value: 85, prefix: '+', label: 'Mentorias individuais' },
    { value: 4, prefix: '+R$ ', suffix: ' mi', label: 'Por mês em vendas geridas (loja virtual)' },
    { value: 400, prefix: '+R$ ', suffix: ' mil', label: 'Por mês em investimento em anúncios' },
  ],
};

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export const faqs: FaqItem[] = [
  {
    question: 'A CPC Commerce é uma agência?',
    answer:
      'Não no modelo tradicional. Somos uma empresa de performance e consultoria para e-commerce: olhamos para todo o ecossistema da loja — mídia, oferta, experiência e relacionamento — e não apenas para os anúncios.',
  },
  {
    question: 'Para qual perfil de loja vocês trabalham?',
    answer:
      'Nosso foco são lojas virtuais de pequeno e médio porte que querem crescer com método — seja estruturando a operação do zero, seja melhorando os resultados de uma loja que já vende.',
  },
  {
    question: 'Vocês fazem apenas mídia paga?',
    answer:
      'Não. Mídia é uma das seis frentes. Atuamos também com planejamento comercial, Live Shop, experiência de compra, CRM e consultoria — todas conectadas pelos pilares Atrair, Converter e Relacionar.',
  },
  {
    question: 'Com quais plataformas vocês têm experiência?',
    answer:
      'Temos experiência prática com VTEX, Magento, Loja Integrada, Opencart, Shoppub e Simplo7/Dlojavirtual, entre outras. O método é o mesmo, independentemente da plataforma.',
  },
  {
    question: 'Como começa o trabalho?',
    answer:
      'Com uma conversa sem compromisso pelo WhatsApp ou por Google Meet para entender o momento da sua loja. A partir dela, fazemos um diagnóstico e propomos as frentes prioritárias.',
  },
];

export const platformOptions = [
  'VTEX',
  'Magento',
  'Loja Integrada',
  'Nuvemshop',
  'Tray',
  'Shopify',
  'WooCommerce',
  'Outra',
  'Ainda não tenho loja',
];
