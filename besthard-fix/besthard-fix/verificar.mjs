#!/usr/bin/env node
/**
 * verificar.mjs — rode DEPOIS do deploy, antes de pedir revisão no AdSense.
 *
 *   node verificar.mjs
 *
 * Checa mecanicamente o que o revisor vai checar. Todos os itens têm que
 * passar antes de você marcar "Confirmo que corrigi os problemas".
 */

const BASE = 'https://besthard.com.br'
const ok = (m) => console.log(`  \x1b[32m✓\x1b[0m ${m}`)
const falha = (m) => { console.log(`  \x1b[31m✗\x1b[0m ${m}`); process.exitCode = 1 }
const info = (m) => console.log(`  \x1b[90m·\x1b[0m ${m}`)

console.log('\nVerificação pré-revisão AdSense — besthard.com.br\n')

// 1. Sitemap enxuto
console.log('1. Sitemap')
try {
  const xml = await fetch(`${BASE}/sitemap.xml`).then(r => r.text())
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1])
  const produtos = urls.filter(u => u.includes('/produto/'))
  const www = urls.filter(u => u.includes('//www.'))

  info(`${urls.length} URLs no sitemap`)
  urls.length <= 80
    ? ok(`volume enxuto (era 459)`)
    : falha(`ainda são ${urls.length} URLs — o sitemap não foi trocado`)
  produtos.length === 0
    ? ok('nenhuma /produto/ no sitemap')
    : falha(`${produtos.length} páginas /produto/ ainda no sitemap`)
  www.length === 0
    ? ok('todas as URLs sem www')
    : falha(`${www.length} URLs ainda apontam para www.`)
} catch (e) { falha(`sitemap inacessível: ${e.message}`) }

// 2. noindex nas páginas de produto
console.log('\n2. noindex em /produto/')
const amostra = [
  '/produto/nvidia-geforce-rtx-5080',
  '/produto/amd-ryzen-7-9800x3d',
  '/produto/samsung-980-pro-2tb',
]
for (const path of amostra) {
  try {
    const res = await fetch(`${BASE}${path}`)
    const html = await res.text()
    const header = res.headers.get('x-robots-tag') ?? ''
    const meta = /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)/i.exec(html)?.[1] ?? ''
    ;(header + meta).toLowerCase().includes('noindex')
      ? ok(`${path} — noindex presente`)
      : falha(`${path} — SEM noindex`)
  } catch (e) { falha(`${path} — ${e.message}`) }
}

// 3. robots.txt não pode bloquear /produto/
console.log('\n3. robots.txt')
try {
  const txt = await fetch(`${BASE}/robots.txt`).then(r => r.text());
  /Disallow:\s*\/produto/i.test(txt)
    ? falha('robots.txt bloqueia /produto/ — o Google não vai conseguir LER o noindex')
    : ok('/produto/ rastreável (necessário para o noindex funcionar)')
  txt.includes('sitemap.xml') ? ok('sitemap declarado') : falha('sitemap não declarado no robots.txt')
} catch (e) { falha(`robots.txt inacessível: ${e.message}`) }

// 4. Redirect www -> raiz
console.log('\n4. Domínio canônico')
try {
  const res = await fetch('https://www.besthard.com.br/', { redirect: 'manual' })
  const loc = res.headers.get('location') ?? ''
  ;[301, 308].includes(res.status) && loc.startsWith('https://besthard.com.br')
    ? ok(`www redireciona (${res.status})`)
    : falha(`www responde ${res.status} sem redirect permanente para a raiz`)
} catch (e) { info(`www não resolve — ok se o DNS não existe (${e.message})`) }

// 5. Comparadores com conteúdo
console.log('\n5. Conteúdo nos comparadores')
const cats = ['processadores','gpus','monitores','memorias','ssds','coolers','fontes','gabinetes','mouses','teclados','headsets']
let magros = 0
for (const c of cats) {
  try {
    const html = await fetch(`${BASE}/comparar/${c}`).then(r => r.text());
    const texto = html.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ')
    const n = texto.split(/\s+/).filter(w => w.length > 1).length
    if (n < 600) { falha(`/comparar/${c} — ~${n} palavras (mínimo 600)`); magros++ }
    else ok(`/comparar/${c} — ~${n} palavras`)
  } catch (e) { falha(`/comparar/${c} — ${e.message}`) }
}

// 6. Autoria
console.log('\n6. Autoria')
try {
  const html = await fetch(`${BASE}/autores/ronaldo-bueno`).then(r => r.text());
  /"@type"\s*:\s*"Person"/.test(html) ? ok('JSON-LD Person na página de autor') : falha('sem JSON-LD Person');
  /Equipe Editorial/i.test(html) && falha('ainda há referência a "Equipe Editorial"')
} catch (e) { falha(`página de autor inacessível: ${e.message}`) }

console.log(
  process.exitCode
    ? '\n\x1b[31mNÃO peça a revisão ainda.\x1b[0m Corrija os itens marcados acima.\n'
    : '\n\x1b[32mMecânica OK.\x1b[0m Falta o que nenhum script mede: 30+ artigos publicados,\n' +
      'foto e bio reais no autor, e 14-21 dias desde o deploy para o Google reindexar.\n'
)
