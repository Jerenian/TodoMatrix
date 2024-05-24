const Router = require('express')
const router = Router()
const TodoController = require('../controller/TodoController')
router.post('/:user_id/addtodo', TodoController.addTodo)
router.get('/:user_id/gettodo', TodoController.getAllTodos)
router.put('/:user_id/todo/:id', TodoController.complitedTodo)
router.put('/:user_id/todo/:id', TodoController.changeTodo)
router.delete('/:user_id/todo/:id', TodoController.deleteTodo)

module.exports = router