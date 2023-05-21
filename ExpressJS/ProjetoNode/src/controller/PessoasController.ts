import {Request, Response} from "express";
import {where} from "sequelize";

const db = require ('../../configSequelize/models/');

export class PessoasController{

    public static async getAllPessoas(req: Request,res: Response){
        try {
            const allPessoas = await db.Pessoas.findAll();

            return res.json(allPessoas).status(200);
        }catch (err){
            return res.sendStatus(500);
        }
    }

    public static async getOnePessoa(req: Request, res: Response){
        const { id } = req.params;

        try{
            const umaPessoa = await db.Pessoas.findOne({where: { id: Number(id)}});
            return res.json(umaPessoa).status(200);
        }catch (err){
            return res.status(500);
        }
    }

    public static async criaPessoa(req: Request, res: Response){

        const novaPessoa = req.body;
        try{
            const newPessoa = await db.Pessoas.create(novaPessoa);
            return res.status(200).json(newPessoa);
        }catch (err){
            return res.status(500);
        }


    }


    public static async atualizaPessoa(req: Request, res: Response){
        const {id} = req.params;
        const novasInfos = req.body;
        try{
            await db.Pessoas.update(novasInfos, {where: {id: Number(id)}});
            const umaPessoa = await db.Pessoas.findOne({where: { id: Number(id)}});
            return res.json(umaPessoa).send(200);
        }catch (err){
            return res.status(500).send();
        }

    }

    public static async deletarPessoa(req: Request, res: Response) {
     const {id} = req.params;
     try{
         await db.Pessoas.destroy({where: { id: Number(id)}});
         return res.status(200).json({mensagem: `id de número ${id} deletado com sucesso`});


     }catch (err){
         res.json(err).send(500);
     }

    }
}