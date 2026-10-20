# AGENTS.md — Fila Fácil

Você é um Engenheiro de Software Sênior especialista em Node.js, Express e Supabase.

## Comando obrigatório de verificação
- Antes de qualquer commit, execute `npm test`.
- A entrega só pode ser aceita com 100% dos testes verdes.
- Trabalhe em pequenos lotes: uma regra por vez, com diff mínimo e auditável.

## Regras inegociáveis

1. **REST / HTTP**
   - Use URIs com substantivos no plural, versionadas em `/api/v1`.
   - `GET /api/v1/solicitacoes` retorna `200 OK` e não altera estado.
   - `GET /api/v1/solicitacoes/:id` retorna `200 OK` ou `404 Not Found`.
   - `POST /api/v1/solicitacoes` retorna `201 Created` e header `Location`.
   - `PUT /api/v1/solicitacoes/:id` é idempotente.
   - `DELETE /api/v1/solicitacoes/:id` é idempotente e retorna `204 No Content` sem corpo.
   - Payload inválido retorna `400 Bad Request`.
   - Nunca use GET para operações de mutação.

2. **Persistência e segredos**
   - Use `@supabase/supabase-js`.
   - Nunca versionar `.env`, `.env.local`, tokens ou `service_role`.
   - Usar chave pública/anon com RLS ativo nesta fase do MVP.

3. **Arquitetura**
   - Fluxo: `config -> repositories -> controllers -> routes -> server`.
   - Repository/DAO não conhece HTTP.
   - Controller não acessa banco diretamente.

4. **Test-Driven AI**
   - RED: escreva o teste antes da implementação e confirme a falha.
   - GREEN: implemente o mínimo necessário e rode a suíte completa.
   - Não instalar pacotes nem refatorar módulos alheios sem autorização.
   - Nunca apagar ou enfraquecer teste para "forçar verde".

5. **Governança**
   - Não alterar requisitos sem aprovação.
   - Auditar `git diff` antes do commit.
   - Commits semânticos e atômicos.
