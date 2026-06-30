import Link from "next/link";
import AuthNav from "./AuthNav";

/** Moldura (cabeçalho + fundo) para as páginas de conteúdo (produto, blog). */
export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="relative">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary text-black">
              ⚡
            </span>
            <span>
              Best<span className="gradient-text">Hard</span>
            </span>
          </Link>
          <AuthNav />
        </nav>
        <div className="mx-auto max-w-5xl">{children}</div>
      </div>
    </main>
  );
}
