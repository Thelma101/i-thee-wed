const express = require('express');
const router = express.Router();
const coupleController = require('../controllers/coupleController');

router.post('/api/v1/couple-register', coupleController.register);
// router.get('/api/v1/couple-register', coupleController.register);
router.post('/api/v1/couple-login', coupleController.login);

module.exports = router;
