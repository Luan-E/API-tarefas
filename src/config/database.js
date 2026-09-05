const dotenv = require("dotenv")
const { Sequelize } = require("sequelize")

dotenv.config()

// Utiliza o Sequelize para ciração da tabela no DB
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.PORT,
        dialect: "mysql"
    }
)

module.exports = sequelize