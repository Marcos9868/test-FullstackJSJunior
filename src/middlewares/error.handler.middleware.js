// Importa o modelo de erro que será apresentado no console
const DatabaseError = require("../models/errors/database.error")

// Função que o middleware irá executar
const errorHandler = (error, req, res, next) => {
  if (error instanceof DatabaseError) {
    res.sendStatus(400) // BAD_REQUEST
  } else {
    res.sendStatus(500) // INTERNAL_SERVER_ERROR
  }
}

module.exports = errorHandler