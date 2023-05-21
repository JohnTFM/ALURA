import {PessoasController} from "../controller/PessoasController";
import rotas from "./LocatarioRoutes";

rotas.get("/pessoas",PessoasController.getAllPessoas);

rotas.get("/pessoas/:id",PessoasController.getOnePessoa);

rotas.post("/pessoas",PessoasController.criaPessoa);

rotas.put("/pessoas/:id",PessoasController.atualizaPessoa);

rotas.delete("/pessoas/:id",PessoasController.deletarPessoa);

export default rotas;