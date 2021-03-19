const express = require('express')
const mongoose = require('mongoose')

mongoose.connect()
app = express()
app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(8000)