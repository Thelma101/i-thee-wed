const seedCategories = async () => {
    // Main categories
    const mainCategories = [
      'Wedding Attire & Accessories',
      'Floral & Decor',
      'Event Services',
      'Catering & Drinks',
      'Invitations & Paper Goods',
      'Transportation & Accommodation',
      'Event Spaces'
    ];
  
    // Subcategories
    const subcategories = [
      { name: 'Bridal Fashion & Apparel', parent: 'Wedding Attire & Accessories' },
      { name: 'Wedding Jewelry & Accessories', parent: 'Wedding Attire & Accessories' },
      { name: 'Floral Design & Arrangements', parent: 'Floral & Decor' },
      { name: 'Decor & Rentals', parent: 'Floral & Decor' },
      { name: 'Photographers & Videographers', parent: 'Event Services' },
      { name: 'Wedding Planners', parent: 'Event Services' },
      { name: 'Entertainment (Bands, DJs)', parent: 'Event Services' },
      { name: 'Beauty & Wellness', parent: 'Event Services' },
      { name: 'Officiants', parent: 'Event Services' },
      { name: 'Caterers & Bakers', parent: 'Catering & Drinks' },
      { name: 'Drinks', parent: 'Catering & Drinks' },
      { name: 'Invitations & Paper Goods', parent: 'Invitations & Paper Goods' },
      { name: 'Transportation', parent: 'Transportation & Accommodation' },
      { name: 'Accommodation and Travels', parent: 'Transportation & Accommodation' },
      { name: 'Event Spaces', parent: 'Event Spaces' }
    ];
  
    // Insert main categories
    for (const cat of mainCategories) {
      await Category.create({ name: cat });
    }
  
    // Insert subcategories
    for (const subcat of subcategories) {
      const parent = await Category.findOne({ where: { name: subcat.parent } });
      await Category.create({ name: subcat.name, parent_id: parent.id });
    }
  };
  
  const runSeeder = async () => {
    await sequelize.sync({ force: true }); // Caution: This will drop existing tables
    await seedStates();
    await seedCategories();
    console.log('Seeding completed!');
    process.exit(0);
  };
  
  runSeeder();