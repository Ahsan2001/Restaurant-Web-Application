// Import required modules
const bcrypt = require('bcrypt');
const Users = require('../../models/users');


// Define the login controller function
const loginController = async (req, res) => {
    // Extract data from request body
    const { email, password } = req.body;

    // Check Inputs Fields
    if (!email || !password ) {
        return res.status(422).json({ error: 'Please fill all the fields properly' });
    }

    try {
        // Check if user with same email already exists in the database
        const existingUser = await Users.findOne({ email: email });
        if (!existingUser) {
            return res.status(422).json({ error: 'Invalid Email' });
        }
        // match password in the database
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (isPasswordValid) {
            return res.status(200).json({ message: 'Successfully logged in' });
        } else {
            return res.status(422).json({ error: 'Invalid password' });
        }
    } catch (err) {
        // Handle errors
        return res.status(500).json({ error: 'Something went wrong.' });
    }

}


module.exports = loginController;