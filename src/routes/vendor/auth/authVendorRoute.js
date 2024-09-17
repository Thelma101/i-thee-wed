
const express = require('express');
const router = express.Router();
const vendorController = require('../../../controllers/vendor/auth/vendorController');

router.post('/api/v1/vendor-register', vendorController.registerVendor);
router.get('/api/v1/vendor-all', vendorController.getAllVendors);
router.delete('/api/v1/vendor-delete/:id', vendorController.deleteVendor);
router.put('/api/v1/vendor-update/:id', vendorController.updateVendor);
router.get('/api/v1/vendor-count', vendorController.getVendorsCount);
router.get('/api/v1/vendor/:id', vendorController.getVendorById);
router.post('/api/v1/vendor-login', vendorController.loginVendor);
// router.post('/api/v1/vendor-logout', vendorController.logoutVendor);
// router.post('/api/v1/vendor-reset-password', vendorController.resetPassword);
// router.post('/api/v1/vendor-change-password', vendorController.changePassword);
// router.post('/api/v1/vendor-forgot-password', vendorController.forgotPassword);
// router.post('/api/v1/vendor-verify-email', vendorController.verifyEmail);
// router.post('/api/v1/vendor-verify-phone', vendorController.verifyPhone);
// router.post('/api/v1/vendor-verify-otp', vendorController.verifyOTP);
// router.post('/api/v1/vendor-resend-otp', vendorController.resendOTP);
// router.post('/api/v1/vendor-update-profile', vendorController.updateProfile);
// router.post('/api/v1/vendor-update-password', vendorController.updatePassword);
// router.post('/api/v1/vendor-upload-profile-picture', vendorController.uploadProfilePicture);

module.exports=router;