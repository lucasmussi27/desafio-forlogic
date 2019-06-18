const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 4000
const app = express()

mongoose.Promise = global.Promise
const uri = 'mongodb://localhost/desafio-forlogic'
mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => console.log('Connected to the Database!'))
    .catch(err => console.log('Error during connect to the Database!'))

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/customers', require('./routes/customer.router'))

app.listen(port,() => console.log(`Listening Requests on Port ${port}`))