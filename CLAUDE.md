---
projeto: EGS-Digital
tipo: entrypoint-claude
relacionados:
  - "[[AGENTS]]"
  - "[[00-Hub-EGS-Digital]]"
  - "[[instruction]]"
  - "[[rules]]"
  - "[[01-log-decisoes]]"
tags:
  - projeto/egs-digital
  - claude-code
  - multi-agent
---

# 🧠 CLAUDE.md — Configuração Automática para Claude Code (`EGS-Digital`)

Este projeto compartilha memória e contexto em tempo real via **Obsidian** com outros agentes (**Antigravity / AGY**, **Codex**, **OpenCode**).

## Ao Iniciar a Sessão (Obrigatório)
1. Leia imediatamente o protocolo completo em **[[AGENTS]]** (`AGENTS.md`) e a diretriz **[[05-diretriz-pensamento-critico]]**:
   - **INTERVENÇÃO PROATIVA OBRIGATÓRIA:** NÃO espere o usuário perguntar. Se ele trouxer uma ideia que não seja a ideal, intervenha na hora, aponte os riscos técnicos e proponha a melhor alternativa.
2. Carregue o contexto do projeto lendo:
   - **[[00-Hub-EGS-Digital]]** (`00-Hub-EGS-Digital.md`)
   - **[[instruction]]** (`instruction.md`) — Estruturado via `enhance-prompt`
   - **[[rules]]** (`rules.md`)
   - **[[01-log-decisoes]]** (`memory/01-log-decisoes.md` e demais arquivos em `memory/`)

## Ao Finalizar Qualquer Alteração (Handoff Multi-Agent)
- Registre sempre o que foi implementado, decisões arquiteturais e próximos passos em `memory/01-log-decisoes.md` (mantendo os `[[wikilinks]]` do Obsidian) para que o próximo agente (AGY, Codex ou nova sessão do Claude) continue exatamente de onde você parou.
- As 123 skills do projeto estão disponíveis em `.agents/skills/`.
