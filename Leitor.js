export class Leitor {
    #idade;

    constructor(nome, idadeInformada){
        this.nome = nome;
        this.idade = idadeInformada;
    }
    get idade() {return this.#idade}

    set idade(novaIdade) {
        if (typeof novaIdade !== 'number' || isNaN(novaIdade)){
            throw new Error("ERR_TIPO_INVALIDO");
        }
        if (novaIdade < 12){
            console.log("[BLOQUEIO] Leitor menor de 12 anos precisa do responsável para o cadastro");
            throw new Error("ERR_LEITOR_MENOR_IDADE");
        }
        this.#idade = novaIdade;
    }
}