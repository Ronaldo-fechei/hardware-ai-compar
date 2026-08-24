/**
 * content/autores.ts
 *
 * ⚠️ PREENCHA COM INFORMAÇÃO VERDADEIRA. Este arquivo é a correção mais
 * importante do pacote e a única que eu não posso escrever por você.
 *
 * O revisor do AdSense procura uma pessoa real por trás das recomendações
 * de compra. Bio inventada é pior do que "Equipe Editorial": credencial
 * falsa é violação de política, não só conteúdo fraco.
 *
 * Regra do que escrever: só o que você consegue provar se perguntarem.
 *   ✅ "monto e faço manutenção de PC desde 2015"       (se for verdade)
 *   ✅ "trabalho com gestão de manutenção de frota há 11 anos" (verdade, e
 *       explica a origem do método: comparar custo x durabilidade)
 *   ❌ "engenheiro de hardware certificado"             (se não for)
 *   ❌ "testamos em laboratório próprio"                (você não testa)
 */

export type Autor = {
  slug: string
  nome: string
  cargo: string
  bio: string
  bioCurta: string
  foto: string
  desde: string
  links: { linkedin?: string; github?: string; instagram?: string; email?: string }
  especialidades: string[]
}

export const AUTORES: Record<string, Autor> = {
  'ronaldo-bueno': {
    slug: 'ronaldo-bueno',

    // TODO: confirme o nome como você quer assinar publicamente
    nome: 'Ronaldo Bueno',
    cargo: 'Fundador e editor da BestHard',

    // TODO: reescreva com a SUA história real. Modelo abaixo — 140 palavras,
    // que é o tamanho certo: longo o bastante pra ter substância, curto o
    // bastante pra ninguém pular.
    bio: `Sou de Diadema, São Paulo, e trabalho há mais de dez anos com gestão de manutenção de frota — a rotina de decidir qual peça compensa trocar, qual dura e qual só parece barata na nota fiscal. Foi esse hábito que virou a BestHard.

Comecei o site depois de me irritar com comparativos de hardware que repetiam a ficha técnica do fabricante e terminavam em "o melhor é o mais caro". Aqui a pergunta é outra: dado o seu orçamento em reais e o que você vai rodar, qual peça entrega mais e onde não vale gastar a mais.

Não tenho bancada de testes. Os números de desempenho vêm de fontes que eu identifico em cada página, e o trabalho da BestHard é cruzar esses dados com preço praticado no Brasil — que é a variável que ninguém de fora considera.`,

    bioCurta:
      'Fundador da BestHard. Cruza dados de desempenho com preço praticado no Brasil para dizer o que compensa em cada orçamento.',

    // TODO: coloque uma foto SUA em /public/autores/. Foto real, rosto visível.
    // Avatar genérico ou banco de imagens conta contra.
    foto: '/autores/ronaldo-bueno.jpg',

    desde: '2026-01', // TODO: mês em que o site começou

    // TODO: preencha os que existirem. Deixe fora os que não existem —
    // link quebrado é pior que ausência.
    links: {
      linkedin: '', // ex: 'https://www.linkedin.com/in/seu-perfil'
      github: '',
      instagram: '',
      email: 'contato@besthard.com.br',
    },

    especialidades: [
      'Custo-benefício de hardware no mercado brasileiro',
      'Builds por faixa de orçamento',
      'Compatibilidade e gargalo entre CPU e GPU',
    ],
  },
}

export const AUTOR_PADRAO = AUTORES['ronaldo-bueno']
