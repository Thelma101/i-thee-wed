const { dataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Vendor = sequelize.define('Vendor', {
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: dataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: dataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: dataTypes.STRING, // allowNull: false,
})
}
