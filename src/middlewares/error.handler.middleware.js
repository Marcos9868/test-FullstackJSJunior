// Importa o modelo de erro que será apresentado no console
const DatabaseError = require("../models/errors/database.error")
const ForbiddenError = require('../models/errors/forbidden.error')

// Função que o middleware irá executar
const errorHandler = (error, req, res, next) => {
  if (error instanceof DatabaseError) {
    res.sendStatus(400) // BAD_REQUEST
  } else if (error instanceof ForbiddenError) {
    res.sendStatus(403) //FORBIDDEN_UNAUTHORIZED
  } else {
    res.sendStatus(500) // INTERNAL_SERVER_ERROR
  }
}

module.exports = errorHandler