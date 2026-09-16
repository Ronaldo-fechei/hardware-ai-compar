// Conteúdo editorial fixo das páginas de ferramenta (/montar, /gargalo,
// /builds, /catalogo). Renderizado no servidor pelo componente ToolGuide.

export interface GuiaFerramenta {
  secoes: {
    titulo: string;
    paragrafos?: string[];
    passos?: string[];
    itens?: string[];
  }[];
  faq: { pergunta: string; resposta: string }[];
  leiaTambem: { titulo: string; href: string }[];
}

export const GUIA_MONTAR: GuiaFerramenta = {
  secoes: [
    {
      titulo: "O que o assistente de montagem faz",
      paragrafos: [
        "O assistente recebe três informações — quanto você pode gastar, para que vai usar o computador e em qual resolução pretende jogar ou trabalhar — e devolve uma configuração completa: processador, placa-mãe, memória, armazenamento, placa de vídeo, fonte, gabinete e refrigeração. A sugestão é gerada por um modelo de linguagem orientado a respeitar compatibilidade de soquete, padrão de memória e potência da fonte, e a distribuir o orçamento de acordo com o uso informado.",
        "Ele não substitui a pesquisa de preço na hora da compra. O objetivo é dar um ponto de partida equilibrado para você não gastar demais em uma peça e faltar dinheiro para outra — o erro mais comum de quem monta o primeiro PC.",
      ],
    },
    {
      titulo: "Como o orçamento é dividido",
      paragrafos: [
        "Arredondamos o valor informado para baixo, na centena, para que a montagem nunca ultrapasse o que você disse que pode gastar. A partir daí, a divisão muda conforme o uso. Em um PC para jogos, a placa de vídeo costuma ficar com 35% a 45% do total, porque é ela que define a quantidade de quadros por segundo. Em um PC para edição de vídeo ou programação, o peso migra para processador, memória e SSD.",
        "A resolução também muda a conta. Em 1080p, o processador limita mais o desempenho, então vale não economizar nele. Em 1440p e 4K, a placa de vídeo passa a trabalhar no limite e merece uma fatia maior.",
      ],
    },
    {
      titulo: "Exemplo prático: R$ 5.000 para jogos em 1080p",
      passos: [
        "Informe R$ 5.000, selecione “Jogos” e “1080p”.",
        "Espere uma divisão próxima de R$ 2.000 para a placa de vídeo, R$ 900 a R$ 1.100 para processador, cerca de R$ 700 para placa-mãe e memória, R$ 350 para um SSD NVMe de 1 TB e o restante para fonte e gabinete.",
        "Confira se a fonte sugerida tem certificação 80 Plus e margem de pelo menos 30% sobre o consumo estimado.",
        "Antes de comprar, pesquise o preço de cada peça: promoções mudam a melhor escolha de uma semana para outra.",
      ],
    },
    {
      titulo: "Limitações que você precisa conhecer",
      itens: [
        "Os preços são referências e variam diariamente entre lojas.",
        "A compatibilidade é verificada pelas especificações, mas medidas físicas (altura do cooler, comprimento da placa de vídeo) devem ser conferidas no manual do gabinete.",
        "Estimativas de FPS dependem de drivers, versão do jogo e configurações gráficas; use como ordem de grandeza.",
        "O assistente não considera peças usadas nem importação direta.",
      ],
    },
  ],
  faq: [
    {
      pergunta: "Qual o orçamento mínimo aceito?",
      resposta:
        "R$ 500. Abaixo disso não é possível montar um PC completo com peças novas; para valores baixos, vale considerar um upgrade da máquina atual.",
    },
    {
      pergunta: "A configuração inclui monitor, teclado e sistema operacional?",
      resposta:
        "Não. O orçamento é usado apenas para o gabinete e seus componentes internos. Periféricos e licença do Windows devem ser somados à parte.",
    },
    {
      pergunta: "Posso confiar na compatibilidade das peças?",
      resposta:
        "A sugestão respeita soquete, chipset, tipo de memória e potência, mas confira sempre a lista de compatibilidade (QVL) do fabricante da placa-mãe e as medidas do gabinete antes de fechar a compra.",
    },
    {
      pergunta: "Por que a sugestão muda quando troco a resolução?",
      resposta:
        "Porque a resolução muda qual peça limita o desempenho. Em 1080p o processador pesa mais; em 1440p e 4K, a placa de vídeo. O assistente redistribui o orçamento para equilibrar as duas.",
    },
  ],
  leiaTambem: [
    { titulo: "Como montar um PC passo a passo", href: "/blog/como-montar-um-pc-passo-a-passo-2026" },
    { titulo: "Monte um PC gamer com R$ 3.000", href: "/blog/monte-pc-gamer-r3000-2026" },
    { titulo: "Qual fonte comprar: guia de watts", href: "/blog/qual-fonte-comprar-guia-watts-2026" },
  ],
};

