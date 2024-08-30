const express = require('express');
const router = express.Router();
const coupleController = require('../controllers/coupleController');

router.post('api/v1/couple-register', coupleController.register);

module.exports = router;
