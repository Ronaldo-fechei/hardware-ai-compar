"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function RedefinirSenhaPage() {
  const router = useRouter();
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const [ok, setOk] = useState(false);

  const supabase = createClient();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) return;
    setErro("");

    if (senha.length < 6) {
      setErro("A senha precisa ter no mínimo 6 caracteres.");
      return;
    }
    if (senha !== confirmar) {
      setErro("As senhas não são iguais.");
      return;
    }

    setCarregando(true);
    const { error } = await supabase.auth.updateUser({ password: senha });
    if (error) {
      // Sessão de recuperação ausente/expirada, ou outro erro.
      const m = error.message.toLowerCase();
      if (m.includes("session") || m.includes("auth")) {
        setErro(
          "O link expirou ou é inválido. Peça um novo link em “Esqueci minha senha”.",
        );
      } else {
        setErro(error.message);
      }
      setCarregando(false);
      return;
    }
    setOk(true);
    setCarregando(false);
    // Já está logado após redefinir; leva para a home em seguida.
    setTimeout(() => {
      router.refresh();
      window.location.href = "/";
    }, 1500);
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
            Criar nova <span className="gradient-text">senha</span>
          </h1>
          <p className="mt-2 text-center text-sm text-gray-400">
            Escolha uma nova senha para sua conta.
          </p>

          {!supabase ? (
            <p className="mt-6 text-center text-sm text-amber-200">
              Login não configurado.
            </p>
          ) : ok ? (
            <div className="mt-6 rounded-lg border border-brand-primary/30 bg-brand-primary/10 p-4 text-center text-sm text-gray-200">
              ✅ Senha alterada com sucesso! Entrando…
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 space-y-3">
              <input
                type="password"
                required
                minLength={6}
                autoComplete="new-password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Nova senha (mínimo 6 caracteres)"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-primary/50"
              />
              <input
                type="password"
                required
                minLength={6}
                autoComplete="new-password"
                value={confirmar}
                onChange={(e) => setConfirmar(e.target.value)}
                placeholder="Repita a nova senha"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-primary/50"
              />
              <button type="submit" disabled={carregando} className="btn-primary w-full">
                {carregando ? "Salvando…" : "Salvar nova senha"}
              </button>
              {erro && <p className="text-center text-sm text-red-400">{erro}</p>}
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
