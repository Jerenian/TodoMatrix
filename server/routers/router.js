const Router = require('express')
const authMiddleware = require('../middleware/addMiddleware')
const router = Router()
const UserController = require('../controller/Usercontroller')
router.post('/user', UserController.createUser)
router.post('/userAuth', UserController.authUser)
router.get('/check', authMiddleware )
router.get('/user/:id', UserController.getOneUser)
router.put('/user:id', UserController.updateUser)
router.delete('/user/:id', UserController.deleteUser)

module.exports = router