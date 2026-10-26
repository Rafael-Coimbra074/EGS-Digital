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

**Page Structure (Estrutura da Página em Produção):**
1. **Skip Link & Sticky Header (`backdrop-filter: blur(16px)`):** Logos oficiais 100% transparentes Dual-Theme (`logo-dark.png` / `logo-light.png`), navegação principal (Soluções, Metodologia, Simulador, Segurança, Contato), atalhos externos diretos para **Loja** (`loja.egsdigital.com.br`) e **Chamados** (`chamados.egsdigital.com.br`) e alternador de tema com persistência.
2. **Hero Section & Painel NOC Interativo:** Headline monumental com `text-wrap: balance`, proposta de valor destilada, CTAs duplos, contadores numéricos animados (`tabular-nums`: +14 anos, 99.9% SLA, < 15m resposta) e Painel NOC interativo (`role="tablist"`) inspecionando os 4 módulos críticos (`[M1]` a `[M4]`).
3. **Grid de Soluções (6 Pilares Corporativos):** Cards estruturados estilo V7 Labs com ícone inline ao lado do `h3`, descrição concisa e rodapé técnico em fonte monoespaçada (Gestão de TI & MSP, Nuvem & Virtualização, Cibersegurança & Backup Imutável, Redes & CFTV IP, PABX em Nuvem WideCloud, Locação de Hardware HaaS).
4. **Metodologia de Engenharia (3 Etapas):** `[01] Auditoria & Diagnóstico de Risco`, `[02] Blindagem & Padronização`, `[03] Operação Assistida & NOC 24/7`.
5. **Simulador Interativo de Demanda de TI:** Seletores de porte (Até 15, 16 a 50, +50 computadores) e prioridade operacional com recomendação dinâmica de arquitetura e disparo contextualizado para WhatsApp.
6. **Segurança & Ecossistema Homologado:** Bloco de Defesa Ativa & Conformidade LGPD acompanhado do grid de 8 alianças tecnológicas (Microsoft, Dell, Fortinet, Acronis, Linux/Proxmox, Ubiquiti, WideVoice, Intelbras).
7. **Contato Corporativo & Integração WhatsApp/E-mail:** Metadados reais (Telefone `(31) 3037-3451`, E-mail `contato@egsdigital.com.br`, Endereço `Rua Frei Luiz de Souza, 266 — Belo Horizonte / MG`), formulário validado (`font-size: 1rem`, estados `:focus-visible`, envio direto via WhatsApp ou cliente de e-mail com Toast acessível).
8. **Footer Institucional:** CNPJ `11.846.893/0001-07`, links rápidos, sistemas externos e copyright atualizado.
```

---

## 4. Checklist de Qualidade (*Definition of Done*)
- [x] O código utiliza estritamente variáveis CSS sem cores mágicas *hardcoded*.
- [x] Testado em telas de 1920px a 360px sem qualquer overflow horizontal.
- [x] Todos os botões e links possuem `:focus-visible` e `aria-label` adequados.
- [x] Console do DevTools e detector mecânico Impeccable com **0 avisos / 0 erros** (`[]`).
- [x] Qualquer decisão ou alteração foi registrada em [[01-log-decisoes]].
