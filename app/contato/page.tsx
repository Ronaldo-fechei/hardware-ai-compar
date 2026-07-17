import type { Metadata } from 'next'
import { EditorialPage, EditorialSection } from '@/components/EditorialPage'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a equipe do BestHard para correções editoriais, dúvidas, privacidade e parcerias.',
  alternates: { canonical: `${SITE_URL}/contato` },
}

export default function ContatoPage() {
  return (
    <EditorialPage
      eyebrow="// fale com a equipe"
      title="Contato"
      description="Use os canais abaixo para enviar uma correção, sugerir uma pauta, tirar dúvidas sobre o conteúdo ou tratar de privacidade."
      updatedAt="16 de julho de 2026"
    >
      <EditorialSection title="Dúvidas e sugestões editoriais">
        <p>Envie a URL da página, descreva o trecho e, quando possível, inclua a fonte que sustenta a correção.</p>
        <a href="mailto:contato@besthard.com.br" className="font-semibold" style={{ color: 'var(--accent)' }}>contato@besthard.com.br</a>
      </EditorialSection>

      <EditorialSection title="Privacidade e dados pessoais">
        <p>Solicitações relacionadas à LGPD, acesso ou exclusão de dados devem ser encaminhadas para:</p>
        <a href="mailto:privacidade@besthard.com.br" className="font-semibold" style={{ color: 'var(--accent)' }}>privacidade@besthard.com.br</a>
      </EditorialSection>

      <EditorialSection title="Prazo de resposta">
        <p>Buscamos responder mensagens editoriais em até cinco dias úteis. Solicitações de privacidade seguem os prazos informados na Política de Privacidade.</p>
      </EditorialSection>
    </EditorialPage>
  )
}
