const { DATABASE_URL } = require("./config");
const { Pool } = require('pg')

const connectionString = DATABASE_URL

const pool = new Pool({
    connectionString
})


pool.connect((err, client) => {
    if (err) {
        console.error('Error while connection with db: ' + err);
    }
})

exports.db = pool