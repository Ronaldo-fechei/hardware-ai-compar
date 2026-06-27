"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { getSiteUrl } from "@/lib/supabase/config";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState<"idle" | "enviando" | "enviado" | "erro">(
    "idle",
  );
  const [msg, setMsg] = useState("");

  const supabase = createClient();
  const configurado = Boolean(supabase);

  async function enviarLink(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase || !email.trim()) return;
    setEstado("enviando");
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: `${getSiteUrl()}/auth/callback` },
    });
    if (error) {
      setEstado("erro");
      setMsg(error.message);
    } else {
      setEstado("enviado");
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="relative mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
        <Link href="/" className="mb-8 text-center text-sm text-gray-400 hover:text-white">
          ← Voltar
        </Link>

        <div className="glass-card p-8">
          <h1 className="text-center text-2xl font-bold">
            Entrar no <span className="gradient-text">BestHard</span>
          </h1>
          <p className="mt-2 text-center text-sm text-gray-400">
            Acesse para salvar seu histórico de comparações na nuvem.
          </p>

          {!configurado ? (
            <div className="mt-6 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
              <p className="font-semibold">Login ainda não configurado</p>
              <p className="mt-1 text-amber-200/80">
                Para ativar contas, configure o Supabase (passo a passo no
                arquivo <code>LEIA-ME.md</code>). Sem isso, seu histórico fica
                salvo apenas neste navegador.
              </p>
              <Link
                href="/historico"
                className="mt-3 inline-block text-brand-primary hover:underline"
              >
                Ver histórico deste navegador →
              </Link>
            </div>
          ) : estado === "enviado" ? (
            <div className="mt-6 rounded-lg border border-brand-primary/30 bg-brand-primary/10 p-4 text-center text-sm text-gray-200">
              ✉️ Enviamos um link de acesso para <strong>{email}</strong>.
              <br />
              Abra seu e-mail e clique no link para entrar.
            </div>
          ) : (
            <form onSubmit={enviarLink} className="mt-6 space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-primary/50"
              />
              <button
                type="submit"
                disabled={estado === "enviando"}
                className="btn-primary w-full"
              >
                {estado === "enviando" ? "Enviando…" : "Enviar link de acesso"}
              </button>
              {estado === "erro" && (
                <p className="text-center text-sm text-red-400">{msg}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
