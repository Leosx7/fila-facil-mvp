# ESPECIFICACAO-MVP — Fila Fácil

## RF-01 — Cadastrar solicitação
**Ator:** Usuário do atendimento.

**Entradas:**
- `nome_cliente`: texto, 2 a 80 caracteres.
- `servico`: texto, 2 a 80 caracteres.
- `prioridade`: `normal` ou `prioritaria`.

**Regras de negócio:**
- Nome e serviço são obrigatórios.
- Prioridade aceita apenas `normal` ou `prioritaria`.
- O status inicial deve ser `aguardando`.

**Saída observável:** registro salvo no banco e confirmação exibida na tela.

**BDD — sucesso:** Dado que o usuário preenche nome e serviço válidos e escolhe uma prioridade permitida, quando enviar o formulário, então a solicitação deve ser gravada com UUID, `created_at` e status `aguardando`.

**BDD — falha:** Dado que algum campo obrigatório está vazio ou a prioridade é inválida, quando tentar enviar, então o sistema deve bloquear a gravação e exibir uma mensagem de erro.

## RF-02 — Validar dados antes do envio
**Ator:** Sistema.

**Entradas:** dados do formulário.

**Regras:** remover espaços externos, impedir campos vazios e respeitar limites de tamanho.

**Saída observável:** formulário enviado apenas quando válido.

## RF-03 — Persistir solicitação no Supabase
**Ator:** Sistema.

**Entradas:** objeto validado do RF-01.

**Regras:** usar SDK oficial do Supabase; credenciais em `.env.local`; nunca expor `service_role`.

**Saída observável:** linha criada na tabela `solicitacoes`.

## RF-04 — Confirmar protocolo
**Ator:** Sistema.

**Entradas:** resposta da inserção.

**Regras:** usar UUID retornado pelo banco como protocolo.

**Saída observável:** mensagem de sucesso com protocolo e status.

## Limitações Declaradas do MVP 1
- Sem autenticação.
- Sem edição ou exclusão de solicitações.
- Sem notificações externas.
- Sem dashboard administrativo.

## Stack Tecnológica Inicial
JavaScript + Vite + Supabase JS + PostgreSQL.
