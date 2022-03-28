// Importa as configurações do PG e do User Models
const db = require('../db/config')
const User = require('../models/model.user')

// Código que faz o acesso ao banco de dados
class userRepository {
  // Função que traz todos os usuários
  async findAllUsers() {
    const query = `
      SELECT uuid, useremail FROM list_users
    `;
    const { rows } = await db.query(query)
    return rows || []
  }
  // Função que traz apenas um usuário pelo seu ID único
  async findById(uuid) {
    const query = `
      SELECT uuid, useremail 
      FROM list_users
      WHERE uuid = $1 
    `
    const values = [uuid]

    const { rows } = await db.query(query, values)
    const [ user ] = rows

    return user || []
  }
}

// // Exporta uma instância para que possa ser usado em qualquer parte
module.exports = new userRepository()
