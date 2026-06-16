import { MercadoPagoConfig, PreApproval } from "mercadopago";

export function isMpConfigured(): boolean {
  return Boolean(process.env.MP_ACCESS_TOKEN);
}

/** Cria a API de assinaturas (PreApproval) do Mercado Pago. */
export function getPreApproval(): PreApproval {
  const mp = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN!,
    options: { timeout: 8000 },
  });
  return new PreApproval(mp);
}
