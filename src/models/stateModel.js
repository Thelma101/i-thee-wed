const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Region = require('./regionModel');

const State = sequelize.define('State', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    region_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Region,
            key: 'id'
        },
        onDelete: 'CASCADE'
    }
}, {
    timestamps: false,
});

Region.hasMany(State, { foreignKey: 'region_id' });
State.belongsTo(Region, { foreignKey: 'region_id' });

module.exports = State;
