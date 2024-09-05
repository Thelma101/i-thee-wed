const Vendor = require('../models/vendorModel');
const Region = require('../models/regionModel');
const State = require('../models/stateModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registerVendor = async ({ business_name, category, regionName, stateName, email, phone_number, password }) => {
    try {
        const region = await Region.findOne({ where: { name: regionName } });
        const state = await State.findOne({ where: { name: stateName, region_id: region.id } });

        if (!region || !state) {
            throw new Error('Invalid region or state');
        }

        // Check if the vendor already exists
        const existingVendor = await Vendor.findOne({ where: { email } });
        if (existingVendor) {
            return { status: 409, message: 'Vendor already exists' };
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const vendor = new Vendor({
            business_name,
            category,
            regionName,
            stateName,
            email,
            phone_number,
            password: hashedPassword,
        });
        await vendor.save();
        return { status: 201, message: { message: 'Vendor registered successfully', data: vendor } };
    } catch (error) {
        throw error;
    }
}