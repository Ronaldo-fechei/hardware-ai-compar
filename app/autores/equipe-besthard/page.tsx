import type { Metadata } from 'next'
import Link from 'next/link'
import { EditorialList, EditorialPage, EditorialSection } from '@/components/EditorialPage'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Equipe Editorial BestHard',
  description: 'Perfil da equipe responsável pelos guias, comparações e fichas técnicas publicadas no BestHard.',
  alternates: { canonical: `${SITE_URL}/autores/equipe-besthard` },
}

export default function EquipeBestHardPage() {
  return (
    <EditorialPage
      eyebrow="// autoria e revisão"
      title="Equipe Editorial BestHard"
      description="A Equipe Editorial BestHard pesquisa, organiza e revisa os guias, comparativos e fichas técnicas publicados no site."
      updatedAt="16 de julho de 2026"
    >
      <EditorialSection title="Áreas de cobertura">
        <EditorialList items={[
          'Processadores, placas de vídeo e desempenho em jogos.',
          'Compatibilidade de componentes e montagem de computadores.',
          'Monitores, armazenamento, memória e periféricos.',
          'Custo-benefício e disponibilidade no mercado brasileiro.',
        ]} />
      </EditorialSection>

      <EditorialSection title="Processo de revisão">
        <p>Cada conteúdo passa por conferência de especificações, coerência das recomendações e revisão de linguagem. Resultados de terceiros são tratados como referência; estimativas são identificadas e não são apresentadas como medições próprias.</p>
        <Link href="/metodologia" className="font-semibold" style={{ color: 'var(--accent)' }}>Leia a metodologia completa →</Link>
      </EditorialSection>

      <EditorialSection title="Correções">
        <p>Hardware muda rapidamente. Se encontrar uma informação incorreta ou desatualizada, envie a página e uma fonte de referência para contato@besthard.com.br.</p>
      </EditorialSection>
    </EditorialPage>
  )
}
