const Category = require('../models/category');

exports.getAllCategories = async () => {
    try {
        const categories = await Category.findAll();
        return { status: 200, data: categories };
    } catch (error) {
        throw error;
    }
};
