# 🖥️ Hardware AI Compare

Plataforma que compara hardware de computador usando **Inteligência Artificial (Claude)**.
Digite algo como `RTX 4060 vs RX 7700 XT` e a IA gera desempenho, FPS, consumo,
custo-benefício, gráficos e um veredito humano.

---

## ✅ Como rodar no seu PC (passo a passo)

> Você já tem o **Node.js** instalado, então é só seguir.

### 1. Abrir a pasta no terminal
Abra o **PowerShell** e cole:

```powershell
cd "C:\Users\Win11\Documents\hardware-ai-compare"
```

### 2. Instalar (só na primeira vez)
```powershell
npm install
```
*(Se der erro de "tar", rode antes: `$env:Path = "C:\Windows\System32;" + $env:Path`)*

### 3. Ligar o site
```powershell
npm run dev
```

### 4. Abrir no navegador
Acesse: **http://localhost:3000**

Pronto! O site abre e **já funciona em modo demonstração** (dados simulados),
mesmo sem chave de IA.

Para **parar** o site, volte ao PowerShell e aperte `Ctrl + C`.

---

## 🧠 Ligar a IA de verdade (Claude)

No modo demonstração os números são fixos/simulados. Para a IA gerar análises
reais:

1. Crie uma conta em **https://console.anthropic.com**
2. Gere uma chave de API (começa com `sk-ant-...`)
3. Na pasta do projeto, **copie** o arquivo `.env.local.example` e renomeie a
   cópia para **`.env.local`**
4. Abra o `.env.local` e cole sua chave:
   ```
   ANTHROPIC_API_KEY=sk-ant-sua-chave-aqui
   ```
5. **Pare** o site (`Ctrl + C`) e **ligue de novo** (`npm run dev`)

A partir daí, as comparações são geradas de verdade pelo Claude. 🎉

> ⚠️ A IA tem custo por uso (cobrado pela Anthropic conforme o consumo).
> O modelo padrão é `claude-opus-4-8` (mais inteligente). Para gastar menos,
> troque no `.env.local` para `ANTHROPIC_MODEL=claude-sonnet-4-6`.

---

## 👤 Login + histórico na nuvem (Supabase) — OPCIONAL

