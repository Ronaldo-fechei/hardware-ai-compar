"use client";

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("besthard:open-cookie-settings"))}
      className="text-[12px] transition-colors hover:text-[var(--text)]"
      style={{ color: "var(--muted)" }}
    >
      Preferências de cookies
    </button>
  );
}
