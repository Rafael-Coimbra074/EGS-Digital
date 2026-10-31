---
projeto: EGS-Digital
tipo: instruction
relacionados:
  - "[[00-Hub-EGS-Digital]]"
  - "[[rules]]"
  - "[[02-design-playbook-flexivel]]"
  - "[[05-diretriz-pensamento-critico]]"
tags:
  - projeto/egs-digital
  - core/instruction
  - prompt-master
  - design-system
---

# EGS-Digital — Especificação Técnica, Produto & Prompt Mestre (`instruction.md`)

> **Single Source of Truth (PRD, Tech Spec & UI/UX Master Prompt)**
> Este documento funciona como o **Prompt Executável Mestre** para assistentes de IA (AGY, Claude Code, Codex). Toda tela e funcionalidade deve seguir rigorosamente a estrutura aprimorada via **`enhance-prompt`** e a postura de **[[05-diretriz-pensamento-critico]]**.

---

## 1. Diretrizes CORE de UX/UI, Performance e Engenharia

### 1.1. Metas Universais e KPIs
- **Clareza Imediata (Regra dos 5 Segundos):** A primeira dobra (*Hero*) deve comunicar de imediato quem é a EGS, suas soluções centrais e o botão de ação principal (CTA).
- **Design System Modular Baseado em Tokens:** Toda cor, superfície, borda, tipografia e espaçamento deve responder a variáveis CSS semânticas (`--color-bg`, `--color-surface`, `--color-text-primary`, `--color-accent`).
- **Estética Intencional (Anti-Slop):** Amplo espaço negativo, linhas divisórias sutis (`1px solid var(--color-border)`), hierarquia tipográfica fluida com `clamp()` e zero degradês genéricos ou sombras pesadas.
- **Performance e Responsividade:** Nota **> 90** no Google Lighthouse; layout **100% responsivo** sem rolagem horizontal (`1920×1080`, `1440px`, `768px`, `360px+`).

---

## 2. Objetivo Estratégico & Fases do Projeto

### 2.1. Origem e Propósito
- **Empresa:** **EGS** (empresa do pai do Fael).
- **Fase 1 (Site Institucional):** Repaginar totalmente o portal da EGS com visual moderno, autoridade, velocidade e foco em conversão de clientes.
- **Fase 2 (CRM EGS):** Construção de CRM sob medida para gestão de propostas, pipeline de vendas e controle de clientes da EGS.
- **Expansão Futura:** Servir como matriz para desenvolvimento e modernização de sistemas para clientes de múltiplos nichos (saúde, contabilidade, indústria, etc. — conforme [[01-visao-e-objetivos]]).

### 2.2. Diretriz de Design
- Segue o repertório flexível de [[02-design-playbook-flexivel]]: **o design é preferência adaptável ao cliente, nunca uma lei rígida**.

---

## 3. Master Prompt de UI (Padrão `enhance-prompt` — Produção v2.0)

```markdown
Portal institucional de alta engenharia B2B para a **EGS Digital** (CNPJ 11.846.893/0001-07, Belo Horizonte/MG), inspirado na arquitetura minimalista de **x.ai**, **V7 Labs** e **SpaceX**: monumentalidade tipográfica, amplo espaço negativo, linhas divisórias de 1px, física de movimento fluida e foco cirúrgico em conversão corporativa (contratos MSP, Cloud, Cibersegurança e Infraestrutura).

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web estática de alta performance (HTML5 + CSS3 Tokens + Vanilla JS ES6+), Desktop-first (container 1180px) e 100% responsivo até 360px
- Theme: Dual Theme Instantâneo sem flash (Dark Mode padrão Obsidian `#000000` + Light Mode Arquitetural `#FAFAFA`)
- Background: Pure Black (`#000000`) / Architectural Off-White (`#FAFAFA`)
- Surface: Deep Zinc (`#09090B` / `#121215`) ou Pure White (`#FFFFFF` / `#F4F4F5`)
- Primary Brand Accent: EGS Signature Red (`#DC2626` / `#B91C1C`, texto acessível `--egs-red-text`: `#F87171` dark / `#B91C1C` light)
- Text Primary: Crisp White (`#FAFAFA`) ou Deep Obsidian (`#09090B`)
- Text Muted: Zinc Muted (`#A1A1AA` dark / `#52525B` light — contraste WCAG AA >= 4.5:1)
- Borders: Subtle 1px solid hairline (`#27272A` dark / `#E4E4E7` light)
- Typography: 'Public Sans' (400, 500, 600, 700) + 'JetBrains Mono' (500, 600 para telemetria, SLAs e códigos)
- Motion & Interactivity: Microinterações <= 200ms (`cubic-bezier(0.16, 1, 0.3, 1)`), Canvas de rede interativo estilo SpaceX no Hero, Spotlight cursor nos cards e respeito integral a `prefers-reduced-motion: reduce`

