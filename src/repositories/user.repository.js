// Importa as configurações do PG e do User Models
const db = require('../db/config')
const User = require('../models/model.user')

// Código que faz o acesso ao banco de dados
class userRepository {
  async findAllUsers() {
    const query = `
      SELECT uuid, useremail FROM list_users
    `;
    const { rows } = await db.query(query)
    return rows || []
  }
}

// // Exporta uma instância para que possa ser usado em qualquer parte
module.exports = new userRepository()
