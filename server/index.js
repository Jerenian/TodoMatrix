const express = require('express')
const {query} = require("express")
const cookieParser = require('cookie-parser')
const app = express()
const cors = require('cors')
require('dotenv').config()
const pool = require('./db')
const router = require('./routers/router')
const TodoRouter = require('./routers/todoRouter')
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use('/api', TodoRouter)


app.listen(8002, () => {
    console.log("server has started on 8002 port")
})