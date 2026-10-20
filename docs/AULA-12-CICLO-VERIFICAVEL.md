# Aula 12 — Ciclo de Desenvolvimento Verificável

## Micro-funcionalidade escolhida
Garantir a regra do RF-01: toda nova solicitação nasce com status `aguardando`, mesmo que o cliente tente enviar outro status no payload.

## RED
Foi criado primeiro um teste automatizado importando o validador ainda inexistente. A execução falhou com `ERR_MODULE_NOT_FOUND`, comprovando a fase RED.

## GREEN
Após implementar apenas o validador necessário, a suíte foi executada novamente e ficou 100% verde.

Resultado local verificado:
- 2 testes iniciais executados
- 2 testes aprovados
- 0 falhas

A versão commitada amplia a suíte para cobrir também atualização válida e status inválido.

## Guardrails
- `.env`, `.env.local` e `*.env` seguem ignorados.
- Nenhuma chave real foi adicionada ao repositório.
- O controller delega validação ao módulo específico.
- A mudança é pequena e limitada à validação/testes da regra.

## Comando de verificação
```bash
npm test
```

## Commit
Commit semântico e atômico: `feat(api): validar status inicial com teste automatizado (RF-01)`.
