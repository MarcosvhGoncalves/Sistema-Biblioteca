export class ItemBase {
  #anoPublicacao;
  constructor(titulo, autor, anoPublicacaoInformado) {
    if (new.target === ItemBase) {
      throw new error(
        "ItemBase é uma classe abstrata, escolha Fisico ou Ebook",
      );
    }
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacaoInformado;
  }

  get anoPublicacao() {
    return this.#anoPublicacao;
  }
  set anoPublicacao(novoAnoPublicacao) {
    if (novoAnoPublicacao < 1000 || novoAnoPublicacao > 2026) {
      throw new error("Ano de publicação inválido.");
    }
    this.#anoPublicacao = novoAnoPublicacao;
  }

  calcularMulta(diasAtraso) {
    throw new error("A classe filha precisa implementar o cálculo de multa!.");
  }
}
