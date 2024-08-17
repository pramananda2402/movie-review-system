const userService = require('../services/user.service.js');
const jwt = require('jsonwebtoken'); // Assuming you are using JWT for authentication

exports.createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.findAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userService.findUserById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await userService.updateUser(userId, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.signin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userService.findUserByName(username);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const isPasswordValid = await userService.validatePassword(user, password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid credentials" });
        } 
        const token = jwt.sign(
            { id: user.id, name: user.name },
            process.env.JWT_SECRET || 'default_secret', // Provide a fallback for development
            { expiresIn: '1h' }
        );
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add other controller methods as needed
