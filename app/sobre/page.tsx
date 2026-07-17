import type { Metadata } from 'next'
import Link from 'next/link'
import { EditorialList, EditorialPage, EditorialSection } from '@/components/EditorialPage'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Sobre o BestHard',
  description: 'Conheça a missão, a equipe editorial e os princípios que orientam as análises e comparações de hardware do BestHard.',
  alternates: { canonical: `${SITE_URL}/sobre` },
}

export default function SobrePage() {
  return (
    <EditorialPage
      eyebrow="// sobre o besthard"
      title="Hardware explicado para decisões melhores"
      description="O BestHard é um projeto editorial brasileiro independente que organiza especificações, contexto de uso e faixas de orçamento para ajudar pessoas a escolher peças e periféricos sem pagar pelo que não precisam."
      updatedAt="16 de julho de 2026"
    >
      <EditorialSection title="Nossa missão">
        <p>Traduzimos informações técnicas em recomendações práticas para o mercado brasileiro. O objetivo não é apontar um único “melhor produto”, mas explicar qual opção faz sentido para cada orçamento, resolução, tipo de jogo e possibilidade de upgrade.</p>
      </EditorialSection>

      <EditorialSection title="Quem produz o conteúdo">
        <p>Os artigos e as fichas são produzidos e revisados pela Equipe Editorial BestHard. A revisão confere coerência técnica, compatibilidade, contexto de preço e clareza antes da publicação.</p>
        <Link href="/autores/equipe-besthard" className="inline-flex font-semibold" style={{ color: 'var(--accent)' }}>
          Conheça a equipe e o processo de revisão →
        </Link>
      </EditorialSection>

      <EditorialSection title="Princípios editoriais">
        <EditorialList items={[
          'Independência: lojas e fabricantes não compram posição nos rankings.',
          'Contexto: desempenho sempre é relacionado a preço, resolução e finalidade de uso.',
          'Transparência: estimativas, links comissionados e limitações são identificados.',
          'Correção: informações desatualizadas podem ser revisadas e recebem nova data de atualização.',
          'Acessibilidade: explicamos termos técnicos para quem está montando o primeiro computador.',
        ]} />
      </EditorialSection>

      <EditorialSection title="Como o site se mantém">
        <p>O acesso ao conteúdo é gratuito. Alguns links para Amazon, Mercado Livre e Shopee podem gerar comissão quando uma compra qualificada é realizada, sem alterar o preço para o leitor. Essa remuneração ajuda a manter o projeto e não interfere no veredito editorial.</p>
      </EditorialSection>
    </EditorialPage>
  )
}
