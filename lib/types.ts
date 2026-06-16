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

/** Métricas estimadas de um item individual. */
export interface ItemMetrics {
  /** Nome do produto, ex: "RTX 4060" */
  name: string;
  /** Categoria detectada. */
  category: HardwareCategory;
  /** Nota geral de 0 a 100. */
  notaGeral: number;
  /** FPS médio estimado (jogos AAA em 1080p) — ou null se não se aplica. */
  fpsEstimado: number | null;
  /** Consumo de energia em watts — ou null. */
  consumoW: number | null;
  /** Temperatura média em °C sob carga — ou null. */
  tempC: number | null;
  /** Faixa de preço estimada em reais, ex: "R$ 2.000 - R$ 2.400". */
  precoFaixa: string;
}

/** Resultado completo de uma comparação. */
export interface ComparisonResult {
  /** Título amigável, ex: "RTX 4060 vs RX 7700 XT". */
  titulo: string;
  /** Lista de itens comparados (normalmente 2). */
  itens: ItemMetrics[];
  /** Critérios comparativos para gráficos de barra e radar. */
  criterios: ComparisonCriterion[];
  /** Para cada uso, o nome do item recomendado. */
  melhorPara: {
    jogos: string;
    trabalho: string;
    streaming: string;
    ia: string;
    customBeneficio: string;
  };
  /** Veredito em linguagem humana (o diferencial do produto). */
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
