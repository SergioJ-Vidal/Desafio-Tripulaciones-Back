const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/ActivityController')
const {authentication, isAdmin} = require('../middleware/authentication')

router.post('/createActivity', authentication, ActivityController.create)
router.delete('/deleteActivity/:id', authentication,ActivityController.deleteActivityById)
router.get('/getAllActivities/',ActivityController.getAllActivities)
router.put('/updateActivity/:id', authentication,ActivityController.updateActivityById)
router.put('/attendance/:id', authentication, ActivityController.attendance);
router.put('/absence/:id', authentication, ActivityController.absence);
router.put('/help/:id', authentication, ActivityController.help);

module.exports = router;