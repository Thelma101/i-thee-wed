const Joi = require('joi');


const registerVendorSchema = Joi.object({
    business_name: Joi.string()
        .min(5)
        .required()
        .messages({
            'string.min': 'Business name must be at least 5 characters long',
            'any.required': 'Business name is a required field'
        }),

    username: Joi.string()
        .pattern(/^(?![_\-&.])[a-zA-Z0-9._\-&]{4,30}(?<![_\-&.])$/)
        .required()
        .messages({
            'string.pattern.base': 'Username must be 4-30 characters long and can only contain letters, numbers, dots, underscores, hyphens, and ampersands, but cannot start or end with special characters',
            'any.required': 'Username is a required field'
        }),

    phone_number: Joi.string()
        .pattern(/^\+?[0-9]{10,11}$/)
        .required()
        .messages({
            'string.pattern.base': 'Phone number must include country code and be 10 to 11 digits long',
            'any.required': 'Phone number is a required field'
        }),

    password: Joi.string()
        .min(6)
        .required()
        .messages({
            'string.min': 'Password must be at least 6 characters long',
            'any.required': 'Password is a required field'
        }),

    email: Joi.string()
        .email()
        .optional()
        .messages({
            'string.email': 'Email must be a valid email address'
        }),

    address: Joi.string()
        .optional()
        .allow(null, '')
        .messages({
            'string.base': 'Address must be a string'
        }),

    website_url: Joi.string()
        .uri()
        .optional()
        .allow(null, '')
        .messages({
            'string.uri': 'Website URL must be a valid URL'
        }),

    category_id: Joi.number()
        .integer()
        .optional()
        .allow(null)
        .messages({
            'number.base': 'Category ID must be a valid number',
        }),

    state_id: Joi.number()
        .integer()
        .optional()
        .allow(null)
        .messages({
            'number.base': 'State ID must be a valid number',
        }),
});

const updateVendorSchema = Joi.object({
    business_name: Joi.string()
        .min(5)
        .optional()
        .messages({
            'string.min': 'Business name must be at least 5 characters long'
        }),

    email: Joi.string()
        .email()
        .optional()
        .messages({
            'string.email': 'Email must be a valid email address'
        }),

    phone_number: Joi.string()
        .pattern(/^\+?[0-9]{10,11}$/)
        .optional()
        .messages({
            'string.pattern.base': 'Phone number must include country code and be 10 to 11 digits long'
        }),

    address: Joi.string()
        .optional()
        .allow(null, '')
        .messages({
            'string.base': 'Address must be a string'
        }),

    website_url: Joi.string()
        .uri()
        .optional()
        .allow(null, '')
        .messages({
            'string.uri': 'Website URL must be a valid URL'
        }),

    category_id: Joi.number()
        .integer()
        .optional()
        .allow(null)
        .messages({
            'number.base': 'Category ID must be a valid number',
        }),

    state_id: Joi.number()
        .integer()
        .optional()
        .allow(null)
        .messages({
            'number.base': 'State ID must be a valid number',
        }),
});

module.exports = {
    registerVendorSchema,
    updateVendorSchema
};
