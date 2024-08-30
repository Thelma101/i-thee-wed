const express = require('express');
const router = express.Router();
const coupleController = require('../controllers/coupleController');

router.post('/register', coupleController.register);

module.exports = router;
