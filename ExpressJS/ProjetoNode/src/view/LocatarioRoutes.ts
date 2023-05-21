import express, {Router, Request, Response} from "express";
import {LocatarioController} from "../controller/LocatarioController";

const rotas: Router= Router();

rotas.post("/locatario",(req: Request,res: Response)=> {
    let nomes: string[] = [];
    req.body.nomes.forEach((nome: string)=>{
        nomes.push(nome);
    })
    LocatarioController.inserir(nomes)
    res.status(200).send();

});

rotas.get("/locatario", async (req, res) => {
        const rows = await LocatarioController.consultar();
      res.json(rows);
})

rotas.put("/locatario", async (req,res)=>{
    await LocatarioController.atualizar(req.body.id,req.body.nome);
    res.sendStatus(200);
})

rotas.delete("/locatario", async (req, res)=>{
    await LocatarioController.deletar(req.body.id);
    res.sendStatus(200);
})


export default rotas;