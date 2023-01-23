const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/ActivityController')
const {authentication, isAdmin} = require('../middleware/authentication')


router.post('/createActivity',ActivityController.create)
router.delete('/deleteActivity/:id',ActivityController.deleteActivityById)
router.get('/getAllActivities/',ActivityController.getAllActivities)
router.put('/updateActivity/:id',ActivityController.updateActivityById)
router.put('/attendance/:id', authentication, ActivityController.attendance);

module.exports = router;