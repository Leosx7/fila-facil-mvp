# Fila Fácil

MVP individual para a disciplina Tópicos Especiais em Programação (IFPI ADS IV).

## Pitch
Para usuários que enfrentam espera desorganizada em filas de atendimento, o Fila Fácil permite registrar uma solicitação de atendimento e acompanhar seu status, substituindo anotações improvisadas por uma fila digital simples, medindo o sucesso inicial pela quantidade de solicitações registradas com persistência no banco.

## RF-CORE
Registrar uma solicitação real de atendimento e persistir o registro no Supabase.

## Requisitos Funcionais do MVP 1
- RF-01: Cadastrar solicitação com nome, serviço e prioridade.
- RF-02: Validar campos obrigatórios e prioridade permitida.
- RF-03: Persistir solicitação no PostgreSQL via Supabase.
- RF-04: Exibir confirmação com protocolo UUID e status inicial.

## Fora do MVP 1
- Login e autenticação de usuários.
- Painel administrativo completo.
- Notificações por WhatsApp/SMS.
- Pagamentos.
- Relatórios avançados.

## Stack
- HTML/CSS/JavaScript
- Vite
- Supabase JavaScript SDK
- PostgreSQL/Supabase
