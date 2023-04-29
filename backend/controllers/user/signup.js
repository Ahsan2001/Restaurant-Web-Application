// Import required modules
const bcrypt = require('bcrypt');
const Users = require('../../models/users');
// Define the signup controller function
const signupController = async (req, res) => {
    // Extract data from request body
    const { name, email, role, password } = req.body;

    // Validate request body
    if (!name || !email || !role || !password ) {
        return res.status(422).json({ error: 'Please fill all the fields properly' });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Check if user with same email already exists in the database
        const existingUser = await Users.findOne({ email: email });
        if (existingUser) {
            return res.status(422).json({ error: 'Email already exists' });
        }

        // Create a new user object with hashed password
        const newUser = new Users({
            name,
            email,
            role,
            password: hashedPassword,
        });

        // Save the new user object to the database
        await newUser.save();

        // Return success message
        return res.status(201).json({ message: 'User successfully registered', newUser }, 
        );
    } catch (err) {
        // Handle errors
        return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    }
};

// Export the signup controller function
module.exports =  signupController;
