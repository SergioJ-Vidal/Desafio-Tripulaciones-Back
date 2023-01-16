const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const {authentication, isAdmin} = require('../middleware/authentication')

router.post('/createUser',UserController.create)
router.get('/getUsers',UserController.getUsers)
router.post('/login',UserController.login)
router.get('/confirm/:emailToken',UserController.confirm)
router.delete('/logout',authentication,UserController.logout)

module.exports = router;