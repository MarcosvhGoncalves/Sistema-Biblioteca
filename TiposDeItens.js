import { ItemBase } from "./ItemBase.js";

export class LivroFisico extends ItemBase {
  constructor(titulo, autor, anoPublicacaoInformado, corredor) {
    super(titulo, autor, anoPublicacaoInformado);
    this.corredor = corredor;
  }
  calcularMulta(diasAtraso) {
    let Multa = diasAtraso * 2.5;
    if (diasAtraso > 0)
      console.log(
        `=============== Multa atual por atraso: ${Multa}.===============`,
      );
    return Multa;
  }
}

export class Ebook extends ItemBase {
  constructor(titulo, autor, anoPublicacaoInformado, formatoArquivo) {
    super(titulo, autor, anoPublicacaoInformado);
    this.formatoArquivo = formatoArquivo;
  }
  calcularMulta(diasAtraso) {
    let multa;
    if (diasAtraso > 0) {
      console.log(
        "=============== Arquivo bloqueado por atraso. Acesso revogado no dispositivo do leitor ===============",
      );
      return (multa = 0.00);
    }
    return (multa = 0.00);
  }
}
