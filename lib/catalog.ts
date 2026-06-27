// Catálogo curado de produtos populares por categoria.
// Usado na comparação por lista clicável (/catalogo).
// Para crescer: basta adicionar itens nas listas abaixo.

export interface CatalogItem {
  /** Nome exato do produto (usado na comparação por IA). */
  name: string;
  /** Specs curtas para mostrar no card (2 a 4 destaques). */
  specs: string[];
}

export interface CatalogCategory {
  id: string;
  label: string;
  icon: string;
  items: CatalogItem[];
}

export const CATALOG: CatalogCategory[] = [
  {
    id: "gpu",
    label: "Placas de Vídeo",
    icon: "🎮",
    items: [
      { name: "NVIDIA GeForce RTX 5090", specs: ["32 GB GDDR7", "512-bit", "PCIe 5.0"] },
      { name: "NVIDIA GeForce RTX 5080", specs: ["16 GB GDDR7", "256-bit", "PCIe 5.0"] },
      { name: "NVIDIA GeForce RTX 5070 Ti", specs: ["16 GB GDDR7", "256-bit"] },
      { name: "NVIDIA GeForce RTX 5070", specs: ["12 GB GDDR7", "192-bit"] },
      { name: "NVIDIA GeForce RTX 4090", specs: ["24 GB GDDR6X", "384-bit"] },
      { name: "NVIDIA GeForce RTX 4080 Super", specs: ["16 GB GDDR6X", "256-bit"] },
      { name: "NVIDIA GeForce RTX 4070 Ti Super", specs: ["16 GB GDDR6X", "256-bit"] },
      { name: "NVIDIA GeForce RTX 4070 Super", specs: ["12 GB GDDR6X", "192-bit"] },
      { name: "NVIDIA GeForce RTX 4060 Ti", specs: ["8 GB GDDR6", "128-bit"] },
      { name: "NVIDIA GeForce RTX 4060", specs: ["8 GB GDDR6", "128-bit"] },
      { name: "NVIDIA GeForce RTX 3060", specs: ["12 GB GDDR6", "192-bit"] },
      { name: "AMD Radeon RX 9070 XT", specs: ["16 GB GDDR6", "256-bit"] },
      { name: "AMD Radeon RX 7900 XTX", specs: ["24 GB GDDR6", "384-bit"] },
      { name: "AMD Radeon RX 7900 XT", specs: ["20 GB GDDR6", "320-bit"] },
      { name: "AMD Radeon RX 7800 XT", specs: ["16 GB GDDR6", "256-bit"] },
      { name: "AMD Radeon RX 7700 XT", specs: ["12 GB GDDR6", "192-bit"] },
      { name: "AMD Radeon RX 7600", specs: ["8 GB GDDR6", "128-bit"] },
      { name: "Intel Arc A770", specs: ["16 GB GDDR6", "256-bit"] },
    ],
  },
  {
    id: "cpu",
    label: "Processadores",
    icon: "⚙️",
    items: [
      { name: "AMD Ryzen 7 9800X3D", specs: ["8 núcleos", "AM5", "120W"] },
      { name: "AMD Ryzen 9 9950X", specs: ["16 núcleos", "AM5"] },
      { name: "AMD Ryzen 7 7800X3D", specs: ["8 núcleos", "AM5", "120W"] },
      { name: "AMD Ryzen 5 7600", specs: ["6 núcleos", "AM5", "65W"] },
      { name: "AMD Ryzen 5 5600", specs: ["6 núcleos", "AM4", "65W"] },
      { name: "AMD Ryzen 7 5700X", specs: ["8 núcleos", "AM4"] },
      { name: "Intel Core i9-14900K", specs: ["24 núcleos", "LGA1700"] },
      { name: "Intel Core i7-14700K", specs: ["20 núcleos", "LGA1700"] },
      { name: "Intel Core i5-14600K", specs: ["14 núcleos", "LGA1700"] },
      { name: "Intel Core i5-13400F", specs: ["10 núcleos", "LGA1700"] },
      { name: "Intel Core Ultra 9 285K", specs: ["24 núcleos", "LGA1851"] },
      { name: "Intel Core i3-12100F", specs: ["4 núcleos", "LGA1700"] },
    ],
  },
  {
    id: "ssd",
    label: "SSDs",
    icon: "💾",
    items: [
      { name: "Samsung 990 Pro 2TB", specs: ["NVMe Gen4", "7450 MB/s"] },
      { name: "Samsung 980 Pro 1TB", specs: ["NVMe Gen4", "7000 MB/s"] },
      { name: "WD Black SN850X 2TB", specs: ["NVMe Gen4", "7300 MB/s"] },
      { name: "Crucial T705 2TB", specs: ["NVMe Gen5", "14500 MB/s"] },
      { name: "Kingston KC3000 1TB", specs: ["NVMe Gen4", "7000 MB/s"] },
      { name: "Seagate FireCuda 530 2TB", specs: ["NVMe Gen4", "7300 MB/s"] },
      { name: "Crucial P3 Plus 1TB", specs: ["NVMe Gen4", "5000 MB/s"] },
      { name: "WD Blue SN580 1TB", specs: ["NVMe Gen4", "4150 MB/s"] },
      { name: "Kingston NV2 1TB", specs: ["NVMe Gen4", "3500 MB/s"] },
      { name: "Samsung 870 EVO 1TB", specs: ["SATA", "560 MB/s"] },
    ],
  },
  {
    id: "notebook",
    label: "Notebooks",
    icon: "💻",
    items: [
      { name: "Apple MacBook Air M3", specs: ["Chip M3", "13/15 pol"] },
      { name: "Apple MacBook Pro 14 M3 Pro", specs: ["M3 Pro", "14 pol"] },
      { name: "Dell XPS 15", specs: ["Core i7/i9", "RTX 4050/4060"] },
      { name: "Asus ROG Zephyrus G14", specs: ["Ryzen 9", "RTX 4060/4070"] },
      { name: "Lenovo Legion 5", specs: ["Ryzen 7", "RTX 4060"] },
      { name: "Acer Nitro 5", specs: ["Core i5/i7", "RTX 4050/4060"] },
      { name: "Asus TUF Gaming F15", specs: ["Core i7", "RTX 4060"] },
      { name: "Dell G15", specs: ["Core i7", "RTX 4060"] },
      { name: "Acer Aspire 5", specs: ["Core i5", "uso geral"] },
      { name: "Lenovo IdeaPad 3", specs: ["Ryzen 5", "uso geral"] },
    ],
  },
  {
    id: "console",
    label: "Video Games",
    icon: "🕹️",
    items: [
      { name: "Sony PlayStation 5 Pro", specs: ["GPU ~16.7 TFLOPS", "2 TB SSD"] },
      { name: "Sony PlayStation 5 (Slim)", specs: ["GPU 10.3 TFLOPS", "1 TB SSD"] },
      { name: "Microsoft Xbox Series X", specs: ["GPU 12 TFLOPS", "1 TB SSD"] },
      { name: "Microsoft Xbox Series S", specs: ["GPU 4 TFLOPS", "512 GB/1 TB"] },
      { name: "Nintendo Switch OLED", specs: ["Tela OLED 7 pol", "64 GB"] },
      { name: "Nintendo Switch", specs: ["Tela 6.2 pol", "32 GB"] },
      { name: "Steam Deck OLED", specs: ["APU AMD", "Tela OLED"] },
      { name: "ASUS ROG Ally", specs: ["Ryzen Z1 Extreme", "Windows"] },
    ],
  },
  {
    id: "ram",
    label: "Memórias RAM",
    icon: "🧠",
    items: [
      { name: "Corsair Vengeance 32GB DDR5 6000MHz", specs: ["DDR5", "6000 MHz", "2x16GB"] },
      { name: "Kingston Fury Beast 32GB DDR5 6000MHz", specs: ["DDR5", "6000 MHz"] },
      { name: "G.Skill Trident Z5 32GB DDR5 6400MHz", specs: ["DDR5", "6400 MHz"] },
      { name: "Corsair Vengeance 16GB DDR4 3200MHz", specs: ["DDR4", "3200 MHz", "2x8GB"] },
      { name: "Kingston Fury 16GB DDR4 3600MHz", specs: ["DDR4", "3600 MHz"] },
    ],
  },
  {
    id: "smartphone",
    label: "Smartphones",
    icon: "📱",
    items: [
      { name: "Apple iPhone 15 Pro Max", specs: ["A17 Pro", "6.7 pol"] },
      { name: "Apple iPhone 15", specs: ["A16", "6.1 pol"] },
      { name: "Samsung Galaxy S24 Ultra", specs: ["Snapdragon 8 Gen 3", "6.8 pol"] },
      { name: "Samsung Galaxy S24", specs: ["Exynos/Snapdragon", "6.2 pol"] },
      { name: "Google Pixel 8 Pro", specs: ["Tensor G3", "6.7 pol"] },
      { name: "Xiaomi 14", specs: ["Snapdragon 8 Gen 3", "6.36 pol"] },
      { name: "Motorola Edge 50 Pro", specs: ["Snapdragon 7 Gen 3", "6.7 pol"] },
    ],
  },
];
