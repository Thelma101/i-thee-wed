const Vendor = require('../../../models/vendor/vendorModel');
const State = require('../../../models/stateModel');
const Category = require('../../../models/categoryModel');
const bcrypt = require('bcrypt');

exports.registerVendor = async ({ business_name, category, state, email, phone_number, password }) => {
    try {
        const stateName = await State.findOne({ where: { name: state } });
        if (!stateName) {
            return { status: 400, message: 'Invalid state' };
        }

        const existingVendor = await Vendor.findOne({ where: { email } });
        if (existingVendor) {
            return { status: 409, message: 'Vendor already exists with this email' };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newVendor = await Vendor.create({
            business_name,
            category,
            state: stateName.name,
            email,
            phone_number,
            password: hashedPassword,
        });

        return { status: 201, message: { message: 'Vendor registered successfully', data: newVendor } };
    } catch (error) {
        // Log the full error for debugging
        console.error('Error registering vendor:', error);
        return { status: 500, message: 'Error registering vendor', error: error.message };
    }
};
