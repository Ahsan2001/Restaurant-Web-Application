// Import required modules
const mongoose = require('mongoose');

// Define schema for foods collection
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imgName: {
        type: [String],
        required: true
    }
});

// Define model for foods collection
const Foods = mongoose.model('Foods', foodSchema);

// Export Foods model
module.exports = Foods;
