// Import required modules
const express = require('express');
const router = express.Router();

// Import controllers for signup and login routes
const signupController = require('../controllers/auth/signup');
const signinController = require('../controllers/auth/signin');

// Define routes for signup and signin
router.route("/api/auth/signup").post(signupController)
router.route("/api/auth/signin").post(signinController)

// Export router
module.exports = router;
