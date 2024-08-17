const { query } = require('express')
const pool = require('../db')
class TodoController {

    async addTodo(req, res){
        try{
        const {user_id} = req.params
        const {text, type} = req.body
        const newTodo = await pool.query(
            'INSERT INTO todos (text, type, user_id) VALUES($1, $2, $3)',
            [text, type, user_id]
        )
        console.log(newTodo.rows[0])
        res.json(newTodo.rows[0])
    }
    catch(error){
        console.log(error.message)
    }
    }
    async getAllTodos(req, res){
        try {
            if(req.params){
                const {user_id} = req.params
                const Todos = await pool.query(
                    'SELECT * FROM todos WHERE user_id = $1', [user_id]
                )
            res.json(Todos.rows)
            }
            else{
                res.json()
            }
        } catch (error) {
            console.log(error.message)
        }

    }
    async deleteTodo(req, res){
        const {id} = req.params
        console.log(id)
        const NewTodoList = await pool.query(
            'DELETE FROM todos WHERE id = $1;', [id]
        )
        res.json(NewTodoList.rows)
    }
    async complitedTodo(req, res){
        const {id} = req.params
        console.log(id)
        const complitedTodo = await pool.query(
            'UPDATE todos SET complited = true WHERE id = $1', [id]
        )
        res.json(complitedTodo.rows)
    }
    async changeTodo(req, res){}
}
module.exports = new TodoController()