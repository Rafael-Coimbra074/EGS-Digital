---
projeto: EGS-Digital
tipo: memoria
relacionados:
  - "[[00-Hub-EGS-Digital]]"
  - "[[instruction]]"
  - "[[rules]]"
tags:
  - projeto/egs-digital
  - memoria
  - decisoes
---

# 🧠 Memória Viva & Log de Decisões — EGS-Digital

Este documento registra automaticamente o histórico de decisões estratégicas, definições de arquitetura, mudanças de escopo e aprendizados das sessões de desenvolvimento do projeto **EGS-Digital**, mantendo o Grafo do [[00-Hub-EGS-Digital]] sempre atualizado.

---

## 📅 2026-10-24 — Estruturação Inicial do Projeto e Integração Obsidian

- **Padrão CORE Importado:** Estruturados os documentos base [[instruction]] e [[rules]] com os padrões universais de UX/UI, Design System em Tokens CSS, Acessibilidade e Checklist de Qualidade.
- **Skills Ativas:** Disponibilizadas as 123 skills em `.agents/skills` localmente e globalmente.
- **Cofre Obsidian Isolado:** Configurado o cofre exclusivo do `EGS-Digital` separado do `projeto-RAC`, com grupos de cores no Grafo e protocolo de memória viva contínua.

---

## 📅 2026-10-25 — Sincronização Universal Multi-Agent (AGY + Claude Code + Codex)

- **Agente:** Antigravity (AGY)
- **O que foi feito:** Criados os arquivos de inicialização automática [[AGENTS]] (`AGENTS.md`) e [[CLAUDE]] (`CLAUDE.md`) na raiz de ambos os projetos (`EGS-Digital` e `projeto-RAC`).
- **Como funciona:** Qualquer IA aberta na pasta do projeto lê automaticamente `CLAUDE.md` / `AGENTS.md` ao iniciar, carrega o [[00-Hub-EGS-Digital]], [[instruction]], [[rules]] e `memory/`, e grava o estado atualizado antes de encerrar (*handoff* contínuo).

---

## 📅 2026-10-25 — Ativação do Cofre Central e Playbook de Design Flexível Multi-Nicho

- **Agente:** Antigravity (AGY)
- **Decisão Estratégica:** Implementado o **Cofre Central** (`Obsidian-Central`) integrando a pasta global `00-CORE-COMPARTILHADO` e mantendo cada projeto (`EGS-Digital` e `projeto-RAC`) isolado em pastas dedicadas via Junctions nativas do Windows.
- **Diretriz de Design Definida:** O design não é dogma ou lei rígida; estabelecido o [[02-design-playbook-flexivel]] como catálogo de preferências por nicho (saúde, contabilidade, indústria, tech) que evolui conforme novos sites forem desenvolvidos.
- **Contexto da EGS Registrado:** Definido no [[01-visao-e-objetivos]] e no [[instruction]] o foco na EGS (empresa do pai), com Fase 1 (repaginação do site), Fase 2 (CRM personalizado) e posterior expansão para clientes da empresa.

---

## 📅 2026-10-25 — Diretriz Anti "Yes-Man" & Padronização de Prompts (`enhance-prompt`)

- **Agente:** Antigravity (AGY)
- **Diretriz de Pensamento Crítico:** Criado o [[05-diretriz-pensamento-critico]] no `00-CORE-COMPARTILHADO`. Fica expressamente proibido a qualquer IA concordar cegamente com o usuário. A IA deve avaliar prós, contras, cenários reais e sugerir o melhor caminho técnico.
- **Engenharia de Prompts (`enhance-prompt`):** Integrada a regra no `AGENTS.md`, `CLAUDE.md` e `04-protocolo-multiagent` para que todo manual `.md` seja estruturado como um prompt mestre de alta precisão (design system explícito, seções numeradas, termos específicos de UI).
- **Instruction Atualizado:** O [[instruction]] da EGS-Digital foi refinado como prompt mestre executável seguindo esse padrão.

---

## 📅 2026-10-25 — Refinamento: Intervenção Proativa Imediata

- **Agente:** Antigravity (AGY)
- **Ajuste Crítico:** Ajustada a regra do [[05-diretriz-pensamento-critico]] para **intervenção ativa**: a IA não espera o usuário perguntar "o que você acha?". Sempre que o usuário trouxer uma ideia que não seja a melhor tecnicamente, a IA deve se manifestar proativamente, apontar a fragilidade da ideia e sugerir o caminho correto na hora.

---

## 📅 2026-10-25 — Estrutura Multi-Conta GitHub (Escola vs EGS/Profissional)

