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
  "Mouse",
  "Teclado",
  "Headset",
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
          category: { type: "string" },
          notaGeral: { type: "integer" },
          precoFaixa: { type: "string" },
        },
        required: ["name", "category", "notaGeral", "precoFaixa"],
      },
    },
    atributos: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          label: { type: "string" },
          valores: { type: "array", items: { type: "string" } },
        },
        required: ["label", "valores"],
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
    recomendacoes: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          uso: { type: "string" },
          item: { type: "string" },
        },
        required: ["uso", "item"],
      },
    },
    veredito: { type: "string" },
  },
  required: ["titulo", "itens", "atributos", "criterios", "recomendacoes", "veredito"],
} as const;

const SYSTEM_PROMPT = `Você é um especialista sênior em hardware de PC (placas de vídeo, processadores, memórias, SSDs, placas-mãe, fontes, gabinetes, coolers, monitores, notebooks), no nível de TechPowerUp e Tom's Hardware. Responda em português do Brasil.

PASSO 1 — Detecte a CATEGORIA dos produtos e preencha "category" de cada item com o tipo real (ex.: "Placa de Vídeo", "Processador", "Fonte", "Monitor", "SSD", "Gabinete", "Cooler", "Placa-mãe", "Memória RAM", "Notebook").

PASSO 2 — Escolha "atributos" ESPECÍFICOS daquela categoria (4 a 7). Cada atributo tem "label" e "valores" (um valor em TEXTO por item, na MESMA ordem dos itens; use unidades e "Sim"/"Não" quando fizer sentido). Guia por categoria:
- Placa de Vídeo: VRAM, FPS 1080p (estimado), FPS 1440p, Ray Tracing/DLSS, Consumo (TDP), Barramento.
- Processador: Núcleos/Threads, Clock turbo, Cache, Consumo (TDP), Soquete, Vídeo integrado (Sim/Não).
- Fonte: Potência (W), Selo 80 Plus, Modular (Sim/Não/Semi), Conector PCIe 5.0 (Sim/Não), Garantia.
- Monitor: Resolução, Taxa de atualização, Tipo de painel, Tempo de resposta, Tamanho, HDR (Sim/Não).
- SSD: Capacidade, Interface (SATA/NVMe Gen), Leitura, Gravação, Cache DRAM (Sim/Não).
- Placa-mãe: Soquete, Chipset, Slots de RAM, VRM, Wi-Fi (Sim/Não), Slots M.2.
- Gabinete: Tipo/Tamanho suportado, Fluxo de ar, Comprimento máx. de GPU, Fans inclusos, Painel lateral.
- Cooler: Tipo (ar/water), Dissipação (TDP suportado), Tamanho (mm), Ruído, Soquetes compatíveis.
- Memória RAM: Capacidade, Tipo (DDR4/DDR5), Frequência, Latência (CL), Kit (módulos).
- Notebook: Processador, Placa de vídeo, Tela, RAM, Armazenamento, Bateria.

PASSO 3 — "criterios": 4 a 7 critérios com notas 0-100 (um por item, mesma ordem), adequados à categoria (ex.: GPU → desempenho, custo-benefício, eficiência, ray tracing; Fonte → eficiência, confiabilidade, ruído, custo-benefício; Monitor → imagem, fluidez, custo-benefício).

PASSO 4 — "recomendacoes": 2 a 4 entradas {uso, item} dizendo para qual PERFIL/USO cada produto é melhor, ADEQUADO à categoria. NÃO use sempre "jogos/streaming/IA" — adapte (ex.: Fonte → "PC de entrada", "PC gamer high-end", "Custo-benefício"; Monitor → "Jogos competitivos", "Trabalho/edição", "Uso geral").

Regras gerais:
- "notaGeral" e "scores" de 0 a 100 (100 = melhor).
- Preços em reais (mercado BR), em faixa, ex: "R$ 550 - R$ 700".
- "veredito" humano, 2 a 4 frases, com contexto prático de compra.
- São estimativas, não benchmarks oficiais.`;

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
