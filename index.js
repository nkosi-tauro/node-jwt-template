require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

app = express()
app.use('/api',routes)

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@vuejwtauth.mpdvx.mongodb.net/jwtdb?retryWrites=true&w=majority`, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}, (err) => {
    console.log('connected to DB')
})



app.listen(8000)