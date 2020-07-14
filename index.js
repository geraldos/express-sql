require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);

//Config Port
const {
    PORT
} = require('./config') || 5000

const {
    connection
} = require('./config')


//Routes
app.get('/', (req, res) => {
    res.send('Welcome to express mysql demo')
})

app.use('/api/users', require('./routes/users'))

if (connection) {
    app.listen(PORT, () => {
        console.log('Connected to Database')
        console.log(`Server runs on ${PORT}`)
    })
}