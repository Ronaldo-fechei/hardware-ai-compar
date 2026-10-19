// Uso: npx --yes tsx scripts/validar-artigo.ts <slug> <AAAA-MM-DD>
import { ARTIGOS } from '../lib/blog-data'

const [slug, hoje] = process.argv.slice(2)
const erros: string[] = []
const a = ARTIGOS.find(x => x.slug === slug)
if (!a) { console.error(`ERRO: slug ${slug} não encontrado`); process.exit(1) }

if (ARTIGOS.filter(x => x.slug === slug).length > 1) erros.push('slug duplicado')
if (a.dataPublicacao !== hoje) erros.push(`dataPublicacao ${a.dataPublicacao} diferente de hoje (${hoje})`)
if (a.destaque) erros.push('destaque deve ser false')
if (a.produtosRelacionados?.length) erros.push('produtosRelacionados não é permitido')

const textos: string[] = [a.titulo, a.subtitulo, a.descricao]
for (const s of a.conteudo) {
  if (s.titulo) textos.push(s.titulo)
  if (s.texto) textos.push(s.texto)
  if (s.itens) textos.push(...s.itens)
  if (s.colunas) textos.push(...s.colunas)
  if (s.linhas) textos.push(...s.linhas.flat())
  if (s.ctaTexto) textos.push(s.ctaTexto)
}
for (const f of a.faq ?? []) textos.push(f.pergunta, f.resposta)
const corpo = textos.join(' ')
const palavras = corpo.split(/\s+/).filter(Boolean).length

const tipos = a.conteudo.map(s => s.tipo)
if (palavras < 1200) erros.push(`só ${palavras} palavras (mínimo 1200)`)
if (tipos[0] !== 'intro') erros.push('a primeira seção deve ser intro')
if (tipos.includes('afiliado')) erros.push('seção afiliado não é permitida')
if (!tipos.includes('tabela')) erros.push('falta pelo menos uma tabela')
if (!tipos.includes('cta')) erros.push('falta um cta para ferramenta interna')
const nAds = tipos.filter(t => t === 'adsense').length
if (nAds < 1 || nAds > 3) erros.push(`use de 1 a 3 marcadores adsense (tem ${nAds})`)
const ids = ARTIGOS.flatMap(x => x.conteudo).filter(s => s.tipo === 'adsense').map(s => s.anuncioId)
if (new Set(ids).size !== ids.length) erros.push('anuncioId repetido no site')
const faq = a.faq?.length ?? 0
if (faq < 4) erros.push(`faq com ${faq} perguntas (mínimo 4)`)
if (a.descricao.length < 110 || a.descricao.length > 200) erros.push(`descricao com ${a.descricao.length} caracteres (110 a 200)`)
if (a.titulo.length > 70) erros.push(`titulo com ${a.titulo.length} caracteres (máx. 70)`)

const idx = a.conteudo.findIndex(s => s.tipo === 'h2' && /fontes/i.test(s.titulo ?? ''))
const fontes = idx >= 0 ? a.conteudo[idx + 1] : undefined
if (!fontes || fontes.tipo !== 'lista' || (fontes.itens?.length ?? 0) < 3)
  erros.push('falta h2 "Fontes consultadas" seguido de lista com 3+ fontes')

const proibidas = /\b(testamos|testei|testado por nós|nossos testes|nosso teste|medimos|medi |em nosso laborat[óo]rio|na nossa bancada|colocamos à prova|avaliamos na prática)\b/i
const m = corpo.match(proibidas)
if (m) erros.push(`expressão proibida: "${m[0]}"`)
if (/\bR\$\s?\d/.test(corpo) && !/(consultad[oa]s?|verificad[oa]s?|vigentes?) em/i.test(corpo))
  erros.push('cita valor em R$ sem dizer quando foi consultado (ex.: "preços consultados em 16/09/2026")')

const minutos = Math.max(1, Math.round(palavras / 200))
if (Math.abs(a.tempoLeitura - minutos) > 2) erros.push(`tempoLeitura ${a.tempoLeitura}, esperado ~${minutos}`)

if (erros.length) { console.error('REPROVADO:\n- ' + erros.join('\n- ')); process.exit(1) }
console.log(`APROVADO: ${slug} · ${palavras} palavras · ${faq} FAQs`)
