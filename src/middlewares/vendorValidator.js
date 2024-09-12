const Joi = require('joi');

const validateVendor = (vendor) => {
    const schema = Joi.object({
        business_name: Joi.string().required(),
        category: Joi.string().required(),
        state: Joi.string().required(),
        email: Joi.string().email().required(),
        phone_number: Joi.string().required(),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(vendor);
};

module.exports = { validateVendor };
