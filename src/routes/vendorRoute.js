const Vendor = require('../controllers/vendorController');
const router = express().Router;

router.post('/api/v1/vendor-register', Vendor.createVendor);
router.get('/api/v1/vendor-all', Vendor.getAllVendors);