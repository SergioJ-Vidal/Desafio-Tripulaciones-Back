const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const { uploadUserImages } = require("../middleware/multer");
const {authentication, isAdmin} = require('../middleware/authentication')

router.post('/createUser', uploadUserImages.single('image'), UserController.create)
router.get('/getUsers',UserController.getUsers)
router.post('/login',UserController.login)
router.delete('/logout',authentication,UserController.logout)
router.put('/update/:id',UserController.updateUser)
router.get('/getUserById/:id',UserController.getUserById)
router.get('/getUserByName/:name',UserController.getUserByName)
router.delete('/deleteUserById/:id',isAdmin, authentication,UserController.deleteUserById)


module.exports = router; 