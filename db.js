const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "qwerty123",
    host: "localhost",
    port: 5432,
    database: "hotel"
})

module.exports = pool