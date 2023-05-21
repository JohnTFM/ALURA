import express from "express";
import {Locatario} from "../models_from_mvc/interfaces/Locatario";
import {Cadastro} from "../models_from_mvc/entities/Cadastro";
import {
    inserirLocatario,
    consultarLocatariosConnection,
    atualizarLocatario,
    deletarLocatario
} from "../repository/Repository";
import {RowDataPacket} from "mysql2";
export class LocatarioController{
    static inserir(nomes: string[]): void{ /// post create
        let locatarios: Locatario[] = [];

        nomes.forEach(nome=>{
            inserirLocatario(nome).then(()=>console.log(`Inserido ${nome}\n`));
        })

    }


    static async consultar() { ///get read
    const [rows,fields] = await consultarLocatariosConnection();

        return rows ;
    }

    static async atualizar(id: number, nome: string){/// update

        await atualizarLocatario(id,nome);

    }

    static async deletar(id: number){ ///deletar
        await deletarLocatario(id);
    }

}