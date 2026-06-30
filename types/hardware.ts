export type Categoria =
  | 'processadores'
  | 'monitores'
  | 'gpus'
  | 'memorias'
  | 'ssds'
  | 'coolers'
  | 'fontes'
  | 'gabinetes'

export interface PrecoLoja {
  loja: 'amazon' | 'kabum' | 'pichau' | 'terabyte' | 'mercadolivre'
  preco: number
  url: string
  disponivel: boolean
  frete?: 'gratis' | 'pago' | 'prime'
  parcelamento?: string
}

export interface Produto {
  slug: string
  marca: string
  nome: string
  categoria: Categoria
  score: number
  scoreCustoBeneficio?: number
  tier?: 'entrada' | 'mid-range' | 'high-end' | 'flagship'
  anoLancamento?: number
  specs: Record<string, string | number>
  precos?: PrecoLoja[]
  // SEO
  descricao?: string        // parágrafo descritivo para a página
  proCons?: {               // prós e contras para rich content
    pros: string[]
    contras: string[]
  }
  // Produtos relacionados para internal linking
  relacionados?: string[]   // slugs
}

export interface CategoriaConfig {
  slug: Categoria
  label: string
  icon: string
  cor: string
  subtitle: string
  subcats: string[]
  menorMelhor: string[]
  disponivel: boolean
}