**Page Structure (Estrutura da Página em Produção — Evolução EGS 2.0 Clean & Living):**
1. **Skip Link & Sticky Header (`backdrop-filter: blur(14px)`):** Logos oficiais 100% transparentes Dual-Theme (`logo-dark.png` / `logo-light.png`), navegação principal com sublinhado animado (Soluções, Governança, Diagnóstico, Segurança, A Empresa, FAQ, Contato), atalhos externos diretos para **Loja** (`loja.egsdigital.com.br`) e **HelpDesk** (`chamados.egsdigital.com.br`) e alternador de tema com persistência.
2. **Hero Section & Painel NOC com Telemetria Viva:** Canvas atmosférico interativo conectado ao cursor, Headline monumental com `text-wrap: balance`, proposta de valor orientada a SLA, CTAs duplos, contadores numéricos animados (`tabular-nums`: +14 anos, 99.9% SLA, < 15m resposta) e Painel NOC interativo (`role="tablist"`) com transição suave (`.is-switching`) inspecionando os 4 módulos críticos (`[M1]` a `[M4]`) e barra tripla de métricas (`RPO`, `Criptografia`, `Auditoria`).
3. **Catálogo Clean de 6 Soluções + Modal Animado de Ficha Técnica:** Cards minimalistas estilo V7 Labs (sem listas de bullets poluindo o card externo) onde clicar no card ou em `Ver Ficha Técnica →` abre o **Modal de Especificação Técnica (`#spec-modal`, `role="dialog"`)** com transição elástica (`scale(0.96) -> scale(1)`) e entrada em cascata (*stagger*) das métricas e dos 5 entregáveis de engenharia.
4. **Metodologia de Governança (3 Etapas) + Contraste Executivo Enxuto:** Etapas `[01]` Site Survey, `[02]` Arquitetura e `[03]` Operação NOC, seguidas do quadro comparativo direto de 3 pontos **"Suporte Comum (Quebra-Conserta) vs. Padrão de Engenharia EGS Digital (MSP)"**.
5. **Configurador de Arquitetura de TI 2.0 (`#simulador`):** Seletores de Porte, Segmento de Atuação e Demandas Prioritárias com transição suave (`.is-updating`), gerando um **Blueprint Recomendado** enxuto com SLA, Topologia Sugerida e Foco do Segmento.
6. **Segurança Imutável & Conformidade LGPD (`#seguranca`):** Arquitetura 3-2-1-1-0 com **Diagrama Esquemático Animado de Fluxo de Dados em SVG** (`Servidores & ERP` ➔ `Túnel AES-256 Air-Gap` ➔ `Bloco Imutável WORM`), RTO/RPO auditados e segregação ISO 27001.
7. **A Empresa & Esquema Visual de Rack (`#quemsomos`):** Apresentação institucional acompanhada do **Blueprint Visual de Rack EGS (`U01` a `U04`)** e grid de 8 alianças tecnológicas homologadas.
8. **Operações Blindadas & Feedbacks Executivos B2B (`#clientes`):** 3 cards minimalistas de impacto real por vertical (Contabilidade/Fiscal, Indústria/Logística e Saúde/Serviços) com badge de métrica quantificada (`0 PARADAS EM 3 ANOS`, `99.9% UPTIME NO ERP`, `SLA < 15 MIN`) e relato executivo sóbrio.
9. **Perguntas Frequentes da Diretoria (`#faq` + JSON-LD `FAQPage`):** Accordion com animação fluida de altura (`grid-template-rows: 0fr -> 1fr`) e foco único respondendo às 5 principais objeções executivas.
10. **Contato Corporativo & Integração WhatsApp/E-mail + Footer Institucional:** Metadados reais (CNPJ `11.846.893/0001-07`, Telefone `(31) 3037-3451`, E-mail `contato@egsdigital.com.br`, Endereço `Rua Frei Luiz de Souza, 266 — Belo Horizonte / MG`), formulário validado e atalhos para as fichas técnicas no rodapé.
```

---

## 4. Checklist de Qualidade (*Definition of Done*)
- [x] O código utiliza estritamente variáveis CSS sem cores mágicas *hardcoded*.
- [x] Testado em telas de 1920px a 360px sem qualquer overflow horizontal.
- [x] Todos os botões e links possuem `:focus-visible` e `aria-label` adequados.
- [x] Console do DevTools e detector mecânico Impeccable com **0 avisos / 0 erros** (`[]`).
- [x] Qualquer decisão ou alteração foi registrada em [[01-log-decisoes]].