export const GUIA_GARGALO: GuiaFerramenta = {
  secoes: [
    {
      titulo: "O que é gargalo e o que o simulador mostra",
      paragrafos: [
        "Gargalo acontece quando uma peça trabalha no limite enquanto a outra fica ociosa esperando. Em jogos, a situação clássica é um processador que não consegue preparar os quadros na velocidade que a placa de vídeo seria capaz de desenhar — ou o contrário, uma placa de vídeo fraca segurando um processador forte.",
        "O simulador cruza o processador, a placa de vídeo e a resolução que você informar e estima qual componente tende a limitar o desempenho, com um percentual aproximado e uma explicação do porquê. A estimativa é gerada por um modelo de linguagem a partir das especificações e de resultados de desempenho conhecidos das peças.",
      ],
    },
    {
      titulo: "Como interpretar o percentual",
      itens: [
        "Até 10%: combinação equilibrada. Não há motivo para trocar peças por causa de gargalo.",
        "De 10% a 20%: desequilíbrio perceptível em alguns jogos, mas aceitável. Ajustes gráficos resolvem boa parte.",
        "Acima de 20%: uma peça está claramente segurando a outra. Aqui vale planejar o upgrade da peça limitante antes de qualquer outra.",
      ],
    },
    {
      titulo: "Exemplo prático",
      paragrafos: [
        "Um Ryzen 5 3600 com uma RTX 4070 em 1080p tende a mostrar o processador como limitante: em jogos competitivos, a placa de vídeo fica com uso abaixo de 70%. Ao mudar a resolução para 1440p, a mesma combinação fica mais equilibrada, porque a placa de vídeo passa a ter mais trabalho por quadro. Esse é o motivo pelo qual o simulador pede a resolução: o gargalo não é uma propriedade fixa das peças, e sim do cenário de uso.",
      ],
    },
    {
      titulo: "Como confirmar no seu próprio PC",
      passos: [
        "Instale o MSI Afterburner (ou use o overlay do driver da placa de vídeo).",
        "Jogue por alguns minutos com as configurações que você usa no dia a dia.",
        "Se o uso da placa de vídeo ficar consistentemente abaixo de 90% enquanto algum núcleo do processador está perto de 100%, o processador está limitando.",
        "Se a placa de vídeo está em 99% e o processador sobra, a placa de vídeo é o limite — o que é normal e desejável em jogos pesados.",
      ],
    },
  ],
  faq: [
    {
      pergunta: "Todo PC tem algum gargalo?",
      resposta:
        "Sim. Sempre existe uma peça que chega ao limite primeiro. O objetivo não é eliminar o gargalo, e sim evitar que ele seja grande a ponto de desperdiçar o dinheiro gasto na outra peça.",
    },
    {
      pergunta: "O resultado do simulador é exato?",
      resposta:
        "Não. É uma estimativa. O resultado real depende do jogo, dos drivers, da memória RAM e das configurações gráficas. Use-o para orientar decisões e confirme com o monitoramento descrito acima.",
    },
    {
      pergunta: "Memória RAM causa gargalo?",
      resposta:
        "Pode causar. Memória em canal único ou abaixo de 16 GB derruba o desempenho do processador em jogos. O simulador considera CPU e GPU; verifique a RAM separadamente.",
    },
    {
      pergunta: "Vale aumentar a resolução para reduzir o gargalo do processador?",
      resposta:
        "Vale, se o seu monitor suportar. Em resolução maior a placa de vídeo trabalha mais e o processador deixa de ser o limite, sem nenhum custo extra.",
    },
  ],
  leiaTambem: [
    { titulo: "O que é gargalo (bottleneck) e como evitar", href: "/blog/o-que-e-gargalo-bottleneck-como-evitar-2026" },
    { titulo: "Upgrade de PC antigo: o que trocar primeiro", href: "/blog/upgrade-pc-antigo-o-que-trocar-primeiro" },
    { titulo: "Melhor processador para jogos", href: "/blog/melhor-processador-para-jogos-2026" },
  ],
};

