const router = require('express')
const userRepository = require('../repositories/user.repository')

const usersRoute = router()

// Lista todos os usuários
usersRoute.get('/api/v1/users', async (req, res) => {
  const users = await userRepository.findAllUsers()
  res.send(users)
})

// Lista um usuário específico
usersRoute.get('/api/v1/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  const user = await userRepository.findById(uuid)
  console.log(user)
  res.send(user)
})

// Cria um usuário
usersRoute.post('/api/v1/users', async (req, res) => {
  const newUser = req.body
  const uuid = await userRepository.createUser(newUser)
  res.status(201).send(uuid)
  console.log(uuid)
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
  res.status(200).send('User Removed')
})

module.exports = usersRoute