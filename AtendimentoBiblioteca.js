import { Leitor } from "./Leitor.js";

export class AtendimentoBiblioteca {

    cadastrarNovoLeitor(nome, idade){

        try {

            console.log(`\n[INICIANDO COMUNICAÇÃO...]`);
            const leito = new Leitor(nome, idade);
            console.log(`✅ Sucesso!`);

        } catch (excecaoCapturada) {

            console.log(`[ERRO INTERCEPTADO] A operação não pode ser concluída.`);
            this.traduzirErroParaOCliente(excecaoCapturada.message);

        } finally {

            console.log("🔒 Operação encerrada com segurança.");

        }
    }

    traduzirErroParaOCliente(codigoTecnicoDoErro) {
        switch (codigoTecnicoDoErro) {

            case "ERR_TIPO_INVALIDO":
                console.log("❌ AVISO: Por favor, utilize apenas números.");
                break;

            case "ERR_ANO_FORA_DO_LIMITE":
                console.log("❌ AVISO: Ano fora do Limite coloque um ano válido entre 1000 e 2026");
                break;

            case "ERR_LEITOR_MENOR_IDADE":
                console.log("❌ AVISO: Leitores menores de 12 anos necessitam da presença física de um responsável para efetivação do cadastro.");
                break;

            default:
                console.log("❌ AVISO SISTÊMICO: Serviço indisponível. Tente mais tarde.");
        }
    }
}