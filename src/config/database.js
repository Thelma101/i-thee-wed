
const { Sequelize } = require('sequelize');
const config = require('./config.json')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to PostgreSQL has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    module.exports = sequelize;