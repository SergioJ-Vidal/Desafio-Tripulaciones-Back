const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController')
const {authentication, isAdmin} = require('../middleware/authentication')


router.post('/create',CategoryController.create)

module.exports = router;