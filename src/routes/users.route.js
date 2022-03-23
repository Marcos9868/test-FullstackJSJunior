const router = require('express')

const usersRoute = router()

usersRoute.get('/v1/users', (req, res) => {
  res.send({ uuid: 0, email: 'marcos@marcos.com', senha: '1234' })
})

// usersRoute.get('/v1/users/:uuid' (req, res) => {
//   res.send(newUser)
// })

usersRoute.post('/v1/users', (req, res) => {
  const newUser = req.body
  console.log(newUser)
  res.send(newUser)
})

module.exports = usersRoute