const Router = require('express')
const router = Router()
const auth = require('../middleware/addMiddleware')
const TodoController = require('../controller/TodoController')
router.post('/add', auth, TodoController.addTodo)
router.get('/get', auth, TodoController.getAllTodos )
router.put('/complited/:id', auth, TodoController.complitedTodo)
router.put('/change/:id', auth, TodoController.changeTodo)
router.delete('/delete/:id', auth, TodoController.deleteTodo)

module.exports = router