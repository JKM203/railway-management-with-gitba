const express = require('express');
const { addTrain, getTrains } = require('../controllers/trainController');
const router = express.Router();

router.post('/admin/train', addTrain);
router.get('/trains', getTrains);

module.exports = router;
