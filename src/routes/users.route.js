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
usersRoute.put('/api/v1/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  const modifiedUser = req.body
  modifiedUser.uuid = uuid

  await userRepository.updateUser(modifiedUser)
  res.sendStatus(200)
})

// Deleta todos os usuários da lista
usersRoute.delete('/api/v1/users', async (req, res) => {
  await userRepository.removeAllUsers()
  res.send('All Users Removed')
})

// Deleta um usuário específico da lista
usersRoute.delete('/api/v1/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  await userRepository.removeUser(uuid)
  res.status(200).send('User Removed')
})

module.exports = usersRoute