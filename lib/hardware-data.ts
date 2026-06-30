import { CategoriaConfig, Produto } from '@/types/hardware'

export const CATEGORIAS: CategoriaConfig[] = [
  {
    slug: 'processadores',
    label: 'Processadores',
    icon: '🔲',
    cor: '#00E5FF',
    subtitle: 'Intel Core vs AMD Ryzen — compare núcleos, clock e consumo',
    subcats: ['Todos', 'Desktop', 'Laptop', 'Workstation'],
    menorMelhor: ['Consumo (W)'],
    disponivel: true,
  },
  {
    slug: 'gpus',
    label: 'Placas de Vídeo',
    icon: '🎮',
    cor: '#A78BFA',
    subtitle: 'NVIDIA RTX vs AMD RX — compare VRAM, TDP e ray tracing',
    subcats: ['Todos', 'Gaming', 'Workstation'],
    menorMelhor: ['Consumo (W)'],
    disponivel: false,
  },
  {
    slug: 'monitores',
    label: 'Monitores',
    icon: '🖥️',
    cor: '#34D399',
    subtitle: 'IPS vs OLED, 144Hz vs 240Hz — compare painel e resolução',
    subcats: ['Todos', 'Gaming', 'Profissional', 'Custo-benefício'],
    menorMelhor: ['Resposta (ms)'],
    disponivel: true,
  },
  {
    slug: 'memorias',
    label: 'Memórias RAM',
    icon: '🧠',
    cor: '#FB923C',
    subtitle: 'DDR4 vs DDR5 — compare velocidade e latência',
    subcats: ['Todos', 'DDR4', 'DDR5'],
    menorMelhor: ['Latência (CL)'],
    disponivel: false,
  },
  {
    slug: 'ssds',
    label: 'SSDs',
    icon: '💾',
    cor: '#F472B6',
    subtitle: 'NVMe Gen 4 vs Gen 5 — compare velocidade e durabilidade',
    subcats: ['Todos', 'NVMe', 'SATA'],
    menorMelhor: [],
    disponivel: false,
  },
  {
    slug: 'coolers',
    label: 'Coolers',
    icon: '❄️',
    cor: '#FBBF24',
    subtitle: 'Air vs Water cooling — compare TDP e ruído',
    subcats: ['Todos', 'Air Cooling', 'Water Cooling'],
    menorMelhor: ['Ruído (dBA)'],
    disponivel: false,
  },
  {
    slug: 'fontes',
    label: 'Fontes',
    icon: '⚡',
    cor: '#F87171',
    subtitle: 'Bronze vs Gold vs Platinum — compare eficiência e potência',
    subcats: ['Todos', 'Modular', 'Semi-modular'],
    menorMelhor: [],
    disponivel: false,
  },
  {
    slug: 'gabinetes',
    label: 'Gabinetes',
    icon: '🗄️',
    cor: '#60A5FA',
    subtitle: 'ATX vs ITX — compare tamanho, airflow e espaço',
    subcats: ['Todos', 'Full Tower', 'Mid Tower', 'Mini ITX'],
    menorMelhor: [],
    disponivel: false,
  },
]

