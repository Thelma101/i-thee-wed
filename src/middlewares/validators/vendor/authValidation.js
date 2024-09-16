const Joi = require('joi');

const registerVendorSchema = Joi.object({
    business_name: Joi.string().min(5).required(),   // Ensure a meaningful business name
    username: Joi.string().min(4).alphanum().required(),  // Minimum 4 characters, alphanumeric
    phone_number: Joi.string()
        .pattern(/^([0]{1}[7-9]{1}[0-9]{9}|[7-9]{1}[0-9]{9})$/)
        .required(),  // Nigerian phone number validation
    password: Joi.string().min(6).required(),  // Ensure password strength
    category_id: Joi.number().integer().optional(),
    state_id: Joi.number().integer().optional(),
    email: Joi.string().email().optional(),
    address: Joi.string().optional(),
    website_url: Joi.string().uri().optional(),
});
