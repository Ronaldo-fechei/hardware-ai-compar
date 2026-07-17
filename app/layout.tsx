import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import AuthNav from "@/components/AuthNav";
import { CATEGORIAS } from "@/lib/hardware-data";

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
  // Meta tag de verificação do Google AdSense (renderizada no <head>).
  other: {
    "google-adsense-account": "ca-pub-7131553700052528",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BestHard',
    url: 'https://besthard.com.br',
    logo: 'https://besthard.com.br/logo.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contato@besthard.com.br',
      contactType: 'editorial',
      availableLanguage: 'Portuguese',
    },
    publishingPrinciples: 'https://besthard.com.br/metodologia',
  };

  return (
    <html lang="pt-BR">
      <head>
        {/* Google AdSense — tag <script> literal no <head> de todas as páginas */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7131553700052528"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Header com o botão de login preservado (AuthNav via children) */}
        <Header>
          <AuthNav />
        </Header>
        <div className="flex flex-1">
          <Sidebar categorias={CATEGORIAS} />
          <main className="min-w-0 flex-1 overflow-y-auto">{children}</main>
        </div>
        <Footer />
      </body>
      {/* Google Analytics 4 (carregamento otimizado via @next/third-parties) */}
      <GoogleAnalytics gaId="G-GT70ZCKLQF" />
    </html>
  );
}
