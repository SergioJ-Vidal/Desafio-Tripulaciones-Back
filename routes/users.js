const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.post('/createUser',UserController.createUser)
router.get('/getUsers',UserController.getUsers)
router.get('/getUserById/:id',UserController.getUserById)
router.get('/getUserByName/:name',UserController.getUserByName)
router.delete('/deleteUserById/:id',UserController.deleteUserById)


module.exports = router; 