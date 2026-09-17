import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { LivroFisico, Ebook } from "./TiposDeItens.js";
import { Leitor } from "./Leitor.js";
import { error } from "node:console";
const rl = readline.createInterface({ input, output });

(async function iniciarSistema() {
  let livro;

  console.log("=== SISTEMA DE LOGISTICA BIBLIOTECA ===");
  const nomeLeitor = await rl.question("Digite o nome do leitor: ");
  const idadeInformada = parseInt(
    await rl.question("Digite a idade do leitor: "),
  );
  const leitor = new Leitor(nomeLeitor, idadeInformada);
  if (!nomeLeitor || !idadeInformada){
    throw new error("======================== Nome ou idade do leitor não informadas ========================");
  
  }
  console.log("\nSelecione o tipo de livro: ");
  console.log("1- Livro Físico");
  console.log("2- Ebook");
  const tipoLivro = await rl.question("Digite a opção: ");

  if (tipoLivro > 2 || tipoLivro < 1){
    throw new error("======================== Opção inválida! ========================");
  }

    const titulo = await rl.question("Digite o título: ");
    const autor = await rl.question("Digite o autor: ");
    const anoInfo = Number(await rl.question("Digite o ano de publicação: "));

    if (!titulo || !autor){
      throw new error("======================== Nome do autor ou titulo não informados ========================");
    }

     switch (tipoLivro) {
      case "1":
        const corredor = await rl.question("Digite o corredor: ");
        livro = new LivroFisico(titulo, autor, anoInfo, corredor);
        break;
      case "2":
        const formatoArquivo = await rl.question(
          "Digite o formato do arquivo (PDF, EPUB...): ",
        );
        livro = new Ebook(titulo, autor, anoInfo, formatoArquivo);
    }
  
  const diasAtraso = parseInt(await rl.question("Dias de atraso: "));

  if (!diasAtraso){
    console.log("Informe os dias de atraso, caso não haja atraso digite '0'.")
  }

  const valorMulta = livro.calcularMulta(diasAtraso);

    console.log("\n============================================");
    console.log("========== Etiqueta de Emprestimo ==========");
    console.log("============================================");
    console.log(`Titulo do livro: ${livro.titulo}`);
    console.log(`Autor do livro: ${livro.autor}`);
    console.log(`Ano do livro: ${livro.anoPublicacao}`);
    console.log(`\n Valor da multa por atraso:: R$ ${valorMulta.toFixed(2)}`);

  rl.close();
})();
