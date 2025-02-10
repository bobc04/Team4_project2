import sequelize from '../config/dbConfig';
import { User, Category, Service } from '../models';

async function seedCategoriesAndServices() {
  await sequelize.sync({ force: true });

  const categories = await Category.bulkCreate([
    { name: 'Plumbing' },
    { name: 'Electricity' },
    { name: 'General Construction' },
    { name: 'Childcare' },
    { name: 'Cleaning' },
    { name: 'Gardening' },
  ]);

  const users = await User.bulkCreate([
    { name: 'Service Provider Alice', phone: '123-4567', password: 'password123' },
    { name: 'Service Provider Bob', phone: '234-5678', password: 'password123' },
    { name: 'Service Provider Carol', phone: '345-6789', password: 'password123' },
  ]);

  const service1 = await Service.create({
    userId: users[0].id,
    description: 'Plumbing services for residential buildings',
    location: 'San Jose, Costa Rica',
    yearsOfExperience: 8,
    hasReferences: true,
  });
  await service1.addCategories([categories[0], categories[2]]);  // Plumbing and General Construction

  const service2 = await Service.create({
    userId: users[1].id,
    description: 'Electrical services for commercial buildings',
    location: 'Alajuela, Costa Rica',
    yearsOfExperience: 5,
    hasReferences: true,
  });
  await service2.addCategories([categories[1]]);

  console.log('Categories, users, and services seeded successfully!');
}

seedCategoriesAndServices();
