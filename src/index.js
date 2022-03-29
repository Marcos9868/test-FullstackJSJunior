// Importações dos módulos necessários
const express = require('express')
const api = express()
const userRoute = require('./routes/users.route')
const status = require('./routes/status.route')
const errorHandler = require('./middlewares/error.handler.middleware')
const authorizationRouter = require('./routes/authorization.route')
const swaggerUI = require('swagger-ui-express')
const swaggerDocs = require('./swagger.json')

// Conexão com o banco de dados
const db = require('./db/config')

// Configuração da api para receber JSON
api.use(express.json())

// Configuração do Swagger
api.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

// Rota Teste da API
api.use(status)

// Rota dos usuários
api.use(userRoute)

// Rota de autenticações
api.use(authorizationRouter)

// Configuração dos Handlers de Erro
api.use(errorHandler)

// Porta do servidor
api.listen(4000, () => {
  console.log('Servidor rodando no link http://localhost:4000')
})