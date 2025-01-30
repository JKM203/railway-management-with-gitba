const express = require('express');
const router = express.Router();

// Dummy login route
router.post('/login', (req, res) => {
    res.json({ message: 'Login successful' });
});

// Dummy register route
router.post('/register', (req, res) => {
    res.json({ message: 'User registered successfully' });
});

module.exports = router;
