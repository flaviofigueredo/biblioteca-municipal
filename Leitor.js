export class Leitor {
    #idade;

    constructor(nome, idadeInformada){
        this.nome = nome;
        this.idade = idadeInformada;
    }
    get idade() {return this.#idade}

    set idade(novaIdade) {
        if (novaIdade < 12){
            console.log("[BLOQUEIO] Leitor menor de 12 anos precisa do responsável para o cadastro");
            this.#idade = novaIdade;
            return;
        }
    }
}