import Anthropic from "@anthropic-ai/sdk";
import type {
  ComparisonResult,
  BottleneckResult,
  BuildsResult,
  BuildInput,
  AssistantResult,
} from "./types";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-4-8";

const CATEGORIAS = [
  "GPU",
  "CPU",
  "RAM",
  "SSD",
  "Placa-mãe",
  "Fonte",
  "Notebook",
  "PC",
  "Smartphone",
  "Console",
  "Outro",
];

// Schema de saída estruturada — garante que o Claude responda exatamente
// no formato que o frontend espera. Veja "Structured Outputs" no SDK.
const SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    titulo: { type: "string" },
    itens: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          name: { type: "string" },
          category: { type: "string", enum: CATEGORIAS },
          notaGeral: { type: "integer" },
          fpsEstimado: { type: ["integer", "null"] },
          consumoW: { type: ["integer", "null"] },
          tempC: { type: ["integer", "null"] },
          precoFaixa: { type: "string" },
        },
        required: [
          "name",
          "category",
          "notaGeral",
          "fpsEstimado",
          "consumoW",
          "tempC",
          "precoFaixa",
        ],
      },
    },
    criterios: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          label: { type: "string" },
          scores: { type: "array", items: { type: "integer" } },
        },
        required: ["label", "scores"],
      },
    },
    melhorPara: {
      type: "object",
      additionalProperties: false,
      properties: {
        jogos: { type: "string" },
        trabalho: { type: "string" },
        streaming: { type: "string" },
        ia: { type: "string" },
        customBeneficio: { type: "string" },
      },
      required: ["jogos", "trabalho", "streaming", "ia", "customBeneficio"],
    },
    veredito: { type: "string" },
  },
  required: ["titulo", "itens", "criterios", "melhorPara", "veredito"],
} as const;

const SYSTEM_PROMPT = `Você é um especialista sênior em hardware de computadores (processadores, placas de vídeo, memórias, SSDs, placas-mãe, fontes, notebooks, PCs, smartphones e consoles), no nível de sites como TechPowerUp, Tom's Hardware e NanoReview.

Sua tarefa é comparar os produtos pedidos pelo usuário e devolver dados técnicos estimados, em português do Brasil.

Regras:
- Use sempre 0 a 100 nas notas (notaGeral e scores dos critérios), onde 100 é o melhor.
- Os "scores" de cada critério devem ter exatamente um valor por item comparado, na MESMA ordem dos itens.
- Inclua de 5 a 7 critérios relevantes para a categoria (ex.: desempenho geral, jogos 1080p/1440p, custo-benefício, eficiência energética, ray tracing/IA, produtividade).
- Preços em reais (mercado brasileiro), em faixa, ex: "R$ 2.000 - R$ 2.400".
- Para itens onde uma métrica não se aplica (ex.: FPS de um SSD), use null.
- O "veredito" deve ser explicativo e humano, em 2 a 4 frases, dando contexto prático de compra (ex.: para quem joga em 1440p, para trabalho, para IA).
- Seja honesto sobre incertezas; são estimativas, não benchmarks oficiais.`;

let client: Anthropic | null = null;

export function hasApiKey(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY);
}

function getClient(): Anthropic {
  if (!client) {
    client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  }
  return client;
}

/** Chama o Claude para gerar uma comparação real e estruturada. */
export async function generateComparison(
  query: string,
): Promise<ComparisonResult> {
  const response = await getClient().messages.create({
    model: MODEL,
    max_tokens: 16000,
    thinking: { type: "adaptive" },
    system: SYSTEM_PROMPT,
    output_config: {
      format: { type: "json_schema", schema: SCHEMA },
    },
    messages: [
      {
        role: "user",
        content: `Compare: ${query}`,
      },
    ],
  });

  const textBlock = response.content.find((b) => b.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("Resposta da IA sem conteúdo de texto.");
  }

  const parsed = JSON.parse(textBlock.text) as ComparisonResult;
  parsed.demo = false;
  return parsed;
}

