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
app.post('/authorization', async(req, res) => {
    console.log(req.body)
    try{
        const {username} = req.body
        const {email} = req.body
        const {password} =  req.body
        const User = await pool.query(
            'INSERT INTO users (username, email, password) VALUES($1, $2, $3)  RETURNING *',
            [username, email, password]
        )
            res.json(User.rows);
     }
    catch(error){
        console.log(error)
    }
    
})
// {
// // app.post(':id/todos', async(req, res) => {
// //     try{
// //         const {description} = req.body;
// //         const newTodo = await pool.query(
// //             'INSERT INTO todos (description) VALUES($1) RETURNING *',
// //             [description]
// //         )
// //         res.json(newTodo.rows);
// //     }
// //     catch(error){
// //         console.log(error.message)
// //     }
// // })

// // app.get(":id/todos", async (req, res) => {
// //     try{
     
// //         const allTodos = await pool.query("SELECT * FROM todos")
// //         res.json(allTodos.rows)
// //     }
// //     catch (error) {
// //         console.log(error.message)
// //     }
// // })


// // app.get(":id/todos/:id", async (req, res) => {
// //     try{
// //         const {id} = req.params
// //         const todo = await pool.query("SELECT * FROM todos WHERE id = $1", [id])
// //         res.json(todo.rows[0])
// //     }
// //     catch (error) {
// //         console.log(error.message)
// //     }
// // })
// // app.put(":id/todos/:id", async (req, res) => {
// //     try{
// //         const {id} = req.params
// //         const {description} = req.body
// //         await pool.query(
// //             "UPDATE todos SET description = $1 WHERE id = $2",
// //              [description, id])
// //         res.json("todo was updated")
// //     }
// //     catch (error) {
// //         console.log(error.message)
// //     }
// // })
// // app.delete(":id/todos/:id", async (req, res) => {
// //     try{
// //         const {id} = req.params
// //         await pool.query(
// //             "DELETE FROM todos WHERE id = $1",
// //              [id])
// //         res.json("TODO was deleted")
// //     }
// //     catch (error) {
// //         console.log(error.message)
// //     }
// // })
// }
app.listen(8002, () => {
    console.log("server has started on 8002 port")
})