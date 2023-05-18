import {Residencia} from "../entities/Residencia";

export interface Locatario{
    pesquisarResidencia(): Residencia;
    integrarListaInteresse(): Boolean;
}