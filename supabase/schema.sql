-- ============================================================
--  Hardware AI Compare — estrutura do banco (Supabase / Postgres)
--  Cole TODO este conteúdo no "SQL Editor" do Supabase e clique em RUN.
--  Pode rodar de novo sem problema (é idempotente).
-- ============================================================

-- ------------------------------------------------------------
-- 1) Comparações salvas por usuário (histórico)
-- ------------------------------------------------------------
create table if not exists public.comparisons (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users (id) on delete cascade,
  query       text not null,
  titulo      text not null,
  result      jsonb not null,
  created_at  timestamptz not null default now()
);

create index if not exists comparisons_user_created_idx
  on public.comparisons (user_id, created_at desc);

alter table public.comparisons enable row level security;

drop policy if exists "ver as proprias comparacoes" on public.comparisons;
create policy "ver as proprias comparacoes"
  on public.comparisons for select using (auth.uid() = user_id);

drop policy if exists "inserir as proprias comparacoes" on public.comparisons;
create policy "inserir as proprias comparacoes"
  on public.comparisons for insert with check (auth.uid() = user_id);

drop policy if exists "apagar as proprias comparacoes" on public.comparisons;
create policy "apagar as proprias comparacoes"
  on public.comparisons for delete using (auth.uid() = user_id);

-- ------------------------------------------------------------
-- 2) Perfil do usuário com o plano (free / pro / premium)
-- ------------------------------------------------------------
create table if not exists public.profiles (
  id               uuid primary key references auth.users (id) on delete cascade,
  plan             text not null default 'free',
  plan_expires_at  timestamptz,
  mp_preapproval_id text,
  updated_at       timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- O usuário pode ler o próprio perfil. As ALTERAÇÕES de plano são feitas
-- pelo servidor (webhook do Mercado Pago) com a chave de serviço, que ignora RLS.
drop policy if exists "ver o proprio perfil" on public.profiles;
create policy "ver o proprio perfil"
  on public.profiles for select using (auth.uid() = id);

-- Cria o perfil automaticamente quando alguém se cadastra.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id) values (new.id) on conflict do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ------------------------------------------------------------
-- 3) Registro de uso diário (para o limite do plano grátis)
-- ------------------------------------------------------------
create table if not exists public.usage_log (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users (id) on delete cascade,
  usage_date  date not null,
  created_at  timestamptz not null default now()
);

create index if not exists usage_log_user_date_idx
  on public.usage_log (user_id, usage_date);

alter table public.usage_log enable row level security;

drop policy if exists "ver o proprio uso" on public.usage_log;
create policy "ver o proprio uso"
  on public.usage_log for select using (auth.uid() = user_id);

drop policy if exists "registrar o proprio uso" on public.usage_log;
create policy "registrar o proprio uso"
  on public.usage_log for insert with check (auth.uid() = user_id);
