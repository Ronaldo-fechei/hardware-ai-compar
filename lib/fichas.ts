/**
 * Liga e desliga as fichas individuais de produto (/produto/<slug>).
 *
 * CONTEXTO — 15/09/2026, segunda reprovação do AdSense em besthard.com.br.
 *
 * O site tem 228 fichas de produto geradas a partir de um único template:
 * um parágrafo "Sobre", uma lista de prós e contras, duas perguntas de FAQ,
 * a tabela de specs e os botões de compra. Dá cerca de 250 palavras por
 * página. Contra 21 artigos editoriais de verdade, a proporção que o revisor
 * enxerga é de dez páginas rasas para cada página boa — que é exatamente o
 * padrão descrito na política de "conteúdo de baixo valor".
 *
 * O noindex aplicado em 24/08 tirou as fichas da BUSCA do Google, mas não as
 * tirou do SITE. Quem revisa a conta do AdSense navega como visitante comum:
 * entra pelo comparador, clica em "compare também com...", e cai na ficha.
 * Por isso o noindex sozinho não mudou o resultado da análise de 15/09.
 *
 * Enquanto esta constante for `false`, cada ficha redireciona para o
 * comparador da sua categoria — que tem texto editorial próprio e é a página
 * que a gente realmente quer que seja avaliada.
 *
 * PARA RELIGAR DEPOIS DA APROVAÇÃO: troque `false` por `true` e suba o
 * arquivo. Nada mais precisa mudar — as fichas voltam exatamente como estavam.
 */
export const FICHAS_PUBLICAS = false;
