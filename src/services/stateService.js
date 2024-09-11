const State = require('../models/state');

exports.getAllStates = async () => {
    try {
        const states = await State.findAll();
        return { status: 200, data: states };
    } catch (error) {
        throw error;
    }
};
