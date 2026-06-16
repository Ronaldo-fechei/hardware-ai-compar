"use client";

import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseEnv, isSupabaseConfigured } from "./config";

/**
 * Cliente Supabase para uso no navegador (componentes "use client").
 * Retorna null se o Supabase não estiver configurado.
 */
export function createClient() {
  if (!isSupabaseConfigured()) return null;
  const { url, anonKey } = getSupabaseEnv();
  return createBrowserClient(url!, anonKey!);
}
