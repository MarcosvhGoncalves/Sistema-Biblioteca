# Sistema Biblioteca

Sistema simples de biblioteca feito em JavaScript para rodar no terminal com o objetivo de aprendizado de Programação orientada ao objeto. O programa cadastra um leitor, registra um livro físico ou e-book e calcula as consequências de um possível atraso.

## Funcionalidades

- Cadastro de leitor com validação de idade mínima.
- Cadastro de livros físicos e e-books.
- Validação do ano de publicação.
- Cálculo de multa para livros físicos.
- Bloqueio de acesso a e-books em caso de atraso.

## Tecnologias

- JavaScript
- Node.js

## Como executar

1. Clone este repositório.
2. Abra o terminal na pasta do projeto.
3. Execute:

```bash
node index.js
```

4. Siga as perguntas exibidas no terminal.

## Estrutura do projeto

- `index.js`: inicia o sistema e coleta os dados.
- `ItemBase.js`: classe base dos itens da biblioteca.
- `TiposDeItens.js`: classes `LivroFisico` e `Ebook`.
- `Leitor.js`: classe responsável pelos dados do leitor.
