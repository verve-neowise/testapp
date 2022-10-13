const express = require('express')
const cors = require('cors')

const { db } = require('./database')
const { PORT } = require('./config')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {

    const result = await db.query('select * from users;')
    const users = result.rows

    res.json(users)
})

app.listen(PORT, () => {
    console.log('Server is running on ' + PORT);
})