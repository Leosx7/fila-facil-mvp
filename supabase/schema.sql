create extension if not exists pgcrypto;

create table if not exists public.solicitacoes (
  id uuid primary key default gen_random_uuid(),
  nome_cliente varchar(80) not null,
  servico varchar(80) not null,
  prioridade varchar(20) not null default 'normal',
  status varchar(20) not null default 'aguardando',
  created_at timestamptz not null default now(),
  constraint solicitacoes_nome_tamanho check (char_length(trim(nome_cliente)) between 2 and 80),
  constraint solicitacoes_servico_tamanho check (char_length(trim(servico)) between 2 and 80),
  constraint solicitacoes_prioridade_check check (prioridade in ('normal', 'prioritaria')),
  constraint solicitacoes_status_check check (status in ('aguardando', 'em_atendimento', 'concluido'))
);

alter table public.solicitacoes enable row level security;

drop policy if exists "Permitir insercao publica anonima" on public.solicitacoes;
create policy "Permitir insercao publica anonima"
on public.solicitacoes
for insert
with check (true);

drop policy if exists "Permitir leitura publica" on public.solicitacoes;
create policy "Permitir leitura publica"
on public.solicitacoes
for select
using (true);


drop policy if exists "Permitir atualizacao publica" on public.solicitacoes;
create policy "Permitir atualizacao publica"
on public.solicitacoes
for update
using (true)
with check (true);

drop policy if exists "Permitir remocao publica" on public.solicitacoes;
create policy "Permitir remocao publica"
on public.solicitacoes
for delete
using (true);
