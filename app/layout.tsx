import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import AuthNav from "@/components/AuthNav";
import { CATEGORIAS } from "@/lib/hardware-data";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BestHard — Comparativos e guias de hardware para PC",
    template: "%s | BestHard",
  },
  description:
    "Guias de compra, comparativos e ferramentas para montar e atualizar seu PC: processadores, placas de vídeo, SSDs, fontes e monitores, com contexto de preço no Brasil.",
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
    title: "BestHard — Comparativos e guias de hardware para PC",
    description:
      "Guias de compra, comparativos e ferramentas para montar e atualizar seu PC.",
    siteName: "BestHard",
  },
  twitter: {
    card: "summary_large_image",
    title: "BestHard",
    description: "Comparativos e guias de hardware para PC.",
  },
  // Meta tags de verificação de propriedade do domínio (renderizadas no <head>).
  other: {
    "google-adsense-account": "ca-pub-7131553700052528",
    // Pinterest: confirma que besthard.com.br pertence à conta Business
    // @martinsstore011, requisito para publicar Pins pela API.
    "p:domain_verify": "f87407241fde2b0a27577a0beb14d8b7",
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
    legalName: 'MARTINS STORE COMERCIAL LTDA',
    taxID: '54.471.703/0001-27',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Diadema',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'contato@besthard.com.br',
        contactType: 'editorial',
        availableLanguage: 'Portuguese',
      },
      {
        '@type': 'ContactPoint',
        email: 'privacidade@besthard.com.br',
        contactType: 'privacy',
        availableLanguage: 'Portuguese',
      },
    ],
    publishingPrinciples: `${SITE_URL}/metodologia`,
  };

  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Script id="google-consent-mode-default" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});`}
        </Script>
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
        <CookieConsent />
      </body>
    </html>
  );
}
