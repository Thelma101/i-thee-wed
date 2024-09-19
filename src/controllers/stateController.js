const stateService = require('../services/stateService');

exports.getAllStates = async (req, res) => {
    try {
        const result = await stateService.getAllStates();
        return res.status(result.status).json(result.data);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching states', error: error.stack });
    }
};
