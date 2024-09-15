const Vendor = require('../../../models/vendor/vendorModel');
const bcrypt = require('bcrypt');

exports.registerVendor = async ({ business_name, user_name, phone_number, password }) => {
    try {
        const usernameExists = await Vendor.findOne({ where: { username } });
        if (usernameExists) {
            return { status: 409, message: { message: 'Username already exists' } };
        }

        const phoneExists = await Vendor.findOne({ where: { phone_number } });

        if (phoneExists) {
            return { status: 409, message: 'Vendor already exists with this phone number' };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newVendor = await Vendor.create({
            business_name,
            user_name,
            phone_number,
            password: hashedPassword,
        });

        return { status: 201, message: { message: 'Vendor registered successfully', data: newVendor } };
    } catch (error) {
        console.log('Error registering vendor: ', error);
        
        return { status: 500, message: 'Error registering vendor', error: error.message };
    }
};

