const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Vendor = sequelize.define('Vendor', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    business_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Categories',
            key: 'id'
        }
    },
    state_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'States',
            key: 'id'
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
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
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    website_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    average_rating: {
        type: DataTypes.DECIMAL(2, 1),
        defaultValue: 0.0
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

module.exports = Vendor;
