import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { isAdminEmail } from "@/lib/admin";

/**
 * Menu de autenticação (Server Component).
 * Mostra "Entrar" ou o e-mail do usuário + "Sair".
 * Quando o Supabase não está configurado, mostra só "Histórico".
 */
export default async function AuthNav() {
  const supabase = await createClient();

  let email: string | null = null;
  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    email = user?.email ?? null;
  }

  return (
    <div className="flex items-center gap-4 text-sm">
      {isAdminEmail(email) && (
        <Link href="/admin" className="text-brand-primary hover:underline">
          Admin
        </Link>
      )}
      <Link href="/blog" className="hidden text-gray-400 hover:text-white sm:inline">
        Blog
      </Link>
      <Link href="/historico" className="text-gray-400 hover:text-white">
        Histórico
      </Link>
      {email ? (
        <form action="/auth/signout" method="post" className="flex items-center gap-3">
          <span className="hidden text-gray-400 sm:inline">{email}</span>
          <button
            type="submit"
            className="rounded-lg border border-white/15 px-3 py-1.5 text-white transition hover:border-brand-primary/50"
          >
            Sair
          </button>
        </form>
      ) : (
        <Link
          href="/login"
          className="rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary px-4 py-1.5 font-semibold text-black"
        >
          Entrar
        </Link>
      )}
    </div>
  );
}
