const {query} = require("express")
const pool = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email) =>{
    return jwt.sign(
        {id, email},
        "JWT_SECRET_KEY",
        {expiresIn: '24h'}
    )
}

class UserController {
    async createUser(req, res){

        try{
            const {username} = req.body
            const {email} = req.body
            const {password} =  req.body
            const hashpassword = await bcrypt.hash(password, 5)
            const User = await pool.query
                (
                    'INSERT INTO users (username, email, password) VALUES($1, $2, $3)  RETURNING *',
                    [username, email, hashpassword]
                )
            const token =  generateJwt(User.rows[0].id, email)
            console.log(token)
            res.json(token);
         }
        catch(error){
            res.json(error.message)
        }
    }

    async authUser(req, res, next){
        try {
            const {email, password} = req.body
            console.log(password)
            const User = await pool.query('SELECT * FROM users WHERE email = $1', [email])
            console.log(User)
            const comparepassword = bcrypt.compareSync(password, User.rows[0].password)
            console.log(User.rows[0].password)
            if(!comparepassword) {
               return new TypeError('неврный пароль')
            }
            const token = generateJwt(User.rows[0].id, email)
            console.log(token)
            res.json(token)
        }
        catch (error) {
            console.log(error.message)
            res.json(error.message)
        }
    }
    async check(req, res){
        const token = generateJwt(req.User.id, req.User.email)
        return res.json(token)
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