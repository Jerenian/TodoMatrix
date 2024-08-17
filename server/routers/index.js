const express = require('express')
const router = express.Router()
const userRouter = require('./router') 
const todoRouter = require('./todoRouter') 
router.use('/user', userRouter)
router.use('/todo', todoRouter)

module.exports = router