const router = require('express')
const JWT = require('jsonwebtoken')
const basicAuthetication = require('../middlewares/basicAuthetication.middleware')
const jwtAuthenticationMiddleware = require('../middlewares/jwt.authentication.middleware')
const ForbiddenError = require('../models/errors/forbidden.error')

const authorizationRouter = router()

authorizationRouter.post('/api/v1/users/login', basicAuthetication, async (req, res, next) => {
  try {
    const user = req.user

    if (!user) {
      throw new ForbiddenError('User not informed')
    }
    const jwtPayload = { useremail: user.useremail }
    const jwtOptions = { subject: user.uuid }
    const secretKey = 'my_secret_key'

    const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions)

    res.status(200).json({ token: jwt })

  } catch (error) {
    next(error)
  }
})

authorizationRouter.post('/api/v1/users/login/validate', jwtAuthenticationMiddleware, async (req, res, next) => {
  res.sendStatus(200)
})

module.exports = authorizationRouter