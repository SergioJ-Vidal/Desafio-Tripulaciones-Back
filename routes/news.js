const express = require('express');
const router = express.Router();
const NewController = require('../controllers/NewController')
const {authentication, isAdmin} = require('../middleware/authentication')


router.post('/createNew',authentication,NewController.create)
router.get('/getAll',NewController.getAll)

module.exports = router;