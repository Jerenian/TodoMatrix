const {query} = require("express")
const pool = require('../db')
const TodoController = require('../controller/TodoController')
class UserController {
    async createUser(req, res){
        console.log(req.body)
        try{
            const {username} = req.body
            const {email} = req.body
            const {password} =  req.body
                const User = await pool.query
                (
                    'INSERT INTO users (username, email, password) VALUES($1, $2, $3)  RETURNING *',
                    [username, email, password]
                )
                 res.json(User.rows);
         }
        catch(error){
            res.json(error.message)
        }
    }

    async authUser(req, res){
        try {
            const {email, password} = await req.body
            const User = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2 ', [email, password])
            res.json(User.rows[0])
        }
        catch (error) {
            console.log(error)
            res.json(error.message)
        }
    }
    async getOneUser(req, res){
        try {
            const id = req.params.id
            console.log(req.params)
            const user = await pool.query('SELECT * FROM users where id = $1 RETURNING * ,'[id])
            res.json(user.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }
    async updateUser(req, res){
        try{
        const {id} = req.body
        const {username} = req.body
        const user = await pool.query('UPDATE users set username = $1, where id = $2 RETURNING * ,'[username, id])
        res.json(user.rows[0])
    }
    catch(error){
        console.log(error.message)
    }
}
    async deleteUser(req, res){
        try{
            const {id} = req.body
            const user = await pool.query('DELETE * FROM users where id = $1 RETURNING * ,'[id])
            res.json(user.rows[0])
        }
        catch(error){
            console.log(error.message)
        }
    }
}
module.exports = new UserController()