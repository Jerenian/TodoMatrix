const Router = require('express')
const router = Router()
const TodoController = require('../controller/TodoController')
router.post('todo', TodoController.addTodo)
router.get('todo', TodoController.getAllTodos)
router.get('todo', TodoController.getTypeTodos)
router.put('todo/:id', TodoController.complitedTodo)
router.put('todo/:id', TodoController.changeTodo)
router.delete('todo/:id', TodoController.deleteTodo)

module.exports = router