O app já salva seu histórico de comparações **no navegador** automaticamente
(veja em http://localhost:3000/historico). Para ter **login** e histórico
**na nuvem** (acessível de qualquer dispositivo), configure o Supabase:

1. Crie uma conta grátis em **https://supabase.com** e clique em **New project**
2. Quando o projeto abrir, vá em **Project Settings → API** e copie:
   - **Project URL** (ex: `https://xxxx.supabase.co`)
   - **anon public** key (uma chave longa)
3. No `.env.local` (o mesmo arquivo da chave da IA), adicione:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-aqui
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```
4. Crie a tabela do banco: no Supabase, abra **SQL Editor → New query**, cole
   TODO o conteúdo do arquivo **`supabase/schema.sql`** (está na pasta do
   projeto) e clique em **RUN**.
5. **Pare** o site (`Ctrl + C`) e **ligue de novo** (`npm run dev`)

Pronto! Agora aparece o botão **Entrar**. O login é por **link mágico**: você
digita o e-mail, recebe um link e clica nele para entrar — sem senha. A partir
daí, suas comparações ficam salvas na sua conta. ☁️

> 💡 Por padrão o Supabase envia o e-mail de login automaticamente (com limite
> diário no plano grátis). Para produção, configure um provedor de e-mail nas
> configurações de Authentication do Supabase.

---

## 💳 Pagamentos / Assinaturas (Mercado Pago) — OPCIONAL

O app já tem **limite de 3 comparações por dia** no plano grátis e planos
**Pro (R$ 19)** e **Premium (R$ 49)**. Sem o Mercado Pago configurado, os botões
de assinatura avisam que o pagamento ainda não está ativo.

Para ativar as assinaturas:

1. Acesse **https://www.mercadopago.com.br/developers** e crie uma aplicação
2. Copie o **Access Token** (produção começa com `APP_USR-...`)
3. No `.env.local`, adicione:
   ```
   MP_ACCESS_TOKEN=APP_USR-sua-chave-aqui
   SUPABASE_SERVICE_ROLE_KEY=sua-chave-service-role-do-supabase
   ```
   *(a `service_role` está em Supabase → Project Settings → API; é o que permite
   o webhook ativar o plano do usuário)*
4. **Importante:** o Mercado Pago precisa de um endereço **público** (https) para
   confirmar o pagamento (webhook). Isso **só funciona quando o site estiver no ar**
   (deploy na Vercel). No `localhost` o checkout abre, mas a confirmação
   automática do plano não chega.
5. No painel do Mercado Pago, configure a URL de notificação (webhook) para:
   `https://seudominio.com.br/api/webhooks/mercadopago`

### Como funciona o limite diário
- Plano grátis: **3 comparações/dia** (reinicia à meia-noite, horário de Brasília).
- Logado → contado na sua conta. Sem login → contado neste navegador.
- Para testar à vontade sem travar, coloque no `.env.local`:
  `FREE_DAILY_LIMIT=999`

---

## 🛡️ Painel administrativo (/admin) — OPCIONAL

O painel mostra total de usuários, comparações, receita mensal estimada e
distribuição de planos. Para acessar:

1. Configure o **Supabase** (login) e a **`SUPABASE_SERVICE_ROLE_KEY`** (já
   explicado acima)
2. No `.env.local`, adicione seu e-mail de login:
   ```
   ADMIN_EMAILS=rbueno.silva32@gmail.com
   ```
   *(pode colocar vários, separados por vírgula)*
3. Reinicie o site, faça login com esse e-mail e acesse **/admin** (vai aparecer
   um link "Admin" no menu).

---

## 🚀 Colocar no ar (deploy na Vercel) — quando quiser

1. Crie uma conta em **https://vercel.com**
2. Suba o projeto para o GitHub
3. Importe o repositório na Vercel
4. Em **Settings → Environment Variables**, adicione `ANTHROPIC_API_KEY`
5. Clique em Deploy. Pronto, no ar com link público.

---

## 🗺️ O que já existe (MVP) e o que vem depois

**Já funciona agora (MVP + Etapa 2):**
- ✅ Landing page premium (dark, glassmorphism, gradientes)
- ✅ Comparador por IA com saída estruturada
- ✅ Gráficos (barras + radar) em SVG
- ✅ "Melhor para" cada uso + veredito humano
- ✅ Modo demonstração sem chave
- ✅ SEO básico (meta tags, Open Graph, dados estruturados)
- ✅ **Login** (Supabase, link mágico por e-mail)
- ✅ **Banco de dados** com segurança RLS (cada um vê só o seu)
- ✅ **Histórico** de comparações (nuvem se logado, senão no navegador)
- ✅ **Limite de 3 comparações/dia** no plano grátis (server-side)
- ✅ **Planos Pro/Premium** com assinatura via **Mercado Pago** (PIX/cartão)
- ✅ **Simulador de gargalo** (CPU + GPU) em `/gargalo`
- ✅ **Comparador de builds** (Build A vs Build B) em `/builds`
- ✅ **Assistente de montagem** ("tenho R$ X para um PC") em `/montar`
- ✅ **Painel administrativo** (usuários, receita, planos) em `/admin`

**Próximas etapas (V2 / V3):**
- Exportação em PDF (plano Premium)
- Rankings dinâmicos (atualizados pela IA)
- Deploy em produção (Vercel) — ver seção abaixo

---

## 📁 Estrutura do projeto

```
hardware-ai-compare/
├── app/
│   ├── page.tsx              # Página principal (landing + comparador)
│   ├── layout.tsx            # Layout e SEO
│   ├── globals.css           # Estilos (dark, glass)
│   └── api/compare/route.ts  # API que chama a IA
├── components/
│   ├── ComparePanel.tsx      # Busca + resultados (interativo)
│   ├── BarCompare.tsx        # Gráfico de barras
│   └── RadarChart.tsx        # Gráfico radar
├── lib/
│   ├── claude.ts             # Integração com o Claude
│   ├── mock.ts               # Dados simulados (modo demo)
│   └── types.ts              # Tipos compartilhados
└── .env.local.example        # Modelo de variáveis de ambiente
```
