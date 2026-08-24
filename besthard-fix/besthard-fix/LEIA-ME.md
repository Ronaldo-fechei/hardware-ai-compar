# BestHard — pacote de correção AdSense

Violação a corrigir: **`Conteúdo de baixo valor`** (única violação ativa no painel).

---

## A decisão que você me pediu para tomar

**Corrigir o BestHard. Não migrar para o TecArena agora.**

Você tinha o plano de fazer o TecArena absorver o BestHard via 301. Para o objetivo específico de aprovar no AdSense, migrar agora é a pior das duas rotas:

1. **O BestHard já tem o que o TecArena não tem: histórico.** Domínio verificado no AdSense, indexado desde janeiro, oito meses de rastreamento. Site novo entra na fila com muito menos crédito e o AdSense tende a olhar torto para domínio recém-registrado pedindo monetização.
2. **O problema do BestHard é subtrativo, não aditivo.** Não é que o conteúdo seja ruim — é que existem 430 páginas fracas afogando 17 boas. `noindex` resolve 60% do caso em quinze minutos. Criar um site do zero é infinitamente mais trabalho para resolver o mesmo.
3. **301 de 430 páginas thin não conserta nada — só muda de endereço.** O TecArena nasceria com o defeito herdado e você teria queimado dois domínios em vez de um.
4. **Escopo estreito aprova mais fácil.** BestHard é hardware de PC e só. TecArena tem quatro verticais (mobile, hardware, automotivo, casa inteligente) — para parecer autoridade em quatro nichos, você precisa de quatro vezes mais conteúdo.

Faça o TecArena depois, como marca guarda-chuva, com o BestHard já aprovado e faturando. Aprovação de AdSense é por domínio: uma vez dentro, é ativo.

---

## O que está neste pacote

| Arquivo | Etapa | O que faz |
|---|---|---|
| `app/sitemap.ts` | 1 | Sitemap de 459 → ~45 URLs, só páginas com conteúdo real |
| `app/robots.ts` | 1 | robots.txt sem bloquear `/produto/` (o noindex precisa ser lido) |
| `app/produto/[slug]/page.tsx` | 1 | Patch do `generateMetadata` com `robots:{index:false, follow:true}` |
| `patches/next.config.mjs` | 2 | 301 de `www.` para a raiz |
| `patches/layout.metadata.ts` | 2 | `metadataBase` para canonical consistente |
| `content/comparadores.ts` | 3 | **9.792 palavras** de conteúdo editorial novo, 11 categorias |
| `components/ConteudoComparador.tsx` | 3 | Renderiza o conteúdo + JSON-LD de FAQ |
| `app/comparar/[categoria]/page.tsx` | 3 | Página do comparador na ordem certa (texto antes da ferramenta) |
| `content/autores.ts` | 4 | **Você precisa preencher.** Bio e foto reais |
| `app/autores/[slug]/page.tsx` | 4 | Página de autor com JSON-LD `Person` |
| `components/AuthorByline.tsx` | 4 | Byline com rosto e datas + `articleJsonLd` |
| `components/AffiliateDisclosure.tsx` | 6 | Um aviso de afiliado, discreto, no lugar dos vários atuais |
| `components/BlocoCompra.tsx` | 6 | Botões de compra só depois do conteúdo |
| `verificar.mjs` | — | Roda contra o site no ar e diz se dá para pedir a revisão |

---

## Ordem de aplicação

### Hoje (~40 min)
```bash
# 1. Copie os arquivos para o projeto
cp app/sitemap.ts        <projeto>/app/sitemap.ts
cp app/robots.ts         <projeto>/app/robots.ts
cp -r content/*          <projeto>/content/
cp -r components/*       <projeto>/components/
cp app/comparar/\[categoria\]/page.tsx <projeto>/app/comparar/[categoria]/page.tsx
cp app/autores/\[slug\]/page.tsx       <projeto>/app/autores/[slug]/page.tsx

# 2. Aplique os patches à mão (não substitua os arquivos inteiros)
#    - app/produto/[slug]/page.tsx  -> só o generateMetadata
#    - next.config.mjs              -> só o bloco redirects()
#    - app/layout.tsx               -> só o metadataBase

# 3. Ajuste os imports (@/lib/content, @/lib/produtos) ao seu projeto
npm run build && npm run start   # confira local antes
```

Depois do deploy: Vercel → Settings → Domains → `besthard.com.br` como **Primary**, `www` como redirect.

### Esta semana
- Preencher `content/autores.ts` com informação **verdadeira** e subir foto sua em `/public/autores/`
- Trocar a assinatura "Equipe Editorial BestHard" pelo `<AuthorByline />` nos 17 artigos
- Search Console → enviar o sitemap novo
- Search Console → Remoções → não use. Deixe o `noindex` fazer o trabalho; remoção manual é temporária (6 meses) e não resolve.

### Próximas 3 semanas
- Publicar +13 artigos (você tem o calendário de 25 pautas), **espaçados**: 3 a 4 por semana. Não repita o padrão de 11 posts em 10 dias — publicação em rajada é sinal de automação.
- Mínimo 1.500 palavras, com veredito próprio, não resumo de ficha técnica.

### Antes de clicar em "Pedir revisão"
```bash
node verificar.mjs
```
Todos os itens verdes **e** pelo menos 14 dias desde o deploy. O revisor olha o que o Google tem em cache — pedir antes da reindexação é mostrar a versão antiga.

---

## O que eu não posso fazer por você

1. **A bio do autor.** Credencial inventada é violação de política, não só conteúdo fraco. Escreva só o que você sustenta se perguntarem. Sua experiência real de 11 anos decidindo troca de peça em frota é uma credencial melhor do que qualquer coisa que eu pudesse inventar — ela explica de onde vem o método de comparar custo contra durabilidade.
2. **Uma foto.** Uma foto sua e uma foto de qualquer PC que você montou valem mais que mil palavras de "somos independentes". É o sinal de experiência de primeira mão mais barato que existe.
3. **Aplicar no repositório.** Não tenho acesso ao seu código daqui. Se você abrir a sessão com a pasta do projeto conectada pelo app de desktop, eu aplico direto.

---

## Se reprovar de novo

Não peça revisão imediatamente pela terceira vez. Reprovação em sequência curta piora sua posição na fila. Me mande o texto exato da nova mensagem — se mudar de "Conteúdo de baixo valor" para outra coisa, é sinal de progresso e o próximo passo é diferente.
