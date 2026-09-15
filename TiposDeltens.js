import { ItemBase } from "./ItemBase.js";

export class LivroFisico extends ItemBase {
    constructor(titulo, autor, anoInformado, corredor, dias){
        super(titulo, autor, anoInformado, corredor, dias);
    }

    calcularMulta(diasAtraso){
        let multa = diasAtraso * 2.5;
        if (diasAtraso > 0){
            console.log(`[LIVRO FÍSICO] Calculando multa...`);
        }
        return multa;
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
}