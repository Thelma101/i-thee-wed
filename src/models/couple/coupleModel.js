const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Couple = sequelize.define('Couple', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true, 
        unique: true
    },
    partner_one_name: {
        type: DataTypes.STRING,
        allowNull: true 
    },
    partner_two_name: {
        type: DataTypes.STRING,
        allowNull: true 
    },
    wedding_date: {
        type: DataTypes.DATEONLY,
        allowNull: true 
    },
    venue: {
        type: DataTypes.STRING,
        allowNull: true 
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
    createdAt: 'created_at'
});
