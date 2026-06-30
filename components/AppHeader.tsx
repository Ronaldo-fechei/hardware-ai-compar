import Link from "next/link";
import AuthNav from "./AuthNav";

const LINKS = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/montar", label: "Montar PC" },
  { href: "/gargalo", label: "Gargalo" },
  { href: "/builds", label: "Builds" },
];

/** Cabeçalho global no estilo v5 (logo + nav + login). */
export default function AppHeader() {
  return (
    <header
      className="sticky top-0 z-50 flex h-[52px] flex-shrink-0 items-center justify-between gap-4 border-b border-[#1e2230] px-4 sm:px-5"
      style={{ background: "rgba(10,12,16,.95)", backdropFilter: "blur(12px)" }}
    >
      <Link
        href="/"
        className="flex flex-shrink-0 items-center gap-2 text-[17px] font-bold"
        style={{ letterSpacing: "-0.5px" }}
      >
        <span
          className="h-[7px] w-[7px] rounded-full bg-brand-primary"
          style={{ animation: "pulse-dot 2s infinite" }}
        />
        Best<span className="text-brand-primary">Hard</span>
      </Link>

      <nav className="hidden items-center gap-1 md:flex">
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-lg px-3 py-1.5 text-[12px] font-semibold text-[#8a92a6] transition-colors hover:bg-[#181b22] hover:text-white"
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <AuthNav />
    </header>
  );
}
