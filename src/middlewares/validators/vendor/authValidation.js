const Joi = require('joi');

const registerVendorSchema = Joi.object({
    business_name: Joi.string().min(5).required(),
    username: Joi.string().min(4).alphanum().required(),
    phone_number: Joi.string()
        .pattern(/^([0]{1}[7-9]{1}[0-9]{9}|[7-9]{1}[0-9]{9})$/)
        .required(),
    password: Joi.string().min(6).required(),
    category_id: Joi.number().integer().optional(),
    state_id: Joi.number().integer().optional(),
    email: Joi.string().email().optional(),
    address: Joi.string().optional(),
    website_url: Joi.string().uri().optional(),
});
