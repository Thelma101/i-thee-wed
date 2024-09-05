
const express = require('express');
const router = express.Router();
const Vendor = require('../controllers/vendorController');

router.post('/api/v1/vendor-register', Vendor.createVendor);
router.get('/api/v1/vendor-all', Vendor.getAllVendors);