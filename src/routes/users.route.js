const router = require('express')

const usersRoute = router()

const listUsers = []

// Lista todos os usuários
usersRoute.get('/api/v1/users', (req, res) => {
  res.send(listUsers)
})

// Lista um usuário específico
usersRoute.get('/api/v1/users/:uuid', (req, res) => {
  const uuid = req.params.uuid
  console.log(uuid)
  res.send({ uuid })
})

// Cria um usuário
usersRoute.post('/api/v1/users', (req, res) => {
  const newUser = req.body
  res.status(201).send(newUser)
  console.log(newUser)
  listUsers.push(newUser)
})

// Altera dados de um usuário
usersRoute.put('/api/v1/users/:uuid', (req, res) => {
  const uuid = req.params.uuid
  const modifiedUser = req.body
  modifiedUser.uuid = uuid
  res.status(200).send(modifiedUser)
})

// Deleta todos os usuários da lista
usersRoute.delete('/api/v1/users', (req, res) => {
  const usersList = listUsers
  listUsers.pop()
  res.send('Removed')
})

// Deleta um usuário específico da lista
usersRoute.delete('/api/v1/users/:uuid', (req, res) => {
  const uuid = req.params.uuid
  res.status(200).send({ uuid })
})

module.exports = usersRoute