export const PRODUTOS: Produto[] = [
  // ══════════════════════════════════════
  // PROCESSADORES
  // ══════════════════════════════════════
  {
    slug: 'intel-core-i7-14700k',
    marca: 'Intel',
    nome: 'Core i7-14700K',
    categoria: 'processadores',
    score: 95,
    specs: {
      'Núcleos': 20, 'Threads': 28, 'Clock Boost (GHz)': 5.6,
      'Soquete': 'LGA1700', 'Consumo (W)': 125,
    },
    precos: [
      {
        loja: 'amazon',
        preco: 2199,
        url: 'https://www.amazon.com.br/s?k=intel+core+i7-14700k&tag=SEUTAG-20',
        disponivel: true,
        frete: 'prime',
        parcelamento: '12x R$ 183,25',
      },
      {
        loja: 'kabum',
        preco: 2149,
        url: 'https://www.kabum.com.br/produto/intel-core-i7-14700k?utm_source=afiliado&utm_medium=besthard',
        disponivel: true,
        frete: 'pago',
        parcelamento: '12x R$ 179,08',
      },
      {
        loja: 'pichau',
        preco: 2249,
        url: 'https://www.pichau.com.br/processadores?ref=besthard',
        disponivel: true,
        frete: 'gratis',
        parcelamento: '12x R$ 187,42',
      },
      {
        loja: 'terabyte',
        preco: 2299,
        url: 'https://www.terabyteshop.com.br/produto/intel-core-i7-14700k?aff=besthard',
        disponivel: true,
        frete: 'pago',
        parcelamento: '12x R$ 191,58',
      },
    ],
  },
  {
    slug: 'amd-ryzen-7-7800x3d',
    marca: 'AMD',
    nome: 'Ryzen 7 7800X3D',
    categoria: 'processadores',
    score: 98,
    specs: {
      'Núcleos': 8, 'Threads': 16, 'Clock Boost (GHz)': 5.0,
      'Soquete': 'AM5', 'Consumo (W)': 120,
    },
    precos: [
      {
        loja: 'amazon',
        preco: 2299,
        url: 'https://www.amazon.com.br/s?k=ryzen+7+7800x3d&tag=SEUTAG-20',
        disponivel: true,
        frete: 'prime',
        parcelamento: '12x R$ 191,58',
      },
      {
        loja: 'kabum',
        preco: 2189,
        url: 'https://www.kabum.com.br/produto/amd-ryzen-7-7800x3d?utm_source=afiliado&utm_medium=besthard',
        disponivel: true,
        frete: 'pago',
        parcelamento: '12x R$ 182,42',
      },
      {
        loja: 'pichau',
        preco: 2349,
        url: 'https://www.pichau.com.br/processadores/amd?ref=besthard',
        disponivel: false,
        frete: 'gratis',
        parcelamento: '12x R$ 195,75',
      },
      {
        loja: 'terabyte',
        preco: 2399,
        url: 'https://www.terabyteshop.com.br/produto/ryzen-7-7800x3d?aff=besthard',
        disponivel: true,
        frete: 'gratis',
        parcelamento: '12x R$ 199,92',
      },
    ],
  },
  {
    slug: 'intel-core-i5-14600k',
    marca: 'Intel',
    nome: 'Core i5-14600K',
    categoria: 'processadores',
    score: 88,
    specs: {
      'Núcleos': 14, 'Threads': 20, 'Clock Boost (GHz)': 5.3,
      'Soquete': 'LGA1700', 'Consumo (W)': 125,
    },
    precos: [
      {
        loja: 'amazon',
        preco: 1499,
        url: 'https://www.amazon.com.br/s?k=intel+core+i5-14600k&tag=SEUTAG-20',
        disponivel: true,
        frete: 'prime',
        parcelamento: '12x R$ 124,92',
      },
      {
        loja: 'kabum',
        preco: 1449,
        url: 'https://www.kabum.com.br/produto/intel-core-i5-14600k?utm_source=afiliado&utm_medium=besthard',
        disponivel: true,
        frete: 'pago',
        parcelamento: '12x R$ 120,75',
      },
      {
        loja: 'pichau',
        preco: 1529,
        url: 'https://www.pichau.com.br/processadores?ref=besthard',
        disponivel: true,
        frete: 'gratis',
        parcelamento: '12x R$ 127,42',
      },
    ],
  },
  {
    slug: 'amd-ryzen-5-7600x',
    marca: 'AMD',
    nome: 'Ryzen 5 7600X',
    categoria: 'processadores',
    score: 84,
    specs: {
      'Núcleos': 6, 'Threads': 12, 'Clock Boost (GHz)': 5.3,
      'Soquete': 'AM5', 'Consumo (W)': 105,
    },
    precos: [
      {
        loja: 'amazon',
        preco: 1199,
        url: 'https://www.amazon.com.br/s?k=ryzen+5+7600x&tag=SEUTAG-20',
        disponivel: true,
        frete: 'prime',
        parcelamento: '12x R$ 99,92',
      },
      {
        loja: 'kabum',
        preco: 1149,
        url: 'https://www.kabum.com.br/produto/amd-ryzen-5-7600x?utm_source=afiliado&utm_medium=besthard',
        disponivel: true,
        frete: 'pago',
        parcelamento: '12x R$ 95,75',
      },
      {
        loja: 'pichau',
        preco: 1229,
        url: 'https://www.pichau.com.br/processadores/amd?ref=besthard',
        disponivel: true,
        frete: 'gratis',
        parcelamento: '12x R$ 102,42',
      },
    ],
  },

  // ══════════════════════════════════════
  // MONITORES
  // ══════════════════════════════════════
  {
    slug: 'lg-ultragear-27gn650',
    marca: 'LG',
    nome: 'UltraGear 27GN650',
    categoria: 'monitores',
    score: 80,
    specs: {
      'Polegadas': '27"', 'Painel': 'IPS', 'Resolução': '1920×1080',
      'Taxa (Hz)': 144, 'Resposta (ms)': 1,
    },
    precos: [
      {
        loja: 'amazon',
        preco: 1099,
        url: 'https://www.amazon.com.br/s?k=lg+ultragear+27gn650&tag=SEUTAG-20',
        disponivel: true,
        frete: 'prime',
        parcelamento: '12x R$ 91,58',
      },
      {
        loja: 'kabum',
        preco: 1049,
        url: 'https://www.kabum.com.br/produto/lg-ultragear-27gn650?utm_source=afiliado&utm_medium=besthard',
        disponivel: true,
        frete: 'pago',
        parcelamento: '12x R$ 87,42',
      },
      {
        loja: 'pichau',
        preco: 1129,
        url: 'https://www.pichau.com.br/monitores?ref=besthard',
        disponivel: true,
        frete: 'gratis',
        parcelamento: '12x R$ 94,08',
      },
    ],
  },
  {
    slug: 'asus-rog-swift-pg27aqdm',
    marca: 'ASUS',
    nome: 'ROG Swift PG27AQDM',
    categoria: 'monitores',
    score: 99,
    specs: {
      'Polegadas': '27"', 'Painel': 'OLED', 'Resolução': '2560×1440',
      'Taxa (Hz)': 240, 'Resposta (ms)': 0.03,
    },
    precos: [
      {
        loja: 'amazon',
        preco: 4799,
        url: 'https://www.amazon.com.br/s?k=asus+rog+swift+pg27aqdm&tag=SEUTAG-20',
        disponivel: true,
        frete: 'prime',
        parcelamento: '12x R$ 399,92',
      },
      {
        loja: 'kabum',
        preco: 4599,
        url: 'https://www.kabum.com.br/produto/asus-rog-pg27aqdm?utm_source=afiliado&utm_medium=besthard',
        disponivel: true,
        frete: 'gratis',
        parcelamento: '12x R$ 383,25',
      },
      {
        loja: 'terabyte',
        preco: 4899,
        url: 'https://www.terabyteshop.com.br/produto/asus-rog-pg27aqdm?aff=besthard',
        disponivel: false,
        frete: 'pago',
        parcelamento: '12x R$ 408,25',
      },
    ],
  },
  {
    slug: 'samsung-odyssey-g7',
    marca: 'Samsung',
    nome: 'Odyssey G7 27"',
    categoria: 'monitores',
    score: 90,
    specs: {
      'Polegadas': '27"', 'Painel': 'VA', 'Resolução': '2560×1440',
      'Taxa (Hz)': 240, 'Resposta (ms)': 1,
    },
    precos: [
      {
        loja: 'amazon',
        preco: 2799,
        url: 'https://www.amazon.com.br/s?k=samsung+odyssey+g7&tag=SEUTAG-20',
        disponivel: true,
        frete: 'prime',
        parcelamento: '12x R$ 233,25',
      },
      {
        loja: 'kabum',
        preco: 2699,
        url: 'https://www.kabum.com.br/produto/samsung-odyssey-g7?utm_source=afiliado&utm_medium=besthard',
        disponivel: true,
        frete: 'pago',
        parcelamento: '12x R$ 224,92',
      },
    ],
  },
  {
    slug: 'aoc-24g2sp',
    marca: 'AOC',
    nome: '24G2SP',
    categoria: 'monitores',
    score: 75,
    specs: {
      'Polegadas': '24"', 'Painel': 'IPS', 'Resolução': '1920×1080',
      'Taxa (Hz)': 165, 'Resposta (ms)': 1,
    },
    precos: [
      {
        loja: 'amazon',
        preco: 799,
        url: 'https://www.amazon.com.br/s?k=aoc+24g2sp&tag=SEUTAG-20',
        disponivel: true,
        frete: 'prime',
        parcelamento: '12x R$ 66,58',
      },
      {
        loja: 'kabum',
        preco: 749,
        url: 'https://www.kabum.com.br/produto/aoc-24g2sp?utm_source=afiliado&utm_medium=besthard',
        disponivel: true,
        frete: 'pago',
        parcelamento: '12x R$ 62,42',
      },
      {
        loja: 'pichau',
        preco: 789,
        url: 'https://www.pichau.com.br/monitores?ref=besthard',
        disponivel: true,
        frete: 'gratis',
        parcelamento: '12x R$ 65,75',
      },
    ],
  },
]

