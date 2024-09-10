const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Region = require('./regionModel');

const State = sequelize.define('State', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    region: {
        type: DataTypes.INTEGER,
        references: {
            model: Region,
            key: 'id'
        },
        allowNull: false
    }
}, {
    timestamps: false,
});

State.belongsTo(Region, { foreignKey: 'region' });

module.exports = State;
