const Activity = require('../models/activityModel');

// Add a new activity
exports.addActivity = async (req, res) => {
    try {
        const { name, category, duration } = req.body;
        const newActivity = new Activity({ name, category, duration, userId: req.user.id });
        await newActivity.save();
        res.status(201).json({ message: 'Activity added successfully', activity: newActivity });
    } catch (error) {
        res.status(500).json({ message: 'Error adding activity', error: error.message });
    }
};

// Get all activities for a user
exports.getActivities = async (req, res) => {
    try {
        const activities = await Activity.find({ userId: req.user.id });
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving activities', error: error.message });
    }
};

// Update an activity
exports.updateActivity = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedActivity = await Activity.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedActivity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json({ message: 'Activity updated successfully', activity: updatedActivity });
    } catch (error) {
        res.status(500).json({ message: 'Error updating activity', error: error.message });
    }
};

// Delete an activity
exports.deleteActivity = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedActivity = await Activity.findByIdAndDelete(id);
        if (!deletedActivity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json({ message: 'Activity deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting activity', error: error.message });
    }
};