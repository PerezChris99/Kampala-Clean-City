const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    priority: {
        type: String,
        default: 'low'
    },
    status: {
        type: String,
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Report', reportSchema);