// Tipos compartilhados entre o frontend e a API de comparação.

export type HardwareCategory =
  | "GPU"
  | "CPU"
  | "RAM"
  | "SSD"
  | "Placa-mãe"
  | "Fonte"
  | "Notebook"
  | "PC"
  | "Smartphone"
  | "Console"
  | "Outro";

/** Um critério comparado, com uma nota de 0 a 100 para cada item. */
export interface ComparisonCriterion {
  /** Nome do critério, ex: "Desempenho em jogos" */
  label: string;
  /** Notas de 0 a 100, na mesma ordem dos itens comparados. */
  scores: number[];
}

/** Um item comparado (cabeçalho com nota e preço). */
export interface ItemMetrics {
  /** Nome do produto, ex: "RTX 4060" */
  name: string;
  /** Tipo do produto detectado, ex: "Placa de Vídeo", "Fonte", "Monitor". */
  category: string;
  /** Nota geral de 0 a 100. */
  notaGeral: number;
  /** Faixa de preço estimada em reais, ex: "R$ 2.000 - R$ 2.400". */
  precoFaixa: string;
}

/** Um atributo comparado, específico da categoria (ex: "VRAM", "Selo 80 Plus"). */
export interface ComparisonAttribute {
  /** Nome do atributo, ex: "Taxa de atualização". */
  label: string;
  /** Valor de cada item (texto), na mesma ordem dos itens. Ex: ["144 Hz", "165 Hz"]. */
  valores: string[];
}

/** Recomendação de uso, adequada à categoria (ex: "Jogos 1440p" → item). */
export interface ComparisonRecommendation {
  uso: string;
  item: string;
}

/** Resultado completo de uma comparação. */
export interface ComparisonResult {
  /** Título amigável, ex: "RTX 4060 vs RX 7700 XT". */
  titulo: string;
  /** Itens comparados (normalmente 2). */
  itens: ItemMetrics[];
  /** Atributos técnicos específicos da categoria (tabela comparativa). */
  atributos: ComparisonAttribute[];
  /** Critérios com notas 0-100 para gráficos de barra e radar. */
  criterios: ComparisonCriterion[];
  /** Recomendações de uso adequadas à categoria. */
  recomendacoes: ComparisonRecommendation[];
  /** Veredito em linguagem humana. */
  veredito: string;
  /** Indica se veio de dados simulados (sem chave de IA). */
  demo?: boolean;
}

export interface CompareRequestBody {
  query: string;
}

// ---------- Simulador de gargalo ----------

export interface BottleneckRequestBody {
  cpu: string;
  gpu: string;
  resolucao: string;
}

export interface BottleneckResult {
  cpu: string;
  gpu: string;
  resolucao: string;
  /** Percentual de gargalo geral, 0 a 100 (quanto maior, pior). */
  gargaloPercent: number;
  /** Qual componente limita o conjunto. */
  componenteLimitante: "CPU" | "GPU" | "Equilibrado";
  emJogos: { percent: number; descricao: string };
  emProdutividade: { percent: number; descricao: string };
  veredito: string;
  recomendacoes: string[];
  demo?: boolean;
}

// ---------- Comparador de builds ----------

export interface BuildInput {
  nome: string;
  cpu: string;
  gpu: string;
  ram: string;
  armazenamento: string;
}

export interface BuildsRequestBody {
  buildA: BuildInput;
  buildB: BuildInput;
}

export interface BuildAvaliada {
  nome: string;
  precoEstimado: string;
  fpsEstimado: number | null;
  consumoW: number | null;
  /** Nota final 0 a 100. */
  notaFinal: number;
  /** Potencial de upgrade futuro 0 a 100. */
  potencialUpgrade: number;
  resumo: string;
}

export interface BuildsResult {
  builds: BuildAvaliada[];
  criterios: ComparisonCriterion[];
  vencedor: string;
  veredito: string;
  demo?: boolean;
}

// ---------- Assistente de montagem ----------

export interface AssistantRequestBody {
  orcamento: number;
  uso: string;
  resolucao: string;
}

export interface BuildComponente {
  categoria: string; // ex: "Processador", "Placa de vídeo"
  nome: string;
  preco: string; // ex: "R$ 1.200"
}

export interface AssistantResult {
  orcamento: number;
  uso: string;
  resolucao: string;
  componentes: BuildComponente[];
  precoTotal: string;
  fpsEstimado: number | null;
  compatibilidade: string;
  upgradesFuturos: string[];
  veredito: string;
  demo?: boolean;
}

/** Uma comparação salva no histórico (nuvem ou navegador). */
export interface StoredComparison {
  id: string;
  query: string;
  titulo: string;
  result: ComparisonResult;
  created_at: string;
  /** true = salva na nuvem (Supabase); false = só neste navegador. */
  cloud: boolean;
}