// funções exportadas abaixo após enrichment

// ── Enrichment: descrições, prós/contras e relacionados ──────────────────
const ENRICHMENT: Record<string, Partial<import('@/types/hardware').Produto>> = {
  'amd-ryzen-7-7800x3d': {
    tier: 'high-end',
    anoLancamento: 2023,
    scoreCustoBeneficio: 89,
    descricao: 'O AMD Ryzen 7 7800X3D é o processador mais rápido para jogos disponível no mercado em 2024, graças à tecnologia 3D V-Cache que adiciona 64 MB de cache L3 empilhado diretamente sobre o chiplet de CPU. Esse cache extra reduz drasticamente a latência de acesso à memória em títulos como Cyberpunk 2077, Baldur\'s Gate 3 e Counter-Strike 2, entregando até 15-20% mais FPS que processadores convencionais na mesma faixa de preço. Baseado na arquitetura Zen 4 com soquete AM5, ele é compatível com memórias DDR5 e PCIe 5.0, garantindo longevidade para a plataforma.',
    proCons: {
      pros: [
        'Melhor desempenho em jogos do mercado',
        'TDP de apenas 120W — ótima eficiência energética',
        'Plataforma AM5 com suporte de longo prazo',
        'Cache 3D V-Cache exclusivo reduz gargalos de latência',
        'Compatível com DDR5 e PCIe 5.0',
      ],
      contras: [
        'Desempenho em produtividade inferior ao i9-14900K',
        'Apenas 8 núcleos (vs 20 do i7-14700K)',
        'Clock boost mais baixo que concorrentes Intel',
        'Requer placa-mãe AM5 (custo adicional)',
      ],
    },
    relacionados: ['intel-core-i7-14700k', 'amd-ryzen-5-7600x', 'intel-core-i5-14600k'],
  },

  'intel-core-i7-14700k': {
    tier: 'high-end',
    anoLancamento: 2023,
    scoreCustoBeneficio: 87,
    descricao: 'O Intel Core i7-14700K é um processador híbrido de 14ª geração com 20 núcleos (8 P-cores + 12 E-cores) que entrega excelente desempenho tanto em jogos quanto em tarefas de produtividade pesada como edição de vídeo, renderização 3D e streaming simultâneo. Com clock boost de até 5.6 GHz — o mais alto da sua faixa — ele se destaca em aplicações single-thread. Utiliza o soquete LGA1700 e é compatível com placas-mãe Z690, Z790 e B760, com suporte a DDR4 e DDR5.',
    proCons: {
      pros: [
        '20 núcleos — líder em multitarefas pesadas',
        'Clock boost de 5.6 GHz — o mais alto da categoria',
        'Excelente para streaming + jogo simultâneo',
        'Compatível com placas DDR4 existentes',
        'Ótimo custo-benefício para criadores de conteúdo',
      ],
      contras: [
        'Consumo elevado sob carga total (253W PL2)',
        'Geração de calor alta — exige cooler robusto',
        'Plataforma LGA1700 chegando ao fim da vida útil',
        'Perdo para Ryzen 7800X3D em jogos puros',
      ],
    },
    relacionados: ['amd-ryzen-7-7800x3d', 'intel-core-i5-14600k', 'amd-ryzen-5-7600x'],
  },

  'intel-core-i5-14600k': {
    tier: 'mid-range',
    anoLancamento: 2023,
    scoreCustoBeneficio: 93,
    descricao: 'O Intel Core i5-14600K representa o ponto ideal entre custo e desempenho na linha Intel de 14ª geração. Com 14 núcleos e clock boost de 5.3 GHz, ele entrega performance excelente em jogos e suporta bem streaming e edição leve. É a escolha recomendada para quem quer montar um PC gamer de alto nível sem pagar o premium dos i7/i9.',
    proCons: {
      pros: [
        'Melhor custo-benefício da linha Intel 14ª geração',
        'Excelente desempenho em jogos',
        '14 núcleos para multitarefas moderadas',
        'TDP de 125W — eficiente para a categoria',
      ],
      contras: [
        'Perda para Ryzen 5 7600 em eficiência energética',
        'Plataforma LGA1700 chegando ao fim',
        'Sem suporte nativo a DDR5 em todas as boards',
      ],
    },
    relacionados: ['amd-ryzen-5-7600x', 'intel-core-i7-14700k', 'amd-ryzen-7-7800x3d'],
  },

  'amd-ryzen-5-7600x': {
    tier: 'mid-range',
    anoLancamento: 2022,
    scoreCustoBeneficio: 91,
    descricao: 'O AMD Ryzen 5 7600X é a porta de entrada da plataforma AM5 com excelente custo-benefício. Com 6 núcleos Zen 4 e clock boost de 5.3 GHz, ele rivaliza com processadores mais caros em jogos e tarefas do dia a dia, com consumo de apenas 105W. É ideal para quem quer entrar no ecossistema AM5 sem gastar muito.',
    proCons: {
      pros: [
        'Plataforma AM5 futura — suporte de longo prazo',
        'Alto clock boost (5.3 GHz)',
        'Eficiência energética melhor que Intel',
        'Ótimo para jogos e uso geral',
      ],
      contras: [
        'Apenas 6 núcleos — limitado em produtividade pesada',
        'Placa-mãe AM5 tem custo maior que B660',
        'DDR5 obrigatório eleva custo total do build',
      ],
    },
    relacionados: ['intel-core-i5-14600k', 'amd-ryzen-7-7800x3d', 'intel-core-i7-14700k'],
  },

  'asus-rog-swift-pg27aqdm': {
    tier: 'flagship',
    anoLancamento: 2022,
    scoreCustoBeneficio: 72,
    descricao: 'O ASUS ROG Swift PG27AQDM é o monitor de referência para gamers exigentes que querem o melhor disponível. Com painel OLED de 27 polegadas, resolução QHD 1440p e taxa de refresh de 240Hz, ele entrega pretos absolutos, cores vibrantes e tempo de resposta de apenas 0,03ms — o mais rápido da categoria. Compatível com HDMI 2.1 para uso com consoles e DisplayPort 1.4 para PCs.',
    proCons: {
      pros: [
        'Painel OLED — pretos absolutos e cores perfeitas',
        '0,03ms de resposta — o mais rápido do mercado',
        '240Hz com resolução 1440p',
        'HDR True Black 400',
        'HDMI 2.1 para PS5/Xbox',
      ],
      contras: [
        'Preço premium (~R$ 4.599)',
        'Risco de burn-in em uso estático prolongado',
        'Brilho máximo inferior a monitores mini-LED',
        'Sem suporte 4K',
      ],
    },
    relacionados: ['lg-ultragear-27gn650', 'samsung-odyssey-g7', 'aoc-24g2sp'],
  },

  'lg-ultragear-27gn650': {
    tier: 'mid-range',
    anoLancamento: 2020,
    scoreCustoBeneficio: 88,
    descricao: 'O LG UltraGear 27GN650 é um dos monitores gamer com melhor custo-benefício do mercado brasileiro. Com painel IPS de 27 polegadas, resolução Full HD 1080p e 144Hz, ele oferece cores precisas e tempo de resposta de 1ms a um preço acessível. É a escolha perfeita para quem está montando o primeiro setup gamer ou quer um segundo monitor.',
    proCons: {
      pros: [
        'Excelente custo-benefício',
        'Painel IPS — cores precisas e amplo ângulo de visão',
        '144Hz — notavelmente mais fluido que 60Hz',
        'Compatível com FreeSync e G-Sync',
      ],
      contras: [
        'Resolução 1080p limitada em 27"',
        'Brilho máximo de 300 nits — fraco para ambientes claros',
        'Sem HDR real',
        'Stand sem ajuste de altura',
      ],
    },
    relacionados: ['asus-rog-swift-pg27aqdm', 'samsung-odyssey-g7', 'aoc-24g2sp'],
  },
}

// Merge enrichment nos produtos
export const PRODUTOS_ENRIQUECIDOS = PRODUTOS.map(p => ({
  ...p,
  ...(ENRICHMENT[p.slug] || {}),
}))

// Sobrescreve as funções para usar a versão enriquecida
export function getProdutosByCategoria(categoria: string) {
  return PRODUTOS_ENRIQUECIDOS.filter((p) => p.categoria === categoria)
}

export function getProdutoBySlug(slug: string) {
  return PRODUTOS_ENRIQUECIDOS.find((p) => p.slug === slug)
}

export function getCategoriaConfig(slug: string) {
  return CATEGORIAS.find((c) => c.slug === slug)
}
