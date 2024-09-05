const { dataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Vendor = sequelize.define('Vendor' {
    business_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    regoin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isNumeric: true,
            len: [10, 15]
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            minLength: 8
        }
    },
    
}) 