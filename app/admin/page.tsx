import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { isAdminEmail, getAdminStats } from "@/lib/admin";

export const metadata = { title: "Painel Administrativo" };

// Sempre dinâmico (lê sessão + dados ao vivo).
export const dynamic = "force-dynamic";

function Aviso({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="relative mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
        <div className="glass-card p-8 text-center">
          <h1 className="text-xl font-bold text-white">{titulo}</h1>
          <div className="mt-3 text-sm text-gray-400">{children}</div>
          <Link href="/" className="btn-primary mt-6 inline-block">
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  );
}

export default async function AdminPage() {
  const supabase = await createClient();
  if (!supabase) {
    return (
      <Aviso titulo="Login não configurado">
        Configure o Supabase para usar o painel (veja o LEIA-ME).
      </Aviso>
    );
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <Aviso titulo="Acesso restrito">
        Você precisa estar logado.{" "}
        <Link href="/login" className="text-brand-primary hover:underline">
          Entrar
        </Link>
      </Aviso>
    );
  }

  if (!isAdminEmail(user.email)) {
    return (
      <Aviso titulo="Acesso restrito">
        Esta área é só para administradores. Adicione seu e-mail em{" "}
        <code>ADMIN_EMAILS</code> no <code>.env.local</code>.
      </Aviso>
    );
  }

  const admin = createAdminClient();
  if (!admin) {
    return (
      <Aviso titulo="Chave de serviço ausente">
        Configure <code>SUPABASE_SERVICE_ROLE_KEY</code> no <code>.env.local</code>{" "}
        para ler as estatísticas.
      </Aviso>
    );
  }

  const s = await getAdminStats(admin);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-tech bg-[size:48px_48px] opacity-30" />
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="relative mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-sm text-gray-400 hover:text-white">
            ← Início
          </Link>
          <span className="text-xs text-gray-500">{user.email}</span>
        </div>

        <h1 className="text-3xl font-bold">
          Painel <span className="gradient-text">administrativo</span>
        </h1>

        {/* Cartões principais */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card titulo="Usuários" valor={s.totalUsuarios.toLocaleString("pt-BR")} icon="👥" />
          <Card
            titulo="Comparações"
            valor={s.totalComparacoes.toLocaleString("pt-BR")}
            icon="📊"
          />
          <Card titulo="Hoje" valor={`${s.comparacoesHoje}`} icon="📅" sub={`${s.usoHoje} usos`} />
          <Card
            titulo="Receita mensal"
            valor={`R$ ${s.receitaMensal.toLocaleString("pt-BR")}`}
            icon="💰"
            destaque
          />
        </div>

        {/* Distribuição de planos */}
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="glass-card p-6">
            <h2 className="mb-4 font-semibold text-white">Planos</h2>
            <Plano nome="Gratuito" qtd={s.porPlano.free} total={s.totalUsuarios} cor="#9ca3af" />
            <Plano nome="Pro" qtd={s.porPlano.pro} total={s.totalUsuarios} cor="#00E5FF" />
            <Plano
              nome="Premium"
              qtd={s.porPlano.premium}
              total={s.totalUsuarios}
              cor="#7B2FFF"
            />
          </div>

          {/* Comparações recentes */}
          <div className="glass-card p-6">
            <h2 className="mb-4 font-semibold text-white">Comparações recentes</h2>
            {s.recentes.length === 0 ? (
              <p className="text-sm text-gray-500">Nenhuma comparação ainda.</p>
            ) : (
              <ul className="space-y-2">
                {s.recentes.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between rounded-lg bg-white/5 p-2.5 text-sm"
                  >
                    <span className="truncate text-gray-200">{c.titulo}</span>
                    <span className="ml-2 shrink-0 text-xs text-gray-500">
                      {new Date(c.created_at).toLocaleDateString("pt-BR")}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function Card({
  titulo,
  valor,
  icon,
  sub,
  destaque,
}: {
  titulo: string;
  valor: string;
  icon: string;
  sub?: string;
  destaque?: boolean;
}) {
  return (
    <div className={`glass-card p-5 ${destaque ? "shadow-glow" : ""}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-gray-500">{titulo}</span>
        <span className="text-xl">{icon}</span>
      </div>
      <div className="mt-2 text-2xl font-black text-white">{valor}</div>
      {sub && <div className="text-xs text-gray-500">{sub}</div>}
    </div>
  );
}

function Plano({
  nome,
  qtd,
  total,
  cor,
}: {
  nome: string;
  qtd: number;
  total: number;
  cor: string;
}) {
  const pct = total > 0 ? Math.round((qtd / total) * 100) : 0;
  return (
    <div className="mb-3">
      <div className="mb-1 flex justify-between text-sm">
        <span className="text-gray-300">{nome}</span>
        <span className="text-gray-400">
          {qtd} ({pct}%)
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: cor }} />
      </div>
    </div>
  );
}
