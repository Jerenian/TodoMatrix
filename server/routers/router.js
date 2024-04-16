const Router = require('express')
const router = Router()
const UserController = require('../controller/controller')
router.post('/user', UserController.createUser)
router.get('/user/:id', UserController.getOneUser)
router.put('/user:id', UserController.updateUser)
router.delete('/user/:id', UserController.deleteUser)

module.exports = router