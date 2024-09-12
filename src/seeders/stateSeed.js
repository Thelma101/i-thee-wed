const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
    process.env.DB_NAME || config.database,
    process.env.DB_USER || config.username,
    process.env.DB_PASS || config.password,
    {
        host: process.env.DB_HOST || config.host,
        dialect: process.env.DB_DIALECT || config.dialect,
        logging: process.env.DB_LOGGING === 'true' ? console.log : false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);

const State = sequelize.define('State', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: false
});

const seedStates = async () => {
  const states = [
    'Lagos', 'Abuja', 'Edo', 'Kano', 'Ekiti', 'Enugu', 'Gombe', 'Jigawa', 'Kaduna',
    'Kogi', 'Kwara', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
    'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'Abia', 'Adamawa', 'Akwa Ibom',
    'Anambra', 'Bauchi', 'Benue', 'Borno', 'Cross River', 'Delta', 'Imo', 'Jigawa',
    'Kano', 'Kogi', 'Oyo', 'Zamfara'
  ];

  for (const state of states) {
    await State.create({ name: state });
  }
};

const runSeeder = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established.');
    
    await sequelize.sync({ force: true }); // Caution: This will drop existing tables
    console.log('Tables synchronized.');

    await seedStates();
    
    console.log('Seeding completed!');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await sequelize.close();
  }
};

runSeeder();
