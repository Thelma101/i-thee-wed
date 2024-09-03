const express = require('express');
const router = express.Router();
const coupleController = require('../controllers/coupleController');

router.post('/api/v1/couple-register', coupleController.registerCouple);
router.get('/api/v1/couple-all', coupleController.getAllCouples);
router.get('/api/v1/couple/:id', coupleController.getCoupleById);
router.post('/api/v1/couple-login', coupleController.login);
router.put('/api/v1/couple/:id', coupleController.updateCouple);
router.delete('/api/v1/couple/:id', coupleController.deleteCouple);

module.exports = router;
