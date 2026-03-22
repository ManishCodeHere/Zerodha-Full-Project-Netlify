const express = require('express');
const passport = require('passport');
const { UserModel } = require('../model/UserModel');

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
    try {
        const { email, username, password } = req.body;

        // Create new user
        const newUser = new UserModel({ email, username });
        
        // Register user with password (passport-local-mongoose handles hashing)
        await UserModel.register(newUser, password);

        res.status(201).json({ 
            success: true, 
            message: "User registered successfully!" 
        });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message: error.message 
        });
    }
});

// Login Route
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({ 
        success: true, 
        message: "Login successful!",
        user: {
            email: req.user.email,
            username: req.user.username
        }
    });
});

// Logout Route
router.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Logout failed" });
        }
        res.json({ success: true, message: "Logged out successfully" });
    });
});

module.exports = router;