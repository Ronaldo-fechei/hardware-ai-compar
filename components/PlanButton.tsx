"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Plan } from "@/lib/plans";

interface Props {
  plan: Plan;
  label: string;
  destaque?: boolean;
}

export default function PlanButton({ plan, label, destaque }: Props) {
  const router = useRouter();
  const [carregando, setCarregando] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const classe = destaque
    ? "btn-primary w-full"
    : "mt-0 w-full rounded-xl border border-white/15 py-3 font-semibold text-white transition hover:border-brand-primary/50";

  async function assinar() {
    if (plan === "free") {
      router.push("/login");
      return;
    }
    setCarregando(true);
    setMsg(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (res.status === 401) {
        router.push("/login");
        return;
      }
      if (!res.ok) {
        setMsg(data.error || "Não foi possível iniciar o pagamento.");
        return;
      }
      window.location.href = data.init_point;
    } catch {
      setMsg("Erro de conexão. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div>
      <button onClick={assinar} disabled={carregando} className={classe}>
        {carregando ? "Abrindo pagamento…" : label}
      </button>
      {msg && <p className="mt-2 text-center text-xs text-amber-300">{msg}</p>}
    </div>
  );
}
