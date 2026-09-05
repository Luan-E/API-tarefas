const Tarefa = require("../models/tarefaModel")

//Define "/" como home e exibe uma mensagem caso funcione
const home = (req, res) => {
    res.status(200).json({ mensagem: "Rota / funcionando!" })
}

// Tenta criar tarefas com título e detalhamento. Exibe erro caso não funcione
const criarTarefa = async(req, res) => {
    try {
    const { titulo, detalhamento } = req.body
    const tarefa = await Tarefa.create({ titulo, detalhamento })
    res.status(201)
    } catch(error) {
        console.error(error)
        res.status(500).json({ erro: "Erro ao criar tarefa" })
    }
}

// Tenta listar tarefas. Exibe erro caso não funcione 
const listarTarefas = async(req, res) => {
    try {
        const tarefas = await Tarefa.findAll()
        res.status(200).json(tarefas)
    } catch(error) {
        console.error(error)
        res.status(500).json({ erro: "Erro ao listar tarefas"})
    }

}

// Tenta excluir tarefas. Exibe erro ao não encontrar ou falhar
const excluirTarefa = async(req, res) => {
    try {
        const { id } = req.params
        const tarefa = await Tarefa.findByPk(id)

        if(!tarefa) {
            return res.status(404).json({ erro: "Tarefa não encontrada" })
        }

        await tarefa.destroy()
        res.status(200).json({ mensagem: "Tarefa excluída" })
    } catch(error) {
        console.error(error)
        res.status(500).json({ erro: "Erro ao excluir tarefa" })
    }
}

// Tenta atualizar tarefas. Exibe erro caso não encontre ou falhe
const atualizarTarefa = async(req, res) => {
    try {
        const { id } = req.params
        const tarefa = await Tarefa.findByPk(id)

        if (!tarefa) {
            return res.status(404).json({ erro: "Tarefa não encontrada" })
        }

        await tarefa.update(req.body)

        res.status(200).josn(tarefa)
    } catch(error) {
        console.error(error)
        res.status(500).json({ erro: "Erro ao atualizar tarefa"})
    }
}

module.exports = {
    home,
    listarTarefas,
    criarTarefa,
    excluirTarefa,
    atualizarTarefa
}