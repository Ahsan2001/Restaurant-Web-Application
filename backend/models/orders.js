// Import required modules
const mongoose = require('mongoose');

// Define schema for Order collection
const OrderSchema = new mongoose.Schema({
    items: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
});

// Define model for Orders collection
const Orders = mongoose.model('Orders', OrderSchema);

// Export Order model
module.exports = Orders;
