const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/ActivityController')
const {authentication, isAdmin} = require('../middleware/authentication')


router.post('/createActivity', isAdmin, authentication, ActivityController.create)
router.delete('/deleteActivity/:id', isAdmin, authentication,ActivityController.deleteActivityById)
router.get('/getAllActivities/',ActivityController.getAllActivities)
router.put('/updateActivity/:id', isAdmin, authentication,ActivityController.updateActivityById)
router.put('/attendance/:id', authentication, ActivityController.attendance);

module.exports = router;