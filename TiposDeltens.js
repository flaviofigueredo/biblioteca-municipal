import { ItemBase } from "./ItemBase.js";

export class LivroFisico extends ItemBase {
    constructor(titulo, autor, anoInformado, corredor, dias){
        super(titulo, autor, anoInformado, corredor, dias);
        this.anoAtual = new Date().getFullYear(); 
    }

    calcularMulta(diasAtraso){
        let multa = diasAtraso * 2.5;
        if (diasAtraso > 0){
            console.log(`[LIVRO FÍSICO] Calculando multa...`);
        }
        return multa;
    }

    verificarAno(anoPublicacao) {
        if (typeof anoPublicacao !== 'number' || isNaN(anoPublicacao)){
            throw new Error("ERR_TIPO_INVALIDO");
        }
        if (anoPublicacao <= 1000 || anoPublicacao > this.anoAtual) {
            console.log("[BLOQUEIO] O ano da publicação do livro é inválido");
            throw new Error("ERR_ANO_FORA_DO_LIMITE");
        }
        return;
    }
}

export class Ebook extends ItemBase {
    constructor(titulo, autor, anoInformado, formatoArquivo, dias){
        super(titulo, autor, anoInformado, formatoArquivo, dias);
    }

    calcularMulta(diasAtraso){
        let multa;
        if (diasAtraso > 0){
            console.log("-------------------------------------------------------------------------");
            console.log("[SISTEMA] Arquivo bloqueado. Acesso revogado no dispositivo do leitor");
            console.log("-------------------------------------------------------------------------");
            return (multa = 0.00);
        }
        return (multa = 0.00)
    }

    verificarAno(anoPublicacao) {
        if (typeof anoPublicacao !== 'number' || isNaN(anoPublicacao)){
            throw new Error("ERR_TIPO_INVALIDO");
        }
        if (anoPublicacao <= 1000 || anoPublicacao > this.anoAtual) {
            console.log("[BLOQUEIO] O ano da publicação do livro é inválido");
            throw new Error("ERR_ANO_FORA_DO_LIMITE");
        }
        return;
    }
}