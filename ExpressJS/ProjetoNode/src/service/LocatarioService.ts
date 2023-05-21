import {Locatario} from "../models_from_mvc/interfaces/Locatario";
import {consultarLocatariosConnection} from "../repository/Repository";
import {Cadastro} from "../models_from_mvc/entities/Cadastro";
import {FieldPacket, OkPacket, ResultSetHeader, RowDataPacket} from "mysql2";
export class LocatarioService{


    async findAllLocataries(qntd?: number){

        const result = await consultarLocatariosConnection();
        const listaLocatarios: Locatario[] = [];

        const [rows, fields] = result as [RowDataPacket[], FieldPacket[]];

        rows.forEach(item=>{
            listaLocatarios.push(new Cadastro(item.nome));
        })

        return listaLocatarios;
    }


}