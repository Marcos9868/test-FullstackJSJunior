const router = require('express')
const statusRoute = router()

statusRoute.get('/api/v1/teste', (req, res) => {
  res.send({ nome: 'test-FullstackJSJúnior', versao: 1.0, autor: 'Marcos M. Ferreira' })
})

module.exports = statusRoute