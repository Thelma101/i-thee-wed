const Vendor = require('../models/vendorModel');
const State = require('../models/stateModel');
const Category = require('../models/categoryModel');
const bcrypt = require('bcrypt');

exports.registerVendor = async ({ business_name, category_id, state_id, email, phone_number, password }) => {
    try {
        const state = await State.findOne({ where: { id: state_id } });
        if (!state) {
            return { status: 400, message: 'Invalid state' };
        }

        const category = await Category.findOne({ where: { id: category_id } });
        if (!category) {
            return { status: 400, message: 'Invalid category' };
        }

        const existingVendor = await Vendor.findOne({ where: { phone_number } });
        if (existingVendor) {
            return { status: 409, message: 'Vendor already exists with this phone number' };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newVendor = await Vendor.create({
            business_name,
            user_name: business_name,  // Assuming user_name is derived from business_name
            category_id,
            state_id,
            email,
            phone_number,
            password: hashedPassword
        });

        return { status: 201, message: { message: 'Vendor registered successfully', data: newVendor } };
    } catch (error) {
        return { status: 500, message: 'Error registering vendor', error: error.message };
    }
};

exports.getAllVendors = async () => {
    try {
        const allVendors = await Vendor.findAll({
            include: [
                { model: State, as: 'state', attributes: ['name'] },
                { model: Category, as: 'category', attributes: ['name'] }
            ]
        });

        return { status: 200, message: { message: 'All vendors retrieved successfully', data: allVendors } };
    } catch (error) {
        return { status: 500, message: 'Error retrieving vendors', error: error.message };
    }
};
