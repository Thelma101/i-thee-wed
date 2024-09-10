const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const State = sequelize.define('State', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    region: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
});

module.exports = State;
