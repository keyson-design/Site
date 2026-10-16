# 🚀 Guia de Importação para o Base44 — CPC Commerce

Para levar o site para o seu ambiente no **Base44**, você tem **3 caminhos simples**, dependendo de como você prefere trabalhar no Base44:

---

## 🟢 Opção 1: O Caminho Mais Rápido (Componente Único Consolidado)

Criamos um arquivo único contendo **100% da página, dados e animações** sem depender de múltiplos arquivos:
📁 **[`f:\Site CPC\Base44-LandingPage.tsx`](file:///f:/Site%20CPC/Base44-LandingPage.tsx)**

### Como fazer:
1. No Base44, crie uma nova página ou abra o componente principal (`App.tsx` ou `page.tsx`).
2. Abra o arquivo [**`Base44-LandingPage.tsx`**](file:///f:/Site%20CPC/Base44-LandingPage.tsx), selecione tudo (**Ctrl + A**) e copie (**Ctrl + C**).
3. Cole direto no editor do Base44.
4. As dependências necessárias são apenas:
   - `lucide-react`
   - `framer-motion` (opcional, para rotação contínua e fade-in)

---

## 🟡 Opção 2: Passar como Prompt para a IA do Base44

Se você prefere que a própria IA do Base44 construa e distribua os arquivos dentro do projeto, envie a seguinte mensagem para o chat do Base44:

> *"Estou criando a nova landing page institucional da **CPC Commerce** (Aceleradora e consultoria de performance digital para e-commerce fundada por Felipe Fontan). Use a paleta de cores corporativa da marca (#ffbd2d amarelo, #f24764 coral, #00b9bb teal, #0c0e0d preto petróleo). O site deve ter suporte a Dark Mode e Light Mode, Hero com o cubo isométrico 3D animado com 3 órbitas, seção dos 3 Pilares (01 Atrair, 02 Converter, 03 Relacionar), 6 soluções técnicas, jornada de 4 passos, biografia do fundador com credenciais e formulário de diagnóstico qualificado para WhatsApp. Aqui está o código de referência completo: [cole o conteúdo de `Base44-LandingPage.tsx`]"*

---

## 🔵 Opção 3: Importação Modular (Arquitetura Profissional)

Se o seu projeto no Base44 já tiver uma estrutura de pastas modular React + Vite, basta copiar as pastas da nossa estrutura:

- **Dados e Textos:** [`cpc-reference/src/data/content.ts`](file:///f:/Site%20CPC/cpc-reference/src/data/content.ts)
- **Componentes:** [`cpc-reference/src/components/`](file:///f:/Site%20CPC/cpc-reference/src/components/)
  - `Hero.tsx` + `CpcCube.tsx` (Cubo e órbitas)
  - `Pillars.tsx` (Atrair, Converter, Relacionar)
  - `Services.tsx` (Soluções com cards expansíveis)
  - `Process.tsx` (Diagnóstico, Plano, Execução, Análise)
  - `Founder.tsx` (Felipe Fontan, estatísticas e plataformas)
  - `ConversionSection.tsx` (Formulário + WhatsApp)
  - `Faq.tsx` e `Footer.tsx`
- **Página Raiz:** [`cpc-reference/src/App.tsx`](file:///f:/Site%20CPC/cpc-reference/src/App.tsx)

---

## 🖼️ Imagens / Fotos para o Base44:

Suba para a pasta de **Assets** / **Public** do Base44 os 2 arquivos:
1. `felipe-fontan.jpg` (já otimizada e sem granulado em [`cpc-reference/public/felipe-fontan.jpg`](file:///f:/Site%20CPC/cpc-reference/public/felipe-fontan.jpg))
2. `cpc-logo.png` (em [`cpc-reference/public/cpc-logo.png`](file:///f:/Site%20CPC/cpc-reference/public/cpc-logo.png))

---

## 🎨 Cores Oficiais da Marca (Tailwind):
- Amarelo Ouro: `#ffbd2d`
- Coral / Pink: `#f24764`
- Teal / Turquesa: `#00b9bb`
- Escuro / Fundo: `#0c0e0d` e `#131615`
