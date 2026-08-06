/**
 * Aviso curto de link de afiliado, exibido no ponto de decisão — logo abaixo
 * dos botões de compra, onde o leitor está prestes a clicar.
 */
export function AvisoAfiliado() {
  return (
    <p className="mt-2 text-xs text-gray-500">
      <a
        href="/transparencia"
        className="underline decoration-dotted underline-offset-2 hover:text-brand-primary"
      >
        Link de afiliado
      </a>{" "}
      — o BestHard pode receber comissão. O preço para você não muda.
    </p>
  );
}
