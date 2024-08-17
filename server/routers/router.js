const Router = require('express')
const authMiddleware = require('../middleware/addMiddleware')
const router = Router()
const UserController = require('../controller/Usercontroller')
router.post('', UserController.createUser)
router.post('/userAuth', UserController.authUser)
router.get('/current', authMiddleware )
router.put('/update/:id', UserController.updateUser)
router.delete('/delete/:id', UserController.deleteUser)

module.exports = router