const Vendor = require('../../../models/vendor/vendorModel');
const { registerVendorSchema, updateVendorSchema } = require('../../../middlewares/validators/vendor/authValidation');
const bcrypt = require('bcrypt');
const joi = require('joi');
const { ValidationError } = require('sequelize');

exports.registerVendor = async ({ business_name, username, phone_number, password }) => {
    try {
        const { error } = registerVendorSchema.validate({ business_name, username, phone_number, password });
        if (error) {
            return { status: 400, message: { message: error.details[0].message } };
        }
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
        if (error instanceof ValidationError) {
            // const errorMessages = error.errors.map(err => err.message);
            // return { status: 400, message: { message: 'Validation error', details: errorMessages } };

            const errorMessages = error.errors.map((err) => {
                if (err.type === 'notNull Violation') {
                    return `${err.path} is a required field and cannot be null.`;
                } else {
                    return err.message;
                }
            });
            return { status: 400, message: { message: 'Validation error', details: errorMessages } };
        }
        console.log('Error registering vendor: ', error);

        return { status: 500, message: 'Error registering vendor', error: error.message };
    }
};

exports.getAllVendors = async () => {
    try {
        const vendors = await Vendor.findAll();
        return { status: 200, message: { message: 'Vendors retrieved successfully', data: vendors } };
    } catch (error) {
        throw error;
    }
};

exports.getVendorsCount = async () => {
    try {
        const getCount = await Vendor.count();
        return { status: 200, message: { message: 'Vendors count retrieved successfully', data: getCount } };
    } catch (error) {
        throw error;
    }
};

exports.getVendorById = async (id) => {
    try {
        const vendor = await Vendor.findByPk(id);
        if (!vendor) {
            return { status: 404, message: { message: 'Vendor not found' } };
        }
        return { status: 200, message: { message: 'Vendor retrieved successfully', data: vendor } };
    } catch (error) {
        throw error;
    }
};

exports.updateVendor = async ({ id, business_name, phone_number }) => { // password is optional
    try {
        const { error } = updateVendorSchema.validate({ id, business_name, phone_number });
        if (error) {
            return { status: 400, message: { message: error.details[0].message } };
        }
        const vendor = await Vendor.findByPk(id);
        if (!vendor) {
            return { status: 404, message: { message: 'Vendor not found' } };
        }

        const updatedVendor = await vendor.update({
            business_name,
            phone_number,
        });
        return { status: 200, message: { message: 'Vendor updated successfully', data: updatedVendor } };
    } catch (error) {
        if (error instanceof ValidationError) {
            const errorMessages = error.errors.map((err) => {
                if (err.type === 'NotNull Violation') {
                    return `${err.path} is a required field and cannot be null.`;
                } else {
                    return err.message;
                }
            });
            return { status: 400, message: { message: 'Validation error', details: errorMessages } };
        }
        console.log('Error updating vendor: ', error);
        return { status: 500, message: 'Error updating vendor', error: error.message };
    }
};

exports.deleteVendor = async (id) => {
    try {
        const vendor = await Vendor.findByPk(id);
        if (!vendor) {
            return res.status(404).json({ message: 'Vendor not found' });
        }
        return res.status(200).json({ message: 'Vendor deleted successfully' });
    } catch (error) {
        throw error;
    }
};