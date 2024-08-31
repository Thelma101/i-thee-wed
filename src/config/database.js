const { Sequelize } = require('sequelize');

// Use environment variables for sensitive information, fallback to config.json for non-sensitive settings.
const config = require('./config.json')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(
    process.env.DB_NAME || config.database,
    process.env.DB_USER || config.username,
    process.env.DB_PASS || config.password,
    {
        host: process.env.DB_HOST || config.host,
        dialect: process.env.DB_DIALECT || config.dialect,
        logging: process.env.DB_LOGGING === 'true' ? console.log : false,  // Toggle SQL logging
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to PostgreSQL has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
