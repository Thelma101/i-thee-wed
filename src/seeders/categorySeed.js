const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')[process.env.NODE_ENV || 'development'];
const Category = require('../models/category'); // Import your Category model

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

// Main categories in alphabetical order
const mainCategories = [
    'Catering & Drinks',
    'Event Services',
    'Event Spaces',
    'Floral & Decor',
    'Invitations & Paper Goods',
    'Others',
    'Transportation & Accommodation',
    'Wedding Attire & Accessories',
];

const subcategories = [
    { name: 'Accommodation and Travels', parent: 'Transportation & Accommodation' },
    { name: 'Beauty & Wellness', parent: 'Event Services' },
    { name: 'Caterers & Bakers', parent: 'Catering & Drinks' },
    { name: 'Decor & Rentals', parent: 'Floral & Decor' },
    { name: 'Drinks', parent: 'Catering & Drinks' },
    { name: 'Entertainment (Bands, DJs)', parent: 'Event Services' },
    { name: 'Event Spaces', parent: 'Event Spaces' },
    { name: 'Floral Design & Interior', parent: 'Floral & Decor' },
    { name: 'Invitations & Paper Goods', parent: 'Invitations & Paper Goods' },
    { name: 'Jewelry & Accessories', parent: 'Wedding Attire & Accessories' },
    { name: 'Officiants', parent: 'Event Services' },
    { name: 'Photographers & Videographers', parent: 'Event Services' },
    { name: 'Transportation', parent: 'Transportation & Accommodation' },
    { name: 'Wedding Fashion & Apparel', parent: 'Wedding Attire & Accessories' },
    { name: 'Wedding Planners', parent: 'Event Services' },
];

const seedCategories = async () => {
    for (const category of mainCategories) {
        try {
            await Category.findOrCreate({
                where: { name: category },
                defaults: { parent_id: null },
            });
        } catch (error) {
            console.error('Error seeding main categories:', error);
        }
    }

    for (const subcategory of subcategories) {
        try {
            const parentCategory = await Category.findOne({ where: { name: subcategory.parent } });
            if (parentCategory) {
                await Category.findOrCreate({
                    where: { name: subcategory.name },
                    defaults: { parent_id: parentCategory.id },
                });
            }
        } catch (error) {
            console.error('Error seeding subcategories:', error);
        }
    }
};

const runSeeder = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established.');
        
        await sequelize.sync({ force: true });
        console.log('Tables synchronized.');

        await seedCategories();
        
        console.log('Seeding completed!');
    } catch (error) {
        console.error('Error during seeding:', error);
    } finally {
        await sequelize.close();
    }
};

runSeeder();
