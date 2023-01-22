const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/ActivityController')

router.post('/createActivity',ActivityController.create)

module.exports = router;