const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crud_user',
  password: 'dian367',
  port: 5432,
})

module.exports = {pool}