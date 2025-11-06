const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['work', 'exercise', 'meals', 'sleep', 'socialmedia', 'travel', 'study', 'other'],
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    loggedAt: {
        type: Date,
        default: Date.now
    }
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;