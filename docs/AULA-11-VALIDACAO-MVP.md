# Aula 11 — Estratégia e Validação do MVP

## Escolha estratégica
Acompanhamento formativo.

O Fila Fácil seguirá como projeto acadêmico da disciplina, priorizando a consolidação técnica do MVP antes de uma eventual submissão futura a editais externos.

## Hipótese de validação
O núcleo do produto é considerado funcional se o usuário conseguir registrar uma solicitação, receber um protocolo UUID e o dado permanecer persistido no Supabase com status e timestamp.

## Critérios observáveis
- Cadastro válido gera registro persistido.
- Campos inválidos resultam em rejeição.
- UUID é gerado automaticamente.
- created_at é gravado pelo banco.
- GET da coleção retorna 200.
- GET de recurso inexistente retorna 404.
- POST retorna 201 + Location.
- PUT é idempotente.
- DELETE retorna 204 sem corpo.
- Constraints do PostgreSQL bloqueiam dados inválidos.
- .env e segredos não são versionados.
