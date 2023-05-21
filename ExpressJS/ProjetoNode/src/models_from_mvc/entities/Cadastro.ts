import {Locatario} from "../interfaces/Locatario";
import {Residencia} from "./Residencia";

export class Cadastro implements Locatario{

    private nome: String;

    constructor(nome: string) {
        this.nome = nome;
    }

    integrarListaInteresse(): Boolean {
        return true;
    }

    pesquisarResidencia(): Residencia {
        return new Residencia("Uma residencia interessante");
    }

}