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