// Função interna: chama o Claude com um schema e devolve o JSON tipado.
async function gerarEstruturado<T>(
  system: string,
  userContent: string,
  schema: Record<string, unknown>,
): Promise<T> {
  const response = await getClient().messages.create({
    model: MODEL,
    max_tokens: 16000,
    thinking: { type: "adaptive" },
    system,
    output_config: { format: { type: "json_schema", schema } },
    messages: [{ role: "user", content: userContent }],
  });
  const textBlock = response.content.find((b) => b.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("Resposta da IA sem conteúdo de texto.");
  }
  return JSON.parse(textBlock.text) as T;
}

// ===================== Simulador de gargalo =====================

const SCHEMA_GARGALO = {
  type: "object",
  additionalProperties: false,
  properties: {
    cpu: { type: "string" },
    gpu: { type: "string" },
    resolucao: { type: "string" },
    gargaloPercent: { type: "integer" },
    componenteLimitante: { type: "string", enum: ["CPU", "GPU", "Equilibrado"] },
    emJogos: {
      type: "object",
      additionalProperties: false,
      properties: {
        percent: { type: "integer" },
        descricao: { type: "string" },
      },
      required: ["percent", "descricao"],
    },
    emProdutividade: {
      type: "object",
      additionalProperties: false,
      properties: {
        percent: { type: "integer" },
        descricao: { type: "string" },
      },
      required: ["percent", "descricao"],
    },
    veredito: { type: "string" },
    recomendacoes: { type: "array", items: { type: "string" } },
  },
  required: [
    "cpu",
    "gpu",
    "resolucao",
    "gargaloPercent",
    "componenteLimitante",
    "emJogos",
    "emProdutividade",
    "veredito",
    "recomendacoes",
  ],
} as const;

const SYSTEM_GARGALO = `Você é um especialista em hardware. Avalie o gargalo (bottleneck) entre um processador (CPU) e uma placa de vídeo (GPU), em português do Brasil.

Regras:
- "gargaloPercent" de 0 a 100: 0 = par perfeitamente equilibrado, 100 = gargalo severo.
- "componenteLimitante": "CPU" se a CPU segura a GPU; "GPU" se a GPU é o limite; "Equilibrado" se estão balanceados.
- Avalie separadamente em jogos e em produtividade (cada um com percent 0-100 e descrição curta).
- Lembre que em resoluções maiores (1440p/4K) o peso vai para a GPU, reduzindo gargalo de CPU.
- "recomendacoes": 2 a 4 dicas práticas (ex.: trocar CPU, manter, fazer upgrade futuro).
- "veredito": 2 a 3 frases claras e humanas. São estimativas, não medições.`;

export async function generateBottleneck(
  cpu: string,
  gpu: string,
  resolucao: string,
): Promise<BottleneckResult> {
  const r = await gerarEstruturado<BottleneckResult>(
    SYSTEM_GARGALO,
    `Avalie o gargalo entre CPU "${cpu}" e GPU "${gpu}" em ${resolucao}.`,
    SCHEMA_GARGALO,
  );
  r.demo = false;
  return r;
}

// ===================== Comparador de builds =====================

const SCHEMA_BUILDS = {
  type: "object",
  additionalProperties: false,
  properties: {
    builds: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          nome: { type: "string" },
          precoEstimado: { type: "string" },
          fpsEstimado: { type: ["integer", "null"] },
          consumoW: { type: ["integer", "null"] },
          notaFinal: { type: "integer" },
          potencialUpgrade: { type: "integer" },
          resumo: { type: "string" },
        },
        required: [
          "nome",
          "precoEstimado",
          "fpsEstimado",
          "consumoW",
          "notaFinal",
          "potencialUpgrade",
          "resumo",
        ],
      },
    },
    criterios: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          label: { type: "string" },
          scores: { type: "array", items: { type: "integer" } },
        },
        required: ["label", "scores"],
      },
    },
    vencedor: { type: "string" },
    veredito: { type: "string" },
  },
  required: ["builds", "criterios", "vencedor", "veredito"],
} as const;

