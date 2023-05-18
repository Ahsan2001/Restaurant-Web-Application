// Import required modules
const express = require('express');
const router = express.Router();

// Import controllers for signup and login routes
const signupController = require('../controllers/user/signup');
const loginController = require('../controllers/user/login');

// Define routes for signup and login
router.route("/api/signup").post(signupController)
router.route("/api/login").post(loginController)

// Export router
module.exports = router;
