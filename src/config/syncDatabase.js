
const sequelize = require('./config/database'); 
const Couple = require('../models/coupleModel');
const Vendor = require('./models/vendorModel');

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
};

syncDatabase();
