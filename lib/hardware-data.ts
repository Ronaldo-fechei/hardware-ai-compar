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
    disponivel: true,
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
    disponivel: true,
  },
  {
    slug: 'ssds',
    label: 'SSDs',
    icon: '💾',
    cor: '#F472B6',
    subtitle: 'NVMe Gen 4 vs Gen 5 — compare velocidade e durabilidade',
    subcats: ['Todos', 'NVMe', 'SATA'],
    menorMelhor: [],
    disponivel: true,
  },
  {
    slug: 'coolers',
    label: 'Coolers',
    icon: '❄️',
    cor: '#FBBF24',
    subtitle: 'Air vs Water cooling — compare TDP e ruído',
    subcats: ['Todos', 'Air Cooling', 'Water Cooling'],
    menorMelhor: ['Ruído (dBA)'],
    disponivel: true,
  },
  {
    slug: 'fontes',
    label: 'Fontes',
    icon: '⚡',
    cor: '#F87171',
    subtitle: 'Bronze vs Gold vs Platinum — compare eficiência e potência',
    subcats: ['Todos', 'Modular', 'Semi-modular'],
    menorMelhor: [],
    disponivel: true,
  },
  {
    slug: 'gabinetes',
    label: 'Gabinetes',
    icon: '🗄️',
    cor: '#60A5FA',
    subtitle: 'ATX vs ITX — compare tamanho, airflow e espaço',
    subcats: ['Todos', 'Full Tower', 'Mid Tower', 'Mini ITX'],
    menorMelhor: [],
    disponivel: true,
  },
  {
    slug: 'mouses',
    label: 'Mouses',
    icon: '🖱️',
    cor: '#22D3EE',
    subtitle: 'Mouses acessíveis para estudo, trabalho e jogos — compare precisão, peso e botões',
    subcats: ['Todos', 'Uso diário', 'Gamer'],
    menorMelhor: ['Peso (g)'],
    disponivel: true,
  },
  {
    slug: 'teclados',
    label: 'Teclados',
    icon: '⌨️',
    cor: '#A3E635',
    subtitle: 'Teclados de membrana e mecânicos com bom custo-benefício e layout brasileiro',
    subcats: ['Todos', 'Membrana', 'Mecânico', 'TKL'],
    menorMelhor: [],
    disponivel: true,
  },
  {
    slug: 'headsets',
    label: 'Headsets',
    icon: '🎧',
    cor: '#C084FC',
    subtitle: 'Headsets econômicos para jogar, estudar e participar de chamadas',
    subcats: ['Todos', 'Gamer', 'Trabalho e estudo'],
    menorMelhor: ['Peso (g)'],
    disponivel: true,
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

  // ══════════════════════════════════════
  // PLACAS DE VÍDEO
  // ══════════════════════════════════════
  {
    slug: 'nvidia-geforce-rtx-4090',
    marca: 'NVIDIA',
    nome: 'GeForce RTX 4090',
    categoria: 'gpus',
    score: 100,
    specs: { 'VRAM': '24 GB GDDR6X', 'Consumo (W)': 450, 'Clock Boost (GHz)': 2.52, 'Ray Tracing': 'Sim (3ª gen)', 'Barramento': '384-bit' },
    precos: [
      { loja: 'amazon', preco: 14999, url: 'https://www.amazon.com.br/s?k=rtx+4090&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 1.249,92' },
      { loja: 'kabum', preco: 14499, url: 'https://www.kabum.com.br/produto/rtx-4090?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 1.208,25' },
      { loja: 'pichau', preco: 15299, url: 'https://www.pichau.com.br/placa-de-video?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '12x R$ 1.274,92' },
    ],
  },
  {
    slug: 'nvidia-geforce-rtx-4070-super',
    marca: 'NVIDIA',
    nome: 'GeForce RTX 4070 Super',
    categoria: 'gpus',
    score: 88,
    specs: { 'VRAM': '12 GB GDDR6X', 'Consumo (W)': 220, 'Clock Boost (GHz)': 2.48, 'Ray Tracing': 'Sim', 'Barramento': '192-bit' },
    precos: [
      { loja: 'amazon', preco: 4699, url: 'https://www.amazon.com.br/s?k=rtx+4070+super&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 391,58' },
      { loja: 'kabum', preco: 4499, url: 'https://www.kabum.com.br/produto/rtx-4070-super?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 374,92' },
      { loja: 'terabyte', preco: 4799, url: 'https://www.terabyteshop.com.br/produto/rtx-4070-super?aff=besthard', disponivel: true, frete: 'gratis', parcelamento: '12x R$ 399,92' },
    ],
  },
  {
    slug: 'nvidia-geforce-rtx-4060',
    marca: 'NVIDIA',
    nome: 'GeForce RTX 4060',
    categoria: 'gpus',
    score: 76,
    specs: { 'VRAM': '8 GB GDDR6', 'Consumo (W)': 115, 'Clock Boost (GHz)': 2.46, 'Ray Tracing': 'Sim', 'Barramento': '128-bit' },
    precos: [
      { loja: 'amazon', preco: 1999, url: 'https://www.amazon.com.br/s?k=rtx+4060&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 166,58' },
      { loja: 'kabum', preco: 1899, url: 'https://www.kabum.com.br/produto/rtx-4060?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 158,25' },
      { loja: 'pichau', preco: 2049, url: 'https://www.pichau.com.br/placa-de-video?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '12x R$ 170,75' },
    ],
  },
  {
    slug: 'amd-radeon-rx-7800-xt',
    marca: 'AMD',
    nome: 'Radeon RX 7800 XT',
    categoria: 'gpus',
    score: 86,
    specs: { 'VRAM': '16 GB GDDR6', 'Consumo (W)': 263, 'Clock Boost (GHz)': 2.43, 'Ray Tracing': 'Sim', 'Barramento': '256-bit' },
    precos: [
      { loja: 'amazon', preco: 3899, url: 'https://www.amazon.com.br/s?k=rx+7800+xt&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 324,92' },
      { loja: 'kabum', preco: 3699, url: 'https://www.kabum.com.br/produto/rx-7800-xt?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 308,25' },
      { loja: 'pichau', preco: 3999, url: 'https://www.pichau.com.br/placa-de-video/amd?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '12x R$ 333,25' },
    ],
  },
  {
    slug: 'amd-radeon-rx-7600',
    marca: 'AMD',
    nome: 'Radeon RX 7600',
    categoria: 'gpus',
    score: 72,
    specs: { 'VRAM': '8 GB GDDR6', 'Consumo (W)': 165, 'Clock Boost (GHz)': 2.66, 'Ray Tracing': 'Sim', 'Barramento': '128-bit' },
    precos: [
      { loja: 'amazon', preco: 1799, url: 'https://www.amazon.com.br/s?k=rx+7600&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 149,92' },
      { loja: 'kabum', preco: 1699, url: 'https://www.kabum.com.br/produto/rx-7600?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 141,58' },
    ],
  },

  // ══════════════════════════════════════
  // SSDs
  // ══════════════════════════════════════
  {
    slug: 'samsung-990-pro-2tb',
    marca: 'Samsung',
    nome: '990 Pro 2TB',
    categoria: 'ssds',
    score: 95,
    specs: { 'Capacidade': '2 TB', 'Interface': 'NVMe Gen4', 'Leitura (MB/s)': 7450, 'Gravação (MB/s)': 6900, 'Cache DRAM': 'Sim' },
    precos: [
      { loja: 'amazon', preco: 1299, url: 'https://www.amazon.com.br/s?k=samsung+990+pro+2tb&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 108,25' },
      { loja: 'kabum', preco: 1249, url: 'https://www.kabum.com.br/produto/samsung-990-pro-2tb?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 104,08' },
      { loja: 'pichau', preco: 1349, url: 'https://www.pichau.com.br/armazenamento?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '12x R$ 112,42' },
    ],
  },
  {
    slug: 'wd-black-sn850x-2tb',
    marca: 'Western Digital',
    nome: 'Black SN850X 2TB',
    categoria: 'ssds',
    score: 93,
    specs: { 'Capacidade': '2 TB', 'Interface': 'NVMe Gen4', 'Leitura (MB/s)': 7300, 'Gravação (MB/s)': 6600, 'Cache DRAM': 'Sim' },
    precos: [
      { loja: 'amazon', preco: 1199, url: 'https://www.amazon.com.br/s?k=wd+black+sn850x+2tb&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 99,92' },
      { loja: 'kabum', preco: 1149, url: 'https://www.kabum.com.br/produto/wd-black-sn850x-2tb?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 95,75' },
    ],
  },
  {
    slug: 'kingston-nv2-1tb',
    marca: 'Kingston',
    nome: 'NV2 1TB',
    categoria: 'ssds',
    score: 78,
    specs: { 'Capacidade': '1 TB', 'Interface': 'NVMe Gen4', 'Leitura (MB/s)': 3500, 'Gravação (MB/s)': 2100, 'Cache DRAM': 'Não' },
    precos: [
      { loja: 'amazon', preco: 449, url: 'https://www.amazon.com.br/s?k=kingston+nv2+1tb&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 44,90' },
      { loja: 'kabum', preco: 429, url: 'https://www.kabum.com.br/produto/kingston-nv2-1tb?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 42,90' },
      { loja: 'pichau', preco: 459, url: 'https://www.pichau.com.br/armazenamento?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '10x R$ 45,90' },
    ],
  },

  // ══════════════════════════════════════
  // PROCESSADORES (extras)
  // ══════════════════════════════════════
  {
    slug: 'amd-ryzen-7-9800x3d',
    marca: 'AMD',
    nome: 'Ryzen 7 9800X3D',
    categoria: 'processadores',
    score: 100,
    specs: { 'Núcleos': 8, 'Threads': 16, 'Clock Boost (GHz)': 5.2, 'Soquete': 'AM5', 'Consumo (W)': 120 },
    precos: [
      { loja: 'amazon', preco: 3599, url: 'https://www.amazon.com.br/s?k=ryzen+7+9800x3d&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 299,92' },
      { loja: 'kabum', preco: 3499, url: 'https://www.kabum.com.br/produto/ryzen-7-9800x3d?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 291,58' },
      { loja: 'terabyte', preco: 3699, url: 'https://www.terabyteshop.com.br/produto/ryzen-7-9800x3d?aff=besthard', disponivel: true, frete: 'gratis', parcelamento: '12x R$ 308,25' },
    ],
  },
  {
    slug: 'amd-ryzen-9-7950x3d',
    marca: 'AMD',
    nome: 'Ryzen 9 7950X3D',
    categoria: 'processadores',
    score: 97,
    specs: { 'Núcleos': 16, 'Threads': 32, 'Clock Boost (GHz)': 5.7, 'Soquete': 'AM5', 'Consumo (W)': 120 },
    precos: [
      { loja: 'amazon', preco: 4299, url: 'https://www.amazon.com.br/s?k=ryzen+9+7950x3d&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 358,25' },
      { loja: 'kabum', preco: 4149, url: 'https://www.kabum.com.br/produto/ryzen-9-7950x3d?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 345,75' },
    ],
  },

  // ── GPUs (faixa completa) ──
  {
    slug: 'nvidia-geforce-rtx-5090', marca: 'NVIDIA', nome: 'GeForce RTX 5090', categoria: 'gpus', score: 100,
    specs: { 'VRAM': '32 GB GDDR7', 'Consumo (W)': 575, 'Clock Boost (GHz)': 2.41, 'Ray Tracing': 'Sim (4ª gen)', 'Barramento': '512-bit' },
    precos: [
      { loja: 'kabum', preco: 18999, url: 'https://www.kabum.com.br/produto/rtx-5090?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 1.583,25' },
      { loja: 'pichau', preco: 19499, url: 'https://www.pichau.com.br/placa-de-video?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '12x R$ 1.624,92' },
    ],
  },
  {
    slug: 'nvidia-geforce-rtx-4080-super', marca: 'NVIDIA', nome: 'GeForce RTX 4080 Super', categoria: 'gpus', score: 93,
    specs: { 'VRAM': '16 GB GDDR6X', 'Consumo (W)': 320, 'Clock Boost (GHz)': 2.55, 'Ray Tracing': 'Sim', 'Barramento': '256-bit' },
    precos: [
      { loja: 'amazon', preco: 8499, url: 'https://www.amazon.com.br/s?k=rtx+4080+super&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 708,25' },
      { loja: 'kabum', preco: 8199, url: 'https://www.kabum.com.br/produto/rtx-4080-super?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 683,25' },
    ],
  },
  {
    slug: 'amd-radeon-rx-7900-xtx', marca: 'AMD', nome: 'Radeon RX 7900 XTX', categoria: 'gpus', score: 92,
    specs: { 'VRAM': '24 GB GDDR6', 'Consumo (W)': 355, 'Clock Boost (GHz)': 2.50, 'Ray Tracing': 'Sim', 'Barramento': '384-bit' },
    precos: [
      { loja: 'kabum', preco: 6999, url: 'https://www.kabum.com.br/produto/rx-7900-xtx?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 583,25' },
      { loja: 'pichau', preco: 7299, url: 'https://www.pichau.com.br/placa-de-video/amd?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '12x R$ 608,25' },
    ],
  },
  {
    slug: 'nvidia-geforce-rtx-3060', marca: 'NVIDIA', nome: 'GeForce RTX 3060 12GB', categoria: 'gpus', score: 70,
    specs: { 'VRAM': '12 GB GDDR6', 'Consumo (W)': 170, 'Clock Boost (GHz)': 1.78, 'Ray Tracing': 'Sim', 'Barramento': '192-bit' },
    precos: [
      { loja: 'amazon', preco: 1699, url: 'https://www.amazon.com.br/s?k=rtx+3060+12gb&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 141,58' },
      { loja: 'kabum', preco: 1599, url: 'https://www.kabum.com.br/produto/rtx-3060-12gb?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 133,25' },
    ],
  },
  {
    slug: 'nvidia-geforce-rtx-3050', marca: 'NVIDIA', nome: 'GeForce RTX 3050 8GB', categoria: 'gpus', score: 60,
    specs: { 'VRAM': '8 GB GDDR6', 'Consumo (W)': 130, 'Clock Boost (GHz)': 1.78, 'Ray Tracing': 'Sim', 'Barramento': '128-bit' },
    precos: [
      { loja: 'amazon', preco: 1299, url: 'https://www.amazon.com.br/s?k=rtx+3050&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 108,25' },
      { loja: 'kabum', preco: 1199, url: 'https://www.kabum.com.br/produto/rtx-3050?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 99,92' },
    ],
  },
  {
    slug: 'amd-radeon-rx-6600', marca: 'AMD', nome: 'Radeon RX 6600', categoria: 'gpus', score: 66,
    specs: { 'VRAM': '8 GB GDDR6', 'Consumo (W)': 132, 'Clock Boost (GHz)': 2.49, 'Ray Tracing': 'Sim (limitado)', 'Barramento': '128-bit' },
    precos: [
      { loja: 'kabum', preco: 1149, url: 'https://www.kabum.com.br/produto/rx-6600?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 95,75' },
      { loja: 'pichau', preco: 1199, url: 'https://www.pichau.com.br/placa-de-video/amd?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '12x R$ 99,92' },
    ],
  },
  {
    slug: 'nvidia-geforce-gtx-1650', marca: 'NVIDIA', nome: 'GeForce GTX 1650', categoria: 'gpus', score: 45,
    specs: { 'VRAM': '4 GB GDDR6', 'Consumo (W)': 75, 'Clock Boost (GHz)': 1.66, 'Ray Tracing': 'Não', 'Barramento': '128-bit' },
    precos: [
      { loja: 'kabum', preco: 899, url: 'https://www.kabum.com.br/produto/gtx-1650?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 89,90' },
    ],
  },

  // ── CPUs (faixa completa) ──
  {
    slug: 'intel-core-i9-14900k', marca: 'Intel', nome: 'Core i9-14900K', categoria: 'processadores', score: 99,
    specs: { 'Núcleos': 24, 'Threads': 32, 'Clock Boost (GHz)': 6.0, 'Soquete': 'LGA1700', 'Consumo (W)': 125 },
    precos: [
      { loja: 'amazon', preco: 3299, url: 'https://www.amazon.com.br/s?k=i9-14900k&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 274,92' },
      { loja: 'kabum', preco: 3199, url: 'https://www.kabum.com.br/produto/i9-14900k?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 266,58' },
    ],
  },
  {
    slug: 'amd-ryzen-5-5600', marca: 'AMD', nome: 'Ryzen 5 5600', categoria: 'processadores', score: 72,
    specs: { 'Núcleos': 6, 'Threads': 12, 'Clock Boost (GHz)': 4.4, 'Soquete': 'AM4', 'Consumo (W)': 65 },
    precos: [
      { loja: 'amazon', preco: 699, url: 'https://www.amazon.com.br/s?k=ryzen+5+5600&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 69,90' },
      { loja: 'kabum', preco: 649, url: 'https://www.kabum.com.br/produto/ryzen-5-5600?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 64,90' },
    ],
  },
  {
    slug: 'intel-core-i5-12400f', marca: 'Intel', nome: 'Core i5-12400F', categoria: 'processadores', score: 74,
    specs: { 'Núcleos': 6, 'Threads': 12, 'Clock Boost (GHz)': 4.4, 'Soquete': 'LGA1700', 'Consumo (W)': 65 },
    precos: [
      { loja: 'amazon', preco: 799, url: 'https://www.amazon.com.br/s?k=i5-12400f&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 79,90' },
      { loja: 'kabum', preco: 749, url: 'https://www.kabum.com.br/produto/i5-12400f?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 74,90' },
    ],
  },
  {
    slug: 'intel-core-i3-12100f', marca: 'Intel', nome: 'Core i3-12100F', categoria: 'processadores', score: 58,
    specs: { 'Núcleos': 4, 'Threads': 8, 'Clock Boost (GHz)': 4.3, 'Soquete': 'LGA1700', 'Consumo (W)': 58 },
    precos: [
      { loja: 'kabum', preco: 499, url: 'https://www.kabum.com.br/produto/i3-12100f?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 49,90' },
    ],
  },
  {
    slug: 'amd-athlon-3000g', marca: 'AMD', nome: 'Athlon 3000G', categoria: 'processadores', score: 35,
    specs: { 'Núcleos': 2, 'Threads': 4, 'Clock Boost (GHz)': 3.5, 'Soquete': 'AM4', 'Consumo (W)': 35 },
    precos: [
      { loja: 'kabum', preco: 349, url: 'https://www.kabum.com.br/produto/athlon-3000g?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '6x R$ 58,16' },
    ],
  },

  // ── SSDs (faixa completa) ──
  {
    slug: 'crucial-t705-2tb', marca: 'Crucial', nome: 'T705 2TB', categoria: 'ssds', score: 99,
    specs: { 'Capacidade': '2 TB', 'Interface': 'NVMe Gen5', 'Leitura (MB/s)': 14500, 'Gravação (MB/s)': 12700, 'Cache DRAM': 'Sim' },
    precos: [
      { loja: 'amazon', preco: 2499, url: 'https://www.amazon.com.br/s?k=crucial+t705+2tb&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 208,25' },
      { loja: 'kabum', preco: 2399, url: 'https://www.kabum.com.br/produto/crucial-t705-2tb?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 199,92' },
    ],
  },
  {
    slug: 'kingston-a400-480gb', marca: 'Kingston', nome: 'A400 480GB', categoria: 'ssds', score: 45,
    specs: { 'Capacidade': '480 GB', 'Interface': 'SATA', 'Leitura (MB/s)': 500, 'Gravação (MB/s)': 450, 'Cache DRAM': 'Não' },
    precos: [
      { loja: 'kabum', preco: 199, url: 'https://www.kabum.com.br/produto/kingston-a400-480gb?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '4x R$ 49,75' },
    ],
  },

  // ── Memórias RAM ──
  {
    slug: 'gskill-trident-z5-32gb-ddr5-6000', marca: 'G.Skill', nome: 'Trident Z5 32GB DDR5 6000MHz', categoria: 'memorias', score: 92,
    specs: { 'Capacidade': '32 GB', 'Tipo': 'DDR5', 'Frequência (MHz)': 6000, 'Latência (CL)': 30, 'Kit': '2x16GB' },
    precos: [
      { loja: 'kabum', preco: 899, url: 'https://www.kabum.com.br/produto/gskill-trident-z5-32gb?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 89,90' },
      { loja: 'pichau', preco: 949, url: 'https://www.pichau.com.br/memoria-ram?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '10x R$ 94,90' },
    ],
  },
  {
    slug: 'corsair-vengeance-16gb-ddr5-5200', marca: 'Corsair', nome: 'Vengeance 16GB DDR5 5200MHz', categoria: 'memorias', score: 76,
    specs: { 'Capacidade': '16 GB', 'Tipo': 'DDR5', 'Frequência (MHz)': 5200, 'Latência (CL)': 40, 'Kit': '2x8GB' },
    precos: [
      { loja: 'kabum', preco: 399, url: 'https://www.kabum.com.br/produto/corsair-vengeance-16gb-ddr5?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '8x R$ 49,88' },
    ],
  },
  {
    slug: 'corsair-vengeance-lpx-16gb-ddr4-3200', marca: 'Corsair', nome: 'Vengeance LPX 16GB DDR4 3200MHz', categoria: 'memorias', score: 68,
    specs: { 'Capacidade': '16 GB', 'Tipo': 'DDR4', 'Frequência (MHz)': 3200, 'Latência (CL)': 16, 'Kit': '2x8GB' },
    precos: [
      { loja: 'kabum', preco: 299, url: 'https://www.kabum.com.br/produto/corsair-vengeance-lpx-16gb-ddr4?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '6x R$ 49,83' },
    ],
  },

  // ── Fontes ──
  {
    slug: 'corsair-rm750e-750w', marca: 'Corsair', nome: 'RM750e 750W', categoria: 'fontes', score: 88,
    specs: { 'Potência (W)': 750, 'Selo': '80 Plus Gold', 'Modular': 'Total', 'Conector PCIe 5.0': 'Sim (ATX 3.0)', 'Garantia': '7 anos' },
    precos: [
      { loja: 'kabum', preco: 549, url: 'https://www.kabum.com.br/produto/corsair-rm750e?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 54,90' },
      { loja: 'pichau', preco: 579, url: 'https://www.pichau.com.br/fonte?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '10x R$ 57,90' },
    ],
  },
  {
    slug: 'corsair-cx650-650w', marca: 'Corsair', nome: 'CX650 650W', categoria: 'fontes', score: 65,
    specs: { 'Potência (W)': 650, 'Selo': '80 Plus Bronze', 'Modular': 'Não', 'Conector PCIe 5.0': 'Não', 'Garantia': '5 anos' },
    precos: [
      { loja: 'kabum', preco: 379, url: 'https://www.kabum.com.br/produto/corsair-cx650?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '8x R$ 47,38' },
    ],
  },

  // ── Coolers ──
  {
    slug: 'deepcool-ak620', marca: 'DeepCool', nome: 'AK620', categoria: 'coolers', score: 86,
    specs: { 'Tipo': 'Ar (torre dupla)', 'TDP (W)': 260, 'Tamanho (mm)': 160, 'Ruído (dBA)': 28, 'Soquetes': 'AM5/AM4/LGA1700' },
    precos: [
      { loja: 'kabum', preco: 349, url: 'https://www.kabum.com.br/produto/deepcool-ak620?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '6x R$ 58,16' },
    ],
  },
  {
    slug: 'cooler-master-hyper-212', marca: 'Cooler Master', nome: 'Hyper 212 Black', categoria: 'coolers', score: 68,
    specs: { 'Tipo': 'Ar (torre)', 'TDP (W)': 150, 'Tamanho (mm)': 159, 'Ruído (dBA)': 26, 'Soquetes': 'AM5/AM4/LGA1700' },
    precos: [
      { loja: 'kabum', preco: 199, url: 'https://www.kabum.com.br/produto/hyper-212-black?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '4x R$ 49,75' },
    ],
  },

  // ── Gabinetes ──
  {
    slug: 'lian-li-lancool-216', marca: 'Lian Li', nome: 'Lancool 216', categoria: 'gabinetes', score: 88,
    specs: { 'Tipo': 'Mid Tower ATX', 'Suporta GPU (mm)': 392, 'Baias': '2x 3.5" + 2x 2.5"', 'Fans inclusos': '2x 160mm + 1x 140mm', 'Painel': 'Vidro temperado' },
    precos: [
      { loja: 'kabum', preco: 599, url: 'https://www.kabum.com.br/produto/lian-li-lancool-216?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 59,90' },
    ],
  },
  {
    slug: 'gamemax-vega', marca: 'Gamemax', nome: 'Vega', categoria: 'gabinetes', score: 58,
    specs: { 'Tipo': 'Mid Tower ATX', 'Suporta GPU (mm)': 350, 'Baias': '2x 3.5" + 2x 2.5"', 'Fans inclusos': '4x ARGB', 'Painel': 'Vidro temperado' },
    precos: [
      { loja: 'kabum', preco: 299, url: 'https://www.kabum.com.br/produto/gamemax-vega?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '6x R$ 49,83' },
    ],
  },

  // ══════════════════════════════════════
  // NOVOS PRODUTOS (catálogo expandido)
  // ══════════════════════════════════════

  // ── Memórias RAM (novos) ──
  {
    slug: 'corsair-vengeance-32gb-ddr5-6400', marca: 'Corsair', nome: 'Vengeance 32GB DDR5 6400MHz', categoria: 'memorias', score: 90,
    specs: { 'Capacidade': '32 GB', 'Tipo': 'DDR5', 'Frequência (MHz)': 6400, 'Latência (CL)': 32, 'Kit': '2x16GB' },
    precos: [
      { loja: 'amazon', preco: 949, url: 'https://www.amazon.com.br/s?k=corsair+vengeance+32gb+ddr5+6400&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 94,90' },
      { loja: 'kabum', preco: 929, url: 'https://www.kabum.com.br/produto/corsair-vengeance-32gb-ddr5-6400?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 92,90' },
      { loja: 'pichau', preco: 979, url: 'https://www.pichau.com.br/memoria-ram?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '10x R$ 97,90' },
    ],
  },
  {
    slug: 'kingston-fury-beast-32gb-ddr5-6000', marca: 'Kingston', nome: 'Fury Beast 32GB DDR5 6000MHz', categoria: 'memorias', score: 87,
    specs: { 'Capacidade': '32 GB', 'Tipo': 'DDR5', 'Frequência (MHz)': 6000, 'Latência (CL)': 36, 'Kit': '2x16GB' },
    precos: [
      { loja: 'kabum', preco: 799, url: 'https://www.kabum.com.br/produto/kingston-fury-beast-32gb-ddr5?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 79,90' },
      { loja: 'amazon', preco: 829, url: 'https://www.amazon.com.br/s?k=kingston+fury+beast+32gb+ddr5+6000&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 82,90' },
      { loja: 'terabyte', preco: 849, url: 'https://www.terabyteshop.com.br/produto/kingston-fury-beast-32gb-ddr5?aff=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 84,90' },
    ],
  },
  {
    slug: 'kingston-fury-beast-16gb-ddr4-3600', marca: 'Kingston', nome: 'Fury Beast 16GB DDR4 3600MHz', categoria: 'memorias', score: 71,
    specs: { 'Capacidade': '16 GB', 'Tipo': 'DDR4', 'Frequência (MHz)': 3600, 'Latência (CL)': 18, 'Kit': '2x8GB' },
    precos: [
      { loja: 'kabum', preco: 279, url: 'https://www.kabum.com.br/produto/kingston-fury-beast-16gb-ddr4-3600?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '6x R$ 46,50' },
      { loja: 'amazon', preco: 299, url: 'https://www.amazon.com.br/s?k=kingston+fury+beast+16gb+ddr4+3600&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '6x R$ 49,83' },
    ],
  },
  {
    slug: 'gskill-ripjaws-s5-32gb-ddr5-6000', marca: 'G.Skill', nome: 'Ripjaws S5 32GB DDR5 6000MHz', categoria: 'memorias', score: 89,
    specs: { 'Capacidade': '32 GB', 'Tipo': 'DDR5', 'Frequência (MHz)': 6000, 'Latência (CL)': 30, 'Kit': '2x16GB' },
    precos: [
      { loja: 'kabum', preco: 859, url: 'https://www.kabum.com.br/produto/gskill-ripjaws-s5-32gb-ddr5?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 85,90' },
      { loja: 'pichau', preco: 889, url: 'https://www.pichau.com.br/memoria-ram?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '10x R$ 88,90' },
    ],
  },

  // ── Fontes (novos) ──
  {
    slug: 'corsair-rm850e-850w', marca: 'Corsair', nome: 'RM850e 850W', categoria: 'fontes', score: 90,
    specs: { 'Potência (W)': 850, 'Selo': '80 Plus Gold', 'Modular': 'Total', 'Conector PCIe 5.0': 'Sim (ATX 3.0)', 'Garantia': '7 anos' },
    precos: [
      { loja: 'kabum', preco: 699, url: 'https://www.kabum.com.br/produto/corsair-rm850e?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 69,90' },
      { loja: 'amazon', preco: 729, url: 'https://www.amazon.com.br/s?k=corsair+rm850e+850w&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 72,90' },
      { loja: 'pichau', preco: 749, url: 'https://www.pichau.com.br/fonte?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '10x R$ 74,90' },
    ],
  },
  {
    slug: 'seasonic-focus-gx-750', marca: 'Seasonic', nome: 'Focus GX-750 750W', categoria: 'fontes', score: 89,
    specs: { 'Potência (W)': 750, 'Selo': '80 Plus Gold', 'Modular': 'Total', 'Conector PCIe 5.0': 'Não', 'Garantia': '10 anos' },
    precos: [
      { loja: 'terabyte', preco: 649, url: 'https://www.terabyteshop.com.br/produto/seasonic-focus-gx-750?aff=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 64,90' },
      { loja: 'kabum', preco: 679, url: 'https://www.kabum.com.br/produto/seasonic-focus-gx-750?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 67,90' },
    ],
  },
  {
    slug: 'corsair-hx1000-1000w', marca: 'Corsair', nome: 'HX1000 1000W', categoria: 'fontes', score: 93,
    specs: { 'Potência (W)': 1000, 'Selo': '80 Plus Platinum', 'Modular': 'Total', 'Conector PCIe 5.0': 'Sim (ATX 3.0)', 'Garantia': '10 anos' },
    precos: [
      { loja: 'kabum', preco: 1199, url: 'https://www.kabum.com.br/produto/corsair-hx1000?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 119,90' },
      { loja: 'pichau', preco: 1249, url: 'https://www.pichau.com.br/fonte?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '10x R$ 124,90' },
      { loja: 'amazon', preco: 1279, url: 'https://www.amazon.com.br/s?k=corsair+hx1000+1000w&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 127,90' },
    ],
  },
  {
    slug: 'xpg-pylon-550w', marca: 'XPG', nome: 'Pylon 550W', categoria: 'fontes', score: 60,
    specs: { 'Potência (W)': 550, 'Selo': '80 Plus Bronze', 'Modular': 'Não', 'Conector PCIe 5.0': 'Não', 'Garantia': '5 anos' },
    precos: [
      { loja: 'kabum', preco: 289, url: 'https://www.kabum.com.br/produto/xpg-pylon-550w?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '6x R$ 48,16' },
      { loja: 'amazon', preco: 309, url: 'https://www.amazon.com.br/s?k=xpg+pylon+550w&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '6x R$ 51,50' },
    ],
  },

  // ── Coolers (novos) ──
  {
    slug: 'deepcool-lt720-360mm', marca: 'DeepCool', nome: 'LT720 360mm', categoria: 'coolers', score: 92,
    specs: { 'Tipo': 'Água (AIO 360mm)', 'TDP (W)': 300, 'Tamanho (mm)': 360, 'Ruído (dBA)': 32, 'Soquetes': 'AM5/AM4/LGA1700' },
    precos: [
      { loja: 'kabum', preco: 749, url: 'https://www.kabum.com.br/produto/deepcool-lt720?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 74,90' },
      { loja: 'pichau', preco: 779, url: 'https://www.pichau.com.br/water-cooler?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '10x R$ 77,90' },
      { loja: 'amazon', preco: 799, url: 'https://www.amazon.com.br/s?k=deepcool+lt720+360mm&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 79,90' },
    ],
  },
  {
    slug: 'arctic-liquid-freezer-iii-240', marca: 'Arctic', nome: 'Liquid Freezer III 240', categoria: 'coolers', score: 90,
    specs: { 'Tipo': 'Água (AIO 240mm)', 'TDP (W)': 280, 'Tamanho (mm)': 240, 'Ruído (dBA)': 30, 'Soquetes': 'AM5/AM4/LGA1700' },
    precos: [
      { loja: 'kabum', preco: 599, url: 'https://www.kabum.com.br/produto/arctic-liquid-freezer-iii-240?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 59,90' },
      { loja: 'terabyte', preco: 629, url: 'https://www.terabyteshop.com.br/produto/arctic-liquid-freezer-iii-240?aff=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 62,90' },
    ],
  },
  {
    slug: 'noctua-nh-d15', marca: 'Noctua', nome: 'NH-D15', categoria: 'coolers', score: 91,
    specs: { 'Tipo': 'Ar (torre dupla)', 'TDP (W)': 250, 'Tamanho (mm)': 165, 'Ruído (dBA)': 24, 'Soquetes': 'AM5/AM4/LGA1700' },
    precos: [
      { loja: 'amazon', preco: 649, url: 'https://www.amazon.com.br/s?k=noctua+nh-d15&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 64,90' },
      { loja: 'kabum', preco: 669, url: 'https://www.kabum.com.br/produto/noctua-nh-d15?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 66,90' },
      { loja: 'pichau', preco: 699, url: 'https://www.pichau.com.br/air-cooler?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '10x R$ 69,90' },
    ],
  },
  {
    slug: 'thermalright-peerless-assassin-120-se', marca: 'Thermalright', nome: 'Peerless Assassin 120 SE', categoria: 'coolers', score: 84,
    specs: { 'Tipo': 'Ar (torre dupla)', 'TDP (W)': 220, 'Tamanho (mm)': 155, 'Ruído (dBA)': 26, 'Soquetes': 'AM5/AM4/LGA1700' },
    precos: [
      { loja: 'kabum', preco: 229, url: 'https://www.kabum.com.br/produto/thermalright-peerless-assassin-120-se?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '4x R$ 57,25' },
      { loja: 'amazon', preco: 249, url: 'https://www.amazon.com.br/s?k=thermalright+peerless+assassin+120+se&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '5x R$ 49,80' },
    ],
  },

  // ── Gabinetes (novos) ──
  {
    slug: 'corsair-4000d-airflow', marca: 'Corsair', nome: '4000D Airflow', categoria: 'gabinetes', score: 87,
    specs: { 'Tipo': 'Mid Tower ATX', 'Suporta GPU (mm)': 360, 'Baias': '2x 3.5" + 2x 2.5"', 'Fans inclusos': '2x 120mm', 'Painel': 'Vidro temperado' },
    precos: [
      { loja: 'kabum', preco: 549, url: 'https://www.kabum.com.br/produto/corsair-4000d-airflow?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 54,90' },
      { loja: 'amazon', preco: 579, url: 'https://www.amazon.com.br/s?k=corsair+4000d+airflow&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 57,90' },
    ],
  },
  {
    slug: 'nzxt-h7-flow', marca: 'NZXT', nome: 'H7 Flow', categoria: 'gabinetes', score: 86,
    specs: { 'Tipo': 'Mid Tower ATX', 'Suporta GPU (mm)': 400, 'Baias': '2x 3.5" + 4x 2.5"', 'Fans inclusos': '2x 120mm', 'Painel': 'Vidro temperado' },
    precos: [
      { loja: 'kabum', preco: 699, url: 'https://www.kabum.com.br/produto/nzxt-h7-flow?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 69,90' },
      { loja: 'pichau', preco: 729, url: 'https://www.pichau.com.br/gabinete?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '10x R$ 72,90' },
    ],
  },
  {
    slug: 'lian-li-o11-dynamic-evo', marca: 'Lian Li', nome: 'O11 Dynamic EVO', categoria: 'gabinetes', score: 90,
    specs: { 'Tipo': 'Mid Tower ATX', 'Suporta GPU (mm)': 422, 'Baias': '4x 2.5" + 2x 3.5"', 'Fans inclusos': 'Nenhum', 'Painel': 'Vidro temperado (duplo)' },
    precos: [
      { loja: 'kabum', preco: 899, url: 'https://www.kabum.com.br/produto/lian-li-o11-dynamic-evo?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 89,90' },
      { loja: 'terabyte', preco: 929, url: 'https://www.terabyteshop.com.br/produto/lian-li-o11-dynamic-evo?aff=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 92,90' },
      { loja: 'amazon', preco: 949, url: 'https://www.amazon.com.br/s?k=lian+li+o11+dynamic+evo&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 94,90' },
    ],
  },
  {
    slug: 'cooler-master-nr200p', marca: 'Cooler Master', nome: 'NR200P', categoria: 'gabinetes', score: 83,
    specs: { 'Tipo': 'Mini ITX', 'Suporta GPU (mm)': 330, 'Baias': '2x 2.5" + 1x 3.5"', 'Fans inclusos': '2x 120mm', 'Painel': 'Vidro temperado' },
    precos: [
      { loja: 'kabum', preco: 649, url: 'https://www.kabum.com.br/produto/cooler-master-nr200p?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 64,90' },
      { loja: 'pichau', preco: 679, url: 'https://www.pichau.com.br/gabinete?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '10x R$ 67,90' },
    ],
  },

  // ══════════════════════════════════════
  // CATÁLOGO EXPANDIDO 2026-07 (mais opções p/ comparação)
  // ══════════════════════════════════════

  // ── GPUs (novos) ──
  {
    slug: 'nvidia-geforce-rtx-4070', marca: 'NVIDIA', nome: 'GeForce RTX 4070', categoria: 'gpus', score: 83,
    specs: { 'VRAM': '12 GB GDDR6X', 'Consumo (W)': 200, 'Clock Boost (GHz)': 2.48, 'Ray Tracing': 'Sim', 'Barramento': '192-bit' },
    precos: [
      { loja: 'amazon', preco: 4499, url: 'https://www.amazon.com.br/s?k=rtx+4070&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 374,92' },
      { loja: 'kabum', preco: 4299, url: 'https://www.kabum.com.br/produto/rtx-4070?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 358,25' },
      { loja: 'pichau', preco: 4499, url: 'https://www.pichau.com.br/placa-de-video?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '12x R$ 374,92' },
    ],
  },
  {
    slug: 'nvidia-geforce-rtx-4060-ti', marca: 'NVIDIA', nome: 'GeForce RTX 4060 Ti', categoria: 'gpus', score: 76,
    specs: { 'VRAM': '8 GB GDDR6', 'Consumo (W)': 160, 'Clock Boost (GHz)': 2.54, 'Ray Tracing': 'Sim', 'Barramento': '128-bit' },
    precos: [
      { loja: 'amazon', preco: 2799, url: 'https://www.amazon.com.br/s?k=rtx+4060+ti&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 233,25' },
      { loja: 'kabum', preco: 2599, url: 'https://www.kabum.com.br/produto/rtx-4060-ti?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 216,58' },
    ],
  },
  {
    slug: 'amd-radeon-rx-7700-xt', marca: 'AMD', nome: 'Radeon RX 7700 XT', categoria: 'gpus', score: 80,
    specs: { 'VRAM': '12 GB GDDR6', 'Consumo (W)': 245, 'Clock Boost (GHz)': 2.54, 'Ray Tracing': 'Sim', 'Barramento': '192-bit' },
    precos: [
      { loja: 'kabum', preco: 2999, url: 'https://www.kabum.com.br/produto/rx-7700-xt?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 249,92' },
      { loja: 'pichau', preco: 3199, url: 'https://www.pichau.com.br/placa-de-video/amd?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '12x R$ 266,58' },
    ],
  },
  {
    slug: 'amd-radeon-rx-7900-xt', marca: 'AMD', nome: 'Radeon RX 7900 XT', categoria: 'gpus', score: 88,
    specs: { 'VRAM': '20 GB GDDR6', 'Consumo (W)': 300, 'Clock Boost (GHz)': 2.40, 'Ray Tracing': 'Sim', 'Barramento': '320-bit' },
    precos: [
      { loja: 'kabum', preco: 5499, url: 'https://www.kabum.com.br/produto/rx-7900-xt?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 458,25' },
      { loja: 'amazon', preco: 5799, url: 'https://www.amazon.com.br/s?k=rx+7900+xt&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 483,25' },
    ],
  },

  // ── CPUs (novos) ──
  {
    slug: 'amd-ryzen-9-9950x', marca: 'AMD', nome: 'Ryzen 9 9950X', categoria: 'processadores', score: 96,
    specs: { 'Núcleos': 16, 'Threads': 32, 'Clock Boost (GHz)': 5.7, 'Soquete': 'AM5', 'Consumo (W)': 170 },
    precos: [
      { loja: 'amazon', preco: 4999, url: 'https://www.amazon.com.br/s?k=ryzen+9+9950x&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 416,58' },
      { loja: 'kabum', preco: 4799, url: 'https://www.kabum.com.br/produto/ryzen-9-9950x?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 399,92' },
    ],
  },
  {
    slug: 'intel-core-ultra-7-265k', marca: 'Intel', nome: 'Core Ultra 7 265K', categoria: 'processadores', score: 90,
    specs: { 'Núcleos': 20, 'Threads': 20, 'Clock Boost (GHz)': 5.5, 'Soquete': 'LGA1851', 'Consumo (W)': 125 },
    precos: [
      { loja: 'kabum', preco: 2599, url: 'https://www.kabum.com.br/produto/intel-core-ultra-7-265k?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 216,58' },
      { loja: 'pichau', preco: 2699, url: 'https://www.pichau.com.br/processadores?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '12x R$ 224,92' },
    ],
  },
  {
    slug: 'amd-ryzen-7-9700x', marca: 'AMD', nome: 'Ryzen 7 9700X', categoria: 'processadores', score: 86,
    specs: { 'Núcleos': 8, 'Threads': 16, 'Clock Boost (GHz)': 5.5, 'Soquete': 'AM5', 'Consumo (W)': 65 },
    precos: [
      { loja: 'amazon', preco: 2299, url: 'https://www.amazon.com.br/s?k=ryzen+7+9700x&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 191,58' },
      { loja: 'kabum', preco: 2199, url: 'https://www.kabum.com.br/produto/ryzen-7-9700x?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 183,25' },
    ],
  },
  {
    slug: 'amd-ryzen-5-9600x', marca: 'AMD', nome: 'Ryzen 5 9600X', categoria: 'processadores', score: 82,
    specs: { 'Núcleos': 6, 'Threads': 12, 'Clock Boost (GHz)': 5.4, 'Soquete': 'AM5', 'Consumo (W)': 65 },
    precos: [
      { loja: 'amazon', preco: 1499, url: 'https://www.amazon.com.br/s?k=ryzen+5+9600x&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 124,92' },
      { loja: 'kabum', preco: 1399, url: 'https://www.kabum.com.br/produto/ryzen-5-9600x?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 116,58' },
      { loja: 'pichau', preco: 1499, url: 'https://www.pichau.com.br/processadores/amd?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '12x R$ 124,92' },
    ],
  },

  // ── SSDs (novos) ──
  {
    slug: 'samsung-990-pro-1tb', marca: 'Samsung', nome: '990 Pro 1TB', categoria: 'ssds', score: 90,
    specs: { 'Capacidade': '1 TB', 'Interface': 'NVMe Gen4', 'Leitura (MB/s)': 7450, 'Gravação (MB/s)': 6900, 'Cache DRAM': 'Sim' },
    precos: [
      { loja: 'amazon', preco: 799, url: 'https://www.amazon.com.br/s?k=samsung+990+pro+1tb&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 79,90' },
      { loja: 'kabum', preco: 749, url: 'https://www.kabum.com.br/produto/samsung-990-pro-1tb?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 74,90' },
    ],
  },
  {
    slug: 'kingston-nv3-2tb', marca: 'Kingston', nome: 'NV3 2TB', categoria: 'ssds', score: 78,
    specs: { 'Capacidade': '2 TB', 'Interface': 'NVMe Gen4', 'Leitura (MB/s)': 6000, 'Gravação (MB/s)': 5000, 'Cache DRAM': 'Não' },
    precos: [
      { loja: 'kabum', preco: 999, url: 'https://www.kabum.com.br/produto/kingston-nv3-2tb?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 99,90' },
      { loja: 'amazon', preco: 1049, url: 'https://www.amazon.com.br/s?k=kingston+nv3+2tb&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 104,90' },
    ],
  },
  {
    slug: 'crucial-p3-plus-1tb', marca: 'Crucial', nome: 'P3 Plus 1TB', categoria: 'ssds', score: 74,
    specs: { 'Capacidade': '1 TB', 'Interface': 'NVMe Gen4', 'Leitura (MB/s)': 5000, 'Gravação (MB/s)': 4200, 'Cache DRAM': 'Não' },
    precos: [
      { loja: 'kabum', preco: 549, url: 'https://www.kabum.com.br/produto/crucial-p3-plus-1tb?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '8x R$ 68,63' },
      { loja: 'terabyte', preco: 569, url: 'https://www.terabyteshop.com.br/produto/crucial-p3-plus-1tb?aff=besthard', disponivel: true, frete: 'pago', parcelamento: '8x R$ 71,13' },
    ],
  },
  {
    slug: 'wd-blue-sn580-1tb', marca: 'Western Digital', nome: 'WD Blue SN580 1TB', categoria: 'ssds', score: 72,
    specs: { 'Capacidade': '1 TB', 'Interface': 'NVMe Gen4', 'Leitura (MB/s)': 4150, 'Gravação (MB/s)': 4150, 'Cache DRAM': 'Não' },
    precos: [
      { loja: 'kabum', preco: 499, url: 'https://www.kabum.com.br/produto/wd-blue-sn580-1tb?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '6x R$ 83,16' },
      { loja: 'amazon', preco: 529, url: 'https://www.amazon.com.br/s?k=wd+blue+sn580+1tb&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '8x R$ 66,13' },
    ],
  },
  {
    slug: 'samsung-980-1tb', marca: 'Samsung', nome: '980 1TB', categoria: 'ssds', score: 68,
    specs: { 'Capacidade': '1 TB', 'Interface': 'NVMe Gen3', 'Leitura (MB/s)': 3500, 'Gravação (MB/s)': 3000, 'Cache DRAM': 'Não' },
    precos: [
      { loja: 'amazon', preco: 449, url: 'https://www.amazon.com.br/s?k=samsung+980+1tb&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '6x R$ 74,83' },
      { loja: 'kabum', preco: 429, url: 'https://www.kabum.com.br/produto/samsung-980-1tb?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '6x R$ 71,50' },
    ],
  },

  // ── Monitores (novos) ──
  {
    slug: 'samsung-odyssey-oled-g6', marca: 'Samsung', nome: 'Odyssey OLED G6 27"', categoria: 'monitores', score: 95,
    specs: { 'Polegadas': '27"', 'Painel': 'OLED', 'Resolução': '2560×1440', 'Taxa (Hz)': 360, 'Resposta (ms)': 0.03 },
    precos: [
      { loja: 'amazon', preco: 3999, url: 'https://www.amazon.com.br/s?k=samsung+odyssey+oled+g6+27&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 333,25' },
      { loja: 'kabum', preco: 3899, url: 'https://www.kabum.com.br/produto/samsung-odyssey-oled-g6?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 324,92' },
    ],
  },
  {
    slug: 'lg-ultragear-27gp850', marca: 'LG', nome: 'UltraGear 27GP850', categoria: 'monitores', score: 86,
    specs: { 'Polegadas': '27"', 'Painel': 'Nano IPS', 'Resolução': '2560×1440', 'Taxa (Hz)': 165, 'Resposta (ms)': 1 },
    precos: [
      { loja: 'amazon', preco: 1899, url: 'https://www.amazon.com.br/s?k=lg+ultragear+27gp850&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 158,25' },
      { loja: 'kabum', preco: 1799, url: 'https://www.kabum.com.br/produto/lg-ultragear-27gp850?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 149,92' },
      { loja: 'pichau', preco: 1899, url: 'https://www.pichau.com.br/monitor?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '12x R$ 158,25' },
    ],
  },
  {
    slug: 'dell-s2721dgf', marca: 'Dell', nome: 'S2721DGF 27"', categoria: 'monitores', score: 85,
    specs: { 'Polegadas': '27"', 'Painel': 'IPS', 'Resolução': '2560×1440', 'Taxa (Hz)': 165, 'Resposta (ms)': 1 },
    precos: [
      { loja: 'amazon', preco: 1999, url: 'https://www.amazon.com.br/s?k=dell+s2721dgf&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '12x R$ 166,58' },
      { loja: 'kabum', preco: 1899, url: 'https://www.kabum.com.br/produto/dell-s2721dgf?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 158,25' },
    ],
  },
  {
    slug: 'gigabyte-m27q', marca: 'Gigabyte', nome: 'M27Q 27"', categoria: 'monitores', score: 84,
    specs: { 'Polegadas': '27"', 'Painel': 'IPS (SS)', 'Resolução': '2560×1440', 'Taxa (Hz)': 170, 'Resposta (ms)': 0.5 },
    precos: [
      { loja: 'kabum', preco: 1699, url: 'https://www.kabum.com.br/produto/gigabyte-m27q?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 141,58' },
      { loja: 'terabyte', preco: 1749, url: 'https://www.terabyteshop.com.br/produto/gigabyte-m27q?aff=besthard', disponivel: true, frete: 'pago', parcelamento: '12x R$ 145,75' },
    ],
  },
  {
    slug: 'aoc-24g4', marca: 'AOC', nome: 'Gaming 24G4 24"', categoria: 'monitores', score: 76,
    specs: { 'Polegadas': '24"', 'Painel': 'IPS', 'Resolução': '1920×1080', 'Taxa (Hz)': 180, 'Resposta (ms)': 1 },
    precos: [
      { loja: 'kabum', preco: 899, url: 'https://www.kabum.com.br/produto/aoc-24g4?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 89,90' },
      { loja: 'amazon', preco: 949, url: 'https://www.amazon.com.br/s?k=aoc+gaming+24g4&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 94,90' },
    ],
  },

  // ── Memórias RAM (novos) ──
  {
    slug: 'corsair-vengeance-rgb-32gb-ddr5-6000', marca: 'Corsair', nome: 'Vengeance RGB 32GB DDR5 6000MHz', categoria: 'memorias', score: 88,
    specs: { 'Capacidade': '32 GB', 'Tipo': 'DDR5', 'Frequência (MHz)': 6000, 'Latência (CL)': 30, 'Kit': '2x16GB' },
    precos: [
      { loja: 'kabum', preco: 949, url: 'https://www.kabum.com.br/produto/corsair-vengeance-rgb-32gb-ddr5-6000?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 94,90' },
      { loja: 'amazon', preco: 989, url: 'https://www.amazon.com.br/s?k=corsair+vengeance+rgb+32gb+ddr5+6000&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 98,90' },
    ],
  },
  {
    slug: 'kingston-fury-beast-16gb-ddr5-5600', marca: 'Kingston', nome: 'Fury Beast 16GB DDR5 5600MHz', categoria: 'memorias', score: 74,
    specs: { 'Capacidade': '16 GB', 'Tipo': 'DDR5', 'Frequência (MHz)': 5600, 'Latência (CL)': 36, 'Kit': '2x8GB' },
    precos: [
      { loja: 'kabum', preco: 449, url: 'https://www.kabum.com.br/produto/kingston-fury-beast-16gb-ddr5-5600?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '8x R$ 56,13' },
      { loja: 'terabyte', preco: 469, url: 'https://www.terabyteshop.com.br/produto/kingston-fury-beast-16gb-ddr5-5600?aff=besthard', disponivel: true, frete: 'pago', parcelamento: '8x R$ 58,63' },
    ],
  },

  // ── Fontes (novos) ──
  {
    slug: 'corsair-rm650e-650w', marca: 'Corsair', nome: 'RM650e 650W', categoria: 'fontes', score: 84,
    specs: { 'Potência (W)': 650, 'Selo': '80 Plus Gold', 'Modular': 'Total', 'Conector PCIe 5.0': 'Sim (ATX 3.0)', 'Garantia': '7 anos' },
    precos: [
      { loja: 'kabum', preco: 499, url: 'https://www.kabum.com.br/produto/corsair-rm650e?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '8x R$ 62,38' },
      { loja: 'amazon', preco: 529, url: 'https://www.amazon.com.br/s?k=corsair+rm650e+650w&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 52,90' },
    ],
  },
  {
    slug: 'msi-mag-a850gl-850w', marca: 'MSI', nome: 'MAG A850GL 850W', categoria: 'fontes', score: 85,
    specs: { 'Potência (W)': 850, 'Selo': '80 Plus Gold', 'Modular': 'Total', 'Conector PCIe 5.0': 'Sim (ATX 3.0)', 'Garantia': '10 anos' },
    precos: [
      { loja: 'kabum', preco: 679, url: 'https://www.kabum.com.br/produto/msi-mag-a850gl?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 67,90' },
      { loja: 'pichau', preco: 699, url: 'https://www.pichau.com.br/fonte?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '10x R$ 69,90' },
    ],
  },

  // ── Coolers (novos) ──
  {
    slug: 'deepcool-ak400', marca: 'DeepCool', nome: 'AK400', categoria: 'coolers', score: 76,
    specs: { 'Tipo': 'Ar (torre)', 'TDP (W)': 220, 'Tamanho (mm)': 155, 'Ruído (dBA)': 29, 'Soquetes': 'AM5/AM4/LGA1700' },
    precos: [
      { loja: 'kabum', preco: 179, url: 'https://www.kabum.com.br/produto/deepcool-ak400?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '4x R$ 44,75' },
      { loja: 'amazon', preco: 199, url: 'https://www.amazon.com.br/s?k=deepcool+ak400&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '4x R$ 49,75' },
    ],
  },
  {
    slug: 'lian-li-galahad-ii-360', marca: 'Lian Li', nome: 'Galahad II LCD 360mm', categoria: 'coolers', score: 89,
    specs: { 'Tipo': 'Água (AIO 360mm)', 'TDP (W)': 300, 'Tamanho (mm)': 360, 'Ruído (dBA)': 29, 'Soquetes': 'AM5/AM4/LGA1700' },
    precos: [
      { loja: 'kabum', preco: 899, url: 'https://www.kabum.com.br/produto/lian-li-galahad-ii-360?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 89,90' },
      { loja: 'pichau', preco: 949, url: 'https://www.pichau.com.br/water-cooler?ref=besthard', disponivel: true, frete: 'gratis', parcelamento: '10x R$ 94,90' },
    ],
  },

  // ── Gabinetes (novos) ──
  {
    slug: 'lian-li-lancool-207', marca: 'Lian Li', nome: 'Lancool 207', categoria: 'gabinetes', score: 84,
    specs: { 'Tipo': 'Mid Tower ATX', 'Suporta GPU (mm)': 355, 'Baias': '2x 3.5" + 2x 2.5"', 'Fans inclusos': '2x 140mm + 1x 140mm', 'Painel': 'Vidro temperado' },
    precos: [
      { loja: 'kabum', preco: 549, url: 'https://www.kabum.com.br/produto/lian-li-lancool-207?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 54,90' },
      { loja: 'terabyte', preco: 579, url: 'https://www.terabyteshop.com.br/produto/lian-li-lancool-207?aff=besthard', disponivel: true, frete: 'pago', parcelamento: '10x R$ 57,90' },
    ],
  },
  {
    slug: 'montech-air-903-max', marca: 'Montech', nome: 'Air 903 Max', categoria: 'gabinetes', score: 80,
    specs: { 'Tipo': 'Mid Tower ATX', 'Suporta GPU (mm)': 400, 'Baias': '2x 3.5" + 2x 2.5"', 'Fans inclusos': '4x 140mm ARGB', 'Painel': 'Vidro temperado' },
    precos: [
      { loja: 'kabum', preco: 399, url: 'https://www.kabum.com.br/produto/montech-air-903-max?utm_source=afiliado&utm_medium=besthard', disponivel: true, frete: 'pago', parcelamento: '8x R$ 49,88' },
      { loja: 'amazon', preco: 429, url: 'https://www.amazon.com.br/s?k=montech+air+903+max&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '8x R$ 53,63' },
    ],
  },

  // ── Hardware de entrada ─────────────────────────────────────────────────
  {
    slug: 'amd-ryzen-5-5500', marca: 'AMD', nome: 'Ryzen 5 5500', categoria: 'processadores', score: 72,
    scoreCustoBeneficio: 94, tier: 'entrada', anoLancamento: 2022,
    specs: { 'Núcleos': 6, 'Threads': 12, 'Clock Boost (GHz)': 4.2, 'Soquete': 'AM4', 'Consumo (W)': 65, 'Vídeo integrado': 'Não' },
    precos: [{ loja: 'amazon', preco: 579, url: 'https://www.amazon.com.br/s?k=amd+ryzen+5+5500&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 57,90' }],
    descricao: 'O Ryzen 5 5500 é uma das formas mais baratas de montar um PC gamer AM4 com seis núcleos e doze threads. Ele combina bem com placas como RX 6600 e RTX 3060, mas exige uma placa de vídeo dedicada porque não possui gráficos integrados.',
    proCons: { pros: ['6 núcleos e 12 threads por preço baixo', 'Placas-mãe AM4 acessíveis', 'Cooler incluso em versões box', 'Bom par para GPUs de entrada'], contras: ['Não possui vídeo integrado', 'PCIe 3.0', 'Menos cache que o Ryzen 5 5600'] },
    relacionados: ['amd-ryzen-5-5600', 'amd-ryzen-5-5600gt', 'amd-radeon-rx-6600'],
  },
  {
    slug: 'amd-ryzen-5-5600gt', marca: 'AMD', nome: 'Ryzen 5 5600GT', categoria: 'processadores', score: 76,
    scoreCustoBeneficio: 95, tier: 'entrada', anoLancamento: 2024,
    specs: { 'Núcleos': 6, 'Threads': 12, 'Clock Boost (GHz)': 4.6, 'Soquete': 'AM4', 'Consumo (W)': 65, 'Vídeo integrado': 'Radeon Graphics' },
    precos: [{ loja: 'amazon', preco: 899, url: 'https://www.amazon.com.br/s?k=amd+ryzen+5+5600gt&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 89,90' }],
    descricao: 'O Ryzen 5 5600GT permite montar um computador completo sem comprar placa de vídeo logo no início. Seus gráficos Radeon integrados atendem estudo, trabalho e jogos competitivos leves, deixando aberta a possibilidade de instalar uma GPU dedicada depois.',
    proCons: { pros: ['Funciona sem placa de vídeo dedicada', '6 núcleos e 12 threads', 'Plataforma AM4 barata', 'Boa opção para upgrade gradual'], contras: ['PCIe 3.0', 'Memória em dual channel é essencial', 'Jogos pesados exigem GPU dedicada'] },
    relacionados: ['amd-ryzen-5-5500', 'amd-ryzen-5-5600', 'kingston-fury-beast-8gb-ddr4-3200'],
  },
  {
    slug: 'kingston-a400-240gb', marca: 'Kingston', nome: 'A400 240GB', categoria: 'ssds', score: 41,
    scoreCustoBeneficio: 84, tier: 'entrada', anoLancamento: 2017,
    specs: { 'Capacidade': '240 GB', 'Interface': 'SATA III', 'Leitura (MB/s)': 500, 'Gravação (MB/s)': 350, 'Formato': '2,5 polegadas', 'TBW': 80 },
    precos: [{ loja: 'amazon', preco: 169, url: 'https://www.amazon.com.br/s?k=kingston+a400+240gb&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '3x R$ 56,33' }],
    descricao: 'O Kingston A400 de 240GB é um SSD SATA básico para dar vida nova a computadores antigos ou servir como unidade de sistema em uma montagem extremamente econômica. É muito mais rápido que um HD, embora o espaço seja limitado para jogos grandes.',
    proCons: { pros: ['Preço baixo', 'Grande melhora sobre HD mecânico', 'Compatível com PCs e notebooks antigos', 'Marca estabelecida'], contras: ['Pouco espaço em 2026', 'Mais lento que NVMe', 'Modelo sem DRAM'] },
    relacionados: ['kingston-a400-480gb', 'kingston-nv3-500gb', 'wd-blue-sn580-1tb'],
  },
  {
    slug: 'kingston-nv3-500gb', marca: 'Kingston', nome: 'NV3 500GB', categoria: 'ssds', score: 69,
    scoreCustoBeneficio: 92, tier: 'entrada', anoLancamento: 2024,
    specs: { 'Capacidade': '500 GB', 'Interface': 'PCIe 4.0 NVMe', 'Leitura (MB/s)': 5000, 'Gravação (MB/s)': 3000, 'Formato': 'M.2 2280', 'TBW': 160 },
    precos: [{ loja: 'amazon', preco: 299, url: 'https://www.amazon.com.br/s?k=kingston+nv3+500gb&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '5x R$ 59,80' }],
    descricao: 'O Kingston NV3 de 500GB é um NVMe compacto e rápido para quem quer inicialização ágil e espaço para alguns jogos sem pagar por 1TB. A capacidade é o principal limite; para bibliotecas grandes, vale planejar um segundo SSD no futuro.',
    proCons: { pros: ['Velocidade PCIe 4.0', '500GB equilibram preço e espaço', 'Formato M.2 sem cabos', 'Boa opção para PC novo'], contras: ['Capacidade limitada para muitos jogos', 'Sem DRAM dedicada', 'Desempenho sustentado é de entrada'] },
    relacionados: ['kingston-a400-480gb', 'kingston-nv3-2tb', 'crucial-p3-plus-1tb'],
  },
  {
    slug: 'kingston-fury-beast-8gb-ddr4-3200', marca: 'Kingston', nome: 'Fury Beast 8GB DDR4 3200MHz', categoria: 'memorias', score: 58,
    scoreCustoBeneficio: 88, tier: 'entrada', anoLancamento: 2021,
    specs: { 'Capacidade': '8 GB', 'Tipo': 'DDR4', 'Frequência (MHz)': 3200, 'Latência (CL)': 16, 'Kit': '1x8GB', 'Tensão': '1,35 V' },
    precos: [{ loja: 'amazon', preco: 159, url: 'https://www.amazon.com.br/s?k=kingston+fury+beast+8gb+ddr4+3200&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '3x R$ 53,00' }],
    descricao: 'Um módulo de 8GB é a porta de entrada mais barata para uma plataforma DDR4. Para uso leve ele funciona sozinho, mas a recomendação é comprar duas unidades iguais para chegar a 16GB e ativar dual channel, especialmente em PCs com vídeo integrado.',
    proCons: { pros: ['Preço acessível por módulo', 'DDR4-3200 CL16', 'Perfil XMP', 'Permite upgrade em etapas'], contras: ['8GB sozinho limita jogos atuais', 'Uma unidade opera em single channel', 'Exige módulo igual para melhor desempenho'] },
    relacionados: ['xpg-gammix-d35-16gb-ddr4-3200', 'kingston-fury-beast-16gb-ddr4-3600', 'amd-ryzen-5-5600gt'],
  },
  {
    slug: 'xpg-gammix-d35-16gb-ddr4-3200', marca: 'XPG', nome: 'Gammix D35 16GB DDR4 3200MHz', categoria: 'memorias', score: 67,
    scoreCustoBeneficio: 93, tier: 'entrada', anoLancamento: 2023,
    specs: { 'Capacidade': '16 GB', 'Tipo': 'DDR4', 'Frequência (MHz)': 3200, 'Latência (CL)': 16, 'Kit': '1x16GB', 'Tensão': '1,35 V' },
    precos: [{ loja: 'amazon', preco: 269, url: 'https://www.amazon.com.br/s?k=xpg+gammix+d35+16gb+ddr4+3200&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '5x R$ 53,80' }],
    descricao: 'O XPG Gammix D35 de 16GB oferece capacidade suficiente para a maioria dos jogos e tarefas cotidianas em um único módulo. É uma compra prática para começar, embora dois módulos de 8GB ou dois de 16GB entreguem mais desempenho por usar dual channel.',
    proCons: { pros: ['16GB em um módulo acessível', 'DDR4-3200', 'Dissipador de perfil baixo', 'Facilita upgrade para 32GB'], contras: ['Um módulo trabalha em single channel', 'Sem RGB', 'DDR4 não serve em placas DDR5'] },
    relacionados: ['kingston-fury-beast-8gb-ddr4-3200', 'kingston-fury-beast-16gb-ddr4-3600', 'corsair-vengeance-lpx-16gb-ddr4-3200'],
  },
  {
    slug: 'lg-24ms500-b', marca: 'LG', nome: '24MS500-B 24” 100Hz', categoria: 'monitores', score: 72,
    scoreCustoBeneficio: 94, tier: 'entrada', anoLancamento: 2024,
    specs: { 'Tamanho': '24 polegadas', 'Resolução': '1920x1080', 'Painel': 'IPS', 'Taxa (Hz)': 100, 'Resposta (ms)': 5, 'Conexões': '2x HDMI' },
    precos: [{ loja: 'amazon', preco: 649, url: 'https://www.amazon.com.br/s?k=lg+24ms500-b&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '10x R$ 64,90' }],
    descricao: 'O LG 24MS500-B combina painel IPS, resolução Full HD e 100Hz em uma faixa acessível. É uma escolha equilibrada para trabalho, estudo e jogos casuais, com imagem melhor e movimento mais fluido que monitores básicos de 60Hz.',
    proCons: { pros: ['Painel IPS com bons ângulos', '100Hz mais fluidos que 60Hz', 'Full HD adequado para 24 polegadas', 'Duas entradas HDMI'], contras: ['Resposta de 5ms', 'Base só ajusta inclinação', 'Sem DisplayPort'] },
    relacionados: ['aoc-24g2sp-24-165hz', 'samsung-odyssey-g3-24', 'lg-ultragear-24gn60r'],
  },
  {
    slug: 'msi-mag-a550bn-550w', marca: 'MSI', nome: 'MAG A550BN 550W', categoria: 'fontes', score: 72,
    scoreCustoBeneficio: 92, tier: 'entrada', anoLancamento: 2021,
    specs: { 'Potência (W)': 550, 'Selo': '80 Plus Bronze', 'Modular': 'Não', 'PCIe 6+2': '2 conectores', 'Ventoinha': '120 mm', 'Garantia': '5 anos' },
    precos: [{ loja: 'amazon', preco: 329, url: 'https://www.amazon.com.br/s?k=msi+mag+a550bn&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '6x R$ 54,83' }],
    descricao: 'A MSI MAG A550BN é uma fonte de entrada segura para PCs com placas de vídeo econômicas. Possui certificação 80 Plus Bronze, circuito DC-DC, proteções elétricas e cinco anos de garantia, sendo muito mais indicada que fontes genéricas sem procedência.',
    proCons: { pros: ['80 Plus Bronze', 'Circuito DC-DC e proteções elétricas', 'Dois conectores PCIe 6+2', 'Garantia de 5 anos'], contras: ['Cabos fixos', '550W limitam GPUs de alto consumo', 'Sem conector 12V-2x6'] },
    relacionados: ['xpg-pylon-550w', 'corsair-cx650-650w', 'corsair-rm650e-650w'],
  },

  // ── Periféricos acessíveis ───────────────────────────────────────────────
  {
    slug: 'logitech-g203-lightsync', marca: 'Logitech', nome: 'G203 LIGHTSYNC', categoria: 'mouses', score: 78,
    scoreCustoBeneficio: 95, tier: 'entrada', anoLancamento: 2020,
    specs: { 'DPI': 8000, 'Peso (g)': 85, 'Botões': 6, 'Conexão': 'USB com fio', 'Polling rate': '1000 Hz', 'Iluminação': 'RGB LIGHTSYNC' },
    precos: [{ loja: 'amazon', preco: 149, url: 'https://www.amazon.com.br/s?k=logitech+g203+lightsync&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '3x R$ 49,67' }],
    descricao: 'O Logitech G203 é um mouse gamer de entrada muito equilibrado: sensor preciso, seis botões programáveis e resposta de 1000Hz. Seu formato simples funciona bem para mãos pequenas e médias e o software permite ajustar DPI e iluminação.',
    proCons: { pros: ['Sensor preciso de até 8000 DPI', 'Polling rate de 1000Hz', 'Seis botões programáveis', 'Software e garantia Logitech'], contras: ['Cabo emborrachado simples', 'Formato pode ser pequeno para mãos grandes', 'Não é sem fio'] },
    relacionados: ['redragon-cobra-m711', 'logitech-m90'],
  },
  {
    slug: 'logitech-m90', marca: 'Logitech', nome: 'M90', categoria: 'mouses', score: 48,
    scoreCustoBeneficio: 86, tier: 'entrada', anoLancamento: 2010,
    specs: { 'DPI': 1000, 'Peso (g)': 90, 'Botões': 3, 'Conexão': 'USB com fio', 'Pegada': 'Ambidestra', 'Iluminação': 'Não' },
    precos: [{ loja: 'amazon', preco: 49, url: 'https://www.amazon.com.br/s?k=logitech+m90&tag=SEUTAG-20', disponivel: true, frete: 'prime' }],
    descricao: 'O Logitech M90 é uma opção simples e barata para estudo, escritório e navegação. Basta conectar à porta USB; não precisa de bateria nem software. Não é voltado a jogos competitivos, mas oferece confiabilidade superior a modelos genéricos.',
    proCons: { pros: ['Muito barato', 'Plug and play', 'Formato ambidestro', 'Marca confiável'], contras: ['Apenas 1000 DPI', 'Só três botões', 'Sem recursos gamer'] },
    relacionados: ['logitech-g203-lightsync', 'redragon-cobra-m711'],
  },
  {
    slug: 'redragon-cobra-m711', marca: 'Redragon', nome: 'Cobra M711', categoria: 'mouses', score: 75,
    scoreCustoBeneficio: 92, tier: 'entrada', anoLancamento: 2017,
    specs: { 'DPI': 10000, 'Peso (g)': 130, 'Botões': 7, 'Conexão': 'USB com fio', 'Sensor': 'Pixart PMW3325', 'Polling rate': '1000 Hz' },
    precos: [{ loja: 'amazon', preco: 129, url: 'https://www.amazon.com.br/s?k=redragon+cobra+m711&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '3x R$ 43,00' }],
    descricao: 'O Redragon Cobra M711 entrega muitos recursos pelo preço: sensor Pixart, sete botões programáveis, memória interna e RGB. É mais pesado que o G203, mas pode agradar quem prefere um corpo maior e pegada para destros.',
    proCons: { pros: ['Sensor Pixart de até 10000 DPI', 'Sete botões programáveis', 'Memória interna', 'RGB e software'], contras: ['Pesado com 130g', 'Formato pensado para destros', 'Cabo não removível'] },
    relacionados: ['logitech-g203-lightsync', 'logitech-m90'],
  },
  {
    slug: 'logitech-k120', marca: 'Logitech', nome: 'K120 ABNT2', categoria: 'teclados', score: 52,
    scoreCustoBeneficio: 90, tier: 'entrada', anoLancamento: 2010,
    specs: { 'Tipo': 'Membrana', 'Formato': 'Completo', 'Conexão': 'USB com fio', 'Layout': 'ABNT2', 'Teclado numérico': 'Sim', 'Iluminação': 'Não' },
    precos: [{ loja: 'amazon', preco: 79, url: 'https://www.amazon.com.br/s?k=logitech+k120+abnt2&tag=SEUTAG-20', disponivel: true, frete: 'prime' }],
    descricao: 'O Logitech K120 é um teclado completo e resistente para trabalho, estudo e uso doméstico. O layout ABNT2 e o teclado numérico facilitam a rotina, enquanto a conexão USB elimina pilhas e configurações.',
    proCons: { pros: ['Preço baixo', 'Layout ABNT2 completo', 'Teclado numérico', 'Resistente a pequenos respingos'], contras: ['Sem iluminação', 'Teclas de membrana simples', 'Ocupa mais espaço na mesa'] },
    relacionados: ['redragon-kumara-k552'],
  },
  {
    slug: 'redragon-kumara-k552', marca: 'Redragon', nome: 'Kumara K552 ABNT2', categoria: 'teclados', score: 76,
    scoreCustoBeneficio: 93, tier: 'entrada', anoLancamento: 2016,
    specs: { 'Tipo': 'Mecânico', 'Formato': 'TKL', 'Conexão': 'USB com fio', 'Layout': 'ABNT2', 'Hot-swap': 'Sim', 'Iluminação': 'Varia por versão' },
    precos: [{ loja: 'amazon', preco: 249, url: 'https://www.amazon.com.br/s?k=redragon+kumara+k552+abnt2&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '5x R$ 49,80' }],
    descricao: 'O Redragon Kumara K552 é uma porta de entrada popular para teclados mecânicos. O formato TKL libera espaço para o mouse, o layout ABNT2 facilita a digitação em português e os switches removíveis simplificam manutenção e personalização.',
    proCons: { pros: ['Switches mecânicos e hot-swap', 'Formato TKL compacto', 'Layout ABNT2', 'Construção robusta'], contras: ['Sem teclado numérico', 'Pode ser barulhento conforme o switch', 'Recursos variam entre versões'] },
    relacionados: ['logitech-k120'],
  },
  {
    slug: 'hyperx-cloud-stinger-2-core', marca: 'HyperX', nome: 'Cloud Stinger 2 Core', categoria: 'headsets', score: 73,
    scoreCustoBeneficio: 91, tier: 'entrada', anoLancamento: 2022,
    specs: { 'Conexão': 'P2 3,5 mm', 'Drivers (mm)': 40, 'Microfone': 'Bidirecional com redução de ruído', 'Peso (g)': 275, 'Resposta': '10 Hz–25 kHz', 'Formato': 'Over-ear fechado' },
    precos: [{ loja: 'amazon', preco: 199, url: 'https://www.amazon.com.br/s?k=hyperx+cloud+stinger+2+core&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '4x R$ 49,75' }],
    descricao: 'O HyperX Cloud Stinger 2 Core reúne o essencial para jogos: conchas fechadas, drivers de 40mm, microfone que silencia ao ser levantado e controles no próprio headset. É uma opção simples de marca conhecida para quem não quer gastar muito.',
    proCons: { pros: ['Som fechado com drivers de 40mm', 'Microfone com redução de ruído', 'Controle de volume no headset', 'Conforto adequado para a faixa'], contras: ['Construção majoritariamente plástica', 'Conexão com fio', 'Sem áudio USB'] },
    relacionados: ['logitech-h390'],
  },
  {
    slug: 'logitech-h390', marca: 'Logitech', nome: 'H390 USB', categoria: 'headsets', score: 69,
    scoreCustoBeneficio: 87, tier: 'entrada', anoLancamento: 2007,
    specs: { 'Conexão': 'USB-A', 'Drivers (mm)': 30, 'Microfone': 'Bidirecional com redução de ruído', 'Peso (g)': 197, 'Resposta': '20 Hz–20 kHz', 'Controles': 'Volume e mudo no cabo' },
    precos: [{ loja: 'amazon', preco: 179, url: 'https://www.amazon.com.br/s?k=logitech+h390&tag=SEUTAG-20', disponivel: true, frete: 'prime', parcelamento: '3x R$ 59,67' }],
    descricao: 'O Logitech H390 é voltado a aulas, reuniões e atendimento remoto. A conexão USB entrega áudio consistente, o microfone reduz ruídos ao redor e os controles no cabo facilitam ajustar volume ou silenciar a chamada.',
    proCons: { pros: ['USB plug and play', 'Microfone com redução de ruído', 'Controles no cabo', 'Leve para trabalho e estudo'], contras: ['Não é focado em graves para jogos', 'Espumas podem aquecer', 'Cabo fixo'] },
    relacionados: ['hyperx-cloud-stinger-2-core'],
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

  'nvidia-geforce-rtx-4090': {
    tier: 'flagship', anoLancamento: 2022, scoreCustoBeneficio: 60,
    descricao: 'A NVIDIA GeForce RTX 4090 é a placa de vídeo mais poderosa para consumidores, com 24 GB de GDDR6X e desempenho imbatível em 4K com ray tracing máximo e DLSS 3. É a escolha de quem não abre mão de nada — jogos em 4K 120fps, criação de conteúdo e cargas de IA.',
    proCons: {
      pros: ['Desempenho líder absoluto em 4K', '24 GB de VRAM — ótima para IA e edição', 'Ray tracing e DLSS 3 de ponta', 'Roda qualquer jogo no máximo'],
      contras: ['Preço muito alto', 'Consumo elevado (450W) exige fonte forte', 'Tamanho enorme — confira o gabinete', 'Exagerada para 1080p/1440p'],
    },
    relacionados: ['nvidia-geforce-rtx-4070-super', 'amd-radeon-rx-7800-xt', 'nvidia-geforce-rtx-4060'],
  },
  'nvidia-geforce-rtx-4070-super': {
    tier: 'high-end', anoLancamento: 2024, scoreCustoBeneficio: 85,
    descricao: 'A RTX 4070 Super é uma das melhores opções para jogos em 1440p com ray tracing, entregando ótimo desempenho com consumo moderado de 220W. O DLSS 3 garante folga em títulos pesados e a eficiência energética é excelente.',
    proCons: {
      pros: ['Excelente para 1440p com ray tracing', 'DLSS 3 (Frame Generation)', 'Consumo eficiente (220W)', 'Ótimo equilíbrio preço/desempenho'],
      contras: ['12 GB de VRAM podem limitar no futuro em 4K', 'Mais cara que a concorrente RX 7800 XT', 'Sem grandes ganhos sobre a 4070 normal fora do DLSS'],
    },
    relacionados: ['amd-radeon-rx-7800-xt', 'nvidia-geforce-rtx-4090', 'nvidia-geforce-rtx-4060'],
  },
  'nvidia-geforce-rtx-4060': {
    tier: 'mid-range', anoLancamento: 2023, scoreCustoBeneficio: 84,
    descricao: 'A RTX 4060 é a porta de entrada da geração Ada para jogos em 1080p, com baixo consumo (115W) e suporte a DLSS 3. Ideal para quem quer um PC gamer eficiente e silencioso sem gastar muito.',
    proCons: {
      pros: ['Ótima para jogos em 1080p', 'Consumo baixíssimo (115W)', 'DLSS 3 ajuda bastante', 'Roda fria e silenciosa'],
      contras: ['Apenas 8 GB de VRAM', 'Barramento estreito (128-bit)', 'Ganho modesto sobre a geração anterior'],
    },
    relacionados: ['amd-radeon-rx-7600', 'nvidia-geforce-rtx-4070-super', 'amd-radeon-rx-7800-xt'],
  },
  'amd-radeon-rx-7800-xt': {
    tier: 'high-end', anoLancamento: 2023, scoreCustoBeneficio: 88,
    descricao: 'A Radeon RX 7800 XT entrega desempenho excelente em 1440p com 16 GB de VRAM — bem mais memória que as concorrentes diretas pelo mesmo preço. É a escolha de custo-benefício para quem joga em rasterização.',
    proCons: {
      pros: ['16 GB de VRAM — folga para o futuro', 'Ótimo desempenho em 1440p', 'Melhor custo-benefício que a RTX 4070', 'Forte em rasterização pura'],
      contras: ['Ray tracing inferior à NVIDIA', 'FSR ainda atrás do DLSS', 'Consumo maior (263W)'],
    },
    relacionados: ['nvidia-geforce-rtx-4070-super', 'amd-radeon-rx-7600', 'nvidia-geforce-rtx-4060'],
  },
  'amd-radeon-rx-7600': {
    tier: 'entrada', anoLancamento: 2023, scoreCustoBeneficio: 82,
    descricao: 'A Radeon RX 7600 é uma opção acessível para jogos em 1080p, com bom desempenho em rasterização e preço competitivo. Boa pedida para o primeiro PC gamer.',
    proCons: {
      pros: ['Preço acessível', 'Bom desempenho em 1080p', 'Eficiente para a faixa'],
      contras: ['8 GB de VRAM', 'Ray tracing fraco', 'Pouco espaço para 1440p'],
    },
    relacionados: ['nvidia-geforce-rtx-4060', 'amd-radeon-rx-7800-xt', 'nvidia-geforce-rtx-4070-super'],
  },
  'samsung-990-pro-2tb': {
    tier: 'high-end', anoLancamento: 2022, scoreCustoBeneficio: 86,
    descricao: 'O Samsung 990 Pro é um dos SSDs NVMe Gen4 mais rápidos do mercado, com leitura de 7450 MB/s e cache DRAM dedicado. Excelente para jogos, edição de vídeo e uso profissional intenso.',
    proCons: {
      pros: ['Entre os Gen4 mais rápidos', 'Cache DRAM dedicado', 'Ótima durabilidade e software', 'Eficiência térmica boa'],
      contras: ['Preço premium', 'Ganho real pequeno vs Gen4 mais baratos no dia a dia'],
    },
    relacionados: ['wd-black-sn850x-2tb', 'kingston-nv2-1tb'],
  },
  'wd-black-sn850x-2tb': {
    tier: 'high-end', anoLancamento: 2022, scoreCustoBeneficio: 88,
    descricao: 'O WD Black SN850X é um SSD NVMe Gen4 de altíssimo desempenho voltado a gamers, com leitura de 7300 MB/s e modo de jogo dedicado. Rivaliza diretamente com o Samsung 990 Pro, geralmente por um preço melhor.',
    proCons: {
      pros: ['Desempenho de topo Gen4', 'Ótimo para jogos (Game Mode)', 'Cache DRAM dedicado', 'Bom custo-benefício no segmento premium'],
      contras: ['Esquenta sob carga — ideal com dissipador', 'Preço acima dos Gen4 de entrada'],
    },
    relacionados: ['samsung-990-pro-2tb', 'kingston-nv2-1tb'],
  },
  'kingston-nv2-1tb': {
    tier: 'entrada', anoLancamento: 2022, scoreCustoBeneficio: 90,
    descricao: 'O Kingston NV2 é um SSD NVMe Gen4 de entrada com excelente custo por GB. Sem cache DRAM, não é o mais rápido, mas é muito mais ágil que um HD e perfeito para uso geral e jogos casuais.',
    proCons: {
      pros: ['Preço muito acessível', 'NVMe Gen4 — bem mais rápido que SATA/HD', 'Ótimo para upgrade econômico'],
      contras: ['Sem cache DRAM', 'Velocidade de gravação cai em transferências grandes', 'Especificações podem variar por lote'],
    },
    relacionados: ['samsung-990-pro-2tb', 'wd-black-sn850x-2tb'],
  },
  'amd-ryzen-7-9800x3d': {
    tier: 'flagship', anoLancamento: 2024, scoreCustoBeneficio: 90,
    descricao: 'O AMD Ryzen 7 9800X3D é o melhor processador para jogos disponível, com a 2ª geração de 3D V-Cache sobre a arquitetura Zen 5. Domina os benchmarks de games e, diferente do antecessor, permite overclock.',
    proCons: {
      pros: ['Melhor CPU para jogos do mercado', '3D V-Cache de 2ª geração', 'Permite overclock (diferente do 7800X3D)', 'Plataforma AM5 com futuro'],
      contras: ['Preço elevado', 'Exige placa AM5 + DDR5', 'Excesso para quem não joga em alto FPS'],
    },
    relacionados: ['amd-ryzen-7-7800x3d', 'amd-ryzen-9-7950x3d', 'intel-core-i7-14700k'],
  },
  'amd-ryzen-9-7950x3d': {
    tier: 'flagship', anoLancamento: 2023, scoreCustoBeneficio: 78,
    descricao: 'O Ryzen 9 7950X3D combina 16 núcleos com 3D V-Cache, entregando desempenho de ponta tanto em jogos quanto em produtividade pesada (renderização, compilação). É a escolha para quem joga E trabalha em alto nível.',
    proCons: {
      pros: ['16 núcleos — excelente em produtividade', '3D V-Cache para jogos', 'Topo de linha versátil', 'Eficiência boa para o desempenho'],
      contras: ['Preço alto', 'Gerenciamento de cache entre CCDs pode exigir ajuste', 'Para jogos puros, o 9800X3D custa menos e rende igual ou mais'],
    },
    relacionados: ['amd-ryzen-7-9800x3d', 'amd-ryzen-7-7800x3d', 'intel-core-i7-14700k'],
  },

  'nvidia-geforce-rtx-5090': {
    tier: 'flagship', anoLancamento: 2025, scoreCustoBeneficio: 55,
    descricao: 'A GeForce RTX 5090 é a placa mais poderosa do planeta, com 32 GB GDDR7 e desempenho absurdo em 4K/8K, ray tracing e IA. Topo absoluto, para quem quer o melhor a qualquer custo.',
    proCons: { pros: ['Desempenho máximo em 4K/8K', '32 GB de VRAM', 'DLSS 4 e ray tracing de ponta'], contras: ['Preço altíssimo', 'Consumo de 575W', 'Exagerada para a maioria'] },
    relacionados: ['nvidia-geforce-rtx-4090', 'nvidia-geforce-rtx-4080-super', 'amd-radeon-rx-7900-xtx'],
  },
  'nvidia-geforce-rtx-4080-super': {
    tier: 'flagship', anoLancamento: 2024, scoreCustoBeneficio: 75,
    descricao: 'A RTX 4080 Super entrega desempenho de altíssimo nível em 4K com ray tracing e DLSS 3, por um preço melhor que a 4090.',
    proCons: { pros: ['Excelente para 4K', 'Ray tracing forte + DLSS 3', '16 GB de VRAM'], contras: ['Cara', 'Consumo de 320W'] },
    relacionados: ['nvidia-geforce-rtx-4090', 'amd-radeon-rx-7900-xtx', 'nvidia-geforce-rtx-4070-super'],
  },
  'amd-radeon-rx-7900-xtx': {
    tier: 'flagship', anoLancamento: 2022, scoreCustoBeneficio: 82,
    descricao: 'A RX 7900 XTX é a top de linha da AMD, com 24 GB de VRAM e desempenho excelente em 4K na rasterização, por um preço mais amigável que as rivais NVIDIA de topo.',
    proCons: { pros: ['24 GB de VRAM', 'Ótima em 4K (rasterização)', 'Bom custo-benefício no topo'], contras: ['Ray tracing atrás da NVIDIA', 'FSR ainda inferior ao DLSS'] },
    relacionados: ['nvidia-geforce-rtx-4080-super', 'amd-radeon-rx-7800-xt', 'nvidia-geforce-rtx-4090'],
  },
  'nvidia-geforce-rtx-3060': {
    tier: 'mid-range', anoLancamento: 2021, scoreCustoBeneficio: 80,
    descricao: 'A RTX 3060 12GB segue como ótima opção de custo-benefício para 1080p, com VRAM generosa para a faixa.',
    proCons: { pros: ['12 GB de VRAM', 'Ótima para 1080p', 'Preço acessível'], contras: ['Geração anterior', 'Sem DLSS 3 (Frame Gen)'] },
    relacionados: ['nvidia-geforce-rtx-4060', 'amd-radeon-rx-6600', 'nvidia-geforce-rtx-3050'],
  },
  'nvidia-geforce-rtx-3050': {
    tier: 'entrada', anoLancamento: 2022, scoreCustoBeneficio: 70,
    descricao: 'A RTX 3050 é uma entrada para 1080p com suporte a ray tracing e DLSS, ideal para quem está começando.',
    proCons: { pros: ['Suporta ray tracing e DLSS', 'Baixo consumo', 'Boa para 1080p em médio/alto'], contras: ['Desempenho modesto', '8 GB / 128-bit'] },
    relacionados: ['amd-radeon-rx-6600', 'nvidia-geforce-rtx-3060', 'nvidia-geforce-gtx-1650'],
  },
  'amd-radeon-rx-6600': {
    tier: 'entrada', anoLancamento: 2021, scoreCustoBeneficio: 85,
    descricao: 'A RX 6600 é uma das melhores placas de entrada em custo por FPS para 1080p, com baixo consumo.',
    proCons: { pros: ['Excelente custo por FPS em 1080p', 'Baixo consumo (132W)', 'Preço atrativo'], contras: ['Ray tracing fraco', '8 GB / 128-bit'] },
    relacionados: ['nvidia-geforce-rtx-3050', 'nvidia-geforce-rtx-4060', 'nvidia-geforce-gtx-1650'],
  },
  'nvidia-geforce-gtx-1650': {
    tier: 'entrada', anoLancamento: 2019, scoreCustoBeneficio: 72,
    descricao: 'A GTX 1650 é a placa mais básica ainda recomendável: roda jogos leves e e-sports em 1080p, sem ray tracing, com baixíssimo consumo (não precisa de conector de energia).',
    proCons: { pros: ['Não precisa de conector PCIe (75W)', 'Barata', 'Boa para e-sports'], contras: ['Sem ray tracing/DLSS', 'Apenas 4 GB', 'Fraca em jogos pesados'] },
    relacionados: ['nvidia-geforce-rtx-3050', 'amd-radeon-rx-6600', 'nvidia-geforce-rtx-3060'],
  },
  'intel-core-i9-14900k': {
    tier: 'flagship', anoLancamento: 2023, scoreCustoBeneficio: 80,
    descricao: 'O Core i9-14900K é o topo da Intel 14ª geração, com 24 núcleos e boost de até 6.0 GHz — feras em produtividade pesada e jogos.',
    proCons: { pros: ['24 núcleos — líder em produtividade', 'Boost de 6.0 GHz', 'Ótimo para criação + jogos'], contras: ['Consumo e calor altos', 'Plataforma LGA1700 no fim'] },
    relacionados: ['intel-core-i7-14700k', 'amd-ryzen-9-7950x3d', 'amd-ryzen-7-9800x3d'],
  },
  'amd-ryzen-5-5600': {
    tier: 'mid-range', anoLancamento: 2022, scoreCustoBeneficio: 95,
    descricao: 'O Ryzen 5 5600 é um dos melhores custo-benefício para montar um PC gamer barato na plataforma AM4, que ainda tem placas e memórias acessíveis.',
    proCons: { pros: ['Excelente custo-benefício', 'Plataforma AM4 barata', 'Baixo consumo (65W)'], contras: ['AM4 sem grandes upgrades futuros', 'DDR4 apenas'] },
    relacionados: ['intel-core-i5-12400f', 'amd-ryzen-5-7600x', 'intel-core-i3-12100f'],
  },
  'intel-core-i5-12400f': {
    tier: 'mid-range', anoLancamento: 2022, scoreCustoBeneficio: 93,
    descricao: 'O i5-12400F entrega ótimo desempenho em jogos por um preço baixo, sendo um dos queridinhos para PCs gamer de entrada/médio.',
    proCons: { pros: ['Ótimo em jogos pelo preço', 'Eficiente (65W)', 'Suporta DDR4 e DDR5'], contras: ['Sem vídeo integrado (F)', '6 núcleos limitam produtividade pesada'] },
    relacionados: ['amd-ryzen-5-5600', 'intel-core-i3-12100f', 'amd-ryzen-5-7600x'],
  },
  'intel-core-i3-12100f': {
    tier: 'entrada', anoLancamento: 2022, scoreCustoBeneficio: 90,
    descricao: 'O i3-12100F é a porta de entrada para um PC gamer econômico, surpreendendo em jogos para um quad-core.',
    proCons: { pros: ['Muito barato', 'Bom em jogos para 4 núcleos', 'Baixo consumo'], contras: ['Apenas 4 núcleos', 'Sem vídeo integrado'] },
    relacionados: ['amd-ryzen-5-5600', 'intel-core-i5-12400f', 'amd-athlon-3000g'],
  },
  'amd-athlon-3000g': {
    tier: 'entrada', anoLancamento: 2019, scoreCustoBeneficio: 80,
    descricao: 'O Athlon 3000G é o processador mais básico com vídeo integrado, ideal para PCs de escritório, estudos e navegação sem placa de vídeo.',
    proCons: { pros: ['Vídeo integrado (não precisa de GPU)', 'Muito barato', 'Consumo mínimo (35W)'], contras: ['Fraco para jogos pesados', 'Apenas 2 núcleos'] },
    relacionados: ['intel-core-i3-12100f', 'amd-ryzen-5-5600', 'intel-core-i5-12400f'],
  },
  'crucial-t705-2tb': {
    tier: 'flagship', anoLancamento: 2024, scoreCustoBeneficio: 70,
    descricao: 'O Crucial T705 é um dos SSDs mais rápidos do mundo, com interface PCIe Gen5 e leitura de até 14.500 MB/s. Para entusiastas e cargas profissionais extremas.',
    proCons: { pros: ['Velocidade Gen5 extrema', 'Ótimo para cargas profissionais'], contras: ['Caro', 'Esquenta — precisa de dissipador', 'Ganho real pequeno em jogos'] },
    relacionados: ['samsung-990-pro-2tb', 'wd-black-sn850x-2tb', 'kingston-nv2-1tb'],
  },
  'kingston-a400-480gb': {
    tier: 'entrada', anoLancamento: 2017, scoreCustoBeneficio: 85,
    descricao: 'O Kingston A400 é um SSD SATA básico e baratíssimo — perfeito para dar sobrevida a PCs antigos saindo do HD mecânico.',
    proCons: { pros: ['Muito barato', 'Bem mais rápido que um HD', 'Ótimo para reviver PCs antigos'], contras: ['SATA (lento perto de NVMe)', 'Sem cache DRAM'] },
    relacionados: ['kingston-nv2-1tb', 'samsung-990-pro-2tb', 'wd-black-sn850x-2tb'],
  },
  'gskill-trident-z5-32gb-ddr5-6000': {
    tier: 'high-end', anoLancamento: 2023, scoreCustoBeneficio: 86,
    descricao: 'O kit G.Skill Trident Z5 32GB DDR5 6000 CL30 é a memória ideal para PCs AM5/Intel modernos, com a frequência e latência que extraem o máximo dos Ryzen 7000/9000.',
    proCons: { pros: ['6000 MHz CL30 — ideal para Ryzen', '32 GB para jogos e trabalho', 'Boa dissipação'], contras: ['Preço acima de DDR4', 'Exige placa DDR5'] },
    relacionados: ['corsair-vengeance-16gb-ddr5-5200', 'corsair-vengeance-lpx-16gb-ddr4-3200'],
  },
  'corsair-vengeance-16gb-ddr5-5200': {
    tier: 'mid-range', anoLancamento: 2022, scoreCustoBeneficio: 84,
    descricao: 'Kit Corsair Vengeance 16GB DDR5 5200 — entrada acessível no mundo DDR5 para quem está montando uma plataforma nova.',
    proCons: { pros: ['Entrada acessível no DDR5', 'Boa para jogos', 'Perfil XMP/EXPO'], contras: ['16 GB pode ficar curto', '5200 MHz é modesto para Ryzen'] },
    relacionados: ['gskill-trident-z5-32gb-ddr5-6000', 'corsair-vengeance-lpx-16gb-ddr4-3200'],
  },
  'corsair-vengeance-lpx-16gb-ddr4-3200': {
    tier: 'entrada', anoLancamento: 2019, scoreCustoBeneficio: 90,
    descricao: 'Kit Corsair Vengeance LPX 16GB DDR4 3200 CL16 — clássico custo-benefício para plataformas AM4 e Intel mais antigas.',
    proCons: { pros: ['Barato e confiável', 'CL16 — boa latência', 'Ideal para AM4'], contras: ['DDR4 (plataformas antigas)', 'Sem futuro em placas DDR5'] },
    relacionados: ['corsair-vengeance-16gb-ddr5-5200', 'gskill-trident-z5-32gb-ddr5-6000'],
  },
  'corsair-rm750e-750w': {
    tier: 'high-end', anoLancamento: 2022, scoreCustoBeneficio: 88,
    descricao: 'A Corsair RM750e é uma fonte 750W 80 Plus Gold totalmente modular e ATX 3.0 (com conector 12VHPWR) — ótima base confiável para PCs gamer de médio/alto desempenho.',
    proCons: { pros: ['80 Plus Gold + totalmente modular', 'ATX 3.0 / PCIe 5.0', '7 anos de garantia', 'Silenciosa'], contras: ['Sem RGB', 'Preço acima das bronze'] },
    relacionados: ['corsair-cx650-650w'],
  },
  'corsair-cx650-650w': {
    tier: 'mid-range', anoLancamento: 2021, scoreCustoBeneficio: 82,
    descricao: 'A Corsair CX650 é uma fonte 650W 80 Plus Bronze confiável e acessível, ideal para PCs de entrada e médios sem GPUs muito sedentas.',
    proCons: { pros: ['Boa e barata', '80 Plus Bronze confiável', '5 anos de garantia'], contras: ['Não modular', 'Sem conector PCIe 5.0'] },
    relacionados: ['corsair-rm750e-750w'],
  },
  'deepcool-ak620': {
    tier: 'high-end', anoLancamento: 2021, scoreCustoBeneficio: 90,
    descricao: 'O DeepCool AK620 é um air cooler de torre dupla que rivaliza com water coolers de 240mm, dissipando até 260W com baixo ruído — excelente para CPUs potentes sem o risco de um líquido.',
    proCons: { pros: ['Dissipação de water cooler 240mm', 'Silencioso', 'Sem risco de vazamento'], contras: ['Grande (160mm de altura)', 'Pode cobrir slots de RAM altos'] },
    relacionados: ['cooler-master-hyper-212'],
  },
  'cooler-master-hyper-212': {
    tier: 'mid-range', anoLancamento: 2020, scoreCustoBeneficio: 88,
    descricao: 'O lendário Cooler Master Hyper 212 é o cooler de entrada mais recomendado: dá conta de CPUs médias com ótimo preço.',
    proCons: { pros: ['Clássico custo-benefício', 'Boa refrigeração para a faixa', 'Fácil de instalar'], contras: ['Não dá conta de CPUs topo sob overclock', 'Sem RGB (versão base)'] },
    relacionados: ['deepcool-ak620'],
  },
  'lian-li-lancool-216': {
    tier: 'high-end', anoLancamento: 2022, scoreCustoBeneficio: 90,
    descricao: 'O Lian Li Lancool 216 é um dos melhores gabinetes em fluxo de ar e custo-benefício, com fans grandes inclusos e ótimo espaço para GPUs e water coolers.',
    proCons: { pros: ['Excelente fluxo de ar', 'Fans grandes inclusos', 'Ótimo espaço interno'], contras: ['Mid tower grande', 'Painel frontal mesh acumula poeira'] },
    relacionados: ['gamemax-vega'],
  },
  'gamemax-vega': {
    tier: 'entrada', anoLancamento: 2021, scoreCustoBeneficio: 84,
    descricao: 'O Gamemax Vega é um gabinete de entrada com vidro temperado e 4 fans ARGB inclusos — visual gamer por um preço baixo.',
    proCons: { pros: ['Barato com 4 fans ARGB', 'Vidro temperado', 'Visual gamer'], contras: ['Fluxo de ar mediano', 'Material mais simples'] },
    relacionados: ['lian-li-lancool-216'],
  },

  // ══════ FICHAS RICAS — catálogo expandido 2026-07 ══════

  // ── Processadores ──
  'amd-ryzen-9-9950x': {
    tier: 'flagship', anoLancamento: 2024, scoreCustoBeneficio: 82,
    descricao: 'O AMD Ryzen 9 9950X é o topo da linha Zen 5 para desktop, com 16 núcleos e 32 threads voltados a produtividade extrema — renderização, edição de vídeo, compilação e cargas multi-thread pesadas. Com boost de até 5.7 GHz na plataforma AM5, também joga muito bem, embora em jogos puros o 9800X3D leve vantagem pelo 3D V-Cache.',
    proCons: { pros: ['16 núcleos / 32 threads — monstro em produtividade', 'Boost altíssimo de 5.7 GHz', 'Plataforma AM5 com futuro', 'Eficiência boa para o desempenho'], contras: ['Caro', 'Consumo e calor elevados (170W)', 'Exige cooler robusto', 'Overkill para quem só joga'] },
    relacionados: ['amd-ryzen-7-9800x3d', 'intel-core-i9-14900k', 'amd-ryzen-7-9700x'],
  },
  'intel-core-ultra-7-265k': {
    tier: 'high-end', anoLancamento: 2024, scoreCustoBeneficio: 84,
    descricao: 'O Intel Core Ultra 7 265K é o representante da nova plataforma LGA1851 (Arrow Lake) com foco em eficiência e produtividade. Seus 20 núcleos entregam ótimo desempenho multi-thread com consumo mais controlado que a geração anterior. É uma boa escolha para quem equilibra jogos e trabalho, embora em jogos puros ainda perca para os X3D da AMD.',
    proCons: { pros: ['20 núcleos — forte em produtividade', 'Plataforma LGA1851 nova', 'Consumo mais eficiente que a 14ª geração', 'Bom para criadores de conteúdo'], contras: ['Exige placa Z890 e DDR5 (custo)', 'Perde para AMD X3D em jogos', 'Plataforma recente, ecossistema em amadurecimento'] },
    relacionados: ['intel-core-i7-14700k', 'amd-ryzen-7-9700x', 'amd-ryzen-9-9950x'],
  },
  'amd-ryzen-7-9700x': {
    tier: 'high-end', anoLancamento: 2024, scoreCustoBeneficio: 86,
    descricao: 'O AMD Ryzen 7 9700X traz a arquitetura Zen 5 para a faixa intermediária-alta com 8 núcleos, alto IPC e consumo baixíssimo de apenas 65W. É excelente para jogos e uso geral, rodando frio e silencioso. Para quem quer o máximo de FPS, o 9800X3D ainda é superior, mas o 9700X entrega ótimo equilíbrio entre jogos e produtividade.',
    proCons: { pros: ['Zen 5 com alto IPC', 'Apenas 65W — frio e eficiente', 'Ótimo em jogos e uso geral', 'Plataforma AM5 com upgrades futuros'], contras: ['Perde para o 9800X3D em jogos', 'Só 8 núcleos', 'Exige DDR5'] },
    relacionados: ['amd-ryzen-7-9800x3d', 'amd-ryzen-5-9600x', 'intel-core-i7-14700k'],
  },
  'amd-ryzen-5-9600x': {
    tier: 'mid-range', anoLancamento: 2024, scoreCustoBeneficio: 88,
    descricao: 'O AMD Ryzen 5 9600X é a porta de entrada do Zen 5 na plataforma AM5, com 6 núcleos, boost de 5.4 GHz e consumo de apenas 65W. Entrega desempenho de jogos muito próximo de processadores mais caros e é uma excelente base para um PC gamer que poderá receber upgrades futuros sem trocar a placa-mãe.',
    proCons: { pros: ['Excelente custo-benefício em jogos', 'Consumo baixíssimo (65W)', 'Plataforma AM5 com futuro', 'Roda frio e silencioso'], contras: ['Apenas 6 núcleos', 'Exige DDR5 (custo de plataforma)', 'Limitado em produtividade pesada'] },
    relacionados: ['intel-core-i5-14600k', 'amd-ryzen-7-9700x', 'amd-ryzen-5-7600x'],
  },

  // ── Placas de Vídeo ──
  'nvidia-geforce-rtx-4070': {
    tier: 'high-end', anoLancamento: 2023, scoreCustoBeneficio: 82,
    descricao: 'A GeForce RTX 4070 é uma das melhores placas para 1440p, com 12GB de VRAM, ótimo desempenho em ray tracing e o DLSS 3 com Frame Generation. Consome apenas 200W, dispensando fontes muito grandes. É a escolha equilibrada para quem quer jogar em 1440p com folga sem entrar na faixa premium.',
    proCons: { pros: ['Ótima para 1440p', '12GB de VRAM', 'DLSS 3 + Frame Generation', 'Consumo eficiente (200W)'], contras: ['Preço acima da faixa de entrada', 'Barramento de 192-bit', 'RT pesado ainda pede DLSS'] },
    relacionados: ['nvidia-geforce-rtx-4070-super', 'amd-radeon-rx-7700-xt', 'nvidia-geforce-rtx-4060-ti'],
  },
  'nvidia-geforce-rtx-4060-ti': {
    tier: 'mid-range', anoLancamento: 2023, scoreCustoBeneficio: 76,
    descricao: 'A GeForce RTX 4060 Ti fica entre a RTX 4060 e a RTX 4070, entregando um pouco mais de desempenho em 1080p e 1440p leve. Tem o DLSS 3 e bom ray tracing, mas os 8GB de VRAM e o barramento de 128-bit limitam em jogos mais pesados. Vale quando o preço está próximo da RTX 4060.',
    proCons: { pros: ['Melhor que a RTX 4060', 'DLSS 3 + Frame Generation', 'Ótima em 1080p, ok em 1440p', 'Consumo baixo (160W)'], contras: ['Apenas 8GB de VRAM', 'Barramento estreito (128-bit)', 'Custo-benefício discutível vs 4060'] },
    relacionados: ['nvidia-geforce-rtx-4060', 'nvidia-geforce-rtx-4070', 'amd-radeon-rx-7700-xt'],
  },
  'amd-radeon-rx-7700-xt': {
    tier: 'high-end', anoLancamento: 2023, scoreCustoBeneficio: 80,
    descricao: 'A Radeon RX 7700 XT é uma ótima opção AMD para 1440p, com 12GB de VRAM e forte desempenho em rasterização. Costuma custar menos que a RTX 4070 e entregar desempenho parecido em jogos sem ray tracing. Perde em ray tracing e no upscaling (FSR vs DLSS), mas compensa no preço.',
    proCons: { pros: ['Ótima para 1440p', '12GB de VRAM', 'Bom preço vs concorrência NVIDIA', 'Forte em rasterização'], contras: ['Ray tracing inferior à NVIDIA', 'FSR ainda atrás do DLSS', 'Consumo maior (245W)'] },
    relacionados: ['nvidia-geforce-rtx-4070', 'amd-radeon-rx-7800-xt', 'nvidia-geforce-rtx-4060-ti'],
  },
  'amd-radeon-rx-7900-xt': {
    tier: 'flagship', anoLancamento: 2022, scoreCustoBeneficio: 84,
    descricao: 'A Radeon RX 7900 XT é uma placa de alto desempenho para 1440p e 4K, com generosos 20GB de VRAM. Entrega performance excelente em rasterização, rivalizando com placas NVIDIA mais caras, e a VRAM enorme garante folga para jogos pesados e criação de conteúdo. Ray tracing é seu ponto mais fraco frente à NVIDIA.',
    proCons: { pros: ['20GB de VRAM — muita folga', 'Ótima para 1440p e 4K', 'Forte em rasterização', 'Bom preço por desempenho'], contras: ['Ray tracing atrás da RTX 4080', 'Consumo alto (300W)', 'FSR ainda inferior ao DLSS'] },
    relacionados: ['amd-radeon-rx-7900-xtx', 'nvidia-geforce-rtx-4080-super', 'amd-radeon-rx-7800-xt'],
  },

  // ── SSDs ──
  'samsung-990-pro-1tb': {
    tier: 'high-end', anoLancamento: 2023, scoreCustoBeneficio: 86,
    descricao: 'O Samsung 990 Pro 1TB é um dos melhores SSDs NVMe Gen4 do mercado, com velocidades próximas do limite da interface, cache DRAM dedicado e confiabilidade lendária da Samsung. É perfeito para jogos com DirectStorage e cargas exigentes, sem o custo e o calor de um Gen5. Ótima escolha premium na capacidade de 1TB.',
    proCons: { pros: ['Um dos Gen4 mais rápidos', 'Cache DRAM dedicado', 'Confiabilidade Samsung', 'Software Magician excelente'], contras: ['Mais caro que Gen4 de entrada', 'Versão sem dissipador esquenta', '1TB pode ser pouco para bibliotecas grandes'] },
    relacionados: ['wd-black-sn850x-2tb', 'samsung-990-pro-2tb', 'kingston-nv3-2tb'],
  },
  'kingston-nv3-2tb': {
    tier: 'mid-range', anoLancamento: 2024, scoreCustoBeneficio: 88,
    descricao: 'O Kingston NV3 2TB é um SSD NVMe Gen4 de custo-benefício com bastante espaço. Não tem cache DRAM e não é o mais rápido, mas na prática dos jogos a diferença para modelos premium é imperceptível. É a escolha inteligente para quem quer 2TB de armazenamento rápido gastando pouco.',
    proCons: { pros: ['2TB por bom preço', 'Rápido o suficiente para jogos', 'Marca confiável', 'Gen4 moderno'], contras: ['Sem cache DRAM', 'Velocidade abaixo dos topo de linha', 'Desempenho cai em transferências longas'] },
    relacionados: ['samsung-990-pro-1tb', 'crucial-p3-plus-1tb', 'wd-black-sn850x-2tb'],
  },
  'crucial-p3-plus-1tb': {
    tier: 'entrada', anoLancamento: 2022, scoreCustoBeneficio: 85,
    descricao: 'O Crucial P3 Plus 1TB é um NVMe Gen4 de entrada com ótimo custo por gigabyte. Sem cache DRAM, mas com desempenho mais que suficiente para instalar o sistema e jogos com carregamento rápido. Uma das formas mais baratas de entrar no mundo Gen4 com 1TB.',
    proCons: { pros: ['Ótimo preço por 1TB', 'Gen4 com bom carregamento', 'Marca Crucial (Micron)', 'Baixo consumo'], contras: ['Sem cache DRAM', 'Não é dos mais rápidos', 'Desempenho cai com o SSD cheio'] },
    relacionados: ['wd-blue-sn580-1tb', 'kingston-nv3-2tb', 'samsung-980-1tb'],
  },
  'wd-blue-sn580-1tb': {
    tier: 'entrada', anoLancamento: 2023, scoreCustoBeneficio: 84,
    descricao: 'O WD Blue SN580 1TB é um NVMe Gen4 de entrada equilibrado, com velocidades de leitura e gravação parelhas e bom desempenho no dia a dia. É uma opção confiável e econômica para quem quer sair do SATA e ganhar carregamento rápido em jogos e no sistema.',
    proCons: { pros: ['Bom equilíbrio leitura/gravação', 'Confiabilidade WD', 'Preço acessível', 'Baixo consumo'], contras: ['Sem cache DRAM', 'Não é o mais veloz do segmento', 'Sem dissipador incluso'] },
    relacionados: ['crucial-p3-plus-1tb', 'samsung-980-1tb', 'kingston-nv3-2tb'],
  },
  'samsung-980-1tb': {
    tier: 'entrada', anoLancamento: 2021, scoreCustoBeneficio: 80,
    descricao: 'O Samsung 980 1TB é um NVMe Gen3 econômico e confiável. Mesmo sendo Gen3, é muito mais rápido que qualquer SSD SATA e entrega carregamentos rápidos em jogos. Boa opção para placas que só têm slot Gen3 ou para quem quer o nome Samsung pagando menos.',
    proCons: { pros: ['Confiabilidade Samsung', 'Muito mais rápido que SATA', 'Bom preço', 'Software Magician'], contras: ['Gen3 (mais lento que Gen4)', 'Sem cache DRAM', 'Sem ganho em placas Gen4'] },
    relacionados: ['wd-blue-sn580-1tb', 'crucial-p3-plus-1tb', 'kingston-a400-480gb'],
  },

  // ── Monitores ──
  'samsung-odyssey-oled-g6': {
    tier: 'flagship', anoLancamento: 2025, scoreCustoBeneficio: 82,
    descricao: 'O Samsung Odyssey OLED G6 27" é um monitor gamer de altíssimo nível, unindo painel OLED com impressionantes 360Hz e resposta de 0,03ms. Entrega pretos absolutos, cores vibrantes e fluidez extrema — ideal para jogadores competitivos que também querem qualidade de imagem premium. É um dos monitores mais desejados de 2026.',
    proCons: { pros: ['OLED com 360Hz — fluidez extrema', 'Pretos absolutos e cores perfeitas', 'Resposta de 0,03ms', 'Top para competitivo e imersão'], contras: ['Preço premium', 'Risco de burn-in em uso estático', 'Brilho menor que mini-LED em HDR'] },
    relacionados: ['asus-rog-swift-pg27aqdm', 'lg-ultragear-27gp850', 'samsung-odyssey-g7'],
  },
  'lg-ultragear-27gp850': {
    tier: 'high-end', anoLancamento: 2021, scoreCustoBeneficio: 87,
    descricao: 'O LG UltraGear 27GP850 é um dos monitores 1440p mais recomendados em custo-benefício. Com painel Nano IPS de 27", 165Hz (overclock até 180Hz) e cores excelentes, é a escolha ideal para quem quer subir de 1080p para 1440p sem gastar o preço de um OLED. Ótimo tanto para jogos quanto para trabalho.',
    proCons: { pros: ['1440p 165Hz com ótimo preço', 'Nano IPS com cores precisas', 'Overclock até 180Hz', 'Ótimo para jogos e trabalho'], contras: ['Sem HDR real de destaque', 'Pretos típicos de IPS', 'Brilho mediano em HDR'] },
    relacionados: ['dell-s2721dgf', 'gigabyte-m27q', 'samsung-odyssey-g7'],
  },
  'dell-s2721dgf': {
    tier: 'high-end', anoLancamento: 2020, scoreCustoBeneficio: 85,
    descricao: 'O Dell S2721DGF é um monitor 1440p 165Hz IPS muito respeitado, com excelente fidelidade de cores, ampla cobertura de gamut e construção robusta com stand ajustável completo. É uma opção sólida tanto para gamers quanto para quem trabalha com imagem e quer precisão de cor.',
    proCons: { pros: ['IPS 1440p 165Hz de qualidade', 'Ótima cobertura de cores', 'Stand com ajuste completo', 'Construção robusta'], contras: ['Preço um pouco acima da média', 'HDR limitado', 'Design mais sóbrio que gamer'] },
    relacionados: ['lg-ultragear-27gp850', 'gigabyte-m27q', 'asus-rog-swift-pg27aqdm'],
  },
  'gigabyte-m27q': {
    tier: 'mid-range', anoLancamento: 2021, scoreCustoBeneficio: 86,
    descricao: 'O Gigabyte M27Q é um monitor 1440p 170Hz com ótimo custo-benefício e um diferencial: um KVM embutido que permite controlar dois computadores com um só teclado e mouse. Painel rápido de 0,5ms e boas cores fazem dele uma escolha popular para quem quer 1440p de alta taxa sem pagar caro.',
    proCons: { pros: ['1440p 170Hz por bom preço', 'KVM embutido (2 PCs, 1 setup)', 'Resposta rápida (0,5ms)', 'Boas cores'], contras: ['Subpixel BGR pode afetar texto', 'HDR básico', 'Brilho mediano'] },
    relacionados: ['lg-ultragear-27gp850', 'dell-s2721dgf', 'samsung-odyssey-g7'],
  },
  'aoc-24g4': {
    tier: 'entrada', anoLancamento: 2023, scoreCustoBeneficio: 88,
    descricao: 'O AOC Gaming 24G4 24" é um excelente monitor de entrada 1080p com painel IPS e 180Hz. Entrega cores boas, alta fluidez e resposta rápida por um preço muito acessível — ideal para quem monta o primeiro setup gamer ou quer um monitor competitivo sem gastar muito.',
    proCons: { pros: ['1080p 180Hz muito acessível', 'Painel IPS com boas cores', 'Ótimo para FPS competitivo', 'Ótimo custo-benefício'], contras: ['Resolução 1080p', 'Sem HDR relevante', 'Stand simples'] },
    relacionados: ['aoc-24g2sp', 'lg-ultragear-27gn650', 'gigabyte-m27q'],
  },
  'samsung-odyssey-g7': {
    tier: 'high-end', anoLancamento: 2020, scoreCustoBeneficio: 84,
    descricao: 'O Samsung Odyssey G7 27" é um monitor gamer curvo (1000R) VA de 1440p e 240Hz. O alto contraste do painel VA faz diferença em jogos escuros, e a curvatura acentuada cria imersão real. Continua sendo uma ótima opção mid-range para quem quer 1440p em alta taxa com pretos profundos.',
    proCons: { pros: ['VA 1440p 240Hz', 'Alto contraste e pretos profundos', 'Curvatura 1000R imersiva', 'Ótimo para jogos escuros'], contras: ['Curvatura agressiva não agrada a todos', 'Ghosting possível em cenas rápidas', 'Ângulos de visão inferiores a IPS'] },
    relacionados: ['lg-ultragear-27gp850', 'dell-s2721dgf', 'asus-rog-swift-pg27aqdm'],
  },
  'aoc-24g2sp': {
    tier: 'entrada', anoLancamento: 2021, scoreCustoBeneficio: 89,
    descricao: 'O AOC 24G2SP 24" é um clássico do custo-benefício: painel IPS 1080p com 165Hz, cores boas e stand com ajuste de altura. É uma das melhores portas de entrada para o mundo gamer de alta taxa de atualização, entregando o essencial por um preço baixo.',
    proCons: { pros: ['IPS 1080p 165Hz barato', 'Stand com ajuste de altura', 'Boas cores para a faixa', 'Ótimo primeiro monitor gamer'], contras: ['Resolução 1080p', 'Sem HDR real', 'Brilho mediano'] },
    relacionados: ['aoc-24g4', 'lg-ultragear-27gn650', 'gigabyte-m27q'],
  },

  // ── Memórias RAM ──
  'corsair-vengeance-rgb-32gb-ddr5-6000': {
    tier: 'high-end', anoLancamento: 2023, scoreCustoBeneficio: 87,
    descricao: 'O kit Corsair Vengeance RGB 32GB DDR5 6000MHz CL30 é ideal para plataformas AM5, atingindo exatamente o sweet spot recomendado pela AMD. Além do desempenho de ponta, tem iluminação RGB para quem quer visual. Os 32GB dão folga para jogos pesados, multitarefa e criação de conteúdo.',
    proCons: { pros: ['6000MHz CL30 — sweet spot AM5', '32GB para folga total', 'RGB personalizável', 'Perfil EXPO/XMP fácil'], contras: ['Mais caro que kits sem RGB', 'RGB exige software', 'Overkill para uso básico'] },
    relacionados: ['gskill-trident-z5-32gb-ddr5-6000', 'corsair-vengeance-32gb-ddr5-6400', 'kingston-fury-beast-32gb-ddr5-6000'],
  },
  'corsair-vengeance-32gb-ddr5-6400': {
    tier: 'high-end', anoLancamento: 2023, scoreCustoBeneficio: 86,
    descricao: 'O Corsair Vengeance 32GB DDR5 6400MHz é um kit rápido para quem busca alta frequência em plataformas Intel e AM5 bem configuradas. Com 32GB e CL32, entrega desempenho de ponta em jogos e produtividade, com o design discreto e a confiabilidade tradicional da Corsair.',
    proCons: { pros: ['Alta frequência (6400MHz)', '32GB para multitarefa pesada', 'Design discreto', 'Confiabilidade Corsair'], contras: ['6400MHz nem sempre estável em todo AM5', 'Preço acima da média', 'Precisa ativar XMP/EXPO'] },
    relacionados: ['corsair-vengeance-rgb-32gb-ddr5-6000', 'gskill-ripjaws-s5-32gb-ddr5-6000', 'kingston-fury-beast-32gb-ddr5-6000'],
  },
  'kingston-fury-beast-32gb-ddr5-6000': {
    tier: 'mid-range', anoLancamento: 2023, scoreCustoBeneficio: 88,
    descricao: 'O Kingston Fury Beast 32GB DDR5 6000MHz é um kit de ótimo custo-benefício para builds novos. Com 32GB e frequência de 6000MHz, atende jogos pesados e multitarefa com sobra, por um preço mais acessível que os concorrentes premium. Escolha segura para AM5 e Intel recentes.',
    proCons: { pros: ['32GB 6000MHz por bom preço', 'Ótimo custo-benefício', 'Confiabilidade Kingston', 'Perfil XMP/EXPO'], contras: ['CL36 (latência maior)', 'Sem RGB na versão base', 'Design simples'] },
    relacionados: ['gskill-ripjaws-s5-32gb-ddr5-6000', 'corsair-vengeance-rgb-32gb-ddr5-6000', 'corsair-vengeance-32gb-ddr5-6400'],
  },
  'gskill-ripjaws-s5-32gb-ddr5-6000': {
    tier: 'high-end', anoLancamento: 2022, scoreCustoBeneficio: 89,
    descricao: 'O G.Skill Ripjaws S5 32GB DDR5 6000MHz CL30 é um dos kits favoritos para AM5, com o perfil ideal de 6000MHz CL30 e um dissipador de perfil baixo que garante compatibilidade com coolers grandes. Excelente equilíbrio entre desempenho, preço e compatibilidade.',
    proCons: { pros: ['6000MHz CL30 — ideal para AM5', 'Perfil baixo (cabe sob coolers grandes)', 'Ótimo custo-benefício', 'Alta estabilidade'], contras: ['Sem RGB', 'Visual discreto', 'Disponibilidade varia'] },
    relacionados: ['gskill-trident-z5-32gb-ddr5-6000', 'kingston-fury-beast-32gb-ddr5-6000', 'corsair-vengeance-rgb-32gb-ddr5-6000'],
  },
  'kingston-fury-beast-16gb-ddr4-3600': {
    tier: 'mid-range', anoLancamento: 2021, scoreCustoBeneficio: 85,
    descricao: 'O Kingston Fury Beast 16GB DDR4 3600MHz é um kit ideal para plataformas DDR4 (AM4 e Intel LGA1700 DDR4). Com 3600MHz e boa latência, é a memória perfeita para builds de custo-benefício que reaproveitam plataforma DDR4, entregando ótimo desempenho em jogos.',
    proCons: { pros: ['3600MHz ideal para AM4', 'Ótimo para builds DDR4', 'Confiabilidade Kingston', 'Bom preço'], contras: ['DDR4 (plataformas mais antigas)', '16GB pode ser pouco para multitarefa pesada', 'Sem RGB na base'] },
    relacionados: ['corsair-vengeance-lpx-16gb-ddr4-3200', 'kingston-fury-beast-16gb-ddr5-5600', 'kingston-fury-beast-32gb-ddr5-6000'],
  },
  'kingston-fury-beast-16gb-ddr5-5600': {
    tier: 'entrada', anoLancamento: 2022, scoreCustoBeneficio: 82,
    descricao: 'O Kingston Fury Beast 16GB DDR5 5600MHz é um kit DDR5 de entrada para quem monta um PC novo com orçamento controlado. Os 16GB atendem a maioria dos jogos, e a base DDR5 permite subir para 32GB no futuro. Boa opção econômica para Intel e AM5.',
    proCons: { pros: ['DDR5 acessível', '16GB para a maioria dos jogos', 'Base para upgrade futuro', 'Confiabilidade Kingston'], contras: ['16GB começa a apertar em 2026', '5600MHz abaixo do sweet spot AM5', 'CL36'] },
    relacionados: ['corsair-vengeance-16gb-ddr5-5200', 'kingston-fury-beast-32gb-ddr5-6000', 'gskill-ripjaws-s5-32gb-ddr5-6000'],
  },

  // ── Fontes ──
  'corsair-rm850e-850w': {
    tier: 'high-end', anoLancamento: 2023, scoreCustoBeneficio: 88,
    descricao: 'A Corsair RM850e 850W é uma fonte 80 Plus Gold totalmente modular com conector PCIe 5.0 (ATX 3.0), ideal para placas de vídeo modernas e builds potentes. Silenciosa, eficiente e com 7 anos de garantia, entrega tranquilidade para PCs com GPUs de alto consumo.',
    proCons: { pros: ['850W Gold para GPUs potentes', 'Totalmente modular', 'Conector PCIe 5.0 (ATX 3.0)', '7 anos de garantia'], contras: ['Preço acima de fontes básicas', 'Overkill para PCs de entrada'] },
    relacionados: ['corsair-rm750e-750w', 'msi-mag-a850gl-850w', 'corsair-hx1000-1000w'],
  },
  'seasonic-focus-gx-750': {
    tier: 'high-end', anoLancamento: 2021, scoreCustoBeneficio: 89,
    descricao: 'A Seasonic Focus GX-750 750W é uma das fontes mais respeitadas do mercado, 80 Plus Gold, totalmente modular e com impressionantes 10 anos de garantia. A Seasonic é referência em qualidade de fabricação, tornando esta fonte uma escolha extremamente confiável para qualquer build.',
    proCons: { pros: ['Qualidade Seasonic (referência)', '10 anos de garantia', 'Totalmente modular', 'Silenciosa e eficiente'], contras: ['Sem conector PCIe 5.0 nativo', 'Preço um pouco acima', 'Cabos um pouco rígidos'] },
    relacionados: ['corsair-rm750e-750w', 'msi-mag-a850gl-850w', 'corsair-rm650e-650w'],
  },
  'corsair-hx1000-1000w': {
    tier: 'flagship', anoLancamento: 2021, scoreCustoBeneficio: 82,
    descricao: 'A Corsair HX1000 1000W é uma fonte premium 80 Plus Platinum, totalmente modular, para builds high-end com placas como RTX 4090/5090. Extremamente eficiente e silenciosa, com 10 anos de garantia, é a escolha para quem monta um PC topo de linha sem se preocupar com energia.',
    proCons: { pros: ['1000W para GPUs topo de linha', '80 Plus Platinum (máxima eficiência)', 'PCIe 5.0 e 10 anos de garantia', 'Silenciosa mesmo sob carga'], contras: ['Cara', 'Overkill para a maioria dos PCs', 'Grande — confira o espaço no gabinete'] },
    relacionados: ['corsair-rm850e-850w', 'msi-mag-a850gl-850w', 'corsair-rm750e-750w'],
  },
  'xpg-pylon-550w': {
    tier: 'entrada', anoLancamento: 2021, scoreCustoBeneficio: 80,
    descricao: 'A XPG Pylon 550W é uma fonte de entrada 80 Plus Bronze para PCs econômicos com GPUs de baixo consumo (RTX 4060, RX 7600). Não é modular, mas entrega a potência certificada com segurança e um bom preço — muito melhor que fontes genéricas sem selo.',
    proCons: { pros: ['80 Plus Bronze certificada', 'Ótima para PCs de entrada', 'Preço acessível', 'Marca confiável (ADATA/XPG)'], contras: ['Não é modular', 'Sem conector PCIe 5.0', '550W limita upgrades de GPU'] },
    relacionados: ['corsair-cx650-650w', 'corsair-rm650e-650w', 'corsair-rm750e-750w'],
  },
  'corsair-rm650e-650w': {
    tier: 'mid-range', anoLancamento: 2023, scoreCustoBeneficio: 87,
    descricao: 'A Corsair RM650e 650W é uma fonte 80 Plus Gold totalmente modular com conector PCIe 5.0, ideal para PCs de custo-benefício com GPUs como RTX 4060 e RX 7600. Silenciosa, eficiente e com 7 anos de garantia — o ponto ideal para a maioria dos builds mid-range.',
    proCons: { pros: ['650W Gold para builds mid-range', 'Totalmente modular', 'Conector PCIe 5.0 (ATX 3.0)', '7 anos de garantia'], contras: ['650W limita GPUs muito potentes', 'Preço acima de fontes Bronze'] },
    relacionados: ['corsair-rm750e-750w', 'corsair-cx650-650w', 'xpg-pylon-550w'],
  },
  'msi-mag-a850gl-850w': {
    tier: 'high-end', anoLancamento: 2023, scoreCustoBeneficio: 86,
    descricao: 'A MSI MAG A850GL 850W é uma fonte 80 Plus Gold totalmente modular com conector PCIe 5.0 (ATX 3.0) e 10 anos de garantia. Entrega potência de sobra para builds com GPUs potentes, com boa eficiência e um preço competitivo frente às concorrentes.',
    proCons: { pros: ['850W Gold com PCIe 5.0', 'Totalmente modular', '10 anos de garantia', 'Preço competitivo'], contras: ['Marca menos tradicional em fontes que Corsair/Seasonic', 'Overkill para PCs de entrada'] },
    relacionados: ['corsair-rm850e-850w', 'seasonic-focus-gx-750', 'corsair-rm750e-750w'],
  },

  // ── Coolers ──
  'deepcool-ak400': {
    tier: 'mid-range', anoLancamento: 2022, scoreCustoBeneficio: 90,
    descricao: 'O DeepCool AK400 é um cooler a ar de torre single com ótimo custo-benefício, dando conta de processadores i5/Ryzen 5 e 7 com folga e baixo ruído. É a troca perfeita para o cooler stock, melhorando bastante as temperaturas sem gastar muito.',
    proCons: { pros: ['Ótimo custo-benefício', 'Dá conta de i5/Ryzen 5 e 7', 'Silencioso', 'Fácil de instalar'], contras: ['Não recomendado para i9/Ryzen 9 sob carga', 'Torre single (menos que torre dupla)', 'Sem RGB na versão base'] },
    relacionados: ['thermalright-peerless-assassin-120-se', 'cooler-master-hyper-212', 'deepcool-ak620'],
  },
  'thermalright-peerless-assassin-120-se': {
    tier: 'high-end', anoLancamento: 2022, scoreCustoBeneficio: 96,
    descricao: 'O Thermalright Peerless Assassin 120 SE virou fenômeno mundial por resfriar como coolers premium que custam o triplo. Com torre dupla e dois fans, dá conta até de CPUs potentes com baixo ruído. É provavelmente o melhor custo-benefício em refrigeração a ar do mercado.',
    proCons: { pros: ['Desempenho de cooler premium', 'Preço imbatível', 'Torre dupla silenciosa', 'Dá conta de CPUs potentes'], contras: ['Grande — confira folga sobre a RAM', 'Sem RGB na versão base', 'Instalação exige atenção'] },
    relacionados: ['deepcool-ak620', 'deepcool-ak400', 'noctua-nh-d15'],
  },
  'noctua-nh-d15': {
    tier: 'flagship', anoLancamento: 2014, scoreCustoBeneficio: 85,
    descricao: 'O Noctua NH-D15 é uma lenda entre os coolers a ar: torre dupla enorme que rivaliza com water coolers de 280mm, com o famoso silêncio e a qualidade de fabricação Noctua. Dá conta das CPUs mais potentes e vem com garantia longa e excelente durabilidade.',
    proCons: { pros: ['Desempenho de water cooler 280mm', 'Extremamente silencioso', 'Qualidade e durabilidade Noctua', 'Sem risco de vazamento'], contras: ['Muito grande (165mm)', 'Cor bege polêmica (versão clássica)', 'Pode cobrir RAM alta', 'Preço premium para ar'] },
    relacionados: ['thermalright-peerless-assassin-120-se', 'deepcool-ak620', 'lian-li-galahad-ii-360'],
  },
  'deepcool-lt720-360mm': {
    tier: 'high-end', anoLancamento: 2022, scoreCustoBeneficio: 88,
    descricao: 'O DeepCool LT720 360mm é um water cooler AIO de alto desempenho, com radiador grande capaz de domar até os processadores mais quentes (i9/Ryzen 9). A bomba potente e o visual clean fazem dele uma ótima escolha para builds high-end que valorizam estética.',
    proCons: { pros: ['Radiador 360mm — resfria CPUs potentes', 'Ótimo para i9/Ryzen 9', 'Visual clean', 'Bomba potente'], contras: ['Exige gabinete com suporte a 360mm', 'Manutenção/vida útil da bomba', 'Mais caro que cooler a ar'] },
    relacionados: ['lian-li-galahad-ii-360', 'arctic-liquid-freezer-iii-240', 'noctua-nh-d15'],
  },
  'arctic-liquid-freezer-iii-240': {
    tier: 'high-end', anoLancamento: 2024, scoreCustoBeneficio: 92,
    descricao: 'O Arctic Liquid Freezer III 240 é um water cooler AIO com fama de entregar desempenho acima do esperado para 240mm, muitas vezes rivalizando com 360mm de concorrentes. Ótimo custo-benefício, silencioso e com longa garantia — uma das melhores escolhas em refrigeração líquida.',
    proCons: { pros: ['Desempenho acima do esperado para 240mm', 'Excelente custo-benefício', 'Silencioso', 'Longa garantia Arctic'], contras: ['Sem tela/RGB chamativo', 'Ainda exige manutenção de AIO', 'Estética discreta'] },
    relacionados: ['deepcool-lt720-360mm', 'lian-li-galahad-ii-360', 'deepcool-ak620'],
  },
  'lian-li-galahad-ii-360': {
    tier: 'flagship', anoLancamento: 2023, scoreCustoBeneficio: 84,
    descricao: 'O Lian Li Galahad II LCD 360mm é um water cooler AIO premium com radiador de 360mm e tela LCD na bomba para exibir temperaturas, GIFs e personalizações. Une alto desempenho de resfriamento com o visual mais chamativo do mercado — ideal para builds show.',
    proCons: { pros: ['Radiador 360mm de alto desempenho', 'Tela LCD personalizável', 'Visual premium para builds show', 'Qualidade Lian Li'], contras: ['Preço elevado', 'Exige gabinete grande', 'Configurar a tela dá trabalho'] },
    relacionados: ['deepcool-lt720-360mm', 'arctic-liquid-freezer-iii-240', 'noctua-nh-d15'],
  },

  // ── Gabinetes ──
  'corsair-4000d-airflow': {
    tier: 'high-end', anoLancamento: 2020, scoreCustoBeneficio: 90,
    descricao: 'O Corsair 4000D Airflow é um dos gabinetes mais recomendados do mundo, com excelente fluxo de ar, ótimo gerenciamento de cabos e espaço generoso para GPUs e water coolers. Construção de qualidade e visual limpo fazem dele uma escolha segura para qualquer build.',
    proCons: { pros: ['Excelente fluxo de ar', 'Ótimo gerenciamento de cabos', 'Espaço amplo para GPU e AIO', 'Construção de qualidade'], contras: ['Apenas 2 fans inclusos', 'Visual sóbrio (pouco gamer)', 'Sem RGB'] },
    relacionados: ['nzxt-h7-flow', 'lian-li-lancool-207', 'lian-li-lancool-216'],
  },
  'nzxt-h7-flow': {
    tier: 'high-end', anoLancamento: 2022, scoreCustoBeneficio: 86,
    descricao: 'O NZXT H7 Flow combina o visual clean característico da NZXT com um painel frontal perfurado que melhora bastante o fluxo de ar. Espaçoso, com ótimo espaço para gerenciamento de cabos e suporte a GPUs longas e radiadores grandes. Escolha popular para builds elegantes.',
    proCons: { pros: ['Visual clean e elegante', 'Bom fluxo de ar (painel Flow)', 'Ótimo cable management', 'Suporta GPUs longas e AIO 360'], contras: ['Apenas 2 fans inclusos', 'Preço acima da média', 'Sem RGB na base'] },
    relacionados: ['corsair-4000d-airflow', 'lian-li-o11-dynamic-evo', 'lian-li-lancool-207'],
  },
  'lian-li-o11-dynamic-evo': {
    tier: 'flagship', anoLancamento: 2022, scoreCustoBeneficio: 85,
    descricao: 'O Lian Li O11 Dynamic EVO é o gabinete favorito para builds de exposição e custom water cooling, com painéis de vidro duplos, layout flexível e enorme suporte a radiadores. É o queridinho de quem monta setups impressionantes, embora não venha com fans inclusos.',
    proCons: { pros: ['Visual premium com vidro duplo', 'Layout flexível (montagem versátil)', 'Enorme suporte a radiadores', 'Ideal para custom water cooling'], contras: ['Não vem com fans', 'Fluxo de ar depende dos fans que você comprar', 'Preço elevado'] },
    relacionados: ['nzxt-h7-flow', 'corsair-4000d-airflow', 'lian-li-lancool-207'],
  },
  'cooler-master-nr200p': {
    tier: 'high-end', anoLancamento: 2020, scoreCustoBeneficio: 87,
    descricao: 'O Cooler Master NR200P é um dos gabinetes Mini-ITX mais amados, permitindo montar um PC potente e compacto sem abrir mão de GPUs grandes e boa refrigeração. Ideal para quem quer economizar espaço na mesa com um PC pequeno mas capaz.',
    proCons: { pros: ['Compacto Mini-ITX', 'Suporta GPUs grandes para o tamanho', 'Boa refrigeração para o formato', 'Acompanha painel extra de vidro'], contras: ['Exige placa Mini-ITX (mais cara)', 'Montagem mais trabalhosa', 'Espaço apertado para cabos'] },
    relacionados: ['lian-li-lancool-207', 'corsair-4000d-airflow', 'montech-air-903-max'],
  },
  'lian-li-lancool-207': {
    tier: 'high-end', anoLancamento: 2024, scoreCustoBeneficio: 89,
    descricao: 'O Lian Li Lancool 207 é a evolução da linha custo-benefício da Lian Li, com fans de 140mm inclusos, ótimo fluxo de ar e um design que prioriza refrigeração da GPU. Excelente espaço interno e organização por um preço muito competitivo.',
    proCons: { pros: ['Fans 140mm inclusos', 'Ótimo fluxo de ar para a GPU', 'Bom espaço e organização', 'Preço competitivo'], contras: ['Design mais funcional que chamativo', 'Painel mesh acumula poeira', 'Mid tower grande'] },
    relacionados: ['lian-li-lancool-216', 'corsair-4000d-airflow', 'montech-air-903-max'],
  },
  'montech-air-903-max': {
    tier: 'mid-range', anoLancamento: 2023, scoreCustoBeneficio: 90,
    descricao: 'O Montech Air 903 Max é um gabinete de custo-benefício imbatível: vem com 4 fans de 140mm ARGB inclusos e um painel frontal mesh que garante excelente fluxo de ar. Espaço de sobra para GPUs longas e radiadores, com visual gamer por um preço baixo.',
    proCons: { pros: ['4 fans 140mm ARGB inclusos', 'Excelente fluxo de ar', 'Suporta GPUs longas', 'Preço muito acessível'], contras: ['Material mais simples que premium', 'Cable management básico', 'Acabamento nível custo-benefício'] },
    relacionados: ['lian-li-lancool-207', 'gamemax-vega', 'corsair-4000d-airflow'],
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

// Nome do tipo de produto no singular (para cabeçalhos/etiquetas).
export const TIPO_SINGULAR: Record<string, string> = {
  processadores: 'Processador',
  gpus: 'Placa de Vídeo',
  monitores: 'Monitor',
  memorias: 'Memória RAM',
  ssds: 'SSD',
  coolers: 'Cooler',
  fontes: 'Fonte',
  gabinetes: 'Gabinete',
  mouses: 'Mouse',
  teclados: 'Teclado',
  headsets: 'Headset',
}

export function tipoProduto(categoria: string): string {
  return TIPO_SINGULAR[categoria] ?? categoria
}
