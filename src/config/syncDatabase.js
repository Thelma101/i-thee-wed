const sequelize = require('./database'); 

const syncDatabase = async () => {
    try {
        await sequelize.query('DROP TABLE IF EXISTS "Vendors" CASCADE');
        console.log('Dropped Vendors table');

        await sequelize.sync({ force: true });
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
};

syncDatabase();
