const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

// Cria um modelo para a tabela
const Tarefa = sequelize.define(
    "Tarefa",
    {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        detalhamento: {
            type: DataTypes.STRING,
            allowNull: true
        },
        concluida: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    },

    { tableName: "tarefas" }
)

module.exports = Tarefa