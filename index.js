require('dotenv')
const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@vuejwtauth.mpdvx.mongodb.net/jwtdb?retryWrites=true&w=majority`, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}, (err) => {
    console.log('connected to DB')
})
app = express()
app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(8000)