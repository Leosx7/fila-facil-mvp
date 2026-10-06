# Contrato da API REST — Fila Fácil

## Recurso principal

O recurso central da API é `solicitacoes`.

Base URI proposta:

```text
/api/v1/solicitacoes
```

## Contrato RESTful

| Método | URI | Objetivo | Sucesso | Erros esperados |
|---|---|---|---|---|
| GET | `/api/v1/solicitacoes` | Listar solicitações | `200 OK` | `500 Internal Server Error` |
| GET | `/api/v1/solicitacoes/{id}` | Consultar uma solicitação por UUID | `200 OK` | `404 Not Found`, `500 Internal Server Error` |
| POST | `/api/v1/solicitacoes` | Criar uma nova solicitação | `201 Created` + cabeçalho `Location` | `400 Bad Request`, `500 Internal Server Error` |
| PUT | `/api/v1/solicitacoes/{id}` | Atualizar integralmente uma solicitação | `200 OK` | `400 Bad Request`, `404 Not Found`, `500 Internal Server Error` |
| DELETE | `/api/v1/solicitacoes/{id}` | Remover uma solicitação | `204 No Content` | `404 Not Found`, `500 Internal Server Error` |

## Payload para criação

```json
{
  "nome_cliente": "Leonardo Alencar",
  "servico": "Atendimento geral",
  "prioridade": "normal"
}
```

## Resposta de sucesso — POST

Status:

```text
201 Created
Location: /api/v1/solicitacoes/5216ff1a-6113-4913-b083-f6b4f2e9d8db
```

Body:

```json
{
  "id": "5216ff1a-6113-4913-b083-f6b4f2e9d8db",
  "nome_cliente": "Leonardo Alencar",
  "servico": "Atendimento geral",
  "prioridade": "normal",
  "status": "aguardando",
  "created_at": "2026-10-06T17:38:14.678Z"
}
```

## Payload para atualização — PUT

```json
{
  "nome_cliente": "Leonardo Alencar",
  "servico": "Atendimento geral",
  "prioridade": "prioritaria",
  "status": "em_atendimento"
}
```

## Modelo de erro

### 400 Bad Request

```json
{
  "erro": "Dados inválidos.",
  "detalhes": "nome_cliente e servico são obrigatórios; prioridade deve ser normal ou prioritaria."
}
```

### 404 Not Found

```json
{
  "erro": "Solicitação não encontrada."
}
```

### 500 Internal Server Error

```json
{
  "erro": "Erro interno do servidor."
}
```

## Regras arquiteturais

- URIs usam substantivos no plural.
- A API é stateless: cada requisição deve carregar tudo o que é necessário para seu processamento.
- GET não altera o estado do recurso.
- PUT é idempotente.
- DELETE deve responder `204 No Content` sem corpo quando concluído.
- POST bem-sucedido deve responder `201 Created` e informar o recurso criado em `Location`.
- O PostgreSQL/Supabase permanece como fonte determinística da verdade.
