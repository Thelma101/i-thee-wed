const vendorService = require('../../../services/vendor/auth/vendorService')


exports.registerVendor = async (req, res) => {
    try {
        const { business_name, username, phone_number, password } = req.body;

        const response = await vendorService.registerVendor({
            business_name,
            username,
            phone_number,
            password
        });

        return res.status(response.status).json(response.message);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.getAllVendors = async (req, res) => {
    try {
        const vendors = await vendorService.getAllVendors();
        return res.status(vendors.status).json(vendors.message);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};


exports.getVendorsCount = async (req, res) => {
    try {
        const getCount = await vendorService.getVendorsCount();
        return res.status(getCount.status).json(getCount.message);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.getVendorById = async (req, res) => {
    try {
        const { id } = req.params;
        const vendor = await vendorService.getVendorById(id);
        return res.status(vendor.status).json(vendor.message);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.updateVendor = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const vendor = await vendorService.updateVendor(id, updateData);
        return res.status(vendor.status).json(vendor.message);
    } catch (error) {
        res.status(500).json({ message: 'Error updating vendor', error: error.stack });
    }
};


exports.deleteVendor = async (req, res) => {
    const { id } = req.params;
    try {
        const vendor = await vendorService.deleteVendor(id);
        return res.status(vendor.status).json(vendor.message);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting couple', error: error.stack });
    }
};

exports.loginVendor = async (req, res) => {
    const { username, phone_number, password } = req.body;

    try {
        const vendor = await vendorService.loginVendor({ username, phone_number, password });
        return res.status(vendor.status).json(vendor.message);
    } catch (error) {
        res.status(500).json({ message: 'Error logging in vendor', error: error.stack });
    }
};
