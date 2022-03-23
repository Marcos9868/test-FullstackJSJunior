const router = require('express')
const statusRoute = router()

statusRoute.get('/teste', (req, res) => {
  res.send({ nome: 'test-FullstackJSJúnior', versao: 1.0, autor: 'Marcos M. Ferreira' })
})

module.exports = statusRoute