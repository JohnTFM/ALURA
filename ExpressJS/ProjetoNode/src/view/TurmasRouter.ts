//routes/turmasRoute.js

const { Router } = require('express')
import {TurmaController} from "../controller/TurmaController";
const router = Router()
router
    .get('/turmas', TurmaController.pegaTodasAsTurmas)
    .get('/turmas/:id', TurmaController.pegaUmaTurma)
    .post('/turmas', TurmaController.criaTurma)
    .put('/turmas/:id', TurmaController.atualizaTurma)
    .delete('/turmas/:id', TurmaController.apagaTurma)

export default router;