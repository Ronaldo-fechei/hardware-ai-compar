# Pauta do blog BestHard

Lista usada pela tarefa agendada do Claude (segunda e quinta, 7h de Brasília).
A tarefa publica **um artigo por vez**: o primeiro item `[ ]` da seção
"Automática" cujo slug ainda não existe em `lib/blog-data.ts`.

Como editar:

- Para adicionar um tema, crie uma linha nova no mesmo formato, com `[ ]`.
- Para mudar a ordem, mova as linhas. O de cima sai primeiro.
- Para pular um tema, troque `[ ]` por `[-]`.
- A tarefa troca `[ ]` por `[x]` e anota a data depois de publicar.
- **Nunca** mova para "Automática" um tema que dependa de foto, medição
  ou teste feito por você.

Formato: `- [ ] slug | categoria | título provisório | ângulo e fontes`

## Automática

- [ ] ddr4-ou-ddr5-qual-escolher-2026 | comparativos | DDR4 ou DDR5: Qual Memória Escolher em 2026 | Custo da plataforma inteira (placa-mãe + RAM), quando o DDR4 ainda faz sentido, AM4 x AM5 x LGA1700. Fontes: AMD, Intel, JEDEC.
- [ ] quanto-de-vram-para-jogos-2026 | guias | Quanto de VRAM Você Precisa para Jogar em 2026 | 8, 12 e 16 GB por resolução, o que consome VRAM (texturas, RT, geração de quadros). Fontes: requisitos oficiais de jogos recentes, NVIDIA, AMD.
- [ ] dlss-fsr-xess-o-que-sao-qual-usar-2026 | guias | DLSS, FSR e XeSS: O Que São e Qual Usar | Upscaling x geração de quadros, compatibilidade por placa, latência. Fontes: páginas oficiais NVIDIA, AMD, Intel.
- [ ] temperatura-normal-cpu-gpu-como-verificar | guias | Temperatura Normal de CPU e GPU: Como Verificar | Faixas seguras pelos limites dos fabricantes (Tjmax), ferramentas gratuitas, sinais de throttling. Fontes: AMD, Intel, NVIDIA.
- [ ] como-ativar-xmp-expo-memoria-ram | guias | Como Ativar XMP e EXPO na Memória RAM | Por que a RAM vem abaixo da velocidade anunciada, passo a passo por fabricante de placa-mãe, como verificar no Windows. Fontes: Intel XMP, AMD EXPO, manuais ASUS/Gigabyte/MSI/ASRock.
- [ ] pasta-termica-quando-trocar-qual-escolher | guias | Pasta Térmica: Quando Trocar e Qual Escolher | Sinais de pasta ressecada, tipos (cerâmica, metálica, metal líquido), riscos, quantidade. Fontes: fabricantes de pasta e de processadores.
- [ ] 1080p-1440p-ou-4k-qual-resolucao-para-jogos-2026 | comparativos | 1080p, 1440p ou 4K: Qual Resolução Escolher para Jogos | Custo em GPU por resolução, densidade de pixels por tamanho de tela, distância de visualização (conta própria de PPI).
- [ ] notebook-gamer-ou-pc-gamer-2026 | comparativos | Notebook Gamer ou PC Gamer: Qual Compensa em 2026 | Diferença entre GPU mobile e desktop (TGP), upgrade, portabilidade, garantia. Fontes: NVIDIA/AMD (especificações mobile).
- [ ] pcie-4-vs-pcie-5-faz-diferenca-2026 | comparativos | PCIe 4.0 x PCIe 5.0: Faz Diferença em SSD e Placa de Vídeo? | Largura de banda por geração (tabela), compatibilidade retroativa, quando o PCIe 5.0 importa. Fontes: PCI-SIG, fabricantes.
- [ ] como-escolher-gabinete-airflow-2026 | guias | Como Escolher Gabinete: Tamanho, Airflow e Compatibilidade | Formatos (ATX, mATX, ITX), altura máxima de cooler, comprimento de GPU, radiador, fluxo de ar.
- [ ] como-atualizar-bios-placa-mae-com-seguranca | guias | Como Atualizar a BIOS da Placa-Mãe com Segurança | Quando atualizar (suporte a CPU nova), métodos (EZ Flash, Q-Flash, M-Flash, BIOS Flashback), riscos. Fontes: ASUS, Gigabyte, MSI, ASRock.
- [ ] como-configurar-monitor-144hz-windows | guias | Monitor de 144 Hz: Como Configurar Direito no Windows | Taxa de atualização no Windows e no driver, cabo certo (DisplayPort/HDMI), G-Sync/FreeSync. Fontes: Microsoft, NVIDIA, AMD, VESA.
- [ ] como-instalar-windows-11-pc-novo-passo-a-passo | guias | Como Instalar o Windows 11 em um PC Novo | Requisitos (TPM 2.0, Secure Boot), pendrive com a ferramenta oficial, drivers depois da instalação. Fontes: Microsoft.
- [ ] comprar-pecas-pc-importadas-impostos-2026 | guias | Comprar Peças de PC Importadas: Impostos e Cuidados em 2026 | Regras vigentes de tributação de compras internacionais, ICMS, garantia e devolução. Fontes obrigatórias: Receita Federal (gov.br). Conferir as regras no dia; se houver mudança recente sem fonte oficial clara, pular o tema.
- [ ] garantia-pecas-pc-cdc-rma-como-acionar | guias | Garantia de Peças de PC: CDC, Fabricante e RMA | Prazos legais (CDC), garantia contratual, como acionar RMA, o que invalida garantia. Fontes: Código de Defesa do Consumidor (planalto.gov.br), Procon, fabricantes.
- [ ] nobreak-para-pc-gamer-como-escolher | guias | Nobreak para PC Gamer: Precisa? Como Escolher | VA x W, fator de potência, senoidal pura x aproximada, conta de dimensionamento própria. Fontes: fabricantes de nobreak, ABNT/Inmetro quando aplicável.

## Manual (a automação nunca publica)

Temas que dependem de foto, medição ou teste feito pelo Ronaldo.

- [ ] review-meu-pc-gamer-uso-real | builds | Meu PC no dia a dia: o que funcionou e o que eu mudaria | Fotos próprias da máquina e prints de FPS.
- [ ] consumo-real-medido-com-wattimetro | guias | Medi o consumo do meu PC com um wattímetro | Medição própria em repouso, jogando e em estresse.
- [ ] troca-pasta-termica-antes-e-depois | guias | Troquei a pasta térmica: temperaturas antes e depois | Fotos e leituras de temperatura próprias.
- [ ] limpeza-pc-por-dentro-passo-a-passo-fotos | guias | Como limpar o PC por dentro (com fotos) | Fotos próprias de cada etapa.
- [ ] montagem-real-pc-fotos | builds | Montei um PC do zero: fotos de cada etapa | Fotos próprias da montagem.

## Publicados pela automação

(A tarefa acrescenta uma linha aqui a cada publicação: data, slug e link.)
