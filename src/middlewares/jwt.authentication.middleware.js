const ForbiddenError = require("../models/errors/forbidden.error")
const JWT = require('jsonwebtoken')
const userRepository = require("../repositories/user.repository")

async function jwtAuthenticationMiddleware(req, res, next) {
  try {
    const authorizationHeader = req.headers['authorization']

    if (!authorizationHeader) {
      throw new ForbiddenError('Unfilled Credentials')
    }

    const [autheticationType, token] = authorizationHeader.split(' ')

    if (autheticationType !== 'Bearer' || !token) {
      throw new ForbiddenError('Invalid Authentication Type')
    }

    try {
      const tokenPayload = JWT.verify(token, 'my_secret_key')

      if (typeof tokenPayload !== "object" || !tokenPayload.sub) {
        throw new ForbiddenError('Invalid Token')
      }
      const uuid = tokenPayload.sub

      const user = {
        uuid: tokenPayload.sub,
        useremail: tokenPayload.useremail
      }

    } catch(error) {
      throw new ForbiddenError('Invalid Token')
    }
    
    req.user = user

    next()
  } catch (error) {
    next(error)
  }
}

module.exports = jwtAuthenticationMiddleware
// {
// 	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20iLCJpYXQiOjE2NDg1ODYxMDgsInN1YiI6IjA0MzA1NGY5LWY4NTItNGNlNy1hYWNmLWViODE3M2U3YzUwYSJ9.ESdQEbB-Z712EB7c0hm_PmH4JyYIZ9GYEkoJd147Bw0"
// }