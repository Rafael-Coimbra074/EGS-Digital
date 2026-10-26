---
projeto: EGS-Digital
tipo: entrypoint-agentes
relacionados:
  - "[[00-Hub-EGS-Digital]]"
  - "[[instruction]]"
  - "[[rules]]"
  - "[[01-log-decisoes]]"
tags:
  - projeto/egs-digital
  - multi-agent
  - core
---

# 🤖 AGENTS.md — Ponto de Entrada Universal Multi-Agent (AGY, Codex, OpenCode, Cursor)

> **INSTRUÇÃO AUTOMÁTICA DE INICIALIZAÇÃO PARA QUALQUER AGENTE DE IA:**
> Este repositório utiliza um **Cofre Obsidian Vivo** como memória compartilhada universal entre múltiplos agentes (**Antigravity / AGY**, **Claude Code**, **Codex CLI**, **OpenCode**, etc.).

---

## 1. Leitura Obrigatória ao Iniciar Qualquer Sessão (Context Load)

Antes de planejar, responder sobre arquitetura ou escrever código, **leia obrigatoriamente** nesta ordem:

1. **[[05-diretriz-pensamento-critico]]** (`00-CORE-COMPARTILHADO/05-diretriz-pensamento-critico.md`) — **REGRA FUNDAMENTAL (INTERVENÇÃO PROATIVA):** A IA NÃO deve esperar o usuário perguntar. Sempre que o usuário sugerir uma ideia que não seja a melhor, que traga riscos ou má prática, a IA deve intervir imediatamente, explicar o problema com franqueza e propor o caminho correto.
2. **[[00-Hub-EGS-Digital]]** (`00-Hub-EGS-Digital.md`) — Mapa central do projeto e índice de notas do cofre Obsidian.
3. **[[instruction]]** (`instruction.md`) — Especificação técnica, PRD, Design System (Tokens CSS) e diretrizes CORE (estruturadas com base na skill `enhance-prompt`).
4. **[[rules]]** (`rules.md`) — Contrato técnico inegociável (*Do's & Don'ts*), acessibilidade, responsividade e protocolo de validação.
5. **[[01-log-decisoes]]** (`memory/01-log-decisoes.md`) — E todas as notas dentro da pasta `memory/` para saber **exatamente onde o último agente parou**, quais decisões já foram tomadas e o que está em andamento.

---

## 2. Padrão de Engenharia de Prompts (`enhance-prompt`)

- Todos os manuais e especificações de telas/funcionalidades futuras **devem obrigatoriamente** seguir os princípios da skill **`enhance-prompt`**:
  - Eliminar termos vagos (usar termos precisos como *card grid layout*, *pill-shaped search input*, *hero banner*);
  - Explicitar blocos de design system, paleta e tipografia;
  - Estruturar o layout em seções numeradas e hierárquicas.

---

## 2. Protocolo de Handoff e Memória Contínua (Gravação Obrigatória)

Para garantir que o usuário possa começar uma tarefa em um agente (ex.: AGY) e continuar em outro (ex.: Claude Code ou Codex) sem perder contexto:

- **Ao tomar qualquer decisão ou concluir uma etapa:**
  1. Atualize `memory/01-log-decisoes.md` (ou crie uma nota específica em `memory/`) registrando: **Data**, **Agente utilizado**, **O que foi feito**, **Arquivos alterados** e **Próximos passos pendentes**.
  2. Se o escopo, paleta, estrutura ou regra técnica mudar, atualize imediatamente `instruction.md` e `rules.md`.
  3. Mantenha sempre os links no formato `[[nome-do-arquivo]]` e frontmatter YAML para que o **Grafo do Obsidian** permaneça conectado.

---

## 3. Catálogo de Skills Compartilhadas

- Todas as **123 skills** especializadas estão disponíveis localmente em `.agents/skills/` (ex.: `taste-skill`, `ui-ux-pro-max`, `frontend-design`, `debugging`, `tdd`, `code-review`, `handoff`).
