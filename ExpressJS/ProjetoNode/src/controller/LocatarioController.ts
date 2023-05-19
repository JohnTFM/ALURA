import express from "express";
import {Locatario} from "../model/interfaces/Locatario";
import {Cadastro} from "../model/entities/Cadastro";
import {inserirLocatario, consultarLocatarios} from "../model/repository/Repository";
import {RowDataPacket} from "mysql2";
export class LocatarioController{
    static inserirLocatarios(nomes: string[]): void{
        let locatarios: Locatario[] = [];

        nomes.forEach(nome=>{
            inserirLocatario(nome).then(()=>console.log(`Inserido ${nome}\n`));
        })

    }


    static async consultar() {
    const [rows,fields] = await consultarLocatarios();



        return rows ;
    }
}