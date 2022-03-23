// Importações dos módulos necessários
const express = require('express')
const api = express()
const userRoute = require('./routes/users.route')
const status = require('./routes/status.route')

// Configuração da api para receber JSON
api.use(express.json())

// Status da API
api.use(status)

// Rota dos usuários
api.use(userRoute)

// Porta do servidor
api.listen(4000, () => {
  console.log('Servidor rodando no link http://localhost:4000')
})