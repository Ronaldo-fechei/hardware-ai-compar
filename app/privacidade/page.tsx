import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidade | BestHard',
  description: 'Política de privacidade do BestHard — como coletamos, usamos e protegemos seus dados pessoais, cookies e links de afiliados.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://besthard.com.br/privacidade' },
}

const ULTIMA_ATUALIZACAO = '30 de junho de 2026'

export default function PrivacidadePage() {
  return (
    <div className="pb-20">

      {/* HERO */}
      <div className="px-8 pt-8 pb-6" style={{ borderBottom: '1px solid var(--border)' }}>
        <nav className="flex items-center gap-2 font-mono text-[10px] mb-4" style={{ color: 'var(--muted)' }}>
          <Link href="/" className="hover:text-[var(--label)] transition-colors">Home</Link>
          <span style={{ opacity: 0.3 }}>/</span>
          <span style={{ color: 'var(--accent)' }}>Política de Privacidade</span>
        </nav>
        <h1 className="text-3xl font-bold mb-2" style={{ letterSpacing: '-1.5px' }}>
          Política de Privacidade
        </h1>
        <p className="text-[13px]" style={{ color: 'var(--muted)' }}>
          Última atualização: {ULTIMA_ATUALIZACAO}
        </p>
      </div>

      {/* CONTEÚDO */}
      <div className="px-8 pt-8 max-w-3xl space-y-10">

        {/* AVISO DESTAQUE */}
        <div className="rounded-xl px-5 py-4"
          style={{ background: 'rgba(0,229,255,.06)', border: '1px solid rgba(0,229,255,.2)' }}>
          <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text)' }}>
            <strong style={{ color: 'var(--accent)' }}>Resumo simples:</strong> O BestHard coleta dados básicos de navegação para melhorar a experiência do site e medir o desempenho do conteúdo. Não vendemos seus dados a terceiros. Alguns links são publicidade dos programas de afiliados da Amazon, do Mercado Livre e da Shopee e podem gerar comissão por compras qualificadas.
          </p>
        </div>

        <Secao titulo="1. Quem somos">
          <p>O <strong>BestHard</strong> (<strong>besthard.com.br</strong>) é um site brasileiro de comparação de hardware e guias de compra, operado como pessoa jurídica com sede em São Paulo, Brasil. Para questões relacionadas à privacidade, entre em contato pelo e-mail: <a href="mailto:privacidade@besthard.com.br" style={{ color: 'var(--accent)' }}>privacidade@besthard.com.br</a></p>
        </Secao>

        <Secao titulo="2. Dados que coletamos">
          <SubSecao titulo="2.1 Dados coletados automaticamente">
            <p>Quando você acessa o BestHard, coletamos automaticamente:</p>
            <Lista itens={[
              'Endereço IP (anonimizado após 90 dias)',
              'Tipo de dispositivo, sistema operacional e navegador',
              'Páginas visitadas, tempo de permanência e links clicados',
              'Origem do acesso (mecanismo de busca, redes sociais, link direto)',
              'Eventos de interação (comparações realizadas, cliques em botões de compra)',
            ]} />
          </SubSecao>
          <SubSecao titulo="2.2 Dados que você fornece voluntariamente">
            <p>Caso você crie uma conta ou use formulários de contato:</p>
            <Lista itens={[
              'Endereço de e-mail (para login e histórico de comparações)',
              'Preferências de conteúdo informadas pelo usuário',
            ]} />
          </SubSecao>
          <SubSecao titulo="2.3 O que NÃO coletamos">
            <p>O BestHard <strong>não</strong> coleta:</p>
            <Lista itens={[
              'Dados de cartão de crédito ou informações financeiras',
              'Documentos de identificação (CPF, RG, passaporte)',
              'Dados de saúde ou informações sensíveis',
              'Localização em tempo real',
            ]} />
          </SubSecao>
        </Secao>

        <Secao titulo="3. Como usamos seus dados">
          <Lista itens={[
            'Analisar o desempenho do site e identificar conteúdos mais úteis para os usuários',
            'Entender como os visitantes navegam entre comparações e categorias',
            'Medir a efetividade dos artigos e guias de compra',
            'Detectar e corrigir problemas técnicos',
            'Prevenir fraudes e abusos',
            'Cumprir obrigações legais',
          ]} />
          <p className="mt-3 text-[13px]" style={{ color: 'var(--label)' }}>
            Base legal (LGPD, Art. 7º): legítimo interesse do controlador (melhoria contínua do serviço) e, onde aplicável, consentimento do titular.
          </p>
        </Secao>

        <Secao titulo="4. Cookies e tecnologias de rastreamento">
          <SubSecao titulo="4.1 Tipos de cookies utilizados">
            <table className="w-full text-[13px] rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
              <thead>
                <tr style={{ background: 'var(--surface2)' }}>
                  {['Tipo', 'Finalidade', 'Duração'].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-mono text-[10px] uppercase"
                      style={{ color: 'var(--label)', borderBottom: '1px solid var(--border)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody style={{ background: 'var(--surface)' }}>
                {[
                  ['Essenciais', 'Funcionamento básico do site e login', 'Sessão'],
                  ['Analíticos (GA4)', 'Medir tráfego e comportamento', '13 meses'],
                  ['Afiliados', 'Rastrear cliques e comissões', '30-90 dias'],
                  ['Publicidade (AdSense)', 'Exibir anúncios relevantes', 'Até 2 anos'],
                ].map(([tipo, fin, dur], i, arr) => (
                  <tr key={tipo} style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <td className="px-4 py-3 font-semibold" style={{ color: 'var(--text)' }}>{tipo}</td>
                    <td className="px-4 py-3" style={{ color: 'var(--label)' }}>{fin}</td>
                    <td className="px-4 py-3 font-mono text-[11px]" style={{ color: 'var(--muted)' }}>{dur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </SubSecao>
          <SubSecao titulo="4.2 Como gerenciar cookies">
            <p>Você pode desativar cookies nas configurações do seu navegador. Note que desativar cookies analíticos e de publicidade pode afetar a personalização da experiência, mas não impede o uso básico do site. Para desativar o Google Analytics especificamente, use o <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>complemento de desativação do navegador</a>.</p>
          </SubSecao>
        </Secao>

        <Secao titulo="5. Links de afiliados — transparência total">
          <div className="rounded-xl px-5 py-4 mb-4"
            style={{ background: 'rgba(34,197,94,.06)', border: '1px solid rgba(34,197,94,.2)' }}>
            <p className="text-[13px]" style={{ color: 'var(--text)' }}>
              <strong style={{ color: '#22C55E' }}>Declaração obrigatória:</strong> Como participante do Programa de Associados da Amazon, sou remunerado pelas compras qualificadas efetuadas. O BestHard também participa dos programas de afiliados do Mercado Livre e da Shopee e pode receber comissão por compras feitas através dos links identificados como publicidade.
            </p>
          </div>
          <Lista itens={[
            'Os preços exibidos são verificados periodicamente mas podem variar — sempre confirme na loja antes de comprar',
            'As comissões não influenciam nossas avaliações ou recomendações de produtos',
            'Todos os links de afiliado contêm o atributo rel="sponsored" conforme recomendação do Google',
            'Não recebemos pagamento para recomendar produtos específicos — apenas comissão por conversão',
          ]} />
        </Secao>

        <Secao titulo="6. Google AdSense e publicidade">
          <p>O BestHard poderá exibir anúncios do Google AdSense após a ativação do serviço. O Google pode usar cookies para exibir anúncios com base em suas visitas ao nosso site e a outros sites. Você pode desativar a publicidade personalizada em <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Configurações de anúncios do Google</a>. O BestHard não tem acesso nem controle sobre os cookies usados pelo Google AdSense.</p>
        </Secao>

        <Secao titulo="7. Compartilhamento de dados com terceiros">
          <p className="mb-3">O BestHard <strong>não vende</strong> seus dados pessoais. Compartilhamos dados apenas nas seguintes situações:</p>
          <Lista itens={[
            'Google Analytics 4 — dados de navegação anonimizados para análise de tráfego',
            'Google AdSense — dados de comportamento para personalização de anúncios',
            'Programa de Associados da Amazon — apenas dados de clique/conversão por meio dos links identificados',
            'Programa de Afiliados do Mercado Livre — apenas dados de clique/conversão por meio dos links identificados',
            'Programa de Afiliados da Shopee — apenas dados de clique/conversão por meio dos links identificados',
            'Supabase — armazenamento seguro de conta e histórico (quando você faz login)',
            'Autoridades públicas — somente quando exigido por lei ou ordem judicial',
          ]} />
        </Secao>

        <Secao titulo="8. Seus direitos (LGPD — Lei 13.709/2018)">
          <p className="mb-3">Como titular de dados pessoais, você tem direito a:</p>
          <Lista itens={[
            'Confirmação da existência de tratamento de seus dados',
            'Acesso aos dados que temos sobre você',
            'Correção de dados incompletos, inexatos ou desatualizados',
            'Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos',
            'Portabilidade dos dados a outro fornecedor de serviço',
            'Eliminação dos dados tratados com base no consentimento',
            'Informação sobre entidades com quem compartilhamos seus dados',
            'Revogação do consentimento a qualquer momento',
            'Oposição ao tratamento com base em legítimo interesse',
          ]} />
          <p className="mt-3 text-[13px]" style={{ color: 'var(--label)' }}>
            Para exercer qualquer desses direitos, entre em contato em <a href="mailto:privacidade@besthard.com.br" style={{ color: 'var(--accent)' }}>privacidade@besthard.com.br</a>. Responderemos em até 15 dias úteis.
          </p>
        </Secao>

        <Secao titulo="9. Segurança dos dados">
          <Lista itens={[
            'O site utiliza HTTPS com certificado SSL/TLS em todas as páginas',
            'Não armazenamos dados de pagamento — transações ocorrem exclusivamente nas lojas parceiras',
            'Dados analíticos são tratados pelo Google com suas próprias políticas de segurança',
            'Revisamos periodicamente nossas práticas de segurança',
          ]} />
        </Secao>

        <Secao titulo="10. Retenção de dados">
          <Lista itens={[
            'Dados de Google Analytics: 13 meses (configuração padrão, com IP anonimizado)',
            'Logs de servidor: 90 dias',
            'E-mails de contato: 5 anos (conforme obrigação legal)',
            'Dados de conta: até solicitação de exclusão',
          ]} />
        </Secao>

        <Secao titulo="11. Menores de idade">
          <p>O BestHard não é direcionado a menores de 13 anos e não coleta intencionalmente dados de crianças. Se você acredita que coletamos dados de um menor, entre em contato imediatamente para que possamos excluí-los.</p>
        </Secao>

        <Secao titulo="12. Alterações nesta política">
          <p>Esta política pode ser atualizada periodicamente. Mudanças significativas serão comunicadas com destaque na página inicial. A data da última atualização está sempre exibida no topo desta página. Recomendamos revisitar esta política periodicamente.</p>
        </Secao>

        <Secao titulo="13. Contato e DPO">
          <p className="mb-2">Para dúvidas, solicitações ou reclamações relacionadas à privacidade:</p>
          <Lista itens={[
            'E-mail: privacidade@besthard.com.br',
            'Prazo de resposta: até 15 dias úteis',
            'Autoridade Nacional de Proteção de Dados (ANPD): gov.br/anpd — para reclamações não resolvidas',
          ]} />
        </Secao>

        {/* Navegação rápida */}
        <div className="pt-4" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="flex gap-4 flex-wrap">
            <Link href="/"
              className="text-[12px] font-semibold hover:opacity-80 transition-opacity"
              style={{ color: 'var(--accent)' }}>
              ← Voltar para a Home
            </Link>
            <Link href="/blog"
              className="text-[12px] font-semibold hover:opacity-80 transition-opacity"
              style={{ color: 'var(--label)' }}>
              Blog e Guias
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

// ── Componentes auxiliares ─────────────────────────────────────────────
function Secao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[18px] font-bold mb-4" style={{ letterSpacing: '-0.5px' }}>{titulo}</h2>
      <div className="space-y-3 text-[14px] leading-relaxed" style={{ color: 'var(--label)' }}>
        {children}
      </div>
    </section>
  )
}

function SubSecao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="mt-3">
      <h3 className="text-[14px] font-bold mb-2" style={{ color: 'var(--text)' }}>{titulo}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function Lista({ itens }: { itens: string[] }) {
  return (
    <ul className="space-y-2 mt-2">
      {itens.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-[3px] flex-shrink-0 font-bold" style={{ color: 'var(--accent)' }}>→</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
