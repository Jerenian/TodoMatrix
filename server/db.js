const Pool = require('pg').Pool

const pool = new Pool({
    user: 'alexandrsemyonov',
    host: 'localhost',
    port: 5431,
    database: 'bigtodos'
})
module.exports =pool


