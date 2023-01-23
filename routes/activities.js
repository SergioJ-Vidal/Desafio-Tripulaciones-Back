const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/ActivityController')

router.post('/createActivity',ActivityController.create)
router.delete('/deleteActivity/:id',ActivityController.deleteActivityById)
router.get('/getAllActivities/',ActivityController.getAllActivities)
router.put('/updateActivity/:id',ActivityController.updateActivityById)

module.exports = router;