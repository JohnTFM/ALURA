import express, {Router, Request, Response} from "express";
import {Cadastro} from "../model/entities/Cadastro";
import {Residencia} from "../model/entities/Residencia";

const rotas: Router= Router();

rotas.get("/locatario/integrar",(req: Request,res: Response)=> {
    try {
        const id: Number = req.body.id;
        const residencia: Residencia = new Residencia("Desc");
        residencia.valor = id;
        console.log(id);
        //logica com o id
        res.sendStatus(200);
    }catch (err){
        res.status(500).send("Erro no servidor");

    }
});
export default rotas;