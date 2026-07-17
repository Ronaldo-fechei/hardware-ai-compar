import type { Metadata } from 'next'
import { EditorialList, EditorialPage, EditorialSection } from '@/components/EditorialPage'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Transparência e links de afiliados',
  description: 'Saiba como funcionam os links de afiliados, publicidade, preços e independência editorial no BestHard.',
  alternates: { canonical: `${SITE_URL}/transparencia` },
}

export default function TransparenciaPage() {
  return (
    <EditorialPage
      eyebrow="// transparência comercial"
      title="Como publicidade e afiliados funcionam no BestHard"
      description="Queremos que o leitor saiba quando um link pode remunerar o site e como separamos decisões comerciais de decisões editoriais."
      updatedAt="16 de julho de 2026"
    >
      <EditorialSection title="Links de afiliados">
        <p>Alguns botões de compra levam a páginas da Amazon, Mercado Livre ou Shopee e podem conter identificação de afiliado. Se uma compra qualificada ocorrer, o BestHard poderá receber comissão. O preço pago pelo comprador não aumenta por causa disso.</p>
        <p>Como participante do Programa de Associados da Amazon, o BestHard é remunerado pelas compras qualificadas efetuadas.</p>
      </EditorialSection>

      <EditorialSection title="O que a comissão não compra">
        <EditorialList items={[
          'Posição garantida em ranking ou comparativo.',
          'Nota, score ou recomendação favorável.',
          'Omissão de pontos negativos relevantes.',
          'Texto aprovado previamente por loja ou fabricante.',
        ]} />
      </EditorialSection>

      <EditorialSection title="Preços e disponibilidade">
        <p>Valores exibidos são referências editoriais e podem ficar desatualizados. Estoque, frete, vendedor, cupom e parcelamento são definidos pela loja. Antes de comprar, confira o preço final, a reputação do vendedor, a garantia e a política de devolução na página de destino.</p>
      </EditorialSection>

      <EditorialSection title="Publicidade do Google">
        <p>O site pode exibir anúncios automáticos do Google AdSense. Os anúncios são identificados pela plataforma e não representam recomendação editorial do BestHard. A personalização e o uso de cookies seguem as preferências de privacidade aplicáveis.</p>
      </EditorialSection>

      <EditorialSection title="Produtos recebidos e conteúdo patrocinado">
        <p>Atualmente, o BestHard não cobra para publicar reviews. Caso um produto seja recebido para avaliação ou um conteúdo seja patrocinado no futuro, essa relação será informada de maneira visível no próprio conteúdo.</p>
      </EditorialSection>
    </EditorialPage>
  )
}
