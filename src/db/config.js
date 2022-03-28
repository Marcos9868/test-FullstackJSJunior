const { Pool } = require('pg/lib')

const connectionString = 'postgres://pfyfbfql:FyE386IdAbqiwG07D3tPlTsrTLM-nEVQ@motty.db.elephantsql.com/pfyfbfql'

const db = new Pool({ connectionString })

module.exports = db
