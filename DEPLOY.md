# 🚀 Como colocar o Hardware AI Compare no ar

Guia passo a passo (para não-programadores). São 2 partes: **GitHub** (guardar o
código na nuvem) e **Vercel** (publicar o site). Leva ~20 minutos.

> ✅ O código já está com o commit inicial pronto. Só falta enviar.

---

## PARTE 1 — Enviar o código para o GitHub

### 1.1 Criar conta (se ainda não tiver)
Acesse **https://github.com** e crie uma conta gratuita.

### 1.2 Criar um repositório vazio
1. Clique no **+** (canto superior direito) → **New repository**
2. Nome: `hardware-ai-compare`
3. Deixe **Public** ou **Private** (tanto faz)
4. **NÃO** marque nenhuma opção de "Add README/.gitignore" (deixe vazio)
5. Clique em **Create repository**

### 1.3 Enviar o código
O GitHub vai mostrar uma URL tipo `https://github.com/SEU_USUARIO/hardware-ai-compare.git`.
Abra o **PowerShell** e cole (trocando a URL pela sua):

```powershell
cd "C:\Users\Win11\Documents\hardware-ai-compare"
git remote add origin https://github.com/SEU_USUARIO/hardware-ai-compare.git
git push -u origin main
```

> Na primeira vez, vai abrir uma **janela do navegador** pedindo para fazer login
> no GitHub. Faça login e autorize. Pronto — o código sobe.

---

## PARTE 2 — Publicar na Vercel

### 2.1 Criar conta
Acesse **https://vercel.com** e clique em **Sign Up** → escolha **Continue with
GitHub** (mais fácil, já conecta tudo).

### 2.2 Importar o projeto
1. No painel, clique em **Add New… → Project**
2. Encontre o repositório `hardware-ai-compare` e clique em **Import**
3. A Vercel detecta sozinha que é **Next.js** — não mude nada nas configurações

### 2.3 (Opcional) Adicionar as chaves
Antes de clicar em Deploy, abra **Environment Variables** e adicione o que quiser
ativar. **Você pode pular tudo isso** e o site sobe em modo demonstração — depois
adiciona e refaz o deploy.

| Variável | Para quê |
|---|---|
| `ANTHROPIC_API_KEY` | Liga a IA real (Claude) |
| `NEXT_PUBLIC_SUPABASE_URL` | Login + banco |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Login + banco |
| `SUPABASE_SERVICE_ROLE_KEY` | Admin + ativar planos |
| `NEXT_PUBLIC_SITE_URL` | Endereço do site (ver passo 2.5) |
| `MP_ACCESS_TOKEN` | Pagamentos Mercado Pago |
| `ADMIN_EMAILS` | Seu e-mail para acessar /admin |
| `FREE_DAILY_LIMIT` | Limite diário (padrão 3) |

### 2.4 Deploy
Clique em **Deploy** e aguarde ~2 minutos. A Vercel te dá um link tipo
`https://hardware-ai-compare.vercel.app`. **Seu site está no ar!** 🎉

### 2.5 Ajustar o endereço (importante p/ login e pagamento)
1. Copie a URL que a Vercel te deu
2. Vá em **Settings → Environment Variables** e ponha em `NEXT_PUBLIC_SITE_URL`
   essa URL (ex: `https://hardware-ai-compare.vercel.app`)
3. Vá em **Deployments → … → Redeploy** para aplicar

---

## PARTE 3 — Conectar os serviços (quando for usar de verdade)

### Supabase (login + banco)
1. Rode o `supabase/schema.sql` no SQL Editor (veja o LEIA-ME)
2. No Supabase: **Authentication → URL Configuration → Redirect URLs**, adicione:
   `https://SEU-SITE.vercel.app/auth/callback`

### Mercado Pago (pagamentos)
No painel do Mercado Pago, configure a URL de notificação (webhook):
`https://SEU-SITE.vercel.app/api/webhooks/mercadopago`

### Domínio próprio (.com.br) — opcional
Na Vercel: **Settings → Domains → Add**. Aponte seu domínio e atualize o
`NEXT_PUBLIC_SITE_URL` para ele.

---

## 🔄 Atualizações futuras
Sempre que você (ou eu) mudar o código, é só rodar no PowerShell:
```powershell
cd "C:\Users\Win11\Documents\hardware-ai-compare"
git add -A
git commit -m "descrição da mudança"
git push
```
A Vercel **republica sozinha** a cada push. 🚀
