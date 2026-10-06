# Estrutura de backend — Fila Fácil

O MVP usa Supabase como backend em nuvem, com PostgreSQL, API HTTP e Row Level Security (RLS).

## Organização

```text
src/
  services/
    supabaseClient.js
    inserirRegistro.js
supabase/
  schema.sql
docs/
  API-REST.md
```

## Variáveis de ambiente

As credenciais reais devem existir apenas localmente em `.env.local`.

Exemplo público versionável:

```env
VITE_SUPABASE_URL="https://seu-projeto.supabase.co"
VITE_SUPABASE_ANON_KEY="sua-chave-publica-aqui"
```

O `.gitignore` bloqueia `.env`, `.env.local`, `.env.*.local` e `*.env`.

A chave `service_role` nunca deve ser usada no frontend nem versionada no GitHub.