const SYSTEM_BUILDS = `Você é um especialista em montagem de PCs. Compare DUAS configurações completas, em português do Brasil, com preços do mercado brasileiro (em reais).

Regras:
- Para cada build: preço estimado total (faixa em R$), FPS médio estimado (jogos AAA 1080p), consumo total em watts, nota final (0-100) e potencial de upgrade futuro (0-100).
- "criterios": 4 a 6 critérios comparativos com notas 0-100 por build, na mesma ordem das builds (ex.: Desempenho, Custo-benefício, Eficiência, Potencial de upgrade, Equilíbrio).
- "vencedor": o nome da build que vale mais a pena no geral.
- Detecte gargalos e incompatibilidades, se houver, e cite no resumo de cada build.
- "veredito": 2 a 4 frases comparando as duas de forma prática. São estimativas.`;

function descreveBuild(b: BuildInput): string {
  return `${b.nome}: CPU=${b.cpu || "?"}, GPU=${b.gpu || "?"}, RAM=${
    b.ram || "?"
  }, Armazenamento=${b.armazenamento || "?"}`;
}

export async function generateBuildCompare(
  buildA: BuildInput,
  buildB: BuildInput,
): Promise<BuildsResult> {
  const r = await gerarEstruturado<BuildsResult>(
    SYSTEM_BUILDS,
    `Compare estas duas builds:\n${descreveBuild(buildA)}\n${descreveBuild(buildB)}`,
    SCHEMA_BUILDS,
  );
  r.demo = false;
  return r;
}

// ===================== Assistente de montagem =====================

const SCHEMA_ASSISTENTE = {
  type: "object",
  additionalProperties: false,
  properties: {
    orcamento: { type: "integer" },
    uso: { type: "string" },
    resolucao: { type: "string" },
    componentes: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          categoria: { type: "string" },
          nome: { type: "string" },
          preco: { type: "string" },
        },
        required: ["categoria", "nome", "preco"],
      },
    },
    precoTotal: { type: "string" },
    fpsEstimado: { type: ["integer", "null"] },
    compatibilidade: { type: "string" },
    upgradesFuturos: { type: "array", items: { type: "string" } },
    veredito: { type: "string" },
  },
  required: [
    "orcamento",
    "uso",
    "resolucao",
    "componentes",
    "precoTotal",
    "fpsEstimado",
    "compatibilidade",
    "upgradesFuturos",
    "veredito",
  ],
} as const;

const SYSTEM_ASSISTENTE = `Você é um montador de PCs especialista no mercado brasileiro. Monte uma configuração COMPLETA e compatível dentro do orçamento informado, em português do Brasil, com preços realistas em reais.

Regras:
- Inclua TODOS os componentes essenciais: Processador, Placa-mãe, Memória RAM, Placa de vídeo (se fizer sentido para o uso), Armazenamento (SSD), Fonte e Gabinete. Adicione cooler se relevante.
- Cada componente: categoria, nome do modelo específico e preço estimado (R$).
- "precoTotal": soma aproximada (R$). Tente ficar dentro do orçamento; se não der, explique em "veredito".
- Priorize as peças conforme o uso informado (jogos pedem GPU forte; trabalho/produtividade pedem CPU/RAM; etc.).
- Garanta compatibilidade (soquete, chipset, potência da fonte) e descreva em "compatibilidade".
- "fpsEstimado": FPS médio estimado em jogos na resolução pedida (null se não for foco em jogos).
- "upgradesFuturos": 2 a 4 sugestões de upgrades futuros.
- "veredito": 2 a 4 frases explicando as escolhas. São estimativas.`;

export async function generateBuildAssistant(
  orcamento: number,
  uso: string,
  resolucao: string,
): Promise<AssistantResult> {
  const r = await gerarEstruturado<AssistantResult>(
    SYSTEM_ASSISTENTE,
    `Monte um PC de aproximadamente R$ ${orcamento} para: ${uso}. Resolução alvo: ${resolucao}.`,
    SCHEMA_ASSISTENTE,
  );
  r.demo = false;
  return r;
}
