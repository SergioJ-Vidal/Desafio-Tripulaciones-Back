const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/ActivityController')

router.post('/create',ActivityController.create)

module.exports = router;