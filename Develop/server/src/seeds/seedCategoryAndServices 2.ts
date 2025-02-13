import sequelize from '../config/dbConfig';
import { User, Category, Service } from '../models';

async function seedCategoriesAndServices() {
  try {
    // ✅ Ensure database connection is established
    await sequelize.authenticate();
    console.log('✅ Database connected successfully!');

    // ✅ Reset database
    await sequelize.sync({ force: true });
    console.log('✅ Database synced!');

    // ✅ Create categories
    const categories = await Category.bulkCreate([
      { name: 'Plumbing' },
      { name: 'Electricity' },
      { name: 'General Construction' },
      { name: 'Childcare' },
      { name: 'Cleaning' },
      { name: 'Gardening' },
    ]);

    // ✅ Create users
    const users = await User.bulkCreate([
      { name: 'Service Provider Alice', username: 'alice123', phone: '123-4567', password: 'password123' },
      { name: 'Service Provider Bob', username: 'bob234', phone: '234-5678', password: 'password123' },
      { name: 'Service Provider Carol', username: 'carol345', phone: '345-6789', password: 'password123' },
    ]);

    // ✅ Create services and associate with categories
    const service1 = await Service.create({
      userId: users[0].id,
      name: 'Residential Plumbing',
      description: 'Plumbing services for residential buildings',
      location: 'San Jose, Costa Rica',
      yearsOfExperience: 8,
      hasReferences: true,
    });
    await service1.addCategories([categories[0], categories[2]]); // Plumbing & General Construction

    const service2 = await Service.create({
      userId: users[1].id,
      name: 'Commercial Electrical Services',
      description: 'Electrical services for commercial buildings',
      location: 'Alajuela, Costa Rica',
      yearsOfExperience: 5,
      hasReferences: true,
    });
    await service2.addCategories([categories[1]]); // Electricity

    console.log('✅ Categories, users, and services seeded successfully!');

    // ✅ Exit process successfully
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Execute seeding function
seedCategoriesAndServices();
