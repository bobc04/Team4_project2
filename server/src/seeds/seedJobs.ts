import sequelize from '../config/dbConfig';
import { Jobs, User, Category } from '../models';

async function seedJobs() {
  await sequelize.sync();

  const categories = await Category.findAll();

  const users = await User.bulkCreate([
    { name: 'Job Poster Dave', phone: '555-1234', password: 'password123' },
  ]);

  const job1 = await Jobs.create({
    userId: users[0].id,
    jobDescription: 'Need plumbing work and cabinet installation',
    location: 'Cartago, Costa Rica',
  });
  await job1.addCategories([categories.find(c => c.name === 'Plumbing'), categories.find(c => c.name === 'General Construction')]);

  const job2 = await Jobs.create({
    userId: users[0].id,
    jobDescription: 'Looking for a full-time childcare provider',
    location: 'Heredia, Costa Rica',
  });
  await job2.addCategories([categories.find(c => c.name === 'Childcare')]);

  console.log('Jobs seeded successfully!');
}

seedJobs();
