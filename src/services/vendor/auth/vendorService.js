const Vendor = require('../../../models/vendor/vendorModel');
const { registerVendorSchema, updateVendorSchema } = require('../../../middlewares/validators/couple/authValidation');
const bcrypt = require('bcrypt');
const joi = require('joi');

exports.registerVendor = async ({ business_name, username, phone_number, password }) => {
    try {
        const usernameExists = await Vendor.findOne({ where: { username } });
        if (usernameExists) {
            return { status: 409, message: { message: 'Username already exists' } };
        }

        const phoneExists = await Vendor.findOne({ where: { phone_number } });

        if (phoneExists) {
            return { status: 409, message: 'Phone number already exists' };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newVendor = await Vendor.create({
            business_name,
            username,
            phone_number,
            password: hashedPassword,
        });

        return { status: 201, message: { message: 'Vendor registered successfully', data: newVendor } };
    } catch (error) {
        console.log('Error registering vendor: ', error);
        
        return { status: 500, message: 'Error registering vendor', error: error.message };
    }
};

