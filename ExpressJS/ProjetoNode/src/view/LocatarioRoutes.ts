import express, {Router, Request, Response} from "express";
import {Cadastro} from "../model/entities/Cadastro";
import {Residencia} from "../model/entities/Residencia";
import {LocatarioController} from "../controller/LocatarioController";

const rotas: Router= Router();

rotas.post("/locatario",(req: Request,res: Response)=> {
    let nomes: string[] = [];
    req.body.nomes.forEach((nome: string)=>{
        nomes.push(nome);
    })
    LocatarioController.inserirLocatarios(nomes)
    res.status(200).send();

});

rotas.get("/locatario", async (req, res) => {
        const rows = await LocatarioController.consultar();
        console.log(rows);
      res.json(rows);

})

export default rotas;