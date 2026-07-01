"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { getSiteUrl } from "@/lib/supabase/config";

type Modo = "entrar" | "criar" | "recuperar";

export default function LoginPage() {
  const router = useRouter();
  const [modo, setModo] = useState<Modo>("entrar");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState(false);

  const supabase = createClient();
  const configurado = Boolean(supabase);

  function trocarModo(novo: Modo) {
    setModo(novo);
    setErro("");
    setEnviado(false);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase || !email.trim()) return;
    setErro("");
    setCarregando(true);

    // Recuperação de senha: envia e-mail com link para redefinir.
    if (modo === "recuperar") {
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${getSiteUrl()}/auth/callback?next=/redefinir-senha`,
      });
      if (error) {
        setErro(traduzErro(error.message));
      } else {
        setEnviado(true);
      }
      setCarregando(false);
      return;
    }

    if (!senha) {
      setCarregando(false);
      return;
    }
    const credenciais = { email: email.trim(), password: senha };

    if (modo === "criar") {
      const { data, error } = await supabase.auth.signUp(credenciais);
      if (error) {
        setErro(traduzErro(error.message));
        setCarregando(false);
        return;
      }
      if (data.user && data.user.identities && data.user.identities.length === 0) {
        setErro("Este e-mail já tem cadastro. Escolha “Entrar”.");
        setModo("entrar");
        setCarregando(false);
        return;
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword(credenciais);
      if (error) {
        setErro(traduzErro(error.message));
        setCarregando(false);
        return;
      }
    }

    router.refresh();
    window.location.href = "/";
  }

  const titulo =
    modo === "criar"
      ? "Criar conta no"
      : modo === "recuperar"
        ? "Recuperar senha —"
        : "Entrar no";

  const subtitulo =
    modo === "criar"
      ? "Crie sua conta com e-mail e senha para salvar seu histórico."
      : modo === "recuperar"
        ? "Digite seu e-mail que enviaremos um link para criar uma nova senha."
        : "Acesse com seu e-mail e senha.";

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="relative mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
        <Link href="/" className="mb-8 text-center text-sm text-gray-400 hover:text-white">
          ← Voltar
        </Link>

        <div className="glass-card p-8">
          <h1 className="text-center text-2xl font-bold">
            {titulo} <span className="gradient-text">BestHard</span>
          </h1>
          <p className="mt-2 text-center text-sm text-gray-400">{subtitulo}</p>

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
          ) : modo === "recuperar" && enviado ? (
            <div className="mt-6 rounded-lg border border-brand-primary/30 bg-brand-primary/10 p-4 text-center text-sm text-gray-200">
              ✉️ Enviamos um link para <strong>{email}</strong>.
              <br />
              Abra seu e-mail e clique no link para criar uma nova senha.
              <br />
              <button
                type="button"
                onClick={() => trocarModo("entrar")}
                className="mt-3 text-brand-primary hover:underline"
              >
                ← Voltar para o login
              </button>
            </div>
          ) : (
            <>
              <form onSubmit={onSubmit} className="mt-6 space-y-3">
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-primary/50"
                />
                {modo !== "recuperar" && (
                  <input
                    type="password"
                    required
                    minLength={6}
                    autoComplete={modo === "criar" ? "new-password" : "current-password"}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Sua senha (mínimo 6 caracteres)"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-primary/50"
                  />
                )}
                <button type="submit" disabled={carregando} className="btn-primary w-full">
                  {carregando
                    ? "Aguarde…"
                    : modo === "criar"
                      ? "Criar conta"
                      : modo === "recuperar"
                        ? "Enviar link de redefinição"
                        : "Entrar"}
                </button>
                {erro && <p className="text-center text-sm text-red-400">{erro}</p>}
              </form>

              {modo === "entrar" && (
                <button
                  type="button"
                  onClick={() => trocarModo("recuperar")}
                  className="mt-3 block w-full text-center text-sm text-gray-400 hover:text-white"
                >
                  Esqueci minha senha
                </button>
              )}

              <p className="mt-5 text-center text-sm text-gray-400">
                {modo === "criar" ? (
                  <>
                    Já tem conta?{" "}
                    <button
                      type="button"
                      onClick={() => trocarModo("entrar")}
                      className="text-brand-primary hover:underline"
                    >
                      Entrar
                    </button>
                  </>
                ) : modo === "recuperar" ? (
                  <>
                    Lembrou a senha?{" "}
                    <button
                      type="button"
                      onClick={() => trocarModo("entrar")}
                      className="text-brand-primary hover:underline"
                    >
                      Voltar para o login
                    </button>
                  </>
                ) : (
                  <>
                    Ainda não tem conta?{" "}
                    <button
                      type="button"
                      onClick={() => trocarModo("criar")}
                      className="text-brand-primary hover:underline"
                    >
                      Criar conta
                    </button>
                  </>
                )}
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

// Traduz as mensagens de erro mais comuns do Supabase para português.
function traduzErro(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes("invalid login credentials"))
    return "E-mail ou senha incorretos.";
  if (m.includes("password should be at least"))
    return "A senha precisa ter no mínimo 6 caracteres.";
  if (m.includes("user already registered"))
    return "Este e-mail já tem cadastro. Escolha “Entrar”.";
  if (m.includes("email not confirmed"))
    return "Confirme seu e-mail antes de entrar.";
  if (m.includes("unable to validate email"))
    return "E-mail inválido.";
  if (m.includes("for security purposes") || m.includes("rate limit"))
    return "Aguarde alguns segundos antes de tentar de novo.";
  return msg;
}
