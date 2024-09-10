const Vendor = require('../models/vendorModelOld');
const State = require('../models/stateModel');
const bcrypt = require('bcrypt');

// exports.registerVendor = async ({ business_name, category, regionName, stateName, email, phone_number, password }) => {
//     try {
//         const region = await Region.findOne({ where: { name: regionName } });
//         if (!region) {
//             return { status: 400, message: { message: 'Invalid region' } };
//         }

//         const state = await State.findOne({ where: { name: stateName, region_id: region.id } });
//         if (!state) {
//             return { status: 400, message: { message: 'Invalid state for the selected region' } };
//         }

//         // Check if the vendor already exists
//         const existingVendor = await Vendor.findOne({ where: { email } });
//         if (existingVendor) {
//             return { status: 409, message: 'Vendor already exists' };
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newVendor = await Vendor.create({
//             business_name,
//             category,
//             region:region.id,
//             state:state.id,
//             email,
//             phone_number,
//             password: hashedPassword,
//         });
//         return { status: 201, message: { message: 'Vendor registered successfully', data: newVendor } };
//     } catch (error) {
//         throw error;
//     }
// }

// Get All Vendors

exports.registerVendor = async ({ business_name, category, state, email, phone_number, password }) => {
    try {
        const stateName = await State.findOne({ where: { name: state } });
        if (!stateName) {
            throw new Error('Invalid state');
        }

        const existingVendor = await Vendor.findOne({ where: { email } });
        if (existingVendor) {
            return { status: 409, message: 'Vendor already exists' };
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newVendor = await Vendor.create({
            business_name,
            category,
            state: stateName.id,
            email,
            phone_number,
            password: hashedPassword,
        });

        return { status: 201, message: { message: 'Vendor registered successfully', data: newVendor } };
    } catch (error) {
        throw error;
    }
};


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