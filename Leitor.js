export class Leitor {
  #idade;
  constructor(nomeLeitor, idadeInformada) {
    this.nomeLeitor = nomeLeitor;
    this.idade = idadeInformada;
  }

  get idade() {
    return this.#idade;
  }
  set idade(novaIdade) {
    if (novaIdade < 12) {
      throw new error(
        "Leitor menor de 12 anos precisa do responsável para o cadastro",
      );
    }
    this.#idade = novaIdade;
  }
}
