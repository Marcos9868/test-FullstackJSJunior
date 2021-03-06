// Importa as configurações do PG e do User Models
const DatabaseError = require('../models/errors/database.error');
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
    try {
      const query = `
        SELECT uuid, useremail
        FROM list_users
        WHERE uuid = $1
      `
      const values = [uuid]

      const { rows } = await db.query(query, values)
      const [ user ] = rows

      return user || []

    } catch (error) {
      throw new DatabaseError('ID Query Error', error)
    }
  }

  // Funçao que busca o useremail e password do usuário via token
  async findByUseremailAndPassword(useremail, password) {
    try {
      const query = `
      SELECT uuid, useremail
      FROM list_users WHERE
      useremail = $1 AND
      password = crypt($2, 'my_salt')
      `

      const values = [useremail, password]

      const { rows } = await db.query(query, values)
      const [user] = rows

      return user || null

    } catch(error) {
      throw new DatabaseError('Query Error by useremail and password', error)
    }
  }

  // Função que cria o usuário no Banco de Dados
  async createUser(user) {
    const script = `
      INSERT INTO list_users
      (useremail, password)
      VALUES ($1, crypt($2, 'my_salt'))
      RETURNING uuid
    `

    const values = [user.useremail, user.password]

    const { rows } = await db.query(script, values)
    const [ newUser] = rows

    return newUser.uuid
  }

  // Função que altera dados de um usuário
  async updateUser(user) {
    const script = `
      UPDATE list_users
      SET 
        useremail = $1,
        password = crypt($2, 'my_salt')
      WHERE uuid = $3
    `

    const values = [user.useremail, user.password, user.uuid]

    await db.query(script, values)
  }
  
  // Função que remove todos os usuários da lista
  async removeAllUsers() {
    const script = `
      TRUNCATE TABLE list_users
    `

    await db.query(script)
  }

  // Função que remove um usuário através de seu ID
  async removeUser(uuid) {
    const script = `
      DELETE FROM list_users
      WHERE uuid = $1
    `

    const values = [uuid]

    await db.query(script, values)
  }
}

// // Exporta uma instância para que possa ser usado em qualquer parte
module.exports = new userRepository()
