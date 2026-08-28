import type { Metadata } from 'next'
import Link from 'next/link'
import { EditorialPage, EditorialSection, EditorialList } from '@/components/EditorialPage'
import { SITE_URL } from '@/lib/site'

/**
 * Página de autor — substitui "Equipe Editorial BestHard".
 *
 * O revisor do AdSense procura uma pessoa real por trás das recomendações de
 * compra. Marca coletiva sem nome, sem rosto e sem histórico é o padrão de
 * site de afiliado, e conta contra na avaliação de conteúdo de baixo valor.
 *
 * ⚠️ REVISE ANTES DO DEPLOY: o texto abaixo usa só informação que você já me
 * contou, mas é informação sua indo para uma página pública. Corte o que não
 * quiser expor e ajuste o nome de assinatura se preferir outro.
 */

// Assim que você colocar a foto em /public/autores/ronaldo-bueno.jpg,
// troque null pelo caminho: const FOTO = '/autores/ronaldo-bueno.jpg'
const FOTO: string | null = "/autores/ronaldo-bueno.jpg"

const NOME = 'Ronaldo Bueno'
const CARGO = 'Fundador e editor da BestHard'
const EMAIL = 'contato@besthard.com.br'

export const metadata: Metadata = {
  title: `${NOME} — ${CARGO}`,
  description:
    'Quem escreve na BestHard: como os comparativos são feitos, de onde vêm os dados de desempenho e por que o preço praticado no Brasil entra na conta.',
  alternates: { canonical: `${SITE_URL}/autores/ronaldo-bueno` },
  openGraph: {
    type: 'profile',
    title: NOME,
    description: `${CARGO} — comparativos de hardware com preço do mercado brasileiro.`,
  },
}

function Avatar() {
  if (FOTO) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={FOTO}
        alt={`Foto de ${NOME}`}
        width={96}
        height={96}
        className="h-24 w-24 rounded-full object-cover"
        style={{ border: '2px solid var(--border)' }}
      />
    )
  }
  return (
    <div
      aria-hidden="true"
      className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full text-2xl font-bold"
      style={{ background: 'var(--surface2)', color: 'var(--accent)', border: '2px solid var(--border)' }}
    >
      RB
    </div>
  )
}

export default function AutorPage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/autores/ronaldo-bueno#person`,
    name: NOME,
    jobTitle: CARGO,
    url: `${SITE_URL}/autores/ronaldo-bueno`,
    email: EMAIL,
    ...(FOTO ? { image: `${SITE_URL}${FOTO}` } : {}),
    knowsAbout: [
      'Custo-benefício de hardware no mercado brasileiro',
      'Builds de PC por faixa de orçamento',
      'Compatibilidade e gargalo entre CPU e GPU',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'BestHard',
      url: SITE_URL,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <EditorialPage
        eyebrow="// autoria"
        title={NOME}
        description={CARGO}
        updatedAt="24 de agosto de 2026"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <Avatar />
          <div className="space-y-3">
            <p>
              Trabalho há mais de dez anos com gestão de manutenção de frota — a rotina de
              decidir qual peça compensa trocar, qual dura e qual só parece barata na nota
              fiscal. É de lá que vem o método da BestHard: comparar desempenho contra
              preço e durabilidade, e não simplesmente apontar o modelo mais caro da lista.
            </p>
            <p>
              Criei o site depois de me cansar de comparativo de hardware que repete a ficha
              técnica do fabricante e termina em &ldquo;o melhor é o topo de linha&rdquo;. A pergunta
              aqui é outra: dado o seu orçamento em reais e o que você vai rodar, qual peça
              entrega mais — e onde não faz sentido gastar a mais.
            </p>
          </div>
        </div>

        <EditorialSection title="O que eu cubro">
          <EditorialList items={[
            'Processadores, placas de vídeo e desempenho em jogos.',
            'Montagem de PC por faixa de orçamento e compatibilidade entre peças.',
            'Monitores, armazenamento, memória e periféricos.',
            'Preço praticado no mercado brasileiro — a variável que comparativo de fora ignora.',
          ]} />
        </EditorialSection>

        <EditorialSection title="De onde vêm os números">
          <p>
            Sejamos diretos sobre isso: a BestHard não tem bancada de testes. Os dados de
            desempenho e os FPS estimados vêm de fontes de terceiros, identificadas na
            página de metodologia, e são tratados como estimativa — nunca apresentados como
            medição própria. O trabalho que eu faço é cruzar esses dados com o preço
            praticado aqui e traduzir isso em uma recomendação por orçamento.
          </p>
          <Link href="/metodologia" className="font-semibold" style={{ color: 'var(--accent)' }}>
            Leia a metodologia completa →
          </Link>
        </EditorialSection>

        <EditorialSection title="Independência e como o site se paga">
          <p>
            A BestHard não é patrocinada por fabricante nem por loja. O conteúdo é gratuito
            e o site se sustenta por comissão de afiliado em links de Amazon, Mercado Livre
            e Shopee — sem custo extra para quem compra e sem influência sobre o que é
            recomendado. Se um produto não vale o preço, é isso que está escrito.
          </p>
          <Link href="/transparencia" className="font-semibold" style={{ color: 'var(--accent)' }}>
            Política de transparência →
          </Link>
        </EditorialSection>

        <EditorialSection title="Correções e contato">
          <p>
            Hardware muda rápido e preço muda mais rápido ainda. Se encontrar informação
            incorreta ou desatualizada, me mande a página e a fonte em{' '}
            <a href={`mailto:${EMAIL}`} className="font-semibold" style={{ color: 'var(--accent)' }}>
              {EMAIL}
            </a>
            . Correção feita fica registrada na data de atualização do conteúdo.
          </p>
        </EditorialSection>
      </EditorialPage>
    </>
  )
}
