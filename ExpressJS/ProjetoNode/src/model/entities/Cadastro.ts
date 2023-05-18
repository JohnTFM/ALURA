import {Locatario} from "../interfaces/Locatario";
import {Residencia} from "./Residencia";

export class Cadastro implements Locatario{



    integrarListaInteresse(): Boolean {
        return true;
    }

    pesquisarResidencia(): Residencia {
        return new Residencia("Uma residencia interessante");
    }

}