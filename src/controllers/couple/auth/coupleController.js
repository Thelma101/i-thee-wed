// const coupleService = require('../../../services/coupleService')
const coupleService = require('../../../services/couple/auth/coupleService')


exports.registerCouple = async (req, res) => {

    const { username, phone_number, password } = req.body;
    try {
        const newCouple = await coupleService.registerCouple({ username, phone_number, password });
        res.status(newCouple.status).json(newCouple.message);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering couple', error: error.stack });
    }
}

exports.getAllCouples = async (req, res) => {
    try {
        const getCouples = await coupleService.getAllCouples();
        res.status(getCouples.status).json(getCouples.message);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving couples', error: error.stack });
    }
}

exports.getCouplesCount = async (req, res) => {
    try {
        const getCount = await coupleService.getCouplesCount();
        res.status(getCount.status).json(getCount.message);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving couples count', error: error.stack });
    }
}

exports.getCoupleById = async (req, res) => {
    const { id } = req.params;
    try {
        const getCouple = await coupleService.getCoupleById(id);
        res.status(getCouple.status).json(getCouple.message);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving couple', error: error.stack });
    }
}


exports.loginCouple = async (req, res) => {
    const { username, phone_number, password } = req.body;
    try {
        const couple = await coupleService.loginCouple({
            username, phone_number, password
        });
        res.status(couple.status).json(couple.message);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in', error: error.stack });
    }
}

exports.updateCouple = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const couple = await coupleService.updateCouple( id, updateData );
        // return res.status(200).json({ message: 'Couple data updated successfully', data: couple });
        res.status(couple.status).json(couple.message);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error updating couple', error: error.stack
        });
    }
}

exports.deleteCouple = async (req, res) => {
    const { id } = req.params;

    try {
        const couple = await coupleService.deleteCouple(id);
        res.status(couple.status).json(couple.message);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting couple', error: error.stack });
    }
}

