
async function authenticateUser(username, password) {
    const user = await db.findUser(username);
    if (!user) {
        return 'User not found';
    }
    if (user.password !== password) {
        return 'Invalid password';
    }
    return 'User authenticated';
}
