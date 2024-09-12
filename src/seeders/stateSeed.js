const { sequelize, Category, State } = require('../models'); // Adjust the path as needed

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
