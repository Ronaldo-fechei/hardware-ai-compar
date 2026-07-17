import type { Metadata } from 'next'
import { EditorialList, EditorialPage, EditorialSection } from '@/components/EditorialPage'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Metodologia de análises e comparações',
  description: 'Entenda como o BestHard avalia hardware, calcula scores, trata benchmarks, preços, compatibilidade e recomendações.',
  alternates: { canonical: `${SITE_URL}/metodologia` },
}

export default function MetodologiaPage() {
  return (
    <EditorialPage
      eyebrow="// metodologia editorial"
      title="Como avaliamos produtos e montamos recomendações"
      description="Nossa metodologia combina especificações públicas, resultados de fontes técnicas reconhecidas, contexto do mercado brasileiro e análise editorial. Quando não há teste próprio, deixamos claro que os números são referências ou estimativas."
      updatedAt="16 de julho de 2026"
    >
      <EditorialSection title="1. Coleta e conferência">
        <EditorialList items={[
          'Especificações são conferidas em documentação oficial do fabricante sempre que disponível.',
          'Compatibilidade considera soquete, memória, potência, dimensões e conectores relevantes.',
          'Benchmarks de terceiros são usados como referência comparativa, nunca apresentados como teste de laboratório próprio.',
          'Preços são referências observadas nas lojas e podem mudar sem aviso; o preço final é sempre o exibido pela loja.',
        ]} />
      </EditorialSection>

      <EditorialSection title="2. Score de desempenho">
        <p>O score de 0 a 100 é um índice editorial relativo dentro da categoria. Ele ajuda na comparação rápida, mas não representa porcentagem de FPS nem resultado de um benchmark único. A ponderação considera geração, recursos, especificações e desempenho observado em fontes públicas.</p>
      </EditorialSection>

      <EditorialSection title="3. Custo-benefício">
        <p>O custo-benefício considera desempenho útil, preço de referência, vida útil esperada da plataforma e custo de componentes necessários. Um produto mais rápido pode receber nota inferior se exigir uma plataforma muito cara ou entregar pouco ganho no uso proposto.</p>
      </EditorialSection>

      <EditorialSection title="4. Recomendações de builds">
        <p>As configurações são montadas por objetivo e orçamento. Conferimos compatibilidade básica, margem da fonte, espaço de armazenamento e caminho de upgrade. O leitor deve confirmar BIOS, dimensões do gabinete e disponibilidade antes da compra, pois modelos e revisões podem variar.</p>
      </EditorialSection>

      <EditorialSection title="5. Conteúdo sobre produtos ainda não lançados">
        <p>Requisitos de jogos não lançados e produtos baseados em rumores são tratados como estimativas. Esses textos distinguem informação oficial de projeção editorial e são atualizados quando dados confirmados se tornam disponíveis.</p>
      </EditorialSection>

      <EditorialSection title="6. Atualizações e correções">
        <p>Artigos exibem data de publicação e, quando aplicável, data de atualização. Correções relevantes substituem a informação anterior. Sugestões documentadas podem ser enviadas pela página de contato.</p>
      </EditorialSection>
    </EditorialPage>
  )
}
