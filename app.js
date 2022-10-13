const express = require('express')
const cors = require('cors')

const { db } = require('./database')
const { PORT } = require('./config')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/users', async (req, res) => {

    const result = await db.query('select * from users;')
    const users = result.rows

    res.json(users)
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id
    
    const result = await db.query('select * from users where id=$1;', [id])

    if (result.rowCount == 0) {
        res.status(404).send(`User ${id} not fund`)
    }
    else {
        const user = result.rows[0]
        res.json(user)
    }
})

app.listen(PORT, () => {
    console.log('Server is running on ' + PORT);
})