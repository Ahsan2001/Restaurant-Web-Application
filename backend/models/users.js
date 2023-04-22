// Import required modules
const mongoose = require("mongoose");

// Define schema for User collection
const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


// Define model for Users collection
const Users = mongoose.model("Users", User)

// Export Users model
module.exports = Users