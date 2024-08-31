const express = require('express');
const router = express.Router();
const coupleController = require('../controllers/coupleController');

router.post('/api/v1/couple-register', coupleController.register);
router.get('/api/v1/couple-all', coupleController.getAll);
router.get('/api/v1/couple/:id', coupleController.getCoupleById);
router.put('/api/v1/couple/:id', coupleController.updateCouple);
router.post('/api/v1/couple-login', coupleController.login);

module.exports = router;