export const GUIA_BUILDS: GuiaFerramenta = {
  secoes: [
    {
      titulo: "Para que serve o comparador de builds",
      paragrafos: [
        "Quando você está entre duas configurações — por exemplo, a que a loja montou e a que você pesquisou —, comparar peça por peça é trabalhoso. O comparador recebe processador, placa de vídeo, memória e armazenamento de cada build e devolve notas de 0 a 100 em quatro a seis critérios, um vencedor e uma explicação em linguagem simples.",
        "As notas são geradas por um modelo de linguagem com base nas especificações informadas. Elas servem para comparar as duas builds entre si, não para comparar com notas de outros sites.",
      ],
    },
    {
      titulo: "Critérios avaliados",
      itens: [
        "Desempenho: capacidade em jogos e em aplicações pesadas.",
        "Custo-benefício: o que cada real entrega em desempenho.",
        "Eficiência: consumo de energia e calor gerado.",
        "Potencial de upgrade: se a plataforma aceita processadores e memórias mais novos.",
        "Equilíbrio: se processador e placa de vídeo estão na mesma faixa.",
      ],
    },
    {
      titulo: "Exemplo prático",
      paragrafos: [
        "Build A com Ryzen 5 5600 e RTX 4060, contra Build B com Ryzen 5 7600 e RX 7600. As placas de vídeo entregam desempenho parecido em 1080p, mas a Build B usa a plataforma AM5 com memória DDR5, que aceita processadores mais novos. O comparador tende a dar vantagem em potencial de upgrade para a Build B e em eficiência e recursos de reconstrução de imagem (DLSS) para a Build A. O veredito final depende de qual critério importa mais para você — e é por isso que mostramos as notas separadas, e não só um vencedor.",
      ],
    },
    {
      titulo: "Dicas para uma comparação justa",
      passos: [
        "Escreva o modelo completo das peças (por exemplo, “RTX 4060 8 GB”, e não só “4060”).",
        "Informe a capacidade e o tipo da memória (“32 GB DDR5 6000”).",
        "Indique o tipo do SSD (NVMe ou SATA), porque isso muda o tempo de carregamento.",
        "Some fonte, placa-mãe e gabinete na sua planilha: o comparador avalia as peças principais.",
      ],
    },
  ],
  faq: [
    {
      pergunta: "Preciso preencher todos os campos?",
      resposta:
        "Não. Basta um componente em cada build, mas a comparação fica mais precisa quanto mais completa for a descrição.",
    },
    {
      pergunta: "A ordem das builds muda o resultado?",
      resposta:
        "Não. A comparação de A com B é tratada como a mesma de B com A.",
    },
    {
      pergunta: "O comparador considera o preço?",
      resposta:
        "Considera preços de referência de mercado para o critério de custo-benefício. Como os preços variam, confira os valores reais antes de decidir.",
    },
    {
      pergunta: "Posso comparar um notebook com um desktop?",
      resposta:
        "Pode, mas lembre que as versões para notebook de processadores e placas de vídeo têm limite de consumo menor e costumam render menos que as de desktop com o mesmo nome.",
    },
  ],
  leiaTambem: [
    { titulo: "PC gamer barato e com bom custo-benefício", href: "/blog/pc-gamer-barato-custo-beneficio-2026" },
    { titulo: "Ryzen 5 9600X vs i5-14600K", href: "/blog/ryzen-5-9600x-vs-i5-14600k-2026" },
    { titulo: "Como escolher placa-mãe: chipset e soquete", href: "/blog/como-escolher-placa-mae-chipset-socket-2026" },
  ],
};

