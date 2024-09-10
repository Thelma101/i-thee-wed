const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const State = require('./stateModel');

const Vendor = sequelize.define('Vendor', {
    business_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state_id: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
            model: State,
            key: 'id'
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone_number: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.DECIMAL(9, 6),
        allowNull: true,
    },
    longitude: {
        type: DataTypes.DECIMAL(9, 6),
        allowNull: true,
    },
    verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    average_rating: {
        type: DataTypes.DECIMAL(2, 1),
        defaultValue: 0.0,
    },
    subscription_plan: {
        type: DataTypes.STRING,
        defaultValue: 'free'
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at', 
});

// module.exports = Vendor;
