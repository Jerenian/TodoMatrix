const pool = require('../db')
class TodoController {
    async addTodo(req, res){
        try{
        const {text, type, user_id} = req.body
        console.log(text, type, user_id)
        const newTodo = await pool.query(
            'INSERT INTO todos (user_id, text, type) VALUES($1, $2, $3)  RETURNING *',
            [user_id, text, type]
        )
        res.json(newTodo.rows)
    }
    catch(error){
        console.log(error.message)
    }
    }
    async getAllTodos(req, res){
        const id = req.query.id
        const Todos = await pool.query(
            'SELECT * FROM todos where user_id = $1', [id]
        )
        res.json(Todos.rows)
    }
    async getTypeTodos(req, res){}
    async deleteTodo(req, res){}
    async complitedTodo(req, res){}
    async changeTodo(req, res){}
}
module.exports = new TodoController()