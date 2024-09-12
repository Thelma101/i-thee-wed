
const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');

router.post('/api/v1/vendor-register', vendorController.registerVendor);
router.get('/api/v1/vendor-all', vendorController.getAllVendors);

module.exports=router;