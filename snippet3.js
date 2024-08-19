import bcrypt from 'bcrypt';

/**
 * Asynchronously authenticates a user using a username and password.
 * Throws an error if authentication fails.
 * 
 * @param {string} username - The username of the user trying to authenticate.
 * @param {string} password - The password provided for authentication.
 * @returns {string} Confirmation that the user has been authenticated.
 */
async function authenticateUser(username, password) {
    try {
        // Attempt to find the user and verify the password
        const user = await db.findUser(username);
        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        return 'User authenticated';
    } catch (error) {
        // Handle authentication errors
        console.error('Authentication error:', error);
        throw new Error('Failed to authenticate user');
    }
}