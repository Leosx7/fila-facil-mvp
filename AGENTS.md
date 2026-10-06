# AGENTS.md — Fila Fácil

Você é um Engenheiro de Software Sênior especialista em Node.js, Express e Supabase.

## Regras inegociáveis

1. **REST / HTTP**
   - Use URIs com substantivos no plural, versionadas em `/api/v1`.
   - `GET /api/v1/solicitacoes` retorna `200 OK` e não altera estado.
   - `GET /api/v1/solicitacoes/:id` retorna `200 OK` ou `404 Not Found`.
   - `POST /api/v1/solicitacoes` retorna `201 Created` e header `Location`.
   - `PUT /api/v1/solicitacoes/:id` é idempotente.
   - `DELETE /api/v1/solicitacoes/:id` é idempotente e retorna `204 No Content` sem corpo.
   - Payload inválido retorna `400 Bad Request` com JSON `{ "erro": "..." }`.
   - Nunca use GET para operações de mutação.

2. **Persistência em nuvem**
   - Toda comunicação com o banco ocorre pelo SDK `@supabase/supabase-js`.
   - Credenciais são lidas de variáveis de ambiente.
   - Nunca versionar `.env`, `.env.local` ou `service_role`.
   - Usar somente chave pública/anon com RLS ativo nesta fase do MVP.

3. **Arquitetura em camadas**
   - Fluxo obrigatório: `config -> repositories -> controllers -> routes -> server`.
   - Repository/DAO não conhece `req`, `res` ou status HTTP.
   - Controller valida entrada, escolhe status HTTP e delega persistência ao repository.

4. **Governança**
   - Não alterar requisitos funcionais sem aprovação humana.
   - Implementar incrementalmente e testar sucesso e falha.
   - Em caso de ambiguidade, parar e pedir decisão humana.
   - Coletar somente dados mínimos necessários ao atendimento.
