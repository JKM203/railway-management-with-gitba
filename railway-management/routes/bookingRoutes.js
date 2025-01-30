const express = require('express');
const { bookSeat } = require('../controllers/bookingController');
const { authenticateUser } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/book', authenticateUser, bookSeat);

module.exports = router;
