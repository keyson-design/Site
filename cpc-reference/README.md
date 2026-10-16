# CPC Commerce — Projeto de Referência (Base44 Ready)

Este projeto foi construído para servir como o **código-fonte de referência e base de design** da nova presença digital da **CPC Commerce**, estruturado para importação ou transposição direta no ambiente **Base44**.

---

## 🛠️ Stack Tecnológica

* **Tailwind CSS v3**: Sistema de design atômico com tokens semânticos e suporte nativo a **Modo Escuro (Dark Mode)** e **Modo Claro (Light Mode)**.
* **Framer Motion**: Microinterações fluidas, acordeões expansíveis para entregas de serviço e animações de entrada.
* **Lucide React**: Ícones lineares minimalistas e consistentes.
* **Lenis**: Scroll suave (*smooth scroll*) no padrão de agências de alta tecnologia / Awwwards.
* **TypeScript**: Tipagem estrita de todas as frentes de serviço, entregas, métricas e dados institucionais.
* **React 18 + Vite**: Arquitetura padrão suportada pelo Base44.

---

## 🎨 Identidade Visual & Os 3 Pilares da CPC

O design é construído ao redor das 3 faces do **Cubo CPC**:
1. **01 / ATRAIR** (Coral `#f24764`): Mídia paga (Google Ads, Meta Ads) conectada à margem e momento da loja.
2. **02 / CONVERTER** (Amarelo Ouro `#ffbd2d`): Planejamento comercial, ofertas, Live Shop e CRO (funil e páginas de produto).
3. **03 / RELACIONAR** (Teal `#00b9bb`): CRM, réguas de automação, recuperação de carrinhos e recompra (LTV).

---

## 📂 Estrutura de Arquivos

```
cpc-reference/
├── public/
│   ├── cpc-logo.png             # Logo cúbico oficial extraído da referência
│   └── felipe-fontan.jpg        # Foto de alta resolução do fundador Felipe Fontan
├── src/
│   ├── components/
│   │   ├── CpcCube.tsx           # Cubo isométrico 3D interativo com tags flutuantes
│   │   ├── Header.tsx            # Barra fixa com glassmorphism, menu e CTA WhatsApp
│   │   ├── Hero.tsx              # Título com tipografia display, proposta e CTAs
│   │   ├── Clients.tsx           # Prova social editorial (Brogan, Outlet 360, Byara, Miss)
│   │   ├── Pillars.tsx           # Os 3 Pilares estratégicos com métricas e alavancas
│   │   ├── Services.tsx          # 6 Frentes de serviço com acordeões de entregas práticas
│   │   ├── Process.tsx           # 4 Passos do método de trabalho contínuo
│   │   ├── Founder.tsx           # Felipe Fontan + credenciais + 6 números de autoridade
│   │   ├── ConversionSection.tsx # CTA WhatsApp + Formulário de qualificação para diagnóstico
│   │   ├── Faq.tsx               # Perguntas frequentes interativas
│   │   ├── Footer.tsx            # Dados cadastrais (CNPJ, endereço, Google Partner, social)
│   │   └── ThemeToggle.tsx       # Alternador fluido entre Modo Claro e Escuro
│   ├── data/
│   │   └── content.ts            # SINGLE SOURCE OF TRUTH (todos os textos e dados)
│   ├── types/
│   │   └── content.ts            # Interfaces TypeScript de todo o conteúdo
│   ├── lib/
│   │   ├── brand.ts              # Mapeamento de classes de cores por pilar
│   │   └── utils.ts              # Utilitários (link do WhatsApp, cn)
│   ├── App.tsx                   # Composição da página e inicialização do Lenis
│   ├── index.css                 # Tokens CSS e variáveis semânticas de tema
│   └── main.tsx                  # Ponto de entrada React
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🚀 Como Levar para o Base44

1. **Abordagem por Componentes**:
   * Os componentes em `src/components/` são independentes e consomem os dados de `src/data/content.ts`.
   * Você pode copiar os componentes individualmente para dentro dos blocos correspondentes no Base44.
2. **Abordagem de Página Completa**:
   * O `App.tsx` já entrega a página 100% orquestrada com animações, links âncora, smooth scroll e alternador de tema.
3. **Personalização de Textos**:
   * Para alterar qualquer copy, telefone ou métrica, modifique apenas o arquivo `src/data/content.ts`.
