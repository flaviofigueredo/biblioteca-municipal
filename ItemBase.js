export class ItemBase {
    #anoPublicacao;

    constructor(titulo, autor, anoInformado){
        if (new.target === ItemBase) {
            throw new Error("[ERRO] 'Item Base' é abstrato, escolha um tipo de item válido");
        }
        this.titulo = titulo;
        this.autor = autor;
        this.#anoPublicacao = anoInformado;
        this.anoAtual = new Date().getFullYear();
    }
    get anoPublicacao() {
        return this.#anoPublicacao;
    }

    calcularMulta(diasAtraso){
        throw new Error("[ERRO] Execução Abortada: A classe filha deve implementar o método 'calcularMulta'!");
    }
}