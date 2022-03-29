const ForbiddenError = require('../models/errors/forbidden.error')
const userRepository = require('../repositories/user.repository')

async function basicAuthetication(req, res, next) {
  try {
    const authorizationHeader = req.headers['authorization']

    if (!authorizationHeader) {
      throw new ForbiddenError('Uninformed Credentials')
    }
    const [autheticationType, token] = authorizationHeader.split(' ')

    if (autheticationType !== 'Basic' || !token) {
      throw new ForbiddenError('Invalid Authentication Type')
    }

    const tokenContent = Buffer.from(token, 'base64').toString('utf-8')

    const [useremail, password] = tokenContent.split(':')
    
    if (!useremail || !password) {
      throw new ForbiddenError('Unfilled credentials')
    }

    const user = await userRepository.findByUseremailAndPassword(useremail, password)

    if (!user) {
      throw new ForbiddenError('Invalid useremaiil or password')
    }

    req.user = user
    
    next()

  } catch (error) {
    next(error)
  }
}

module.exports = basicAuthetication