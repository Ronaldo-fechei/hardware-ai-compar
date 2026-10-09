/**
 * Cor de TEXTO a partir de uma cor de destaque "neon" (ciano, verde, laranja...).
 *
 * Essas cores foram escolhidas para fundo escuro. No tema claro, o ciano
 * #00e5ff sobre branco tem contraste ~1,3:1 e some. Esta função mistura a cor
 * com a cor do texto (`--text`) numa proporção definida por tema em globals.css:
 *
 *   tema escuro: --cor-mix: 100%  -> a cor sai exatamente como está
 *   tema claro:  --cor-mix: 50%   -> escurece até ficar legível
 *
 * `forte` é para laranjas e amarelos (Amazon, Mercado Livre), que precisam
 * escurecer mais para atingir o mesmo contraste.
 *
 * Só use em COR DE TEXTO. Fundos e bordas continuam com a cor original.
 */
export function corTexto(cor: string, forte = false): string {
  if (!cor.startsWith('#')) return cor // já é uma variável (ex.: var(--accent)), que muda sozinha por tema
  return `color-mix(in srgb, ${cor} var(${forte ? '--cor-mix-forte' : '--cor-mix'}, 100%), var(--text))`
}
