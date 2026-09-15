import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { LivroFisico, Ebook } from './TiposDeltens.js';
import { Leitor } from './Leitor.js';

const rl = readline.createInterface({ input, output });
IniciarSistema();

async function IniciarSistema() {
    console.log("=== SISTEMA DE GESTÃO DE LIVROS ===");

    const nome = await rl.question("Digite o nome do leitor: ");
    const idade = parseInt(await rl.question("Digite a idade do leitor: "));

    let leito;
    leito = new Leitor(nome, idade);
    if (idade < 12){
        rl.close();
        process.exit();
    }

    console.log("\n Selecione qual Item quer cadastrar:");
    console.log("1 - Livro Físico");
    console.log("2 - E-Book");
    const tipo = parseInt(await rl.question("Informe a opção escolhida: "));

    const titulo = await rl.question("Digite o Título do Livro: ");
    const autor = await rl.question("Digite o Autor do Livro: ");

    const anoInfo = parseInt(await rl.question("Digite o Ano de Publicação do Livro: "));
    if (anoInfo > new Date().getFullYear() || anoInfo < 1000){
        console.log("Ano Inválido. Encerrando o programa.");
        rl.close();
        process.exit();
    }

    const atraso = parseInt(await rl.question("Quantos dias de atraso tem essa devolução: "));
    if (atraso < 0){
        console.log("Número Inválido. Encerrando o programa.");
        rl.close();
        process.exit();
    }

    let livro;

    switch (tipo) {
        case 1:
            const corredor = parseInt(await rl.question("Digite o Número do Corredor do Livro: "));
            livro = new LivroFisico(titulo, autor, anoInfo, corredor, atraso);
            break;
        case 2:
            const formato = await rl.question("Digite o Formato do Arquivo do Livro: ");
            livro = new Ebook(titulo, autor, anoInfo, formato, atraso);
            break;
        default:
            console.log("Opção Inválida. Encerrando o programa.");
            rl.close();
            process.exit();
    }

    const multa = livro.calcularMulta(atraso);

    if (livro.titulo === undefined || livro.autor === undefined) {
        console.log("\n[ERRO]: Dados Vitais não passaram na validação de segurança");
        console.log("O relatório do livro devolvido não pode ser gerado: Título, Autor e/ou Ano de Publicação Inválidos");
    
    }

    else {
        console.log("----------------------");
        console.log("Relatório do Livro Devolvido");
        console.log("----------------------");
        console.log(`Devolvido por: ${nome}`);
        console.log(`Nome do Livro: ${titulo}`);
        console.log(`Autor: ${autor}`);
        console.log(`Ano de Publicação: ${anoInfo}`);
        console.log(`Valor da Multa: R$${multa}`);
    }
        
    rl.close();
}
