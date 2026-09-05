const express = require("express")
const tarefasRoutes = require("./src/routes/tarefasRoutes")

const app = express()

app.use(express.json())
app.use(tarefasRoutes)

module.exports = app