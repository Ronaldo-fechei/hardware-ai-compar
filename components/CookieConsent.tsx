"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "besthard-cookie-consent";
const CONSENT_VERSION = 1;
const CONSENT_EVENT = "besthard:open-cookie-settings";

type CookiePreferences = {
  version: number;
  analytics: boolean;
  advertising: boolean;
  updatedAt: string;
};

const defaultPreferences = (): CookiePreferences => ({
  version: CONSENT_VERSION,
  analytics: false,
  advertising: false,
  updatedAt: new Date().toISOString(),
});

declare global {
  interface Window {
    dataLayer?: Object[];
    gtag?: (...args: unknown[]) => void;
  }
}

function readPreferences(): CookiePreferences | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<CookiePreferences>;
    if (parsed.version !== CONSENT_VERSION) return null;

    return {
      version: CONSENT_VERSION,
      analytics: parsed.analytics === true,
      advertising: parsed.advertising === true,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

function updateGoogleConsent(preferences: CookiePreferences) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args));
  window.gtag("consent", "update", {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.advertising ? "granted" : "denied",
    ad_user_data: preferences.advertising ? "granted" : "denied",
    ad_personalization: preferences.advertising ? "granted" : "denied",
  });
}

function clearOptionalFirstPartyCookies() {
  const detectedNames = document.cookie
    .split(";")
    .map((item) => item.split("=")[0]?.trim())
    .filter(
      (name): name is string =>
        typeof name === "string" &&
        (name.startsWith("_ga") || name.startsWith("_gcl")),
    );
  const names = Array.from(new Set(["_ga", "_gid", "_gat", "_gcl_au", ...detectedNames]));
  const hostParts = window.location.hostname.split(".");
  const domains = ["", window.location.hostname];

  if (hostParts.length >= 2) domains.push(`.${hostParts.slice(-2).join(".")}`);

  for (const name of names) {
    for (const domain of domains) {
      const domainPart = domain ? `; domain=${domain}` : "";
      document.cookie = `${name}=; Max-Age=0; path=/${domainPart}; SameSite=Lax`;
    }
  }
}

export function CookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [draft, setDraft] = useState<CookiePreferences>(defaultPreferences);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const stored = readPreferences();
    if (stored) {
      updateGoogleConsent(stored);
      setPreferences(stored);
      setDraft(stored);
    } else {
      setShowBanner(true);
    }

    const openSettings = () => {
      const current = readPreferences() || defaultPreferences();
      setDraft(current);
      setShowSettings(true);
    };

    window.addEventListener(CONSENT_EVENT, openSettings);
    return () => window.removeEventListener(CONSENT_EVENT, openSettings);
  }, []);

  function save(next: CookiePreferences) {
    const normalized = { ...next, version: CONSENT_VERSION, updatedAt: new Date().toISOString() };
    const revoked =
      (preferences?.analytics === true && !normalized.analytics) ||
      (preferences?.advertising === true && !normalized.advertising);

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    updateGoogleConsent(normalized);
    if (!normalized.analytics || !normalized.advertising) clearOptionalFirstPartyCookies();

    setPreferences(normalized);
    setDraft(normalized);
    setShowBanner(false);
    setShowSettings(false);

    if (revoked) window.location.reload();
  }

  const rejectOptional = () => save(defaultPreferences());
  const acceptAll = () => save({ ...defaultPreferences(), analytics: true, advertising: true });

  return (
    <>
      {preferences?.analytics && <GoogleAnalytics gaId="G-GT70ZCKLQF" />}
      {preferences?.advertising && (
        <Script
          id="besthard-google-adsense"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7131553700052528"
          crossOrigin="anonymous"
        />
      )}

      {showBanner && (
        <section
          aria-label="Preferências de cookies"
          className="fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-5xl rounded-2xl border p-5 shadow-2xl md:p-6"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-base font-bold" style={{ color: "var(--text)" }}>Sua privacidade importa</h2>
              <p className="mt-2 text-[13px] leading-relaxed" style={{ color: "var(--label)" }}>
                Usamos armazenamento essencial para login, segurança e funcionamento do site. Analytics e publicidade só são ativados com sua autorização. Você pode alterar a escolha quando quiser.
              </p>
              <Link href="/privacidade#cookies" className="mt-2 inline-flex text-xs font-semibold" style={{ color: "var(--accent)" }}>
                Ver Política de Privacidade e Cookies
              </Link>
            </div>
            <div className="grid gap-2 sm:grid-cols-3 md:min-w-[430px]">
              <button type="button" onClick={rejectOptional} className="rounded-xl border px-4 py-3 text-xs font-bold" style={{ borderColor: "var(--border)", color: "var(--text)" }}>
                Rejeitar não necessários
              </button>
              <button type="button" onClick={() => { setDraft(preferences || defaultPreferences()); setShowSettings(true); }} className="rounded-xl border px-4 py-3 text-xs font-bold" style={{ borderColor: "var(--border)", color: "var(--text)" }}>
                Configurar
              </button>
              <button type="button" onClick={acceptAll} className="rounded-xl border px-4 py-3 text-xs font-bold" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
                Aceitar todos
              </button>
            </div>
          </div>
        </section>
      )}

      {showSettings && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm md:items-center" role="presentation">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border p-6 shadow-2xl"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="cookie-settings-title" className="text-xl font-bold">Preferências de cookies</h2>
                <p className="mt-2 text-[13px] leading-relaxed" style={{ color: "var(--label)" }}>
                  Escolha as categorias opcionais. Cookies essenciais permanecem ativos porque são necessários para o site funcionar.
                </p>
              </div>
              <button type="button" onClick={() => setShowSettings(false)} aria-label="Fechar preferências" className="rounded-lg border px-3 py-2 text-sm" style={{ borderColor: "var(--border)" }}>✕</button>
            </div>

            <div className="mt-6 space-y-3">
              <PreferenceRow title="Essenciais" description="Login, sessão, segurança, limite de uso e registro da sua escolha de privacidade." checked disabled onChange={() => undefined} />
              <PreferenceRow title="Analytics" description="Google Analytics 4 para medir visitas e melhorar páginas e conteúdos." checked={draft.analytics} onChange={(checked) => setDraft(current => ({ ...current, analytics: checked }))} />
              <PreferenceRow title="Publicidade" description="Google AdSense para exibição e medição de anúncios, inclusive personalizados quando permitido." checked={draft.advertising} onChange={(checked) => setDraft(current => ({ ...current, advertising: checked }))} />
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              <button type="button" onClick={rejectOptional} className="rounded-xl border px-4 py-3 text-xs font-bold" style={{ borderColor: "var(--border)" }}>Rejeitar opcionais</button>
              <button type="button" onClick={() => save(draft)} className="rounded-xl border px-4 py-3 text-xs font-bold" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>Salvar escolhas</button>
              <button type="button" onClick={acceptAll} className="rounded-xl border px-4 py-3 text-xs font-bold" style={{ borderColor: "var(--border)" }}>Aceitar todos</button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

function PreferenceRow({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-xl border p-4" style={{ borderColor: "var(--border)", background: "var(--surface2)" }}>
      <span>
        <span className="block text-sm font-bold" style={{ color: "var(--text)" }}>{title}</span>
        <span className="mt-1 block text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{description}</span>
      </span>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={(event) => onChange(event.target.checked)} className="h-5 w-5 shrink-0 accent-cyan-400" />
    </label>
  );
}
