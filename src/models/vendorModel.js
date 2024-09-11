const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Vendor = sequelize.define('Vendor', {
    business_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,  // State is a string now
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Email is now required
      unique: true,     // Enforcing uniqueness
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false, 
      unique: true,    // Unique phone number
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING, 
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
      defaultValue: 'free',
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  }, {
    tableName: 'Vendors',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
});

module.exports = Vendor;
