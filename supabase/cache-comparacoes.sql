-- ============================================================
--  Cache de comparações — cole TUDO isto no SQL Editor do
--  Supabase e clique em RUN. Pode rodar de novo sem problema.
-- ============================================================

create table if not exists public.comparison_cache (
  slug        text primary key,
  query       text not null,
  titulo      text not null,
  result      jsonb not null,
  hits        integer not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists comparison_cache_updated_idx
  on public.comparison_cache (updated_at desc);

alter table public.comparison_cache enable row level security;

-- Sem policy de select/insert de propósito: só o servidor (chave de
-- serviço) lê e escreve. Assim nenhum visitante grava lixo no cache.

create or replace function public.bump_cache_hit(p_slug text)
returns void
language sql
security definer
set search_path = public
as $$
  update public.comparison_cache set hits = hits + 1 where slug = p_slug;
$$;
