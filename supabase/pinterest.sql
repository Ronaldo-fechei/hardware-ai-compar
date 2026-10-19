-- ============================================================
--  Token do Pinterest — cole TUDO isto no SQL Editor do
--  Supabase e clique em RUN. Pode rodar de novo sem problema.
-- ============================================================

-- Guarda UM token: o da conta Business da BestHard (@martinsstore011).
-- A coluna `id` é travada em 1 para que a tabela nunca tenha uma segunda
-- linha — não existe "token de usuário" aqui, a integração publica sempre
-- na mesma conta.
create table if not exists public.pinterest_token (
  id             smallint primary key default 1 check (id = 1),
  access_token   text not null,
  refresh_token  text,
  scope          text,
  expires_at     timestamptz,
  refresh_expires_at timestamptz,
  updated_at     timestamptz not null default now()
);

alter table public.pinterest_token enable row level security;

-- Sem nenhuma policy, de propósito: só a chave de serviço (que ignora RLS,
-- e só existe no servidor) lê e escreve. O token nunca chega ao navegador,
-- nem com o usuário logado como admin.
