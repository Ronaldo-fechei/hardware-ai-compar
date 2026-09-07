import type { Metadata } from 'next'
import Link from 'next/link'
import { EditorialList, EditorialPage, EditorialSection } from '@/components/EditorialPage'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Privacidade e Cookies',
  description: 'Saiba como a BestHard trata dados pessoais, usa cookies e permite gerenciar preferências de Analytics e publicidade.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/privacidade` },
}

export default function PrivacidadePage() {
  return (
    <EditorialPage
      eyebrow="// privacidade e cookies"
      title="Política de Privacidade e Cookies"
      description="Este documento explica, de forma clara, quais dados podem ser tratados pela BestHard, para quais finalidades e como você pode exercer seus direitos."
      updatedAt="7 de setembro de 2026"
    >
      <div className="rounded-xl border px-5 py-4" style={{ background: 'rgba(0,229,255,.06)', borderColor: 'rgba(0,229,255,.2)' }}>
        <p>
          <strong style={{ color: 'var(--accent)' }}>Resumo:</strong> cookies não essenciais ficam desligados até que você faça uma escolha. Não vendemos dados pessoais. Analytics e publicidade podem ser recusados separadamente e suas preferências podem ser alteradas pelo rodapé.
        </p>
      </div>

      <EditorialSection title="1. Controlador dos dados">
        <p>O site BestHard, disponível em <strong>besthard.com.br</strong>, é operado por:</p>
        <EditorialList items={[
          'MARTINS STORE COMERCIAL LTDA',
          'CNPJ 54.471.703/0001-27',
          'Sede em Diadema/SP, Brasil',
          'Canal de privacidade: privacidade@besthard.com.br',
        ]} />
        <p>A empresa acima é a controladora das decisões sobre o tratamento de dados pessoais realizado diretamente pela BestHard.</p>
      </EditorialSection>

      <EditorialSection title="2. Dados que podem ser tratados">
        <EditorialList items={[
          'Dados técnicos de acesso, como endereço IP, navegador, dispositivo, data, horário e registros de segurança.',
          'Dados de uso, como páginas visitadas, comparações realizadas e cliques, quando Analytics estiver autorizado.',
          'E-mail e dados de autenticação necessários para criar conta e sincronizar o histórico, quando esse recurso for utilizado.',
          'Textos informados ao comparador, ao montador de PC e a outras ferramentas de inteligência artificial.',
          'Dados de assinatura, como plano, situação da cobrança e identificadores da transação, caso planos pagos sejam oferecidos e contratados.',
          'Mensagens enviadas voluntariamente aos canais de contato.',
          'Preferências salvas no navegador, inclusive histórico local e escolha de cookies.',
        ]} />
        <p>A BestHard não armazena o número completo de cartão. Quando houver pagamento, os dados financeiros são inseridos e processados no ambiente do Mercado Pago.</p>
      </EditorialSection>

      <EditorialSection title="3. Finalidades e bases legais">
        <EditorialList items={[
          'Prestar o serviço solicitado, manter a conta e executar funcionalidades: execução de contrato ou procedimentos preliminares.',
          'Processar assinatura e suporte relacionado à compra: execução de contrato, cumprimento de obrigação legal e exercício regular de direitos.',
          'Proteger o site, prevenir fraude e corrigir falhas: legítimo interesse, segurança e exercício regular de direitos.',
          'Medir audiência e melhorar o conteúdo com Google Analytics 4: consentimento, quando solicitado no banner.',
          'Exibir e medir publicidade do Google AdSense: consentimento, quando solicitado no banner.',
          'Responder solicitações de privacidade e cumprir determinações legais: cumprimento de obrigação legal ou regulatória.',
        ]} />
      </EditorialSection>

      <section id="cookies" className="scroll-mt-24">
        <h2 className="mb-3 text-xl font-bold" style={{ color: 'var(--text)', letterSpacing: '-0.5px' }}>4. Cookies e tecnologias semelhantes</h2>
        <div className="space-y-4">
          <p>A BestHard separa o armazenamento usado no site nas seguintes categorias:</p>
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--border)' }}>
            <table className="w-full min-w-[560px] text-left text-[13px]">
              <thead style={{ background: 'var(--surface2)', color: 'var(--label)' }}>
                <tr>
                  <th className="px-4 py-3">Categoria</th>
                  <th className="px-4 py-3">Finalidade</th>
                  <th className="px-4 py-3">Ativação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t" style={{ borderColor: 'var(--border)' }}>
                  <td className="px-4 py-3 font-semibold">Essenciais</td>
                  <td className="px-4 py-3">Login, sessão, segurança, limite de uso e registro da escolha de privacidade.</td>
                  <td className="px-4 py-3">Sempre ativos</td>
                </tr>
                <tr className="border-t" style={{ borderColor: 'var(--border)' }}>
                  <td className="px-4 py-3 font-semibold">Analytics</td>
                  <td className="px-4 py-3">Medição de audiência e desempenho com Google Analytics 4.</td>
                  <td className="px-4 py-3">Somente após autorização</td>
                </tr>
                <tr className="border-t" style={{ borderColor: 'var(--border)' }}>
                  <td className="px-4 py-3 font-semibold">Publicidade</td>
                  <td className="px-4 py-3">Exibição, medição e personalização de anúncios pelo Google AdSense.</td>
                  <td className="px-4 py-3">Somente após autorização</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Analytics e publicidade ficam desativados por padrão. O painel permite aceitar, rejeitar ou escolher cada finalidade. A decisão é guardada no armazenamento local do navegador com a data e a versão desta configuração.</p>
          <p>Você pode revogar ou alterar a escolha a qualquer momento em <strong>Preferências de cookies</strong>, no rodapé. A revogação interrompe novos carregamentos opcionais; cookies já gravados também podem ser removidos nas configurações do navegador.</p>
        </div>
      </section>

      <EditorialSection title="5. Inteligência artificial">
        <p>Quando você usa recursos de comparação ou montagem assistida, o texto necessário para responder à solicitação pode ser processado pela Anthropic, provedora do modelo Claude. Evite inserir dados pessoais, informações confidenciais, senhas ou dados financeiros nos campos de comparação.</p>
        <p>As respostas da IA são estimativas informativas, podem conter erros e não substituem a consulta às especificações oficiais do fabricante.</p>
      </EditorialSection>

      <EditorialSection title="6. Compartilhamento e operadores">
        <p>Dados podem ser tratados por fornecedores necessários à operação, cada qual de acordo com sua função e suas políticas:</p>
        <EditorialList items={[
          'Vercel: hospedagem, entrega do site, segurança e registros técnicos.',
          'Supabase: autenticação, conta e sincronização do histórico, quando habilitados.',
          'Anthropic: processamento das solicitações feitas às ferramentas de inteligência artificial.',
          'Google: Analytics e AdSense, apenas conforme as preferências autorizadas.',
          'Mercado Pago: processamento de pagamento e gestão da assinatura, quando aplicável.',
          'Amazon, Mercado Livre, Shopee e outros parceiros: recebem os dados da navegação quando você decide abrir um link externo.',
        ]} />
        <p>A BestHard não vende bases de dados pessoais. Informações também poderão ser fornecidas a autoridades quando houver obrigação legal ou ordem válida.</p>
      </EditorialSection>

      <EditorialSection title="7. Links de afiliados">
        <p>Links identificados como publicidade ou patrocinados podem conter parâmetros de afiliado. Ao clicar, você deixa o domínio da BestHard e passa a se relacionar com a loja de destino, que poderá usar cookies próprios. A BestHard pode receber comissão por compras qualificadas, sem alteração do preço para você.</p>
      </EditorialSection>

      <EditorialSection title="8. Transferências internacionais">
        <p>Alguns fornecedores de tecnologia podem processar ou armazenar dados fora do Brasil. Nesses casos, buscamos utilizar serviços reconhecidos e mecanismos compatíveis com a LGPD e com as regras aplicáveis de transferência internacional.</p>
      </EditorialSection>

      <EditorialSection title="9. Retenção e eliminação">
        <p>Os dados são mantidos somente pelo tempo necessário à finalidade informada, ao funcionamento do serviço, ao cumprimento de obrigações legais ou ao exercício regular de direitos. Os prazos também podem variar conforme a configuração e a política do fornecedor envolvido.</p>
        <p>O histórico salvo apenas no navegador pode ser apagado pelo próprio usuário. Dados de conta podem ser eliminados mediante solicitação, ressalvadas hipóteses legais de conservação.</p>
      </EditorialSection>

      <EditorialSection title="10. Direitos do titular">
        <p>Nos termos da LGPD, você pode solicitar, conforme aplicável:</p>
        <EditorialList items={[
          'Confirmação da existência de tratamento e acesso aos dados.',
          'Correção de dados incompletos, inexatos ou desatualizados.',
          'Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados irregularmente.',
          'Portabilidade, quando regulamentada e tecnicamente aplicável.',
          'Informações sobre compartilhamento e sobre a possibilidade de negar consentimento.',
          'Revogação do consentimento, oposição ao tratamento e revisão de decisões automatizadas, quando cabíveis.',
        ]} />
        <p>Envie a solicitação para <a href="mailto:privacidade@besthard.com.br" className="font-semibold" style={{ color: 'var(--accent)' }}>privacidade@besthard.com.br</a>. Poderemos solicitar informações suficientes para confirmar a identidade do titular e responderemos nos prazos legais aplicáveis.</p>
      </EditorialSection>

      <EditorialSection title="11. Segurança e incidentes">
        <p>Adotamos medidas técnicas e organizacionais compatíveis com o porte e a natureza do serviço, incluindo HTTPS, restrição de acesso e uso de provedores especializados. Nenhum ambiente é totalmente isento de riscos; incidentes relevantes serão tratados e comunicados conforme a legislação.</p>
      </EditorialSection>

      <EditorialSection title="12. Crianças e adolescentes">
        <p>A BestHard não é dirigida especificamente a crianças. Não solicitamos intencionalmente dados pessoais de crianças para fins de publicidade comportamental. Caso um responsável identifique tratamento indevido, poderá solicitar análise e eliminação pelo canal de privacidade.</p>
      </EditorialSection>

      <EditorialSection title="13. Alterações e contato">
        <p>Esta política poderá ser atualizada para refletir mudanças legais, técnicas ou operacionais. A versão vigente e a data da última revisão permanecerão publicadas nesta página.</p>
        <p>Para dúvidas ou solicitações: <a href="mailto:privacidade@besthard.com.br" className="font-semibold" style={{ color: 'var(--accent)' }}>privacidade@besthard.com.br</a>.</p>
        <p>Consulte também os <Link href="/termos" className="font-semibold" style={{ color: 'var(--accent)' }}>Termos de Uso</Link>.</p>
      </EditorialSection>
    </EditorialPage>
  )
}
