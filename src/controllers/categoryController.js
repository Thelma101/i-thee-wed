const categoryService = require('../services/categoryService');

exports.getAllCategories = async (req, res) => {
    try {
        const result = await categoryService.getAllCategories();
        return res.status(result.status).json(result.data);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching categories', error: error.stack });
    }
};
