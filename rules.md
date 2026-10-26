---
projeto: EGS-Digital
tipo: rules
relacionados:
  - "[[00-Hub-EGS-Digital]]"
  - "[[instruction]]"
tags:
  - projeto/egs-digital
  - core/rules
  - qa
---

# EGS-Digital — Regras de Desenvolvimento, Design e Qualidade (`rules.md`)

> **Contrato Técnico e Padrões Obrigatórios (CORE + Projeto)**
> Este documento estabelece as regras inegociáveis (*Do's & Don'ts*) de código, interface, conteúdo, acessibilidade e arquitetura para o projeto **EGS-Digital**, derivado diretamente do [[instruction]] ([instruction.md](file:///c:/Users/fael/Desktop/EGS-Digital/instruction.md)) e centralizado no [[00-Hub-EGS-Digital]].

---

## 1. Regras CORE de Identidade Visual e UI (Design Tokens)

### 1.1. Sistema Estrito de Cores e Tokens CSS
- **OBRIGATÓRIO:**
  - Utilizar exclusivamente variáveis CSS semânticas (`--color-bg`, `--color-surface`, `--color-surface-alt`, `--color-text-primary`, `--color-text-muted`, `--color-border`, `--color-accent`, `--color-accent-hover`, `--color-success`) definidas em `:root` / `[data-theme]`.
  - Garantir contraste de leitura mínimo **WCAG AA** (4.5:1 para texto normal, 3:1 para títulos grandes e elementos gráficos) tanto no Modo Escuro quanto no Modo Claro.
  - Manter divisórias e bordas sutis (`1px solid var(--color-border)`) e amplo espaço negativo entre seções.
  - Desativar transições globais durante a alternância entre temas claro e escuro para evitar atrasos visuais indesejados.
- **PROIBIDO:**
  - Usar cores avulsas (*hardcoded*) fora da paleta oficial do projeto.
  - Aplicar degradês multicoloridos genéricos ("AI slop"), sombras pesadas/borradas excessivas ou efeitos neon sem função semântica.
  - Usar `outline` que não respeite `border-radius` em estados de foco (usar `box-shadow` específico para anel de foco).

### 1.2. Microinterações e Formulários de Alta Precisão ([[07-web-interface-guidelines]])
- **OBRIGATÓRIO:**
  - Todo campo `<input>`, `<select>` e `<textarea>` deve ter `font-size >= 16px` (`1rem`) em dispositivos móveis para evitar zoom automático invasivo do iOS.
  - Todo `<textarea>` deve ter largura fixa (`width: 100%; max-width: 100%;`) e `resize: vertical` (com `min-height` e `max-height` definidos) para crescer apenas verticalmente sem jamais quebrar o grid do formulário.
  - Inputs devem estar agrupados em `<form>` e submeter com tecla `Enter`.
  - O clique no `<label>` deve focar o respectivo campo; botões desabilitam após submissão para prevenir cliques repetidos.
  - Toggles e switches devem ter efeito imediato sem necessidade de confirmação.
  - Animações cotidianas e microinterações com duração máxima de **200ms**, proporcionais ao tamanho do componente.
  - Isolar efeitos de hover para ponteiros reais usando `@media (hover: hover)`.
  - Aplicar `-webkit-font-smoothing: antialiased` e `text-rendering: optimizeLegibility`.
  - Números dinâmicos e cronômetros com `font-variant-numeric: tabular-nums` para evitar oscilação de layout (*layout shift*).
- **PROIBIDO:**
  - Mudar `font-weight` no estado `:hover` (evitar layout shift).
  - Usar `autofocus` em formulários no mobile (evita abrir o teclado por cima da tela).
  - Colocar tooltips explicativos em botões desabilitados (inacessível para leitores de tela e teclado).

### 1.2. Uso de Logomarca e Assets Visuais
- **OBRIGATÓRIO:**
  - Utilizar arquivos de logomarca com fundo **100% transparente** (`.png` ou `.svg`), alternando entre a versão para fundo escuro (`logo-dark`) e fundo claro (`logo-light`) quando houver Dual Theme.
  - Preservar a proporção original de qualquer logomarca ou ilustração técnica (`object-fit: contain`).
  - Implementar fallback visual elegante (ex.: iniciais estilizadas ou *placeholder* vetorial) para fotos ou imagens dinâmicas ainda não carregadas.
- **PROIBIDO:**
  - Utilizar imagens com falso fundo transparente (quadriculado salvo em `.jpg`/`.png`).
  - Distorcer, achatar ou esticar logomarcas e fotos.
  - Deixar ícones de imagem quebrada visíveis na interface.

### 1.3. Tipografia, Hierarquia e Iconografia
- **OBRIGATÓRIO:**
  - Utilizar tipografia fluida com `clamp()` para títulos (`h1`, `h2`, `h3`) garantindo leitura perfeita do mobile ao widescreen.
  - Usar fonte monoespaçada (`'JetBrains Mono'`, `monospace`) para códigos técnicos, índices numéricos (`01`, `02`, `03`), normas, métricas e badges técnicas.
  - Usar ícones vetoriais SVG consistentes em espessura de traço e alinhamento óptico.

---

## 2. Regras CORE de Engenharia, Código e Acessibilidade

### 2.1. HTML Semântico, SEO e Acessibilidade
- **OBRIGATÓRIO:**
  - Estruturar páginas com landmarks semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Manter apenas **um `<h1>` por página**, respeitando a ordem hierárquica (`h1` → `h2` → `h3`).
  - Adicionar `aria-label` descritivo em botões de ícone (ex.: alternador de tema, menu mobile, links sociais) e garantir estados `:focus-visible` nítidos.
  - Configurar `target="_blank" rel="noopener noreferrer"` em todos os links externos.

### 2.2. Arquitetura CSS e JavaScript
- **OBRIGATÓRIO:**
  - Manter dados estruturados (cards de serviços, equipe, projetos, perguntas frequentes) centralizados em objetos/arrays JavaScript ou módulos dedicados para fácil manutenção.
  - Garantir que todas as interações (filtros, abas, modais, menu mobile, troca de tema) funcionem via teclado e toque.
  - Tratar eventos e seletores de DOM com segurança (`optional chaining` / verificação de existência) para evitar exceções em tempo de execução.
- **PROIBIDO:**
  - Deixar `console.error`, variáveis globais poluindo `window` desnecessariamente ou código morto comentado.
  - Criar rolagem horizontal acidental (`100vw` mal calculado ou elementos fixos fora do viewport).

---

## 3. Regras Específicas de Escopo, Negócio e Memória Obsidian (`EGS-Digital`)

### 3.1. Protocolo de Memória Viva no Obsidian (Sincronização Contínua)
- **OBRIGATÓRIO:**
  - Sempre que uma nova decisão de produto, identidade visual, arquitetura, escopo ou regra for definida no chat, atualizar imediatamente o [[instruction]], o [[rules]] ou criar/atualizar uma nota em `memory/` (como [[01-log-decisoes]]) conectada via `[[wikilinks]]` ao [[00-Hub-EGS-Digital]].
  - Usar frontmatter YAML (`projeto`, `tipo`, `relacionados`, `tags`) e links `[[nome-do-arquivo]]` em todas as notas Markdown para que o Grafo do Obsidian reflita em tempo real o cérebro do projeto.
  - Manter o tom de voz alinhado ao posicionamento definido no [[instruction]] ([instruction.md](file:///c:/Users/fael/Desktop/EGS-Digital/instruction.md)).
  - Validar todos os fluxos principais de navegação e conversão antes de cada entrega.
- **PROIBIDO:**
  - Deixar decisões importantes apenas no histórico do chat sem persistir nos arquivos `.md` do cofre do projeto.
  - Incluir arquivos temporários, rascunhos ou assets de outros projetos no pacote final de entrega.

---

## 4. Protocolo CORE de Validação (Checklist Antes de Entregar)

1. **Teste de Tema e Tokens:** O tema padrão carrega corretamente e (se houver seletor Claro/Escuro) alterna cores e logomarca instantaneamente sem perder contraste?
2. **Teste de Interatividade:** Todos os botões, filtros, abas, menus e formulários respondem ao clique e ao teclado (`Tab` / `Enter` / `Esc`)?
3. **Teste de Responsividade Multi-Tela:** O layout mantém alinhamento e zero barra de rolagem horizontal em Full HD (`1920×1080`), Laptop (`1440px`), Tablet (`768px`) e Mobile (`390px` / `360px`)?
4. **Teste de Assets e Fallbacks:** Todas as imagens, ícones SVG e avatares carregam com proporção correta (ou acionam o fallback previsto)?
5. **Teste de Console Limpo:** A aplicação abre e navega por todas as seções com **0 erros** no Console do DevTools (`F12`)?
