const pool = require('../db')
const {query} = require("express")
class UserController {
    async createUser(req, res){
        try{
            console.log('3333' +  req.body)
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
            console.log(error.message)
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