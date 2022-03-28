// Importações dos módulos necessários
const express = require('express')
const api = express()
const userRoute = require('./routes/users.route')
const status = require('./routes/status.route')
const errorHandler = require('./middlewares/error.handler.middleware')

// Conexão com o banco de dados
const db = require('./db/config')


// Configuração da api para receber JSON
api.use(express.json())

// Status da API
api.use(status)

// Rota dos usuários
api.use(userRoute)

// Configuração dos Handlers de Erro
api.use(errorHandler)

// Porta do servidor
api.listen(4000, () => {
  console.log('Servidor rodando no link http://localhost:4000')
})