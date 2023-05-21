import express from 'express';
import routes from './view/LocatarioRoutes';
import connection from "./repository/Repository";
import {LocatarioService} from "./service/LocatarioService";
import bodyParser from "body-parser";
import pessoaRoutes from "./view/PessoaRoutes";
import nivelRouter from "./view/NivelRouter";
import turmasRouter from "./view/TurmasRouter";
const app = express();

app.use(bodyParser.json(),
    routes,
    pessoaRoutes,
    nivelRouter,
    turmasRouter
    );
app.listen(8080,()=>{
    console.log("escutando 8080");
})





