import type { Metadata } from "next";
import "./globals.css";
import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";
import AppFooter from "@/components/AppFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://besthard.com.br"),
  title: {
    default: "BestHard — Comparador de Hardware com IA",
    template: "%s | BestHard",
  },
  description:
    "Compare processadores, placas de vídeo, SSDs, notebooks e PCs com inteligência artificial. Benchmarks estimados, FPS, consumo, custo-benefício e veredito humano.",
  keywords: [
    "comparar hardware",
    "RTX vs RX",
    "comparador de placa de vídeo",
    "comparar processador",
    "benchmark",
    "PC gamer",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "BestHard — Comparador de Hardware com IA",
    description:
      "Compare hardware com IA: desempenho, FPS, consumo, custo-benefício e veredito humano.",
    siteName: "BestHard",
  },
  twitter: {
    card: "summary_large_image",
    title: "BestHard",
    description: "Compare hardware de PC com inteligência artificial.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <AppHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
        <AppFooter />
      </body>
    </html>
  );
}
