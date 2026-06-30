import Link from "next/link";

/** Rodapé global no estilo v5. */
export default function AppFooter() {
  const ano = new Date().getFullYear();
  return (
    <footer className="flex flex-shrink-0 flex-wrap items-center justify-between gap-3 border-t border-[#1e2230] bg-[#111318] px-6 py-5">
      <div className="flex items-center gap-2">
        <span className="text-[13px] font-bold text-[#e8eaf0]">
          Best<span className="text-brand-primary">Hard</span>
        </span>
        <span className="text-[12px] text-[#5a6070]">© {ano}</span>
      </div>
      <nav className="flex items-center gap-5">
        <Link href="/catalogo" className="text-[12px] text-[#5a6070] transition-colors hover:text-[#e8eaf0]">
          Catálogo
        </Link>
        <Link href="/blog" className="text-[12px] text-[#5a6070] transition-colors hover:text-[#e8eaf0]">
          Blog
        </Link>
        <a href="#planos" className="text-[12px] text-[#5a6070] transition-colors hover:text-[#e8eaf0]">
          Planos
        </a>
      </nav>
      <p className="mt-1 w-full text-[10px] text-[#5a6070] opacity-70">
        Comparações geradas por IA são estimativas. * Alguns links são de
        afiliado — ao comprar por eles, você apoia o BestHard sem custo extra.
      </p>
    </footer>
  );
}
