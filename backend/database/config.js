// Import required modules
const mongoose = require('mongoose');

// Set up database connection URL
const dbURL = process.env.BASEURL;

// Connect to the database
mongoose.connect(dbURL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log('MongoDB connection error:', error));

// Set up database connection event listeners
mongoose.connection.on('connected', () => console.log('MongoDB connected'));
mongoose.connection.on('error', (error) => console.log('MongoDB connection error:', error));