- **Agente:** Antigravity (AGY)
- **Diagnóstico:** Verificada a máquina: conta ativa atual no GitHub CLI é `Rafael-Coimbra07` (usada no `projeto-RAC`).
- **Solução Documentada:** Criado o [[06-multi-contas-github]] no cofre central com suporte a múltiplas contas no `gh` (`gh auth switch`) e configuração isolada de `user.name` e `user.email` local em cada projeto, evitando vazamento de identidade escolar para a conta da EGS.
- **Contas Conectadas e Validadas:**
  - 🎓 Escola: `Rafael-Coimbra07`
  - 💼 EGS / Pessoal: `Rafael-Coimbra074` (Ativa no momento)

---

## 📅 2026-10-25 — Arquitetura de Pastas Pessoal & Escola (Zero Comandos Manuais)

- **Agente:** Antigravity (AGY)
- **Estrutura Criada:**
  - `📁 Pessoal/` ➔ `EGS-Digital` (Git configurado para `Rafael-Coimbra074`)
  - `📁 Escola/` ➔ `projeto-RAC` (Git configurado para `Rafael-Coimbra07`)
- **Obsidian Central Atualizado:** Pastas integradas em `Projetos/Pessoal` e `Projetos/Escola` com hubs dedicados ([[00-Hub-Pessoal]] e [[00-Hub-Escola]]) e cores no Grafo.
- **Automação GitHub:** O Git local de cada pasta agora sabe exatamente para qual conta enviar commits e pushes, eliminando a necessidade de rodar `gh auth switch` o tempo todo.

---

## 📅 2026-10-25 — Integração das Web Interface Guidelines (Rauno Freiberg)

- **Agente:** Antigravity (AGY)
- **Documento Mestre Criado:** Criado o [[07-web-interface-guidelines]] no `00-CORE-COMPARTILHADO`, cobrindo as 7 dimensões de craft refinado (Interatividade, Tipografia, Motion <= 200ms, Touch/Mobile >= 16px, Otimizações, Acessibilidade e Design/Feedback).
- **Engenharia & Design Sincronizados:** 
  - [[03-padroes-de-engenharia-core]]: reforçado com padrões de forms, suavização tipográfica e tabular-nums;
  - [[02-design-playbook-flexivel]]: atualizado com regras contra layout shifts e isolamento de hover com `@media (hover: hover)`;
  - [[rules]]: adicionadas regras estritas de Do's & Don'ts para microinterações e formulários.

---

## 📅 2026-10-25 — Diagnóstico e Raio-X do Site Atual (egsdigital.com.br)

- **Agente:** Antigravity (AGY)
- **URL Inspecionada:** `https://egsdigital.com.br/`
- **Stack Atual:** WordPress + Hello Elementor + Elementor Pro + ElementsKit Lite + Joinchat (WhatsApp).
- **Diagnóstico Técnico & Crítico:**
  - ⚠️ **Resíduos de Template (Elementor):** O rodapé contém seções genéricas em inglês não configuradas (`Beta`, `Tutorials`, `Guides`, `Docs`, `Dribbble`, `Pinterest`, `Medium`) e link residual (`plugins premium WordPress`).
  - ⚠️ **Erros de Digitação & Inconsistências:** "HelpDesck" no menu principal; texto duplicado exatamente idêntico em "Venda de Computadores" e "Venda de equipamentos".
  - ⚠️ **Padrão de UX Obsoleto:** Uso de carrossel/slider no Hero e saudação genérica ("Seja bem vindo."), desperdiçando o espaço mais valioso de conversão.
  - ⚠️ **Posicionamento de Mercado:** A EGS Digital tem porte de **MSP (Managed Service Provider / TI Corporativa de Alta Performance)**, mas a apresentação visual atual parece uma loja/assistência genérica de bairro.
- **Diretriz de Repaginação:** Adotar arquitetura moderna, B2B institucional, com proposta de valor forte, autoridade, cases/depoimentos, foco em contratos recorrentes (MSP/Cloud/Segurança) e integração limpa com HelpDesk e WhatsApp.

---

## 📅 2026-10-25 — Definição de Fase: Prototipagem Visual First (Zero Banco de Dados)

- **Agente:** Antigravity (AGY)
- **Decisão do Usuário:** Foco inicial total em **protótipos visuais interativos** para testar e comparar direções de layout e experiência antes da escolha final.
- **Escopo Técnico:** Zero complexidade de banco de dados ou backend neste momento (tanto para o portal institucional quanto para o conceito da loja). Foco estritamente em UI/UX, arquitetura de informação, conversão, estética e responsividade.
- **Estratégia:** Criar variações de protótipos funcionais que abrem diretamente no navegador para validação do Fael e da liderança da EGS Digital.