export const GUIA_CATALOGO: GuiaFerramenta = {
  secoes: [
    {
      titulo: "Como usar o catálogo",
      paragrafos: [
        "O catálogo reúne os produtos que acompanhamos, separados por categoria: processadores, placas de vídeo, monitores, memórias, SSDs, coolers, fontes, gabinetes e periféricos. Em vez de digitar o nome exato de um modelo, você escolhe dois itens da lista e vê a comparação lado a lado.",
      ],
      passos: [
        "Escolha a categoria.",
        "Selecione o produto A e o produto B.",
        "Leia as notas por critério e a explicação — não só a nota final.",
        "Abra a ficha de cada produto para ver especificações completas, pontos fortes, pontos fracos e alternativas.",
      ],
    },
    {
      titulo: "Como os produtos entram no catálogo",
      paragrafos: [
        "Incluímos modelos que estão à venda no Brasil e que aparecem com frequência nas dúvidas dos leitores. Cada ficha reúne as especificações do fabricante, a faixa de uso (entrada, intermediário, avançado e topo de linha) e uma nota de desempenho relativa à própria categoria. Uma nota 90 em SSD não é comparável a uma nota 90 em placa de vídeo.",
        "Nenhum fabricante ou loja paga para ter um produto listado ou para melhorar sua nota. Quando há links de compra, eles podem gerar comissão, o que está explicado na página de transparência.",
      ],
    },
    {
      titulo: "O que olhar em cada categoria",
      itens: [
        "Processadores: desempenho por núcleo para jogos, número de núcleos para produtividade e plataforma (AM4, AM5, LGA 1700, LGA 1851).",
        "Placas de vídeo: quantidade de VRAM (8 GB já limita jogos novos em qualidade alta), consumo e recursos de reconstrução de imagem.",
        "SSDs: interface (NVMe Gen3, Gen4 ou Gen5), presença de DRAM e durabilidade (TBW).",
        "Fontes: certificação de eficiência, qualidade dos componentes e garantia — nunca só a potência.",
        "Monitores: tipo de painel, taxa de atualização e resolução adequada à sua placa de vídeo.",
      ],
    },
  ],
  faq: [
    {
      pergunta: "Com que frequência o catálogo é atualizado?",
      resposta:
        "Revisamos as fichas quando há lançamento relevante, mudança de preço significativa ou correção enviada por leitores. A data de revisão aparece em cada página editorial.",
    },
    {
      pergunta: "Por que um produto que eu procuro não aparece?",
      resposta:
        "O catálogo prioriza modelos com boa disponibilidade no Brasil. Você pode comparar qualquer produto digitando o nome no comparador livre da página inicial, ou sugerir uma inclusão pela página de contato.",
    },
    {
      pergunta: "Os preços mostrados são atualizados em tempo real?",
      resposta:
        "Não. São preços de referência. Sempre confirme o valor atual na loja antes de comprar.",
    },
  ],
  leiaTambem: [
    { titulo: "Melhor placa de vídeo custo-benefício", href: "/blog/melhor-placa-de-video-custo-beneficio-2026" },
    { titulo: "Melhor SSD para jogos", href: "/blog/melhor-ssd-para-jogos-2026" },
    { titulo: "Quanto de RAM para jogos", href: "/blog/quanto-de-ram-para-jogos-2026" },
  ],
};
