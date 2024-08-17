const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

router.post('/signup', userController.createUser);
router.post('/signin', userController.signin);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);  // Corrected from update to put

// Add other routes as needed

module.exports = router;
