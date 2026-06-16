import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { getSupabaseEnv } from "./config";

/**
 * Cliente Supabase com a chave de SERVIÇO (ignora RLS). Use APENAS no servidor
 * (ex.: webhook de pagamento atualizando o plano). Nunca exponha ao navegador.
 * Retorna null se a chave de serviço não estiver configurada.
 */
export function createAdminClient() {
  const { url } = getSupabaseEnv();
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return null;
  return createSupabaseClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
