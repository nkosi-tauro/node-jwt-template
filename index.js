require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const cors = require('cors')
const cookieParser = require('cookie-parser')

app = express()
app.use(cookieParser())
app.use(cors({
       // send cookies to frontend
       credentials: true,
       origin: ['http://localhost:8081', process.env.PORT]
}))
app.use(express.json())
app.use('/api',routes)

mongoose 
 .connect(process.env.MONGO_PROD_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Connected to Vue JWT Auth Databse"))
 .catch(err => console.log(err));



app.listen(8000)