const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activitiesController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to get all activities for the authenticated user
router.get('/', authMiddleware, activitiesController.getAllActivities);

// Route to add a new activity
router.post('/', authMiddleware, activitiesController.addActivity);

// Route to update an existing activity by ID
router.put('/:id', authMiddleware, activitiesController.updateActivity);

// Route to delete an activity by ID
router.delete('/:id', authMiddleware, activitiesController.deleteActivity);

module.exports = router;