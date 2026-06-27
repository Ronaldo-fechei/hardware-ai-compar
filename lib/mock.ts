import type {
  ComparisonResult,
  BottleneckResult,
  BuildsResult,
  BuildInput,
  AssistantResult,
} from "./types";

/**
 * Gera um resultado de comparação SIMULADO, usado quando não há chave da API
 * configurada (modo demonstração). Não é preciso, serve só para visualizar a UI.
 */
export function mockComparison(query: string): ComparisonResult {
  const partes = query
    .split(/\s+vs\.?\s+|\s+x\s+|\s+versus\s+/i)
    .map((p) => p.trim())
    .filter(Boolean);

  const nomeA = partes[0] || "Produto A";
  const nomeB = partes[1] || "Produto B";

  return {
    titulo: `${nomeA} vs ${nomeB}`,
    demo: true,
    itens: [
      { name: nomeA, category: "Placa de Vídeo", notaGeral: 82, precoFaixa: "R$ 2.000 - R$ 2.400" },
      { name: nomeB, category: "Placa de Vídeo", notaGeral: 88, precoFaixa: "R$ 2.600 - R$ 3.100" },
    ],
    atributos: [
      { label: "VRAM", valores: ["8 GB GDDR6", "12 GB GDDR6"] },
      { label: "FPS 1080p (estimado)", valores: ["118", "139"] },
      { label: "Consumo (TDP)", valores: ["115 W", "245 W"] },
      { label: "Ray Tracing / DLSS", valores: ["Sim (forte)", "Sim"] },
    ],
    criterios: [
      { label: "Desempenho geral", scores: [82, 90] },
      { label: "Jogos 1080p", scores: [85, 92] },
      { label: "Jogos 1440p", scores: [74, 90] },
      { label: "Custo-benefício", scores: [88, 80] },
      { label: "Eficiência energética", scores: [90, 68] },
    ],
    recomendacoes: [
      { uso: "Jogos em 1080p", item: nomeA },
      { uso: "Jogos em 1440p", item: nomeB },
      { uso: "Custo-benefício", item: nomeA },
    ],
    veredito:
      `[MODO DEMONSTRAÇÃO — dados simulados] A ${nomeB} oferece mais desempenho e ` +
      `VRAM, enquanto a ${nomeA} se destaca em eficiência e custo-benefício. ` +
      `Configure sua chave da Anthropic para gerar análises reais com a IA.`,
  };
}

export function mockBottleneck(
  cpu: string,
  gpu: string,
  resolucao: string,
): BottleneckResult {
  return {
    cpu: cpu || "CPU",
    gpu: gpu || "GPU",
    resolucao: resolucao || "1080p",
    demo: true,
    gargaloPercent: 14,
    componenteLimitante: "CPU",
    emJogos: {
      percent: 18,
      descricao:
        "[DEMO] Em 1080p a CPU pode limitar levemente a GPU em jogos competitivos de alto FPS.",
    },
    emProdutividade: {
      percent: 6,
      descricao: "[DEMO] Em tarefas de produtividade o conjunto fica equilibrado.",
    },
    veredito:
      "[MODO DEMONSTRAÇÃO — dados simulados] O conjunto é equilibrado, com um leve gargalo de CPU em 1080p. Em 1440p o gargalo praticamente desaparece. Configure a chave da Anthropic para análises reais.",
    recomendacoes: [
      "Jogar em 1440p reduz o gargalo de CPU",
      "A CPU atende bem; foque upgrades na GPU no futuro",
      "Verifique se a fonte comporta o consumo total",
    ],
  };
}

export function mockBuilds(a: BuildInput, b: BuildInput): BuildsResult {
  const nomeA = a.nome || "Build A";
  const nomeB = b.nome || "Build B";
  return {
    demo: true,
    vencedor: nomeB,
    builds: [
      {
        nome: nomeA,
        precoEstimado: "R$ 4.500 - R$ 5.000",
        fpsEstimado: 110,
        consumoW: 420,
        notaFinal: 82,
        potencialUpgrade: 75,
        resumo: "[DEMO] Boa relação custo-benefício para jogos em 1080p.",
      },
      {
        nome: nomeB,
        precoEstimado: "R$ 6.000 - R$ 6.800",
        fpsEstimado: 138,
        consumoW: 520,
        notaFinal: 89,
        potencialUpgrade: 82,
        resumo: "[DEMO] Mais desempenho e folga para 1440p, porém mais cara.",
      },
    ],
    criterios: [
      { label: "Desempenho", scores: [82, 92] },
      { label: "Custo-benefício", scores: [88, 78] },
      { label: "Eficiência", scores: [80, 72] },
      { label: "Potencial de upgrade", scores: [75, 82] },
      { label: "Equilíbrio", scores: [84, 88] },
    ],
    veredito:
      "[MODO DEMONSTRAÇÃO — dados simulados] A " +
      nomeB +
      " entrega mais FPS e folga para 1440p, enquanto a " +
      nomeA +
      " vence em custo-benefício. Configure a chave da Anthropic para análises reais.",
  };
}

export function mockAssistant(
  orcamento: number,
  uso: string,
  resolucao: string,
): AssistantResult {
  return {
    orcamento,
    uso: uso || "Jogos",
    resolucao: resolucao || "1080p",
    demo: true,
    componentes: [
      { categoria: "Processador", nome: "AMD Ryzen 5 7600", preco: "R$ 1.150" },
      { categoria: "Placa-mãe", nome: "ASUS Prime B650M", preco: "R$ 900" },
      { categoria: "Memória RAM", nome: "16GB DDR5 6000MHz", preco: "R$ 350" },
      { categoria: "Placa de vídeo", nome: "NVIDIA RTX 4060", preco: "R$ 1.900" },
      { categoria: "Armazenamento", nome: "SSD NVMe 1TB", preco: "R$ 400" },
      { categoria: "Fonte", nome: "650W 80 Plus Bronze", preco: "R$ 380" },
      { categoria: "Gabinete", nome: "Gabinete ATX com airflow", preco: "R$ 320" },
    ],
    precoTotal: "R$ 5.400",
    fpsEstimado: 120,
    compatibilidade:
      "[DEMO] Componentes compatíveis (soquete AM5, DDR5). Fonte com folga para o conjunto.",
    upgradesFuturos: [
      "Adicionar mais 16GB de RAM",
      "Trocar a GPU por uma RTX 4070 no futuro",
      "Adicionar um segundo SSD",
    ],
    veredito:
      "[MODO DEMONSTRAÇÃO — dados simulados] Configuração equilibrada para jogos em " +
      (resolucao || "1080p") +
      ". Configure a chave da Anthropic para montar com a IA de verdade.",
  };
}
