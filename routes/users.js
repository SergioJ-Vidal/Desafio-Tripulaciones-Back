const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const {authentication, isAdmin} = require('../middleware/authentication')

router.post('/createUser',UserController.create)
router.get('/getUsers',UserController.getUsers)
router.post('/login',UserController.login)
router.get('/confirm/:emailToken',UserController.confirm)
router.delete('/logout',authentication,UserController.logout)
router.get('/getUserById/:id',UserController.getUserById)
router.get('/getUserByName/:name',UserController.getUserByName)
router.delete('/deleteUserById/:id',UserController.deleteUserById)


module.exports = router; 