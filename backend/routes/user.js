// Import required modules
const express = require('express');
const router = express.Router();

// Import controllers for signup and login routes
const signupController = require('../controllers/user/signup');
const loginController = require('../controllers/user/login');

// Define routes for signup and login
router.post('/api/signup', signupController);
router.post('/api/login', loginController);

// Export router
module.exports = router;
