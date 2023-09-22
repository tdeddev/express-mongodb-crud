const express = require('express')
const app = express()
const mongoose = require('mongoose')
const manageProduct = require('./controller/ManageProduct')

// mongodb connect

mongoose.connect('mongodb+srv://admin:1234@cluster0.tp1c93t.mongodb.net/?retryWrites=true&w=majority')
        .then(() => console.log('connect mongodb success'))
        .catch((err) => console.log(err))

// Middleware
app.use(express.json())
app.use('/api', manageProduct)


app.listen(3333, () => console.log('App running on Port:3333'))