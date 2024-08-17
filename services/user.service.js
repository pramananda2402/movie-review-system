const User = require('../models/user');
const bcrypt = require('bcrypt'); // Assuming you're using bcrypt for password hashing

exports.createUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10); // Hashing the password
    userData.password = hashedPassword;
    return User.create(userData);
};

exports.findAllUsers = async () => {
    return User.findAll();
};

exports.findUserById = async (userId) => {
    return User.findByPk(userId);
};

exports.findUserByName = async (username) => {
    return User.findOne({ where: { username } });
};

exports.validatePassword = async (user, password) => {
    return bcrypt.compare(password, user.password);
};

exports.updateUser = async (userId, updateData) => {
    const user = await User.findByPk(userId);
    if (user) {
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10); // Hashing the new password
        }
        return user.update(updateData);
    } else {
        throw new Error("User not found");
    }
};

exports.deleteUser = async (userId) => {
    const user = await User.findByPk(userId);
    if (user) {
        await user.destroy();
        return { message: "User deleted successfully" };
    } else {
        throw new Error("User not found");
    }
};

// Add other service methods as needed
