import type { Metadata } from 'next'
import Link from 'next/link'
import { EditorialList, EditorialPage, EditorialSection } from '@/components/EditorialPage'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos aplicáveis ao acesso e ao uso do site, das comparações, dos conteúdos e das ferramentas da BestHard.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/termos` },
}

export default function TermosPage() {
  return (
    <EditorialPage
      eyebrow="// regras de utilização"
      title="Termos de Uso"
      description="Estes termos estabelecem as regras para acessar os conteúdos, comparadores e demais ferramentas oferecidas pela BestHard."
      updatedAt="7 de setembro de 2026"
    >
      <EditorialSection title="1. Responsável pelo site">
        <p>A BestHard é operada por <strong>MARTINS STORE COMERCIAL LTDA</strong>, inscrita no CNPJ sob nº <strong>54.471.703/0001-27</strong>, com sede em Diadema/SP.</p>
        <EditorialList items={[
          'Contato geral: contato@besthard.com.br',
          'Privacidade e LGPD: privacidade@besthard.com.br',
        ]} />
      </EditorialSection>

      <EditorialSection title="2. Aceitação e alcance">
        <p>Ao acessar ou utilizar a BestHard, você declara que leu e compreendeu estes termos. Caso não concorde, não utilize recursos que exijam conta, envio de informações ou contratação.</p>
        <p>Estes termos devem ser lidos em conjunto com a <Link href="/privacidade" className="font-semibold" style={{ color: 'var(--accent)' }}>Política de Privacidade e Cookies</Link>.</p>
      </EditorialSection>

      <EditorialSection title="3. Natureza do conteúdo">
        <p>A BestHard oferece conteúdo editorial, organização de especificações, estimativas e ferramentas de apoio à decisão. O material não representa garantia de preço, estoque, compatibilidade, desempenho ou adequação a uma finalidade específica.</p>
        <EditorialList items={[
          'Preços e disponibilidade devem ser confirmados diretamente na loja.',
          'Especificações devem ser conferidas na página oficial do fabricante antes da compra.',
          'Compatibilidade depende do conjunto completo de componentes, BIOS, gabinete, fonte, refrigeração e finalidade de uso.',
          'Resultados de FPS, consumo, temperatura e gargalo são estimativas e variam conforme configuração, software e ambiente.',
        ]} />
      </EditorialSection>

      <EditorialSection title="4. Recursos de inteligência artificial">
        <p>Algumas respostas são geradas ou auxiliadas por inteligência artificial. Esses resultados podem conter imprecisões, informações incompletas ou referências desatualizadas. O usuário deve validar informações relevantes antes de comprar, instalar ou modificar equipamentos.</p>
        <p>Não envie senhas, documentos, dados financeiros, segredos comerciais ou informações pessoais desnecessárias nos campos das ferramentas.</p>
      </EditorialSection>

      <EditorialSection title="5. Conta e segurança">
        <p>Algumas funcionalidades podem permitir login e sincronização de histórico. O usuário é responsável por manter a segurança do acesso ao próprio e-mail e por informar imediatamente qualquer uso não autorizado.</p>
        <p>Podemos limitar ou suspender acessos em caso de fraude, abuso, tentativa de invasão, automação que prejudique o serviço ou violação destes termos, respeitados os direitos aplicáveis.</p>
      </EditorialSection>

      <EditorialSection title="6. Planos pagos e pagamentos">
        <p>Caso planos pagos sejam disponibilizados, preço, periodicidade, recursos e eventuais limites serão informados antes da contratação. O pagamento poderá ser processado pelo Mercado Pago em ambiente próprio.</p>
        <p>Cancelamentos, estornos e reembolsos observarão as condições exibidas na contratação e a legislação brasileira aplicável, inclusive os direitos do consumidor. A BestHard não limita direitos que não possam ser afastados por contrato.</p>
      </EditorialSection>

      <EditorialSection title="7. Publicidade e links de afiliados">
        <p>A BestHard pode exibir anúncios e usar links de afiliados identificados. Compras qualificadas podem gerar comissão para o site sem aumentar o preço do produto. Comissão, patrocínio ou recebimento de produto não garantem posição em ranking nem avaliação favorável.</p>
        <p>As regras comerciais, entrega, garantia, troca, devolução e atendimento da compra são definidas pela loja ou pelo vendedor escolhido pelo usuário.</p>
      </EditorialSection>

      <EditorialSection title="8. Uso permitido">
        <p>Você pode utilizar o site para fins pessoais e comerciais legítimos, respeitando estes termos e a legislação. Não é permitido:</p>
        <EditorialList items={[
          'Tentar acessar áreas, contas, dados ou sistemas sem autorização.',
          'Interferir na disponibilidade do site, introduzir código malicioso ou contornar limites técnicos.',
          'Extrair dados em massa de forma que prejudique o serviço ou viole direitos de terceiros.',
          'Copiar ou republicar integralmente conteúdo, identidade visual, banco de dados ou código sem autorização.',
          'Utilizar o serviço para fraude, desinformação deliberada ou atividade ilícita.',
        ]} />
      </EditorialSection>

      <EditorialSection title="9. Propriedade intelectual">
        <p>A marca BestHard, o design, os textos originais, a seleção editorial, os códigos e as bases próprias são protegidos pela legislação aplicável. Marcas, imagens e informações de fabricantes e lojas pertencem aos respectivos titulares e são utilizadas para identificação, informação ou referência.</p>
        <p>Links para páginas da BestHard podem ser compartilhados. Reprodução substancial ou uso comercial do conteúdo exige autorização prévia.</p>
      </EditorialSection>

      <EditorialSection title="10. Serviços e sites de terceiros">
        <p>O site contém links para lojas e outros serviços independentes. A BestHard não controla conteúdo, disponibilidade, segurança, política de privacidade ou práticas comerciais desses terceiros. Antes de prosseguir, verifique o domínio, o vendedor e as condições apresentadas no destino.</p>
      </EditorialSection>

      <EditorialSection title="11. Disponibilidade e responsabilidade">
        <p>Buscamos manter o serviço disponível e as informações corretas, mas podem ocorrer interrupções, falhas, mudanças de fornecedor ou erros. Na extensão permitida pela legislação, a BestHard não responde por decisões tomadas exclusivamente com base em estimativas sem a verificação recomendada.</p>
        <p>Nada nestes termos exclui responsabilidade que não possa ser legalmente afastada, nem reduz direitos assegurados ao consumidor e ao titular de dados.</p>
      </EditorialSection>

      <EditorialSection title="12. Alterações">
        <p>Estes termos podem ser atualizados para refletir mudanças no serviço, na legislação ou nos parceiros. A versão vigente e a data da revisão serão mantidas nesta página. Alterações relevantes em serviços contratados serão comunicadas pelos meios adequados.</p>
      </EditorialSection>

      <EditorialSection title="13. Legislação e contato">
        <p>Aplicam-se as leis da República Federativa do Brasil. Eventuais controvérsias poderão ser tratadas pelos canais de contato e, quando necessário, pelos órgãos ou pelo foro competente conforme a legislação, preservado o direito do consumidor de usar o foro legalmente assegurado.</p>
        <p>Dúvidas sobre estes termos podem ser enviadas para <a href="mailto:contato@besthard.com.br" className="font-semibold" style={{ color: 'var(--accent)' }}>contato@besthard.com.br</a>.</p>
      </EditorialSection>
    </EditorialPage>
  )
}