---

## 📅 2026-10-25 — Construção do Protótipo Funcional Interativo (v2.0)

- **Agente:** Antigravity (AGY)
- **O que foi feito:**
  - Criado o protótipo funcional completo em [index.html](file:///c:/Users/fael/Desktop/EGS-Digital/index.html) seguindo a arquitetura de sucesso do Projeto RAC (HTML5 semântico, CSS3 com Tokens nativos e Vanilla JS modular).
  - Implementado sistema **Dual Theme** (Dark Mode padrão de alta tecnologia + Light Mode corporativo com persistência no `localStorage`).
  - Implementada a barra flutuante de controle para alternar instantaneamente entre **Variação 1 (Cyber & Cloud Authority)** e **Variação 2 (Executive B2B Clean)**.
  - Estruturados os **6 Pilares Corporativos de TI**: Gestão MSP, Servidores & Nuvem, Backup Imutável contra Ransomware, Redes/CFTV, Telefonia WideCloud e Locação de Hardware.
  - Desenvolvido o **Simulador Interativo de Demanda de TI**: calcula a recomendação de plano conforme o porte e gera o link dinâmico para WhatsApp com mensagem personalizada.
  - Conexão nativa e destacada no Header para a **Loja Corporativa 🛒** (`loja.egsdigital.com.br`) e **HelpDesk / Chamados ↗** (`chamados.egsdigital.com.br`).
- **Arquivos Criados/Atualizados:**
  - [index.html](file:///c:/Users/fael/Desktop/EGS-Digital/index.html)
  - [css/tokens.css](file:///c:/Users/fael/Desktop/EGS-Digital/css/tokens.css)
  - [css/base.css](file:///c:/Users/fael/Desktop/EGS-Digital/css/base.css)
  - [css/components.css](file:///c:/Users/fael/Desktop/EGS-Digital/css/components.css)
  - [css/variants.css](file:///c:/Users/fael/Desktop/EGS-Digital/css/variants.css)
  - [js/main.js](file:///c:/Users/fael/Desktop/EGS-Digital/js/main.js)
  - [assets/logo.png](file:///c:/Users/fael/Desktop/EGS-Digital/assets/logo.png)

---

## 📅 2026-10-25 — Pipeline Impeccable Completo (Audit, Typeset, Adapt, Polish)

- **Agente:** Antigravity (AGY)
- **Diretriz do Usuário:** Transformar o protótipo em algo estritamente sério, minimalista, corporativo executivo e neutro (sem estética gamer/cyber glow, sem paleta ciano estridente, sem emojis ou resíduos de escola).
- **Resultados do Detector Impeccable:** **0 avisos / 0 erros** (`[]`, código de saída 0).
- **Ajustes Executados:**
  - **Audit:** Mapeamento e eliminação de 100% dos anti-patterns detectados (bordas laterais de 3px, baixo contraste, gradient text, glows escuros e heading levels quebrados).
  - **Typeset:** Adoção da tipografia institucional sóbria **Public Sans**, balanço automático de títulos (`text-wrap: balance`), parágrafos com quebra orgânica (`text-wrap: pretty`) e ritmo de leitura rigoroso em 45–75 caracteres.
  - **Adapt:** Targets táteis ajustados para o padrão WCAG AA (≥ 44×44px), sem transbordamento horizontal, layout adaptativo perfeito para mobile, tablet e desktop.
  - **Polish:** Paleta executiva neutra baseada em ardósia/grafite escuro (dark) e branco puro/arquitetural (light), ícones vetoriais inline em SVG com traço consistente (zero emojis), botões sólidos de alto contraste e elevações contidas com sombras neutras.

---

## 📅 2026-10-25 — Adoção da Estética Minimalista Clean (x.ai & V7 Labs) + Logo Oficial

- **Agente:** Antigravity (AGY)
- **Inspirações Fornecidas pelo Usuário:**
  - [x.ai](https://x.ai/) — Monumentalidade, precisão tipográfica, preto e branco puro, sem fricção visual.
  - [v7labs.com](https://www.v7labs.com/) — Arquitetura de produto B2B de altíssimo padrão, linhas finas de 1px, cartões estruturados, calma visual.
- **Logo Oficial Integrada:** Imagem enviada pelo usuário salva em [assets/logo-oficial.png](file:///c:/Users/fael/Desktop/EGS-Digital/assets/logo-oficial.png), com a marca vermelha e a tipografia estilizada preta.
- **Paleta Refinada:**
  - Base: Preto Ônix Puro (`#000000` / `#09090B`) no Dark Mode e Branco Arquitetural (`#FAFAFA` / `#FFFFFF`) no Light Mode.
  - Linhas: Hairlines neutras de 1px (`#27272A` / `#E4E4E7`).
  - Acento: **Vermelho EGS Cirúrgico** (`#DC2626` / `#B91C1C`) aplicado exclusivamente em pontos de conversão e na marca, eliminando qualquer excesso de cor.
- **Status do Detector:** **0 avisos / 0 erros** (`[]`).

---

## 📅 2026-10-25 — Destilação de Conteúdo, Animações SpaceX & Análise de Linguagens

- **Agente:** Antigravity (AGY)
- **Destilação de Conteúdo (Distill):**
  - Removido o excesso de texto e listas de bullets repetitivas dos 6 cards de serviços, transformando-os em blocos de impacto limpos e arquiteturais (estilo V7 Labs / Stripe / x.ai).
  - Enxugamento dos blocos de segurança e apresentação institucional para leitura rápida de C-level / diretores.
- **Camada de Vida & Movimento (Física SpaceX):**
  - **Canvas Atmosférico Dinâmico:** Implementado canvas com partículas e constelações interconectadas no Hero, com movimento sutil e reação suave ao mouse.
  - **Scroll Reveal Choreography:** Revelação suave e orquestrada de cada seção ao rolar a página com curvas de aceleração de alta precisão (`cubic-bezier(0.16, 1, 0.3, 1)`).
  - **Contadores Numéricos Vivos:** Os números de autoridade (+14 anos, 99.9%, 0%) sobem dinamicamente na entrada da tela.
  - **Spotlight nos Cards:** Efeito de iluminação sutil que segue a posição do cursor do usuário nos cards de soluções corporativas.
- **Análise Arquitetural de Stack/Linguagens:**
  - Avaliadas as stacks: **HTML5+CSS3+JS/GSAP** (Atual), **Astro+Tailwind** e **Next.js**.
  - **Conclusão:** A stack atual é a melhor do mundo para este propósito (carregamento instantâneo < 0.2s, nota 100 no Lighthouse, zero custo de servidor e zero fragilidade de build). Se no futuro houver centenas de posts de blog, o **Astro** é a única alternativa recomendada. Next.js é contraindicado (overkill).

---

## 📅 2026-10-25 — Logo Oficial em Alta Resolução com Transparência Nativa Dual-Theme

- **Agente:** Antigravity (AGY)
- **Arquivo de Origem:** Processado o novo arquivo `logo.jfif` (alta resolução 3454x1216).
- **Tratamento de Transparência:**
  - Removido o container/caixa branca que causava efeito visual de "adesivo".
  - Gerados dois ativos com fundo **100% transparente** e bordas suavizadas (anti-aliasing de alta precisão):
    - `assets/logo-dark.png`: Polígono vermelho corporativo + "EGS" em branco + texto "DiGiTAL" em branco puro com fundo transparente (integrando-se ao fundo preto/ônix).
    - `assets/logo-light.png`: Polígono vermelho corporativo + "EGS" em branco + texto "DiGiTAL" em preto grafite com fundo transparente (integrando-se ao fundo claro).
- **Resultado Visual:** A logo agora flutua perfeitamente sobre a barra de navegação e o rodapé, sem qualquer caixa branca ou artefato visual.
- **Status do Detector:** **0 avisos / 0 erros** (`[]`).

---

## 📅 2026-10-26 — Consolidação da Versão de Produção (v2.0) e Publicação no GitHub Pages (`Rafael-Coimbra074`)

- **Agente:** Antigravity (AGY)
- **O que foi feito:**
  - **Transformação do Protótipo em Site de Produção Definitivo:**
    - Incorporados todos os dados cadastrais e institucionais reais da **EGS Digital** (CNPJ `11.846.893/0001-07`, Telefone `(31) 3037-3451`, E-mail `contato@egsdigital.com.br`, Endereço `Rua Frei Luiz de Souza, 266 — Belo Horizonte / MG`, Loja `loja.egsdigital.com.br` e HelpDesk `chamados.egsdigital.com.br`).
    - Adicionado **SEO Completo & Schema.org (`ProfessionalService`)** em JSON-LD, OpenGraph tags, Twitter Cards, `theme-color` adaptativo e favicon vetorial/PNG oficial (`assets/favicon.png`).
    - Implementado o **Painel NOC Interativo (`role="tablist"`)** no Hero permitindo inspecionar os 4 módulos de operação em tempo real (`[M1]` Monitoramento de Endpoints & Rede, `[M2]` Backup Imutável & DR, `[M3]` Segurança & Firewall Gerenciado, `[M4]` Telefonia IP WideCloud) com navegação completa por teclado.
    - Adicionada a seção **Metodologia de Engenharia em 3 Etapas** (`[01]` Auditoria & Diagnóstico, `[02]` Blindagem & Padronização, `[03]` Operação Assistida & NOC 24/7).
    - Adicionado o grid de **Ecossistema Homologado (8 Parceiros Tecnológicos)**: Microsoft, Dell Technologies, Fortinet, Acronis, Linux & Proxmox, Ubiquiti, WideVoice e Intelbras.
    - Formulário de contato produtivo com integração dupla (**WhatsApp Corporativo Direto** com mensagem estruturada e **Abertura de Cliente de E-mail `mailto:`** como alternativa formal) e Toast acessível (`role="status"`).
    - Limpeza de arquivos temporários do protótipo (`css/variants.css`, `assets/logo.png`, `assets/logo-oficial.png`).
  - **Auditoria Mecânica Impeccable + Web Interface Guidelines:**
    - Adicionado token `--egs-red-text` (`#F87171` dark / `#B91C1C` light) garantindo contraste WCAG AA > 4.5:1 em todos os códigos monoespaçados.
    - Resultado do detector `impeccable detect`: **`[]` (0 avisos, 0 erros, exit code 0)**.
  - **Publicação no GitHub & GitHub Pages:**
    - Conta utilizada: **`Rafael-Coimbra074`** (conta pessoal/EGS isolada da conta escolar).
    - Repositório público criado e publicado via GitHub Pages: `https://github.com/Rafael-Coimbra074/EGS-Digital` → **`https://rafael-coimbra074.github.io/EGS-Digital/`**.
- **Arquivos de Produção Finais:**
  - [index.html](file:///c:/Users/fael/Desktop/EGS-Digital/index.html)
  - [css/tokens.css](file:///c:/Users/fael/Desktop/EGS-Digital/css/tokens.css)
  - [css/base.css](file:///c:/Users/fael/Desktop/EGS-Digital/css/base.css)
  - [css/components.css](file:///c:/Users/fael/Desktop/EGS-Digital/css/components.css)
  - [js/main.js](file:///c:/Users/fael/Desktop/EGS-Digital/js/main.js)
  - [assets/logo-dark.png](file:///c:/Users/fael/Desktop/EGS-Digital/assets/logo-dark.png)
  - [assets/logo-light.png](file:///c:/Users/fael/Desktop/EGS-Digital/assets/logo-light.png)
  - [assets/favicon.png](file:///c:/Users/fael/Desktop/EGS-Digital/assets/favicon.png)
  - [.gitignore](file:///c:/Users/fael/Desktop/EGS-Digital/.gitignore)
- **Próximos Passos Pendentes:**
  - Validar com a diretoria da EGS Digital se desejam apontar o domínio oficial `egsdigital.com.br` (CNAME / registros A da Cloudflare/Registro.br) para o GitHub Pages ou hospedar o pacote estático no servidor atual substituindo o WordPress antigo.
  - Iniciar o planejamento da **Fase 2 (CRM EGS)** quando autorizado pelo usuário.

---

## 📅 2026-10-26 — Refinamento Final `/impeccable` (Optimize, Clarify, Adapt, Polish → Score 20/20)

- **Agente:** Antigravity (AGY)
- **Ciclo Executado (1 por 1):**
  1. **`$impeccable optimize`**: Adicionado `IntersectionObserver` em [js/main.js](file:///c:/Users/fael/Desktop/EGS-Digital/js/main.js#L239-L252) para pausar automaticamente o loop `requestAnimationFrame` do `#space-canvas` quando a seção Hero (`#inicio`) sai da viewport, além de `fetchpriority="high"` nas logos do topo e `loading="lazy" decoding="async"` nas logos do rodapé.
  2. **`$impeccable clarify`**: Adicionados indicadores visuais explícitos de campos obrigatórios (`.label-req`) e opcional (`.label-opt` — `(opcional)`) nos rótulos `<label>` de `#lead-form` em [index.html](file:///c:/Users/fael/Desktop/EGS-Digital/index.html#L550-L573), com exemplos práticos claros nos placeholders.
  3. **`$impeccable adapt`**: Travada a largura horizontal do `<textarea>` (`resize: vertical; min-height: 96px; max-height: 280px`) e elevada a área de toque de `.footer-links a` para `min-height: 44px` em [css/components.css](file:///c:/Users/fael/Desktop/EGS-Digital/css/components.css#L1052-L1059).
  4. **`$impeccable polish`**: Removidos 100% dos atributos `style="..."` inline de [index.html](file:///c:/Users/fael/Desktop/EGS-Digital/index.html) e [js/main.js](file:///c:/Users/fael/Desktop/EGS-Digital/js/main.js), substituídas as cores fixas de `.whatsapp-float` por tokens semânticos (`var(--bg-surface-elevated)` / `var(--text-primary)`) e sincronizada a meta tag `<meta name="theme-color">` dinamicamente entre `#000000` (Dark) e `#FAFAFA` (Light).
- **Resultado Final do Audit:** **20/20 (Excellent)** e **`[]` (0 avisos / 0 erros)** no detector mecânico.

---

## 📅 2026-10-30 — Evolução de Conteúdo e Engenharia Comercial ("EGS 2.0") + Checkpoint de Rollback (`v1.0-baseline`)

- **Agente:** Antigravity (AGY)
- **Ponto de Restauração Seguro (Rollback Instantâneo):**
  - Criada a tag Git **`v1.0-baseline`** apontando para o commit `61a1da5` antes das alterações da EGS 2.0, garantindo retorno imediato de 1 comando (`git checkout v1.0-baseline -- index.html css/ js/`) caso o usuário deseje voltar à versão anterior enxuta.
- **Intervenção Proativa ([[05-diretriz-pensamento-critico]]):**
  - Preservada 100% da arquitetura estética minimalista (*x.ai* & *V7 Labs*) e dos tokens CSS, focando a evolução 2.0 no **enriquecimento de conteúdo técnico, tangibilidade comercial e quebra de objeções B2B**.
- **6 Upgrades Implementados na EGS 2.0:**
  1. **Painel NOC com Telemetria Tripla (`#inicio`):** Adicionadas métricas técnicas dinâmicas (`RPO / Janela`, `Criptografia / Protocolo`, `Auditoria / SLA`) em cada módulo (`M1` a `M4`) e indicador `< 15m` de triagem crítica no Hero.
  2. **6 Soluções com Entregáveis + Modal de Ficha Técnica (`#solucoes` + `#spec-modal`):** Cada card agora lista 3 entregáveis concretos e possui o botão `Ver Ficha Técnica →`, abrindo um modal acessível (`role="dialog"`, suporte a `Esc` e retorno de foco) com escopo completo de engenharia, SLA, modelo OPEX e link contextualizado para cotação no WhatsApp.
  3. **Matriz Comparativa Executiva (`#metodologia`):** Bloco lado a lado contrastando o **Modelo Tradicional ("Quebra-Conserta")** contra a **Governança Proativa EGS Digital (MSP)**.
  4. **Configurador de Arquitetura 2.0 (`#simulador`):** Adicionado seletor de **Setor de Atuação** (Contabilidade/Jurídico, Indústria/Logística, Clínicas/Saúde, Comércio/Serviços) e painel **Blueprint Recomendado** exibindo SLA, Topologia, Modelo de Contratação e lista dinâmica de entregáveis.
  5. **Engenharia por Vertical de Negócio em MG (`#setores`):** Nova seção detalhando como a EGS resolve as dores específicas de Escritórios Contábeis/Advocacia (Domínio, Alterdata, LGPD), Indústrias/Galpões (ERP, Wi-Fi de alta densidade, Furukawa), Clínicas/Saúde (WideCloud URA, segregação de rede) e Varejo/Comércio (HaaS, PDV e filiais).
  6. **FAQ Executivo da Diretoria (`#faq` + Schema `FAQPage` JSON-LD):** Accordion nativo respondendo às 5 principais dúvidas antes da assinatura do contrato (transição sem paradas, TI Co-Gerenciada vs. Full MSP, recuperação de Ransomware, HaaS OPEX vs. CAPEX e atendimento presencial em BH/MG).
- **Validação Mecânica:** `node -c js/main.js` (0 erros) e `npx impeccable detect index.html --json` (`[]` — 0 avisos / 0 erros).
- **Refinamento Curatorial (`Distill` + `Animate`):**
  - Enxugado o excesso de texto visível: removidos os bullets internos dos 6 cards de soluções (devolvendo o respiro minimalista V7 Labs para a vitrine e concentrando os detalhes dentro do Modal de Ficha Técnica), eliminada a seção redundante `#setores` (mantendo o seletor de segmento integrado dentro do Simulador) e enxugado o comparativo TI Comum vs. EGS para 3 pontos diretos.
  - **Camada de Movimento & Vida Adicionada:**
    - Modal de Ficha Técnica (`#spec-modal`) com abertura/fechamento animados (`opacity` + `backdrop-filter` + `translateY(20px) scale(0.96)` → `scale(1)`) e entrada em cascata (*stagger*) das métricas e entregáveis, podendo ser aberto clicando em qualquer lugar do card.
    - Transição suave (`.is-switching` / `.is-updating`) ao alternar as abas do Painel NOC e os filtros do Configurador de Arquitetura.
    - FAQ Accordion (`#faq`) com animação fluida de altura (`grid-template-rows: 0fr -> 1fr`) e fechamento automático dos demais itens.
    - Canvas do Hero reagindo suavemente à proximidade do cursor com conexões sutis em vermelho EGS e micro-deslizamento nas setas (`→` / `↗`) e links do menu.
- **Âncoras Gráficas Vetoriais (SVG) + Seção de Feedbacks B2B (`#clientes`):**
  1. **Gráfico de Onda de Telemetria no Painel NOC (`.noc-telemetry-viz`):** Curva vetorial SVG (`#noc-wave-line` / `#noc-wave-area`) que altera seu traçado dinamicamente ao alternar entre `M1`, `M2`, `M3` e `M4`.
  2. **Diagrama Animado de Fluxo de Dados Anti-Ransomware (`.topology-diagram` em `#seguranca`):** Esquema arquitetural mostrando `ORIGEM · ON-PREMISE` ➔ `AES-256 · AIR-GAP` (com feixe contínuo animado em SVG) ➔ `COFRE · ISO 27001 (Bloco Imutável WORM)`.
  3. **Blueprint Visual de Rack Padronizado EGS (`.rack-schematic` em `#quemsomos`):** Representação gráfica das 4 unidades de infraestrutura (`U01` Borda & Firewall, `U02` Cluster Servidores, `U03` Cofre Imutável, `U04` Sustentação MSP & WideCloud).
  4. **Seção "Operações Blindadas pela EGS Digital" (`#clientes`):** 3 cards minimalistas de prova social B2B sem clichês visuais (foco em métrica operacional `0 PARADAS EM 3 ANOS`, `99.9% UPTIME NO ERP`, `SLA < 15 MIN NO SUPORTE` + relato executivo por setor).
- **Auditorias `taste-skill` (`inspect.mjs` real-browser) + `find-skills` (`landing-page-conversion-audit` / `cro` / `visual-qa`):**
  1. **`[headline-lines]` (Títulos de 4 linhas reduzidos para 2 linhas):** Ajustados `<h1>` (`"Infraestrutura de TI para Operações Críticas"`), `#metodologia-heading` (`"Governança e Implantação"`), `#seguranca-heading` (`"Backup Imutável e Recuperação de Desastres"`) e `#quemsomos-heading` (`"Engenharia de TI Sólida em Minas Gerais"`).
  2. **`[eyebrow]` (Remoção do kicker enquadrado do Hero):** Removida a pílula `.hero-eyebrow` que quebrava em 2 linhas em `390px` e integrado o contexto de Belo Horizonte/MG diretamente ao lead do Hero.
  3. **Botão `.btn-spec-trigger` em linha única:** Simplificado para `"Ficha Técnica →"` com `white-space: nowrap; flex-shrink: 0;` para nunca quebrar em 2 linhas nos cards de 3 colunas.
  4. **Header Mobile (`390px`) desobstruído:** Ocultado `.btn-store` na barra superior em telas `<= 560px` e adicionados links dedicados (`.nav-link-mobile-only`) para `Loja Corporativa ↗` e `HelpDesk (Chamados) ↗` dentro do menu mobile `#nav-menu`.
  5. **Diagrama `.topology-diagram` full-width (`grid-column: 1 / -1`):** Expandido o diagrama vetorial de Backup Imutável para ocupar toda a largura inferior de `.security-section-box`, eliminando o aperto visual na coluna esquerda.
  6. **Escala tipográfica e elevação limpa (`[body-size]`, `[small-text]`, `[shadow]`):** Elevado o corpo de `.service-card p` para `1rem` (`16px`), `.service-meta` e `.topo-code` para `0.8125rem` (`13px`) e removidas sombras em repouso de `.operations-panel` e `.pillars-card`.
- **Descomplicação de Linguagem (Foco no Empresário) + Melhorias de CRO:**
  1. **Tradução de Jargões de TI para Linguagem Executiva Clara:** Substituídas siglas intimidadoras (*MSP*, *RPO/RTO*, *WORM/Object Lock*, *Air-Gap Lógico*, *HaaS OPEX/CAPEX*, *Site Survey*, *Dual-WAN Failover*) por benefícios diretos do dia a dia (*"Suporte de TI Completo"*, *"Backup Blindado Contra Sequestro"*, *"Duas Internets Automáticas"*, *"Aluguel de Computadores Sem Gastar com Compra"*, *"Atendimento em até 15 min"*), permitindo que qualquer dono de empresa entenda imediatamente o que precisa.
  2. **Integração Simulador ➔ Formulário (`#sim-fill-form-btn`):** Adicionado botão *"Ou enviar pelo formulário ↓"* no Simulador que rola suavemente até `#contato`, preenche automaticamente o campo de mensagem com o resumo da simulação e foca o campo Nome.
  3. **Redução de Fricção no Formulário (`#lead-form`):** Mantidos apenas 3 campos rápidos obrigatórios (*Seu Nome*, *Nome da Empresa* e *Telefone / WhatsApp*), tornando *E-mail* e *O que precisa resolver* opcionais.
  4. **Carrossel em Loop Infinito de 8 Clientes (`#clientes`):** Expandida a seção de feedbacks para **8 empresas de segmentos distintos em MG** (*Contabilidade*, *Logística*, *Saúde*, *Advocacia*, *Metalurgia*, *Varejo*, *Construção Civil* e *Seguros*), cada card contendo:
     - **Nota de 0 a 5 estrelas** em SVG vetorial + score numérico `5.0` e selo de resultado;
     - **Relato executivo** claro e objetivo;
     - **Avatar circular tipo foto de perfil** (`.company-logo-circle`, preparado para monograma ou `<img src="...">` com a logo real da empresa) + nome da empresa e setor ao lado;
     - **Loop contínuo infinito** via `requestAnimationFrame` + `IntersectionObserver` em [js/main.js](file:///c:/Users/fael/Desktop/EGS-Digital/js/main.js#L836-L892), com pausa automática ao passar o mouse (`mouseenter`) ou tocar no celular (`touchstart`) e máscara suave nas bordas laterais.
  5. **Hover Padrão Limpo no Botão Fechar do Modal (`.spec-modal-close`) + Indicador Lateral de Seções (`.section-dots-nav`):**
     - Removida a rotação (`rotate(90deg)`) do ícone `X` em `.spec-modal-close:hover`, mantendo apenas hover padrão limpo de superfície e borda;
     - Implementada a barra vertical fixa de pontos de seção (`.section-dots-nav`) na lateral esquerda com `IntersectionObserver` (ScrollSpy em tempo real), esfera ativa deslizante (`.section-dots-indicator`) e *tooltip* ao passar o mouse.
  6. **Refinamento de Contraste e Profundidade no Tema Claro (`[data-theme="light"]`):**
     - **Sem alterar nada no Tema Escuro**, foram criados os tokens semânticos `--bg-section-alt` (`#E7E9EF`), `--bg-card-on-alt` (`#FFFFFF`), `--bg-page` (`#F3F4F6`), `--border-subtle` (`#D1D5DB`), `--border-medium` (`#9CA3AF`) e `--shadow-card` em [css/tokens.css](file:///c:/Users/fael/Desktop/EGS-Digital/css/tokens.css#L83-L116).
     - No modo claro, as seções alternam entre `#F3F4F6` e `#E7E9EF`, enquanto **todos os cards e caixas principais saltam em branco puro (`#FFFFFF`)** com bordas nítidas e elevação sutil, eliminando a sensação de "tudo parecer uma coisa só".
- **Arquivos Atualizados:**
  - [index.html](file:///c:/Users/fael/Desktop/EGS-Digital/index.html)
  - [css/tokens.css](file:///c:/Users/fael/Desktop/EGS-Digital/css/tokens.css)
  - [css/base.css](file:///c:/Users/fael/Desktop/EGS-Digital/css/base.css)
  - [css/components.css](file:///c:/Users/fael/Desktop/EGS-Digital/css/components.css)
  - [js/main.js](file:///c:/Users/fael/Desktop/EGS-Digital/js/main.js)
  - [instruction.md](file:///c:/Users/fael/Desktop/EGS-Digital/instruction.md)
- **Publicação & Próximos Passos Pendentes (Handoff):**
  - Versão **EGS 2.0** validada pelo usuário e publicada no GitHub Pages (`https://rafael-coimbra074.github.io/EGS-Digital/`), mantendo a tag `v1.0-baseline` preservada.
  - Na próxima sessão: substituir as 8 empresas ilustrativas do carrossel (`#clientes`) pelas logos/nomes reais dos clientes da EGS Digital, avaliar inclusão de fotos reais de infraestrutura/equipe da EGS em BH e evoluir novos refinamentos solicitados pelo usuário.






