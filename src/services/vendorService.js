const Vendor = require('../models/vendorModelOld');
const Region = require('../models/regionModel');
const State = require('../models/stateModel');
const bcrypt = require('bcrypt');

exports.registerVendor = async ({ business_name, category, stateName, email, phone_number, password }) => {
    try {
        const state = await State.findOne({ where: { name: stateName } });

        if (!state) {
            throw new Error('Invalid state');
        }

        const region = await Region.findOne({ where: { id: state.region_id } });

        const existingVendor = await Vendor.findOne({ where: { email } });
        if (existingVendor) {
            return { status: 409, message: 'Vendor already exists' };
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newVendor = await Vendor.create({
            business_name,
            category,
            state_id: state.id,
            email,
            phone_number,
            password: hashedPassword,
        });

        return { status: 201, message: { message: 'Vendor registered successfully', data: newVendor } };
    } catch (error) {
        throw error;
    }
}


// Get All Vendors
exports.getAllVendors = async () => {
    try {
        const allVendors = await Vendor.findAll({
            include: [
                { model: Region, as: 'region', attributes: ['name'] },
                { model: State, as: 'state', attributes: ['name'] }
            ]
        });
        return { status: 200, message: { message: 'All vendors retrieved successfully', data: allVendors } };
    } catch (error) {
        throw error;
    }
}