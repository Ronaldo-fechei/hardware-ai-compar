/**
 * content/comparadores.ts
 *
 * ETAPA 3 — o conteúdo editorial que faltava nas 11 páginas /comparar/.
 *
 * Hoje cada comparador tem ~200 palavras + um dropdown. O Google não
 * consegue indexar valor que só existe dentro de um <select>: ele lê texto.
 * Cada categoria abaixo tem 700-900 palavras de texto único, escrito para
 * responder o que o comprador brasileiro pergunta antes de decidir.
 *
 * Total: ~9.000 palavras de conteúdo indexável novo — o suficiente para
 * inverter a proporção editorial/template do site.
 *
 * Renderize com <ConteudoComparador dados={COMPARADORES[categoria]} />
 */

export type ConteudoComparador = {
  titulo: string
  subtitulo: string
  intro: string[]
  comoLer: { termo: string; texto: string }[]
  erros: { titulo: string; texto: string }[]
  faixas: { faixa: string; oQueEsperar: string }[]
  comoPontuamos: string
  faq: { p: string; r: string }[]
}

export const COMPARADORES: Record<string, ConteudoComparador> = {

  processadores: {
    titulo: 'Comparar processadores',
    subtitulo: 'Intel ou AMD, e quanto CPU o seu uso realmente exige',
    intro: [
      `Processador é a peça em que mais se gasta a mais sem necessidade. A conta que importa não é qual CPU é o mais rápido do mundo, e sim quanto de desempenho você perde ao descer duas faixas de preço — e a resposta, na maioria dos usos, é "quase nada". Um processador de entrada de geração atual roda a maior parte dos jogos no mesmo patamar de um topo de linha quando a placa de vídeo é a mesma, porque em 1080p com configurações altas e em qualquer resolução acima disso quem limita é a GPU, não a CPU.`,
      `Onde o processador realmente pesa: jogos de simulação e estratégia com muitas unidades na tela, servidores locais, emulação de consoles recentes, streaming simultâneo ao jogo, compilação de código, edição de vídeo e qualquer coisa que rode em CPU pura. Se o seu uso não é nenhum desses, o dinheiro extra rende mais na placa de vídeo. Use o comparador abaixo para colocar dois modelos lado a lado, mas leia primeiro o que cada número significa — a ficha técnica sozinha engana.`,
    ],
    comoLer: [
      { termo: 'Núcleos e threads', texto: 'Núcleo é a unidade física de processamento; thread é a fila de trabalho que ele atende. Jogos usam bem entre 6 e 8 núcleos e param de escalar depois disso. Renderização, compilação e compressão continuam ganhando com 12, 16 ou mais. Comprar 16 núcleos para jogar é pagar por capacidade que fica ociosa.' },
      { termo: 'Clock base e boost', texto: 'O clock base é o piso garantido; o boost é o teto que o processador alcança em uma ou poucas threads, se a temperatura e a energia permitirem. Na prática o número que você vê no boost quase nunca é sustentado em carga total. Compare clocks apenas entre CPUs da mesma família — 4,5 GHz de arquiteturas diferentes não são a mesma coisa.' },
      { termo: 'IPC', texto: 'Instruções por ciclo: quanto trabalho o processador faz a cada batida de clock. É o que explica um chip novo de 4,2 GHz superar um antigo de 5,0 GHz. Quando comparar gerações diferentes, o IPC importa mais que a frequência.' },
      { termo: 'Cache L3', texto: 'Memória ultrarrápida dentro do processador. Em jogos, cache grande costuma render mais FPS que clock alto — é por isso que as linhas com cache empilhado se destacam em jogos mesmo com frequência menor. Fora de jogos, o ganho é bem menor.' },
      { termo: 'TDP', texto: 'Indicação de consumo e de calor a dissipar. Não é consumo real medido, é orientação de projeto. Serve para dimensionar cooler e fonte: um chip de 65 W aceita cooler simples; um de 125 W ou mais exige refrigeração séria, e o custo do cooler entra no preço da CPU.' },
      { termo: 'Gráficos integrados', texto: 'Alguns modelos trazem vídeo integrado, outros não. Se você vai usar placa de vídeo dedicada, integrado é irrelevante no dia a dia — mas salva você quando a GPU dá problema e você precisa do PC ligando para diagnosticar. Vale considerar como seguro barato.' },
    ],
    erros: [
      { titulo: 'Comparar CPU sem considerar a plataforma inteira', texto: 'O processador mais barato pode exigir placa-mãe mais cara ou memória de padrão diferente. Compare sempre CPU + placa-mãe + memória como um pacote. Uma diferença de R$ 300 no processador vira empate quando a placa-mãe da outra plataforma custa R$ 400 a mais.' },
      { titulo: 'Ignorar o cooler que vem — ou não vem — na caixa', texto: 'Modelos sem cooler incluído somam R$ 150 a R$ 500 ao custo real. Modelos com cooler de caixa muitas vezes precisam de um melhor mesmo assim, se você quiser o boost sustentado. Some isso antes de decidir.' },
      { titulo: 'Comprar CPU forte demais para a GPU', texto: 'Um processador de topo com uma placa de vídeo de entrada é dinheiro parado: a GPU vai limitar em praticamente todos os jogos. A proporção que costuma funcionar é gastar de 1,5 a 2 vezes mais na placa de vídeo do que no processador, em máquinas voltadas a jogos.' },
      { titulo: 'Decidir por benchmark sintético', texto: 'Pontuação de benchmark mede o processador em condição ideal e isolada. O que decide sua experiência é o desempenho no que você usa, com a sua GPU, na sua resolução. Prefira números de FPS em jogos e tempos de tarefa reais a um número único de pontuação.' },
    ],
    faixas: [
      { faixa: 'Até R$ 700', oQueEsperar: 'Entrada de geração atual ou intermediário de geração anterior, tipicamente 6 núcleos. Suficiente para jogos em 1080p acompanhado de GPU de entrada, navegação pesada e trabalho de escritório. Prefira modelos com vídeo integrado nessa faixa.' },
      { faixa: 'R$ 700 a R$ 1.500', oQueEsperar: 'A faixa de melhor custo-benefício no Brasil. 6 a 8 núcleos de geração atual, clock alto o bastante para não limitar GPUs intermediárias. É onde a maioria das builds de jogos deve parar.' },
      { faixa: 'R$ 1.500 a R$ 3.000', oQueEsperar: 'Modelos com cache ampliado ou 8 a 12 núcleos. Justifica-se para quem joga em alta taxa de quadros com GPU de topo, faz stream simultâneo ou trabalha com edição. Exige cooler dedicado e placa-mãe de VRM decente.' },
      { faixa: 'Acima de R$ 3.000', oQueEsperar: 'Território de produtividade profissional — muitos núcleos para renderização, compilação e virtualização. Para jogos, o ganho sobre a faixa anterior é pequeno e raramente compensa.' },
    ],
    comoPontuamos: `A nota de desempenho de processadores da BestHard combina três blocos: desempenho em jogos com GPU de topo em 1080p (peso maior, porque isola a CPU), desempenho multithread em tarefas de produtividade, e eficiência energética sob carga. Os dados brutos vêm das fontes que identificamos na página de metodologia — não fazemos medições próprias. A nota de custo-benefício divide o desempenho pelo menor preço à vista praticado no Brasil nos últimos 30 dias, o que faz um mesmo processador subir ou descer de nota conforme o câmbio e as promoções. Por isso a nota de hoje pode não ser a de mês que vem.`,
    faq: [
      { p: 'Intel ou AMD em 2026?', r: 'Não existe resposta única e quem der uma está vendendo alguma coisa. As duas entregam desempenho equivalente por faixa de preço na maior parte do tempo. O que decide na prática: preço da plataforma completa no dia da compra, se você quer caminho de upgrade no mesmo soquete, e se o seu uso principal se beneficia de cache grande (jogos) ou de contagem de núcleos (produção).' },
      { p: 'Quantos núcleos preciso para jogar?', r: 'Seis é o piso confortável hoje, oito é a zona segura para os próximos anos. Acima de oito, o ganho em jogos é marginal. Se o orçamento apertar, prefira 6 núcleos de geração atual a 12 núcleos de geração antiga.' },
      { p: 'Vale a pena comprar processador usado?', r: 'Processador é uma das peças mais seguras de comprar usada — não tem partes móveis e degrada pouco. Verifique se os pinos estão intactos (no caso de soquetes com pinos no chip), teste antes de finalizar e desconfie de preço muito abaixo do mercado. O risco maior está na placa-mãe que acompanha, não na CPU.' },
      { p: 'Preciso trocar de processador para jogar melhor?', r: 'Na maioria das vezes, não. Se você joga em 1440p ou 4K, ou se sua placa de vídeo trabalha perto de 100% de uso durante o jogo, a CPU não é o gargalo — trocar não muda nada. Verifique o uso de CPU e GPU durante uma partida antes de gastar.' },
      { p: 'O que é gargalo entre CPU e GPU?', r: 'É quando uma das duas peças fica esperando a outra. Se a GPU está em 99% de uso, o sistema está equilibrado ou limitado por ela. Se a GPU fica abaixo de 80% enquanto uma thread da CPU satura, o processador está segurando. Nossa ferramenta de gargalo estima isso por combinação.' },
    ],
  },

  gpus: {
    titulo: 'Comparar placas de vídeo',
    subtitulo: 'NVIDIA, AMD e Intel — quanto FPS cada faixa de preço entrega no Brasil',
    intro: [
      `Placa de vídeo é onde o dinheiro de uma máquina de jogos deve se concentrar, e também onde as fichas técnicas mais confundem. Quantidade de VRAM virou argumento de venda e é a primeira coisa que o comprador olha, mas uma GPU com 12 GB de memória lenta pode perder para uma de 8 GB com barramento largo e arquitetura mais nova. O número que decide é o desempenho medido na resolução em que você joga, não a soma das especificações.`,
      `O outro fator que quase ninguém considera antes de comprar é o preço por quadro no mercado brasileiro. A mesma placa que é a melhor compra nos Estados Unidos pode ser a pior aqui por causa de importação, câmbio e disponibilidade. É por isso que este comparador mostra a nota de custo-benefício calculada sobre preço praticado no Brasil, e não sobre o preço sugerido pelo fabricante lá fora.`,
    ],
    comoLer: [
      { termo: 'VRAM', texto: 'Memória dedicada da placa. Determina quanta textura e quanto buffer cabem sem precisar recorrer à memória do sistema, o que causa engasgos. Para 1080p, 8 GB ainda dá conta na maior parte dos títulos; para 1440p com texturas altas, 12 GB é a zona confortável; para 4K, 16 GB. Mas VRAM sobrando não acelera nada — só evita o problema de faltar.' },
      { termo: 'Barramento de memória', texto: 'Largura da estrada por onde a VRAM conversa com o chip, em bits. Um barramento de 128 bits com muita memória é um caminhão grande numa rua estreita. Barramento estreito aparece como queda brusca de desempenho ao subir a resolução — a placa vai bem em 1080p e desaba em 1440p.' },
      { termo: 'Clock de boost', texto: 'Frequência máxima do chip gráfico. Comparável apenas dentro da mesma arquitetura. Entre gerações ou entre fabricantes diferentes, o número não diz nada isoladamente.' },
      { termo: 'Ray tracing e upscaling', texto: 'Ray tracing melhora iluminação e reflexos com custo alto de desempenho. As tecnologias de upscaling — que renderizam em resolução menor e reconstroem a imagem — recuperam boa parte desse custo, com qualidade que varia por implementação e por jogo. Se você pretende usar ray tracing, o desempenho com ele ligado é o número que importa, não o desempenho puro.' },
      { termo: 'TGP e conectores', texto: 'Consumo de projeto da placa. Define a fonte necessária e quantos conectores de força você precisa ter livres. Uma placa de 250 W numa fonte genérica de 500 W é o caminho mais rápido para desligamentos aleatórios e, no pior caso, para perder a fonte e o que estiver ligado nela.' },
      { termo: 'Comprimento físico', texto: 'A especificação que mais causa arrependimento. Modelos de três ventoinhas passam de 32 cm e não entram em boa parte dos gabinetes vendidos no Brasil. Meça o espaço interno do seu gabinete antes, não depois.' },
    ],
    erros: [
      { titulo: 'Escolher pela VRAM isolada', texto: 'Vendedores de marketplace anunciam placas antigas destacando 8 GB ou 12 GB de memória em fonte grande. Uma placa de duas gerações atrás com muita VRAM costuma perder feio para uma atual com menos. Compare desempenho medido, não a etiqueta.' },
      { titulo: 'Não considerar a resolução do monitor', texto: 'Comprar uma placa de topo para um monitor de 1080p a 60 Hz é jogar dinheiro fora — o monitor não consegue mostrar os quadros extras. E o inverso também acontece: monitor 1440p a 144 Hz com placa de entrada entrega uma experiência pior do que o monitor promete. Decida os dois juntos.' },
      { titulo: 'Ignorar a fonte de alimentação', texto: 'Toda troca de GPU deve começar checando a fonte. Some o consumo da placa nova ao resto do sistema e acrescente margem. Fonte no limite é a causa mais comum de instabilidade que as pessoas atribuem erroneamente à placa.' },
      { titulo: 'Comprar GPU usada sem verificar histórico de uso', texto: 'Placa que veio de mineração ou de máquina de render trabalhou meses em carga total. Nem sempre isso é problema, mas exige desconto proporcional e teste presencial. Rode um jogo pesado por vinte minutos e observe temperatura e artefatos antes de fechar.' },
    ],
    faixas: [
      { faixa: 'Até R$ 1.500', oQueEsperar: 'Entrada. Jogos competitivos em 1080p com configurações médias, títulos pesados em configurações baixas. É a faixa em que a placa usada de geração anterior costuma vencer a nova de entrada em desempenho por real.' },
      { faixa: 'R$ 1.500 a R$ 3.000', oQueEsperar: 'Intermediária. 1080p em alto com folga, 1440p com ajustes. Onde a maior parte das builds brasileiras deve mirar — é onde a curva de preço por quadro é mais favorável.' },
      { faixa: 'R$ 3.000 a R$ 6.000', oQueEsperar: 'Intermediária-alta. 1440p em alto com boa taxa de quadros, 4K com upscaling. Exige fonte dimensionada e gabinete com fluxo de ar decente.' },
      { faixa: 'Acima de R$ 6.000', oQueEsperar: 'Topo. 4K nativo e ray tracing pesado. O ganho por real cai bastante nessa faixa: você paga o dobro para ganhar de 30% a 40%. Faz sentido para quem tem monitor 4K de alta taxa e não para mais ninguém.' },
    ],
    comoPontuamos: `A nota de desempenho de placas de vídeo pondera resultados em 1080p, 1440p e 4K, com peso maior para 1440p, que é a resolução onde a maior parte das compras acima de R$ 2.000 acaba sendo usada. Consideramos separadamente o desempenho com ray tracing ativo, porque a ordem das placas muda bastante quando ele entra. Os dados de desempenho vêm de fontes de terceiros que identificamos em nossa metodologia — a BestHard não opera bancada de testes. A nota de custo-benefício é desempenho dividido pelo menor preço à vista no Brasil nos últimos 30 dias, o que penaliza modelos importados com preço inflado mesmo quando o chip é bom.`,
    faq: [
      { p: 'Quantos GB de VRAM eu preciso?', r: 'Depende da resolução e de quanto tempo você pretende ficar com a placa. Para 1080p, 8 GB atende hoje. Para 1440p com texturas altas, mire 12 GB. Para 4K, 16 GB. Se a intenção é durar quatro ou cinco anos, suba uma faixa — texturas só crescem.' },
      { p: 'Vale a pena comprar placa de vídeo usada no Brasil?', r: 'Financeiramente costuma valer, e é como muita gente monta uma máquina decente por menos. O risco é real, então: compre presencialmente, teste com jogo pesado por pelo menos vinte minutos, observe temperatura e artefatos na imagem, e desconfie de placa recém-limpa com pasta térmica nova sem explicação.' },
      { p: 'NVIDIA, AMD ou Intel Arc?', r: 'NVIDIA costuma liderar em ray tracing e tem o ecossistema de software mais maduro. AMD costuma entregar mais VRAM e mais desempenho puro por real na faixa intermediária. Intel Arc tem preço agressivo e melhorou muito por driver, mas ainda apresenta comportamento irregular em títulos antigos. Compare por modelo e preço do dia, não por marca.' },
      { p: 'Minha fonte aguenta essa placa?', r: 'Some o consumo de projeto da placa ao do processador e acrescente cerca de 150 W para o resto do sistema. Depois adicione 30% de margem — fonte trabalhando acima de 70% da capacidade envelhece rápido. E confira se você tem os conectores de força certos disponíveis.' },
      { p: 'Preciso trocar de placa a cada geração?', r: 'Não. O intervalo que costuma fazer sentido é pular uma ou duas gerações: o ganho de uma geração para a seguinte imediata raramente justifica o custo. Troque quando a placa não entregar mais a experiência que você quer na sua resolução, não quando sair modelo novo.' },
    ],
  },

  monitores: {
    titulo: 'Comparar monitores',
    subtitulo: 'Taxa de atualização, painel e resolução — o que muda de verdade na sua vista',
    intro: [
      `Monitor é a peça que você olha durante todas as horas de uso e a que as pessoas menos pesquisam antes de comprar. É também a que dura mais: uma placa de vídeo envelhece em três anos, um monitor bom acompanha duas ou três máquinas. Isso muda a lógica do gasto — vale esticar o orçamento aqui de um jeito que não vale em quase nenhuma outra peça.`,
      `A confusão mais comum é achar que resolução alta e taxa de atualização alta são a mesma disputa. Não são. Resolução define o quanto de detalhe cabe na tela; taxa de atualização define quão fluido é o movimento. Quem joga competitivo ganha muito mais com 144 Hz em 1080p do que com 60 Hz em 4K. Quem edita foto, programa ou passa o dia em planilha ganha o contrário. Decida qual dos dois é o seu caso antes de comparar modelos.`,
    ],
    comoLer: [
      { termo: 'Tipo de painel', texto: 'IPS entrega a melhor fidelidade de cor e ângulos de visão amplos, com pretos menos profundos. VA tem contraste muito superior e pretos convincentes, mas pode apresentar rastro em transições escuras. TN é o mais rápido e o mais barato, com cores e ângulos claramente piores. OLED tem preto absoluto e resposta quase instantânea, com risco de retenção de imagem em uso com elementos estáticos por muitas horas.' },
      { termo: 'Taxa de atualização', texto: 'Quantas vezes por segundo a tela se redesenha. O salto de 60 Hz para 144 Hz é o upgrade mais perceptível que existe em monitor, e qualquer pessoa nota em cinco segundos de uso. De 144 Hz para 240 Hz o ganho existe, mas é sutil e relevante sobretudo em jogos competitivos. Só faz sentido se a sua placa de vídeo conseguir entregar quadros nessa taxa.' },
      { termo: 'Tempo de resposta', texto: 'Quanto tempo um pixel leva para mudar de cor. O número anunciado costuma ser o melhor caso, medido de cinza a cinza com overdrive no máximo — e overdrive no máximo geralmente introduz outro defeito, o overshoot, que aparece como halo claro atrás de objetos em movimento. Trate o número da caixa como orientação, não como medida.' },
      { termo: 'Resolução e densidade', texto: 'O que importa não é a resolução isolada, é quantos pixels por polegada ela representa. 1080p é confortável até 24 polegadas; acima disso a imagem começa a ficar granulada. 1440p é o ponto ideal entre 27 e 32 polegadas. 4K faz sentido a partir de 27 polegadas, e em uso de escritório costuma exigir escalonamento do sistema.' },
      { termo: 'Sincronização adaptativa', texto: 'FreeSync e G-Sync fazem o monitor ajustar sua taxa à quantidade de quadros que a placa entrega, eliminando o rasgo de imagem sem o atraso do V-Sync. Praticamente todo monitor de jogos atual traz alguma forma disso. Confira a faixa de operação — sincronização que só funciona acima de 48 Hz não ajuda quando o jogo cai para 40.' },
      { termo: 'Brilho e HDR', texto: 'Selo de HDR em monitor barato quase nunca significa HDR de verdade. Sem brilho de pico alto e sem controle de iluminação por zonas, o modo HDR apenas lava a imagem. Se HDR é prioridade, olhe o brilho de pico medido e o número de zonas de atenuação, não o selo.' },
    ],
    erros: [
      { titulo: 'Comprar taxa que a placa não alimenta', texto: 'Monitor de 240 Hz com placa que entrega 70 quadros por segundo nos seus jogos é capacidade ociosa. Verifique primeiro quanto a sua GPU rende nos títulos que você joga, na resolução pretendida, e escolha a taxa a partir daí.' },
      { titulo: 'Escolher tamanho grande demais para a distância', texto: 'Monitor de 32 polegadas a 60 cm dos olhos obriga a mexer a cabeça para acompanhar as bordas e cansa. Meça a distância real da sua mesa: até 70 cm, 24 a 27 polegadas é o intervalo confortável.' },
      { titulo: 'Ignorar a base e a ergonomia', texto: 'Muito modelo bom vem com base que só inclina. Se a tela fica baixa demais, você passa o dia com o pescoço curvado. Cheque se há ajuste de altura ou se o monitor aceita suporte VESA — o suporte custa pouco e resolve.' },
      { titulo: 'Comparar só a ficha e não o painel específico', texto: 'Dois monitores com a mesma resolução, mesma taxa e mesmo tipo de painel podem ter comportamentos bem diferentes em uniformidade, calibração de fábrica e overdrive. Nessa categoria, procurar a análise do modelo exato compensa mais do que em qualquer outra.' },
    ],
    faixas: [
      { faixa: 'Até R$ 800', oQueEsperar: '1080p entre 22 e 24 polegadas, 75 a 100 Hz, painel VA ou IPS de entrada. Atende bem para estudo, trabalho e jogos casuais. Espere base sem ajuste de altura e calibração de fábrica mediana.' },
      { faixa: 'R$ 800 a R$ 1.800', oQueEsperar: 'A faixa de melhor equilíbrio: 1080p a 144-165 Hz em 24 polegadas, ou 1440p a 100-144 Hz em 27 polegadas com painel IPS. É onde a maioria deveria comprar.' },
      { faixa: 'R$ 1.800 a R$ 3.500', oQueEsperar: '1440p a 165-240 Hz com painel bom, ou 4K a 60-144 Hz. Ergonomia completa, calibração de fábrica decente, HDR que começa a fazer alguma diferença.' },
      { faixa: 'Acima de R$ 3.500', oQueEsperar: 'OLED, 4K de alta taxa, ultrawide de painel premium. Ganho real em contraste e resposta, mas retorno decrescente por real. Só compensa se você usa o monitor muitas horas por dia.' },
    ],
    comoPontuamos: `A nota de monitores da BestHard pondera taxa de atualização efetiva, qualidade do painel para o preço da faixa, cobertura de espaço de cor declarada e ergonomia da base. Damos peso relevante à ergonomia porque é o item que mais afeta uso prolongado e o que os comparativos mais ignoram. Não medimos painéis — as características vêm de especificação de fabricante e de análises de terceiros que identificamos na metodologia. A nota de custo-benefício considera o menor preço à vista praticado no Brasil nos últimos 30 dias dentro da mesma categoria de uso, para não comparar um monitor de escritório com um de jogos competitivos.`,
    faq: [
      { p: '144 Hz faz mesmo diferença?', r: 'Faz, e é imediata. É o upgrade mais perceptível de toda a máquina, inclusive no uso comum de mover o mouse pela área de trabalho. A ressalva é que sua placa precisa entregar quadros nessa taxa nos jogos que você joga.' },
      { p: '1440p ou 1080p com mais Hz?', r: 'Se você joga competitivo e o que importa é reagir rápido, prefira mais Hz em 1080p. Se você joga títulos de campanha, mundo aberto e usa o PC para trabalhar, 1440p melhora tudo o que você faz o dia inteiro. Para uso misto, 1440p a 144 Hz é o meio-termo que raramente decepciona.' },
      { p: 'IPS ou VA?', r: 'IPS se você trabalha com cor, usa em ambiente claro ou divide a tela com outra pessoa ao lado. VA se você joga e assiste em ambiente escuro e valoriza preto profundo. Painéis VA modernos melhoraram bastante em rastro, mas IPS continua sendo a escolha mais segura para uso geral.' },
      { p: 'Monitor curvo vale a pena?', r: 'Em telas de 32 polegadas ou mais, e em ultrawides, a curvatura ajuda a manter as bordas à mesma distância dos olhos e reduz cansaço. Em 24 ou 27 polegadas, é mais estética do que benefício. Curvatura acentuada atrapalha quem trabalha com linhas retas, como desenho técnico.' },
      { p: 'Preciso de HDR?', r: 'Só se o monitor tiver brilho de pico alto e atenuação por zonas. Selo de HDR básico em monitor de entrada não entrega o efeito e às vezes piora a imagem. Se HDR não é prioridade, ignore o selo e escolha pelo resto.' },
    ],
  },

  memorias: {
    titulo: 'Comparar memórias RAM',
    subtitulo: 'Quanto, de que padrão e por que a frequência sozinha não diz nada',
    intro: [
      `Memória RAM é a peça mais fácil de acertar e uma das mais fáceis de gastar errado. A pergunta de quanto instalar tem resposta objetiva por perfil de uso, e passar disso não acelera nada — memória sobrando fica parada, não vira desempenho. Já a pergunta de qual velocidade escolher é onde o marketing atua mais: kits anunciam frequências altíssimas cujo ganho real, na maior parte dos usos, cabe na margem de erro.`,
      `O que realmente importa em RAM, na ordem: quantidade suficiente para o seu uso, dois pentes em vez de um para trabalhar em canal duplo, e um conjunto de frequência e latência que a sua plataforma suporte de verdade sem instabilidade. Cor, dissipador e iluminação não entram nessa conta — são preço adicional sem contrapartida de desempenho.`,
    ],
    comoLer: [
      { termo: 'Capacidade', texto: '8 GB hoje é o mínimo absoluto e já limita em multitarefa. 16 GB atende bem jogos e uso geral e é onde a maioria deve parar. 32 GB faz sentido para edição de vídeo, máquinas virtuais, muitos programas abertos ao mesmo tempo e jogos de simulação pesados. Acima de 32 GB só com motivo específico.' },
      { termo: 'Canal duplo', texto: 'Dois pentes iguais dobram a largura de banda em relação a um único pente da mesma capacidade total. A diferença é perfeitamente mensurável em jogos e é gratuita — basta comprar 2x8 em vez de 1x16. Comprar um pente só para "adicionar depois" costuma custar desempenho durante todo o tempo até você adicionar.' },
      { termo: 'Frequência', texto: 'Medida em MT/s. Frequência maior ajuda mais em plataformas cujo controlador de memória é sensível a isso, e ajuda menos nas outras. O ganho de subir uma faixa de frequência raramente passa de poucos por cento em jogos, e é quase nulo em uso comum. Não pague caro por isso.' },
      { termo: 'Latência CL', texto: 'Quantos ciclos a memória leva para responder. Número menor é melhor, mas só é comparável entre kits da mesma frequência: um kit de frequência alta e CL alto pode ter o mesmo tempo real de um de frequência baixa e CL baixo. A conta que importa é o tempo em nanossegundos, não o CL isolado.' },
      { termo: 'Perfil XMP ou EXPO', texto: 'A memória sai de fábrica rodando abaixo do que promete. A frequência anunciada só é atingida quando você ativa o perfil na BIOS. Muita gente compra kit rápido, nunca ativa o perfil e roda anos na velocidade base sem saber.' },
      { termo: 'Padrão DDR', texto: 'DDR4 e DDR5 não são intercambiáveis — o padrão é definido pela placa-mãe e pelo processador, não pela sua escolha. Ao montar máquina nova, verifique qual padrão a plataforma usa antes de comprar qualquer coisa.' },
    ],
    erros: [
      { titulo: 'Comprar um pente único', texto: 'É o erro mais comum e o mais caro em desempenho. Um pente de 16 GB rende menos que dois de 8 GB em praticamente tudo. Se o orçamento apertou, prefira 2x8 a 1x16.' },
      { titulo: 'Misturar kits diferentes', texto: 'Pentes de fabricantes, lotes ou especificações diferentes muitas vezes não estabilizam na frequência anunciada e obrigam o sistema a rodar no menor denominador. Se for expandir, prefira vender o kit atual e comprar um novo fechado com a capacidade desejada.' },
      { titulo: 'Nunca ativar o perfil na BIOS', texto: 'Sem ativar XMP ou EXPO, você pagou por velocidade que não está usando. Depois de montar, entre na BIOS, ative o perfil e confirme a frequência no sistema operacional.' },
      { titulo: 'Pagar por frequência extrema', texto: 'A diferença de preço entre um kit de frequência mediana e um de frequência extrema costuma render mais se aplicada na placa de vídeo. Fique na frequência que a sua plataforma oficialmente suporta bem e gaste a diferença onde ela aparece.' },
    ],
    faixas: [
      { faixa: 'Até R$ 250', oQueEsperar: 'Kit de 2x8 GB de frequência básica. Suficiente para jogos e uso geral, sem sobra para multitarefa pesada.' },
      { faixa: 'R$ 250 a R$ 500', oQueEsperar: 'Kit de 2x8 GB de boa frequência com perfil confiável, ou 2x16 GB de entrada. É a faixa que atende praticamente todo mundo.' },
      { faixa: 'R$ 500 a R$ 1.000', oQueEsperar: '2x16 GB de frequência e latência boas. Indicado para edição, desenvolvimento e jogos de simulação.' },
      { faixa: 'Acima de R$ 1.000', oQueEsperar: '64 GB ou kits de especificação extrema. Só justificável por carga de trabalho específica — para jogos, é dinheiro parado.' },
    ],
    comoPontuamos: `A nota de memórias considera o tempo real de acesso em nanossegundos (calculado a partir de frequência e latência, não pelo CL isolado), a confiabilidade do perfil XMP ou EXPO relatada para o modelo, e a compatibilidade declarada com as plataformas atuais. Iluminação e dissipador não entram na nota de desempenho — quando pesam no preço sem contrapartida, derrubam a nota de custo-benefício, que é calculada sobre o menor preço à vista praticado no Brasil nos últimos 30 dias por gigabyte.`,
    faq: [
      { p: '16 GB ou 32 GB?', r: '16 GB para jogos e uso geral, e é a resposta certa para a maioria. 32 GB se você edita vídeo, roda máquinas virtuais, trabalha com muitos programas pesados abertos ou joga simuladores com muitos mods. Não compre 32 GB "por garantia" se o seu uso é o primeiro caso.' },
      { p: 'DDR4 ainda vale a pena?', r: 'Vale, quando a plataforma inteira sai mais barata e o uso é jogos. A diferença de desempenho entre os padrões, na prática de jogos, é menor do que a diferença de preço costuma sugerir. Para máquina nova com intenção de durar, DDR5 é o caminho por causa do suporte futuro.' },
      { p: 'Frequência mais alta melhora FPS?', r: 'Melhora, mas pouco — tipicamente poucos por cento, e mais em alguns títulos que em outros. O salto grande é sair de canal simples para canal duplo e de frequência base para o perfil ativado. Depois disso, o retorno cai rápido.' },
      { p: 'Posso misturar pentes de marcas diferentes?', r: 'Pode funcionar, mas frequentemente obriga o sistema a reduzir a frequência ou gera instabilidade difícil de diagnosticar. Se puder, use um kit fechado com todos os pentes do mesmo lote.' },
      { p: 'Preciso de memória com dissipador?', r: 'Em frequências comuns, não faz diferença térmica relevante. Dissipadores altos podem inclusive atrapalhar a instalação de coolers de ar grandes. Confira a altura do pente contra a folga do seu cooler.' },
    ],
  },

  ssds: {
    titulo: 'Comparar SSDs',
    subtitulo: 'Gen3, Gen4, Gen5 e a verdade sobre velocidade sequencial',
    intro: [
      `SSD é a categoria onde o número grande da caixa tem menos relação com o que você sente. A velocidade sequencial anunciada — aqueles 7.000 MB/s estampados na embalagem — descreve a cópia de um arquivo enorme e contínuo, algo que quase ninguém faz no dia a dia. O que determina se o sistema parece rápido é o desempenho em operações pequenas e aleatórias, que é o padrão real de carregar Windows, abrir programa e carregar mapa de jogo. Nesse quesito, a diferença entre um bom SSD Gen3 e um Gen5 caro é muito menor do que a diferença de preço.`,
      `A decisão que importa mais é outra: capacidade. Um SSD cheio perde desempenho de forma acentuada, porque o controlador precisa de espaço livre para gerenciar escrita. Manter de 15% a 20% livre é obrigatório. Isso significa que um SSD de 500 GB na prática oferece cerca de 400 GB utilizáveis com folga — e jogos atuais ocupam de 60 a 150 GB cada.`,
    ],
    comoLer: [
      { termo: 'Sequencial x aleatório', texto: 'Sequencial é a velocidade em arquivo grande e contínuo; aleatório (medido em IOPS) é a velocidade em muitos arquivos pequenos espalhados. Boot, abertura de programa e carregamento de jogo são majoritariamente aleatórios. É o número que a caixa não destaca e o que você realmente sente.' },
      { termo: 'Geração PCIe', texto: 'Gen3 chega a cerca de 3.500 MB/s, Gen4 a cerca de 7.000, Gen5 acima disso. Fora de transferências massivas, a diferença percebida entre as gerações é pequena. Gen5 esquenta bastante e frequentemente exige dissipador. Confira também qual geração a sua placa-mãe suporta no slot que você vai usar.' },
      { termo: 'DRAM cache', texto: 'SSDs com memória DRAM própria mantêm o mapa de endereços internamente e sustentam desempenho melhor em uso pesado e prolongado. Modelos sem DRAM (DRAM-less) são mais baratos e vão bem em uso leve, mas degradam mais sob carga contínua. É a diferença mais importante entre dois SSDs de mesma velocidade anunciada.' },
      { termo: 'Cache SLC e velocidade sustentada', texto: 'Quase todo SSD moderno escreve rápido num cache e depois desacelera quando ele enche. Em transferências grandes, a velocidade pode cair para uma fração da anunciada. Se você move arquivos de dezenas de gigabytes com frequência, procure a velocidade após o cache esgotar.' },
      { termo: 'TBW', texto: 'Total de dados que o fabricante garante que podem ser escritos ao longo da vida. Para uso doméstico, praticamente qualquer TBW atual é folgado — você trocaria o SSD por capacidade muito antes de atingi-lo. Só é métrica relevante em uso profissional de escrita intensa.' },
      { termo: 'Formato', texto: 'M.2 NVMe é o padrão atual e conecta direto na placa-mãe. SATA (2,5 polegadas ou M.2 SATA) é bem mais lento, mas ainda é um upgrade enorme sobre disco rígido e serve bem como armazenamento secundário barato.' },
    ],
    erros: [
      { titulo: 'Comprar capacidade justa', texto: 'SSD acima de 80% de ocupação perde desempenho de escrita. Compre pensando no que você terá daqui a um ano, não no que ocupa hoje. 1 TB é o ponto em que a maioria para de se arrepender.' },
      { titulo: 'Pagar caro por Gen5 sem necessidade', texto: 'A diferença de preço entre Gen4 e Gen5 raramente se converte em experiência perceptível em jogos e uso comum. Esse dinheiro rende mais em capacidade ou em outra peça.' },
      { titulo: 'Ignorar se o modelo tem DRAM', texto: 'Dois SSDs anunciando a mesma velocidade podem se comportar de forma muito diferente sob carga se um deles for DRAM-less. Essa informação costuma estar escondida na ficha detalhada, não na página do produto.' },
      { titulo: 'Não verificar o slot da placa-mãe', texto: 'Muitas placas compartilham linhas entre o segundo slot M.2 e portas SATA, ou entregam geração menor no slot secundário. Instalar um Gen4 num slot que roda em Gen3 desperdiça o que você pagou.' },
    ],
    faixas: [
      { faixa: 'Até R$ 300', oQueEsperar: '500 GB NVMe Gen3, provavelmente sem DRAM. Ótimo para ser o disco do sistema numa máquina de orçamento apertado.' },
      { faixa: 'R$ 300 a R$ 600', oQueEsperar: '1 TB Gen3 ou Gen4 de entrada. É a compra que faz mais sentido para a maioria — capacidade resolve mais do que velocidade nessa faixa.' },
      { faixa: 'R$ 600 a R$ 1.200', oQueEsperar: '1 TB Gen4 com DRAM ou 2 TB de entrada. Bom para quem tem muitos jogos instalados ou trabalha com arquivos grandes.' },
      { faixa: 'Acima de R$ 1.200', oQueEsperar: '2 TB de topo ou Gen5. Justifica-se por volume de dados e uso profissional, não por sensação de velocidade no dia a dia.' },
    ],
    comoPontuamos: `A nota de SSDs dá peso maior ao desempenho aleatório em blocos pequenos e à velocidade sustentada após o esgotamento do cache, e peso menor à velocidade sequencial de pico — que é o número mais divulgado e o menos representativo do uso real. A presença de DRAM entra como fator relevante. TBW só influencia a nota em modelos de uso profissional. A nota de custo-benefício usa o preço por gigabyte calculado sobre o menor valor à vista praticado no Brasil nos últimos 30 dias.`,
    faq: [
      { p: 'Gen4 vale mais que Gen3 para jogos?', r: 'A diferença em tempo de carregamento de jogos entre Gen3 e Gen4 costuma ser de fração de segundo. Se o preço for parecido, pegue Gen4. Se o Gen3 for bem mais barato, compre o Gen3 com o dobro de capacidade.' },
      { p: 'Quanto de SSD eu preciso?', r: '1 TB é o tamanho que a maioria deveria comprar hoje. Com jogos ocupando de 60 a 150 GB cada e a necessidade de manter 20% livre, 500 GB aperta rápido.' },
      { p: 'Preciso de dissipador no SSD?', r: 'Gen4 de topo e praticamente todo Gen5 se beneficiam, porque reduzem desempenho ao esquentar. Muitas placas-mãe já vêm com dissipador no slot M.2 — verifique antes de comprar um separado.' },
      { p: 'Vale a pena manter um HD junto?', r: 'Como armazenamento de arquivos grandes e frios — vídeos, backups, biblioteca de mídia — o custo por terabyte do disco rígido ainda é imbatível. Para sistema, programas e jogos, não há mais razão para usar disco mecânico.' },
      { p: 'SSD DRAM-less é ruim?', r: 'Não é ruim, é limitado. Em uso doméstico leve a diferença é pequena. Sob escrita contínua e com o disco cheio, a queda aparece. Se o preço for próximo, prefira com DRAM.' },
    ],
  },

  fontes: {
    titulo: 'Comparar fontes de alimentação',
    subtitulo: 'A peça em que economizar sai mais caro',
    intro: [
      `A fonte é a única peça do computador que, ao falhar mal, pode levar as outras junto. É também a que mais recebe economia na hora de montar, porque não aparece em benchmark e não dá FPS. Essa combinação explica boa parte dos relatos de "meu PC desliga sozinho em jogo" e de placas de vídeo que morreram sem explicação.`,
      `O ponto que quase todo comparativo erra é tratar watts como a especificação principal. Watts anunciados por fabricante sem reputação frequentemente não correspondem à entrega real sob carga e com o ar quente do gabinete. Uma fonte de 500 W com certificação verificável e boa plataforma interna é mais segura que uma de 750 W genérica — e vai durar mais que dois computadores.`,
    ],
    comoLer: [
      { termo: 'Potência real', texto: 'A conta correta: some o consumo de projeto da placa de vídeo, o do processador, e acrescente cerca de 100 a 150 W para o resto. Depois adicione margem para que a fonte trabalhe entre 50% e 70% da capacidade, que é onde ela é mais eficiente e envelhece menos. Não compre para trabalhar no limite.' },
      { termo: 'Certificação 80 Plus', texto: 'Mede eficiência — quanta energia da tomada vira energia útil em vez de calor. Bronze, Gold e Platinum indicam eficiências crescentes. A certificação não mede diretamente qualidade de construção, mas fontes certificadas de marcas conhecidas raramente são ruins, e a ausência de certificação é um sinal forte de alerta.' },
      { termo: 'Modularidade', texto: 'Não modular tem todos os cabos fixos; semi-modular permite remover os secundários; full modular permite remover todos. Não muda desempenho, muda organização e fluxo de ar dentro do gabinete. Em gabinete pequeno, faz diferença real.' },
      { termo: 'Proteções', texto: 'OCP, OVP, UVP, SCP e OTP são proteções contra sobrecorrente, sobretensão, subtensão, curto e superaquecimento. São o que impede a fonte de levar o resto da máquina junto quando algo dá errado. Fonte que não lista as proteções na ficha é fonte que você não quer.' },
      { termo: 'Conectores disponíveis', texto: 'Confira quantos conectores de força de vídeo a fonte tem e de que tipo, e se batem com o que a sua placa exige. Adaptadores improvisados a partir de conectores de periférico são uma causa clássica de problema.' },
      { termo: 'Garantia', texto: 'É o melhor indicador indireto de qualidade que existe nessa categoria: o fabricante está apostando dinheiro na durabilidade. Fontes boas costumam vir com garantias longas; as ruins, com o mínimo legal.' },
    ],
    erros: [
      { titulo: 'Comprar fonte genérica de potência alta', texto: 'Watts declarados sem certificação são só um número impresso na etiqueta. Prefira menos watts de origem confiável a mais watts sem procedência.' },
      { titulo: 'Dimensionar no limite exato', texto: 'Fonte trabalhando a 95% da capacidade esquenta, faz barulho, perde eficiência e envelhece rápido. Deixe folga — ela custa pouco e você reaproveita a fonte na próxima máquina.' },
      { titulo: 'Reaproveitar fonte muito antiga', texto: 'Capacitores degradam com o tempo mesmo com pouco uso. Uma fonte de oito ou dez anos pode não entregar mais o que entregava, e o sintoma é instabilidade intermitente que você vai passar semanas culpando o software.' },
      { titulo: 'Usar adaptadores para alimentar a GPU', texto: 'Transformar conectores de periférico em conector de vídeo concentra corrente em fios que não foram dimensionados para isso. É uma das causas mais comuns de conector derretido.' },
    ],
    faixas: [
      { faixa: 'Até R$ 350', oQueEsperar: '450 a 550 W com certificação básica de marca conhecida. Atende máquinas com GPU de entrada. Abaixo dessa faixa, o risco de plataforma ruim cresce muito.' },
      { faixa: 'R$ 350 a R$ 700', oQueEsperar: '600 a 750 W Bronze ou Gold, semi-modular. Cobre a maioria das builds com GPU intermediária e é onde a relação segurança-preço é melhor.' },
      { faixa: 'R$ 700 a R$ 1.300', oQueEsperar: '850 W Gold full modular de plataforma reconhecida, com garantia longa. Indicado para GPU de topo e para quem quer reaproveitar a fonte por duas máquinas.' },
      { faixa: 'Acima de R$ 1.300', oQueEsperar: '1.000 W ou mais, Platinum ou Titanium. Necessário apenas em configurações de consumo muito alto. Fora disso, é margem que não se converte em nada.' },
    ],
    comoPontuamos: `A nota de fontes pondera certificação de eficiência, conjunto de proteções listadas pelo fabricante, tempo de garantia e reputação da plataforma interna quando ela é conhecida publicamente. Potência declarada entra como requisito de categoria, não como fator de nota — comparamos fontes dentro da mesma faixa de potência. A nota de custo-benefício considera o menor preço à vista praticado no Brasil nos últimos 30 dias e pesa a garantia, porque uma fonte que dura duas máquinas custa metade do que a etiqueta diz.`,
    faq: [
      { p: 'Quantos watts eu preciso?', r: 'Some o consumo de projeto da GPU e da CPU, acrescente 150 W para o resto e adicione 30% de margem. Na prática, a maior parte das máquinas com placa intermediária fica bem servida entre 600 e 750 W.' },
      { p: 'Bronze, Gold ou Platinum?', r: 'Gold é o ponto de equilíbrio para a maioria. Bronze de marca boa atende bem em máquinas de consumo moderado. Platinum e Titanium só se pagam em máquinas ligadas muitas horas por dia.' },
      { p: 'Fonte modular é melhor?', r: 'Não entrega mais energia nem melhora estabilidade. Melhora organização interna e fluxo de ar, o que importa em gabinete pequeno. É conveniência, não desempenho.' },
      { p: 'Posso usar a fonte antiga na máquina nova?', r: 'Se ela tem menos de cinco anos, é de marca conhecida, tem os conectores necessários e potência com folga, sim. Se falha algum desses pontos, troque — é a peça mais barata de substituir e a mais cara de ignorar.' },
      { p: 'Preciso de nobreak ou estabilizador?', r: 'Fontes com PFC ativo já lidam bem com variação de tensão, e estabilizadores comuns podem até atrapalhar. Nobreak faz sentido pela proteção contra queda de energia durante escrita em disco, especialmente em região com fornecimento instável.' },
    ],
  },

  coolers: {
    titulo: 'Comparar coolers',
    subtitulo: 'Ar ou água, e quanto de refrigeração o seu processador realmente pede',
    intro: [
      `Cooler é comprado por estética com mais frequência do que qualquer outra peça, e é onde a diferença entre marketing e física fica mais evidente. Um bom cooler de ar de torre dupla empata ou vence water coolers de 240 mm em dissipação, custa menos, não tem bomba para falhar e dura mais que o computador. A água leva vantagem em situações específicas: processadores de consumo muito alto, gabinetes com espaço vertical limitado e picos curtos de carga, em que o líquido absorve calor antes de saturar.`,
      `Antes de comparar modelos, responda três coisas: qual o consumo de projeto do seu processador, quanta altura livre o seu gabinete tem, e se ele suporta radiador e de que tamanho. Essas três respostas eliminam a maior parte do catálogo e evitam o problema mais frequente da categoria, que é comprar um cooler que não cabe.`,
    ],
    comoLer: [
      { termo: 'TDP suportado', texto: 'Quanto calor o cooler consegue dissipar. Compare com o consumo real do seu processador sob carga, não com o TDP nominal — chips modernos passam bastante do número da ficha em boost. Deixe folga se você quiser boost sustentado em vez de rebaixamento térmico.' },
      { termo: 'Altura (cooler de ar)', texto: 'A especificação que decide se você vai conseguir fechar o gabinete. Compare a altura do cooler com a folga máxima informada pelo fabricante do gabinete. Verifique também a folga sobre os pentes de memória, que coolers largos costumam invadir.' },
      { termo: 'Tamanho do radiador (water cooler)', texto: '120 mm atende processadores modestos, 240 mm cobre a maioria, 360 mm é para chips de consumo alto. O que limita não é a sua vontade e sim os pontos de montagem do gabinete. Confirme antes.' },
      { termo: 'Ruído', texto: 'Medido em decibéis a determinada rotação. Water cooler não é necessariamente mais silencioso: a bomba adiciona um ruído constante que algumas pessoas notam mais que o das ventoinhas. Curvas de ventoinha bem ajustadas na BIOS resolvem mais ruído do que trocar de cooler.' },
      { termo: 'Compatibilidade de soquete', texto: 'Verifique se o kit de montagem inclui o seu soquete. Fabricantes costumam oferecer kits avulsos para soquetes novos, mas nem sempre chegam ao Brasil rapidamente.' },
      { termo: 'Pasta térmica', texto: 'A maioria vem com pasta aplicada ou em seringa. Pasta de qualidade mediana bem aplicada rende praticamente o mesmo que pasta cara mal aplicada. A aplicação importa mais que a marca.' },
    ],
    erros: [
      { titulo: 'Comprar sem medir o gabinete', texto: 'É o erro número um da categoria. Cooler de torre alto e gabinete estreito não combinam, e você só descobre com a peça na mão. Cheque altura máxima de cooler e suporte a radiador na ficha do gabinete.' },
      { titulo: 'Water cooler barato demais', texto: 'Bomba de baixa qualidade é ponto único de falha e pode vazar. Na faixa de entrada, um bom cooler de ar entrega mais dissipação com muito menos risco.' },
      { titulo: 'Ignorar o fluxo de ar do gabinete', texto: 'O melhor cooler do mundo não funciona dentro de uma caixa fechada e sem entrada de ar. Antes de trocar de cooler, verifique se há ventoinhas de entrada e saída e se os filtros não estão saturados de poeira.' },
      { titulo: 'Excesso de pasta térmica', texto: 'Mais pasta não esfria mais. Uma quantidade central do tamanho de um grão de ervilha, espalhada pela pressão do cooler, é o suficiente na maioria dos casos.' },
    ],
    faixas: [
      { faixa: 'Até R$ 150', oQueEsperar: 'Cooler de ar de torre simples. Já é um salto grande sobre o cooler de caixa e atende processadores de até 65 W com folga.' },
      { faixa: 'R$ 150 a R$ 400', oQueEsperar: 'Torre grande ou torre dupla. É a melhor compra da categoria: dissipação de topo, sem bomba, sem manutenção.' },
      { faixa: 'R$ 400 a R$ 800', oQueEsperar: 'Water cooler 240 mm de marca conhecida. Faz sentido por espaço interno ou por preferência estética.' },
      { faixa: 'Acima de R$ 800', oQueEsperar: '360 mm com tela e controle. Necessário só para processadores de consumo alto — no resto, é estética.' },
    ],
    comoPontuamos: `A nota de coolers pondera capacidade de dissipação declarada, nível de ruído em rotação alta, qualidade do sistema de montagem e amplitude de compatibilidade de soquetes. Penalizamos water coolers de plataforma desconhecida, porque o risco de falha da bomba é assimétrico: quando falha, leva o processador junto. A nota de custo-benefício usa o menor preço à vista praticado no Brasil nos últimos 30 dias, comparando dentro da mesma classe de dissipação.`,
    faq: [
      { p: 'Water cooler é melhor que cooler de ar?', r: 'Não como regra. Coolers de ar de torre dupla competem de igual para igual com water coolers de 240 mm, custam menos e não têm bomba. A água ganha em processadores de consumo muito alto e em gabinetes onde falta altura.' },
      { p: 'O cooler que vem com o processador serve?', r: 'Para processadores de 65 W em uso comum, serve. Para manter boost alto sob carga longa, ou em chips acima disso, um cooler dedicado melhora temperatura, ruído e desempenho sustentado.' },
      { p: 'Water cooler pode vazar?', r: 'Modelos selados de marcas estabelecidas raramente vazam, mas o risco não é zero e a bomba tem vida útil. Se isso incomoda, cooler de ar elimina a preocupação.' },
      { p: 'Quantas ventoinhas o gabinete precisa?', r: 'Duas de entrada na frente e uma de saída atrás resolvem a maioria dos casos. Mais importante que a quantidade é o equilíbrio: pressão levemente positiva reduz acúmulo de poeira.' },
      { p: 'De quanto em quanto tempo troco a pasta térmica?', r: 'Em uso doméstico, de três a cinco anos, ou quando as temperaturas subirem sem outra explicação. Não é manutenção anual.' },
    ],
  },

  gabinetes: {
    titulo: 'Comparar gabinetes',
    subtitulo: 'Fluxo de ar primeiro, vidro depois',
    intro: [
      `Gabinete é a peça mais visível e a mais julgada por foto. O problema é que a foto não mostra o que decide: quanto ar entra. Muito gabinete com painel frontal de vidro fechado é bonito e sufoca a máquina — a diferença de temperatura entre um modelo com frente ventilada e um com frente vedada pode passar de dez graus, o que se traduz em ventoinhas mais barulhentas e boost menor.`,
      `A segunda coisa que a foto não mostra é se o seu hardware cabe. Comprimento máximo de placa de vídeo, altura máxima de cooler e suporte a radiador são as três medidas que eliminam metade das opções. Verifique-as antes de olhar cor, iluminação ou formato.`,
    ],
    comoLer: [
      { termo: 'Fluxo de ar frontal', texto: 'Frente em malha permite entrada de ar direta; frente em vidro obriga o ar a entrar por frestas laterais. Se o modelo que você quer tem frente fechada, conte com temperaturas mais altas ou com a necessidade de mais ventoinhas.' },
      { termo: 'Suporte a placa de vídeo', texto: 'Comprimento máximo em milímetros. Placas de três ventoinhas passam de 320 mm. Meça também se há interferência com ventoinhas frontais instaladas, que reduzem o espaço útil.' },
      { termo: 'Altura máxima de cooler', texto: 'Define quais coolers de ar cabem. Gabinetes compactos frequentemente ficam abaixo de 160 mm, o que exclui boa parte das torres grandes.' },
      { termo: 'Suporte a radiador', texto: 'Onde e de que tamanho é possível montar radiador. Nem todo gabinete que aceita 360 mm no topo tem folga para radiador e ventoinhas junto com os pentes de memória.' },
      { termo: 'Gerenciamento de cabos', texto: 'Espaço atrás da bandeja da placa-mãe, presilhas e passagens. Não afeta desempenho diretamente, mas determina se a montagem vai ser tranquila ou uma luta, e se o ar vai circular ou esbarrar em cabos.' },
      { termo: 'Filtros de poeira', texto: 'Filtros removíveis e laváveis na entrada e na base fazem diferença real na manutenção ao longo dos anos. Filtro que só sai desmontando o gabinete inteiro nunca é limpo.' },
    ],
    erros: [
      { titulo: 'Escolher pela estética antes das medidas', texto: 'Muita gente compra o gabinete primeiro e descobre depois que a placa de vídeo não entra. Faça o caminho inverso: liste as medidas do seu hardware e filtre por elas.' },
      { titulo: 'Frente de vidro sem plano de ventilação', texto: 'Se você quer o visual fechado, compense com ventoinhas de qualidade e aceite temperaturas maiores. Não espere o mesmo desempenho térmico de um modelo em malha.' },
      { titulo: 'Gabinete pequeno demais para o primeiro PC', texto: 'Formatos compactos exigem planejamento de compatibilidade e paciência na montagem. Para quem monta pela primeira vez, um formato médio dá muito menos dor de cabeça.' },
      { titulo: 'Contar com as ventoinhas de fábrica', texto: 'Muitos gabinetes vêm com uma ventoinha só, ou com ventoinhas de qualidade baixa e ruidosas. Some o custo de duas ou três ventoinhas decentes ao preço do gabinete na hora de comparar.' },
    ],
    faixas: [
      { faixa: 'Até R$ 300', oQueEsperar: 'Estrutura simples, uma ou duas ventoinhas básicas, gerenciamento de cabos limitado. Funciona, mas some o custo de ventoinhas melhores.' },
      { faixa: 'R$ 300 a R$ 600', oQueEsperar: 'Frente em malha, três ou quatro ventoinhas, espaço traseiro decente para cabos. É a faixa que atende bem a maioria.' },
      { faixa: 'R$ 600 a R$ 1.200', oQueEsperar: 'Construção em aço mais espesso, filtros bem resolvidos, suporte amplo a radiadores, montagem sem ferramenta. Diferença sentida na hora de montar e de limpar.' },
      { faixa: 'Acima de R$ 1.200', oQueEsperar: 'Acabamento premium, formatos alternativos, painéis intercambiáveis. Ganho térmico marginal sobre a faixa anterior — o que você compra é construção e acabamento.' },
    ],
    comoPontuamos: `A nota de gabinetes prioriza fluxo de ar (tipo de frente, quantidade e posicionamento de pontos de ventoinha), compatibilidade dimensional com hardware atual, qualidade dos filtros e facilidade de montagem. Estética não entra na nota de desempenho — é preferência pessoal e não se mede. A nota de custo-benefício soma ao preço do gabinete o custo estimado das ventoinhas adicionais necessárias para um fluxo de ar adequado, o que reordena bastante a lista em relação ao preço de etiqueta.`,
    faq: [
      { p: 'Frente de vidro esquenta muito?', r: 'Esquenta mais que frente em malha, e a diferença pode passar de dez graus na placa de vídeo. Dá para conviver com boas ventoinhas e uma máquina de consumo moderado, mas é uma escolha estética com custo térmico real.' },
      { p: 'Minha placa de vídeo cabe?', r: 'Compare o comprimento da placa com o máximo informado pelo gabinete e desconte a espessura de ventoinhas frontais, se você pretende instalá-las. Deixe pelo menos 10 mm de folga para os cabos de força.' },
      { p: 'Quantas ventoinhas instalar?', r: 'Duas na frente puxando ar para dentro e uma atrás empurrando para fora é a configuração base que funciona. Adicione no topo apenas se houver radiador ou se as temperaturas pedirem.' },
      { p: 'Gabinete pequeno prejudica o desempenho?', r: 'Prejudica quando restringe o fluxo de ar, o que é comum em formatos muito compactos com hardware potente. Com componentes de consumo moderado e boa ventilação, não há perda relevante.' },
      { p: 'Vale a pena gabinete com painel de vidro dos dois lados?', r: 'É escolha estética. O lado direito costuma esconder a fiação, e expô-lo exige um trabalho de organização bem mais caprichado. Sem impacto térmico relevante.' },
    ],
  },

  mouses: {
    titulo: 'Comparar mouses',
    subtitulo: 'DPI é a especificação menos importante — e a mais anunciada',
    intro: [
      `Mouse é a categoria em que o número da caixa tem a menor correlação com a experiência. DPI altíssimo aparece em destaque na embalagem e praticamente ninguém usa acima de 3.200 — jogadores competitivos costumam ficar entre 400 e 1.600. O que decide se um mouse é bom para você são coisas que a ficha técnica não captura: peso, formato em relação à sua mão, tipo de pegada e qualidade dos switches.`,
      `Como isso é pessoal, a recomendação honesta é diferente da das outras categorias: meça a sua mão, identifique como você segura o mouse (palma inteira, garra ou pontas dos dedos) e filtre por formato e peso antes de olhar sensor. Um sensor de entrada atual já é preciso o bastante para qualquer uso — a diferença entre sensores de topo é imperceptível fora de teste instrumentado.`,
    ],
    comoLer: [
      { termo: 'Peso', texto: 'A especificação que mais muda a sensação. Abaixo de 70 g é considerado leve e favorece movimentos rápidos e amplos; acima de 100 g dá mais estabilidade em mira precisa e lenta. Não existe peso certo, existe o que combina com o seu jeito de jogar.' },
      { termo: 'Formato e tamanho', texto: 'Meça o comprimento da sua mão da base do pulso à ponta do dedo médio. Mãos até 17 cm costumam se dar melhor com mouses menores; acima de 19 cm, com maiores. Formato simétrico serve para mais gente; ergonômico é mais confortável para quem usa pegada de palma.' },
      { termo: 'Sensor e DPI', texto: 'Qualquer sensor óptico atual de fabricante conhecido é preciso o suficiente. DPI alto não é vantagem — é uma escala que você ajusta no software. Ignore o número gigante da embalagem.' },
      { termo: 'Taxa de polling', texto: 'Quantas vezes por segundo o mouse reporta posição. 1.000 Hz é o padrão e atende a todo mundo. Taxas maiores existem e a diferença é debatível fora de contexto competitivo de alto nível.' },
      { termo: 'Switches', texto: 'O que determina a sensação e a durabilidade do clique. Switches ópticos eliminam o problema de clique duplo por desgaste do contato mecânico, que é a falha mais comum em mouses após alguns anos.' },
      { termo: 'Cabo ou sem fio', texto: 'Sem fio de qualidade atual não tem atraso perceptível para uso normal nem competitivo. O que muda é o preço, o peso extra da bateria e a necessidade de carregar. Cabo continua sendo mais barato pela mesma qualidade.' },
    ],
    erros: [
      { titulo: 'Escolher por DPI', texto: 'É marketing. Um mouse de 26.000 DPI não é melhor que um de 8.000 — você vai usar 800 ou 1.600 de qualquer jeito.' },
      { titulo: 'Comprar sem considerar o tamanho da mão', texto: 'Mouse desproporcional causa desconforto e piora a precisão, por melhor que seja o sensor. É o fator mais determinante da categoria e o menos considerado.' },
      { titulo: 'Ignorar os skates', texto: 'Os pés de PTFE afetam bastante o deslizamento e se desgastam. Modelos com skates de qualidade e reposição fácil envelhecem muito melhor.' },
      { titulo: 'Achar que peso leve é sempre melhor', texto: 'A moda dos ultraleves não serve a todo mundo. Quem joga com mira lenta e precisa costuma render mais com peso médio. Teste antes de assumir.' },
    ],
    faixas: [
      { faixa: 'Até R$ 150', oQueEsperar: 'Sensor competente, construção simples, switches mecânicos comuns. Já resolve para a maioria dos jogadores casuais.' },
      { faixa: 'R$ 150 a R$ 350', oQueEsperar: 'Melhor construção, cabo mais flexível, switches melhores, opções leves. Faixa de melhor equilíbrio.' },
      { faixa: 'R$ 350 a R$ 700', oQueEsperar: 'Sem fio de baixa latência, materiais melhores, peso otimizado. O ganho é conforto e conveniência, não precisão.' },
      { faixa: 'Acima de R$ 700', oQueEsperar: 'Topo competitivo: ultraleves sem fio, switches ópticos, taxas altas. Retorno bem decrescente para uso não competitivo.' },
    ],
    comoPontuamos: `A nota de mouses pondera qualidade de sensor, peso, qualidade declarada dos switches e adequação do formato a diferentes tipos de pegada. DPI máximo não entra na nota — é especificação de marketing sem correlação com uso real. Como conforto é individual, nossa nota indica adequação por tamanho de mão e tipo de pegada em vez de apontar um vencedor único. O custo-benefício usa o menor preço à vista praticado no Brasil nos últimos 30 dias.`,
    faq: [
      { p: 'Qual DPI usar para jogar?', r: 'A maioria dos jogadores competitivos fica entre 400 e 1.600 DPI, ajustando a sensibilidade dentro do jogo. Comece em 800 e ajuste até conseguir girar 180 graus com um movimento confortável do antebraço.' },
      { p: 'Mouse sem fio atrasa?', r: 'Modelos com receptor dedicado de fabricantes conhecidos têm latência indistinguível de cabo no uso real, inclusive competitivo. Bluetooth puro é outra história e não serve para jogos.' },
      { p: 'Mouse leve é melhor?', r: 'Para movimentos amplos e rápidos, ajuda. Para mira lenta e precisa, peso médio dá mais estabilidade. Depende do seu estilo, não existe resposta universal.' },
      { p: 'Vale a pena mousepad grande?', r: 'Se você usa DPI baixo e joga com movimento de braço, sim — e é um upgrade barato que melhora consistência mais que trocar de mouse.' },
      { p: 'Por que meu mouse começou a dar clique duplo?', r: 'Desgaste do switch mecânico, falha comum após alguns anos. Modelos com switch óptico não apresentam esse problema. Em alguns mouses o switch é substituível.' },
    ],
  },

  teclados: {
    titulo: 'Comparar teclados',
    subtitulo: 'Switch, layout e construção — o que você vai sentir em todas as teclas',
    intro: [
      `Teclado é onde a diferença entre o barato e o bom é mais imediata e mais duradoura. Um teclado de membrana e um mecânico decente separam-se na primeira tecla apertada, e o mecânico ainda vai estar funcionando quando você trocar de computador duas vezes. É provavelmente o melhor retorno por real de toda a periferia.`,
      `A escolha central é o switch, e ela é de gosto, não de qualidade. Lineares são suaves do começo ao fim e agradam quem joga; táteis têm um degrau perceptível no ponto de acionamento e agradam quem digita muito; clicky somam o barulho ao degrau e agradam quem gosta do som — e irritam todo mundo em volta. Se você pode, teste antes; se não pode, um switch tátil de peso médio é a escolha que menos decepciona quem não sabe do que gosta.`,
    ],
    comoLer: [
      { termo: 'Tipo de switch', texto: 'Linear (suave, sem degrau), tátil (degrau perceptível) ou clicky (degrau mais som). Além do tipo, importa a força de acionamento em gramas: switches leves cansam menos em digitação longa; pesados reduzem toque acidental.' },
      { termo: 'Layout e tamanho', texto: 'Completo tem teclado numérico; TKL corta o numérico e libera espaço para o mouse; 75% e 65% compactam ainda mais. Se você trabalha com números, o numérico não é negociável. Se você joga com movimentos amplos de mouse, TKL ou menor faz diferença real de espaço na mesa.' },
      { termo: 'Layout ABNT2', texto: 'Confirme sempre. Teclado importado em layout americano não tem a tecla de cedilha nem os acentos no lugar esperado, e isso incomoda todos os dias em português.' },
      { termo: 'Hot-swap', texto: 'Permite trocar switches sem solda. Transforma o teclado em algo que acompanha o seu gosto ao longo dos anos e permite substituir uma tecla que falhou em vez do teclado inteiro.' },
      { termo: 'Material das keycaps', texto: 'ABS é mais comum e brilha com o uso ao longo do tempo; PBT é mais resistente e mantém a textura por muito mais tempo. É uma diferença que você percebe depois de um ano, não na loja.' },
      { termo: 'Rollover e anti-ghosting', texto: 'Capacidade de registrar várias teclas simultâneas corretamente. Qualquer teclado mecânico atual resolve isso. Em teclados de membrana baratos, ainda é uma limitação real em jogos.' },
    ],
    erros: [
      { titulo: 'Comprar clicky sem pensar em quem está por perto', texto: 'O som que parece agradável na loja se torna um problema em casa compartilhada, em escritório e em chamada de voz. Se houver dúvida, prefira tátil.' },
      { titulo: 'Ignorar o layout ABNT2', texto: 'Preço atraente de teclado importado costuma esconder layout americano. Digitar português nele é desconfortável todos os dias.' },
      { titulo: 'Comprar mecânico genérico muito barato', texto: 'Existe uma faixa onde o teclado é anunciado como mecânico mas usa switches de qualidade ruim, com sensação inconsistente entre teclas. Prefira marca conhecida na mesma faixa de preço.' },
      { titulo: 'Não considerar o espaço da mesa', texto: 'Teclado completo com mousepad grande não cabe em muita mesa. Meça antes — TKL costuma ser a decisão que as pessoas dizem que deveriam ter tomado antes.' },
    ],
    faixas: [
      { faixa: 'Até R$ 250', oQueEsperar: 'Mecânico de entrada ou membrana de boa construção. Já é um salto grande sobre teclado de kit.' },
      { faixa: 'R$ 250 a R$ 500', oQueEsperar: 'Mecânico de marca conhecida, switches consistentes, construção sólida, muitas vezes com hot-swap. Melhor faixa da categoria.' },
      { faixa: 'R$ 500 a R$ 1.000', oQueEsperar: 'Estrutura em alumínio, espuma interna, keycaps PBT, som trabalhado. Diferença perceptível a cada tecla.' },
      { faixa: 'Acima de R$ 1.000', oQueEsperar: 'Teclados custom ou premium. Terreno de hobby — o ganho funcional sobre a faixa anterior é pequeno e o ganho de sensação é grande para quem se importa.' },
    ],
    comoPontuamos: `A nota de teclados pondera qualidade e consistência dos switches, construção da estrutura, material das keycaps, presença de hot-swap e disponibilidade de layout ABNT2 — que pesa bastante, porque um teclado excelente em layout americano é um teclado pior para quem escreve em português todos os dias. Não pontuamos iluminação. O custo-benefício usa o menor preço à vista praticado no Brasil nos últimos 30 dias.`,
    faq: [
      { p: 'Qual switch escolher?', r: 'Linear se você joga muito e quer curso suave; tátil se você digita muito e quer sentir o acionamento; clicky se você gosta do som e não divide o ambiente. Na dúvida, tátil de peso médio é a escolha mais segura.' },
      { p: 'Mecânico melhora o desempenho em jogos?', r: 'Melhora consistência e conforto, o que ajuda indiretamente. Não transforma sua habilidade. O ganho maior é em durabilidade e sensação de uso, todos os dias.' },
      { p: 'TKL ou completo?', r: 'Completo se você lida com números com frequência. TKL se você joga com movimentos amplos de mouse ou tem mesa apertada. É a decisão mais pessoal e a que mais gente muda depois.' },
      { p: 'Vale a pena hot-swap?', r: 'Vale, e é subestimado. Permite trocar o tipo de switch quando seu gosto mudar e substituir uma única tecla que falhou em vez do teclado inteiro.' },
      { p: 'PBT ou ABS nas keycaps?', r: 'PBT resiste melhor ao brilho e mantém a textura por muito mais tempo. ABS é mais barato e mais comum. Depois de um ano de uso intenso, a diferença é visível.' },
    ],
  },

  headsets: {
    titulo: 'Comparar headsets',
    subtitulo: 'Som, microfone e conforto — e por que o terceiro decide',
    intro: [
      `Headset é comprado pelo som e abandonado pelo conforto. Um modelo que aperta a cabeça ou esquenta a orelha vira um par de fones que você tira depois de quarenta minutos, por melhor que soe. Peso, pressão do arco e material das almofadas decidem se o headset vai ser usado ou vai ficar na gaveta — e são exatamente as informações que a página de produto não destaca.`,
      `A segunda coisa que muda a decisão é para que você usa. Para jogo competitivo, o que importa é posicionamento sonoro claro, e drivers grandes com muito grave atrapalham mais do que ajudam. Para música e filme, o oposto. Para chamadas e trabalho, o microfone é a peça central e a maior parte dos headsets de jogo tem microfone medíocre — nesse caso, um par de fones bons somado a um microfone separado costuma render mais pelo mesmo dinheiro.`,
    ],
    comoLer: [
      { termo: 'Tipo de acústica', texto: 'Fechado isola o ruído externo e não vaza som, o que é o ideal para ambiente compartilhado. Aberto oferece palco sonoro mais amplo e natural, esquenta menos a orelha, mas vaza som nos dois sentidos.' },
      { termo: 'Tamanho do driver', texto: 'Drivers maiores movem mais ar, o que geralmente significa mais corpo no grave. Não é indicador de qualidade — afinação e material importam mais que diâmetro.' },
      { termo: 'Impedância', texto: 'Headsets de jogo costumam ter impedância baixa e funcionam direto na placa-mãe ou no console. Fones de impedância alta pedem amplificação para render, o que adiciona custo.' },
      { termo: 'Microfone', texto: 'Verifique se é destacável e se o padrão é cardioide, que capta melhor a sua voz e menos o ambiente. Microfone de headset raramente iguala um microfone dedicado de entrada — se você grava ou faz chamadas o dia todo, considere separar as duas funções.' },
      { termo: 'Peso e pressão do arco', texto: 'Acima de 350 g o peso começa a incomodar em sessões longas. Arco muito apertado causa dor em quem usa óculos. São os dois fatores que mais determinam se o headset será usado de fato.' },
      { termo: 'Som surround virtual', texto: 'Processamento que simula canais múltiplos em dois drivers. Ajuda alguns jogadores a localizar sons e atrapalha outros, borrando a imagem estéreo. É um recurso que se testa, não que se compra por especificação.' },
    ],
    erros: [
      { titulo: 'Escolher pelo grave', texto: 'Grave forte impressiona nos primeiros minutos e mascara pistas de posição em jogo competitivo. Para tiro em primeira pessoa, som equilibrado com médios claros rende mais.' },
      { titulo: 'Ignorar conforto para quem usa óculos', texto: 'Arco apertado com almofada firme pressiona a haste dos óculos contra a cabeça. Prefira almofadas macias e pressão moderada.' },
      { titulo: 'Comprar headset caro pelo microfone', texto: 'Mesmo modelos caros costumam ter microfone apenas razoável. Se a qualidade de voz importa, fones bons mais um microfone de entrada dedicado entregam muito mais pelo mesmo total.' },
      { titulo: 'Sem fio sem verificar a autonomia', texto: 'Autonomia baixa transforma o headset em algo que você está sempre carregando. Confira o valor declarado e desconte, porque uso com iluminação e volume alto reduz bastante.' },
    ],
    faixas: [
      { faixa: 'Até R$ 200', oQueEsperar: 'Entrada com cabo. Som razoável, microfone básico, construção em plástico. Serve para começar.' },
      { faixa: 'R$ 200 a R$ 500', oQueEsperar: 'Melhor conforto e afinação, microfone destacável, construção mais durável. Faixa de melhor equilíbrio.' },
      { faixa: 'R$ 500 a R$ 1.000', oQueEsperar: 'Sem fio de baixa latência ou fechados de boa afinação, almofadas melhores, autonomia decente.' },
      { faixa: 'Acima de R$ 1.000', oQueEsperar: 'Topo de linha com áudio bem trabalhado. Nessa faixa, fones dedicados mais microfone separado costumam entregar mais qualidade pelo mesmo valor.' },
    ],
    comoPontuamos: `A nota de headsets pondera qualidade sonora relatada para uso em jogos, qualidade do microfone, conforto estimado a partir de peso e tipo de almofada, e construção. Damos peso alto ao conforto porque é o fator que mais determina se o produto continua sendo usado depois do primeiro mês, e é o menos coberto pelas fichas técnicas. Recursos de surround virtual não somam pontos, já que o resultado varia por pessoa. O custo-benefício usa o menor preço à vista praticado no Brasil nos últimos 30 dias.`,
    faq: [
      { p: 'Headset ou fone com microfone separado?', r: 'Para jogar apenas, headset resolve e é mais prático. Para quem também grava, faz chamadas longas ou ouve música com atenção, fones dedicados mais um microfone separado entregam bem mais pelo mesmo orçamento a partir de uns R$ 500.' },
      { p: 'Surround 7.1 vale a pena?', r: 'É processamento virtual em dois drivers. Algumas pessoas localizam sons melhor com ele, outras acham a imagem sonora borrada. Teste com e sem antes de decidir — não é um recurso que se compra por especificação.' },
      { p: 'Sem fio tem atraso no áudio?', r: 'Modelos com receptor dedicado têm latência baixa o suficiente para jogos. Bluetooth introduz atraso perceptível e não é indicado para jogar, embora sirva bem para música.' },
      { p: 'Uso óculos, o que devo procurar?', r: 'Almofadas macias de memória, pressão de arco moderada e peso abaixo de 320 g. Alguns modelos têm canal específico para a haste dos óculos, o que ajuda bastante.' },
      { p: 'Aberto ou fechado?', r: 'Fechado se você divide ambiente ou joga com microfone aberto, porque isola e não vaza. Aberto se você usa em ambiente silencioso e quer palco sonoro mais amplo e menos calor na orelha.' },
    ],
  },
}
