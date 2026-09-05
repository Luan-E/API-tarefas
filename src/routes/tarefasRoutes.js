const express = require("express")
const { home, listarTarefas, criarTarefa, excluirTarefa, atualizarTarefa,Tarefa } = require("../controllers/tarefasController")

const router = express.Router()

router.get("/", home)
router.get("/tarefas", listarTarefas)
router.post("/tarefas", criarTarefa)
router.delete("/tarefas/:id", excluirTarefa)
router.patch("/tarefas/:id", atualizarTarefa)

module.exports = router