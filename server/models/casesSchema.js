const mongoose = require('mongoose')

const casesSchema = new mongoose.Schema({

    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',  
        required: true
    },

    assigned_to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    subject: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true
    },

    priority: {
        type: String,
        enum: ['low', 'medium', 'high', 'urgent'],
        default: 'medium'
    },

    status: {
        type: String,
        enum: ['open', 'in_progress', 'resolved', 'closed'],
        default: 'open'
    },

    created_at: {
        type: Date,
        default: Date.now
    },

    closed_at: {
        type: Date
    }

})

module.exports = mongoose.model('Case', casesSchema)