"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const FERRAMENTAS = [
  { icon: "🧠", label: "Comparar com IA", href: "/" },
  { icon: "📂", label: "Catálogo", href: "/catalogo" },
  { icon: "🤖", label: "Montar meu PC", href: "/montar" },
  { icon: "🧩", label: "Simulador de gargalo", href: "/gargalo" },
  { icon: "🛠️", label: "Comparar builds", href: "/builds" },
];

const CONTEUDO = [
  { icon: "📝", label: "Blog", href: "/blog" },
  { icon: "🕮", label: "Histórico", href: "/historico" },
];

function Item({
  icon,
  label,
  href,
  active,
}: {
  icon: string;
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className="group relative flex items-center gap-[10px] rounded-[9px] px-[10px] py-[9px] transition-colors hover:bg-[#181b22]"
      style={{ background: active ? "#181b22" : "transparent" }}
    >
      {active && (
        <span className="absolute left-0 top-1/2 h-[60%] w-[3px] -translate-y-1/2 rounded-r bg-brand-primary" />
      )}
      <span className="w-5 text-center text-base">{icon}</span>
      <span
        className="flex-1 truncate text-[12px] font-semibold"
        style={{ color: active ? "#00e5ff" : "#e8eaf0" }}
      >
        {label}
      </span>
    </Link>
  );
}

/** Barra lateral global no estilo v5. */
export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="sticky top-[52px] hidden h-[calc(100vh-52px)] w-[220px] flex-shrink-0 flex-col overflow-y-auto border-r border-[#1e2230] bg-[#111318] md:flex"
    >
      <div className="p-3 pb-2">
        <p className="mb-2 px-1 font-mono text-[9px] uppercase tracking-[2px] text-[#5a6070]">
          Ferramentas
        </p>
        <nav className="flex flex-col gap-[2px]">
          {FERRAMENTAS.map((c) => (
            <Item key={c.href} {...c} active={pathname === c.href} />
          ))}
        </nav>
      </div>

      <div className="mx-3 my-2 h-px bg-[#1e2230]" />

      <div className="p-3 pb-2">
        <p className="mb-2 px-1 font-mono text-[9px] uppercase tracking-[2px] text-[#5a6070]">
          Conteúdo
        </p>
        <nav className="flex flex-col gap-[2px]">
          {CONTEUDO.map((c) => (
            <Item
              key={c.href}
              {...c}
              active={pathname === c.href || pathname.startsWith(c.href + "/")}
            />
          ))}
        </nav>
      </div>

      <div className="mt-auto p-3">
        <div className="rounded-[9px] border border-[#00e5ff26] bg-[#00e5ff0d] p-3 text-[10px] leading-relaxed text-[#8a92a6]">
          <strong className="text-brand-primary">💡 Dica</strong>
          <br />
          Use o catálogo para escolher dois produtos e comparar lado a lado com
          a IA.
        </div>
      </div>
    </aside>
  );
}
