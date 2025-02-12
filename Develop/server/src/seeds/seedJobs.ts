import sequelize from '../config/dbConfig';
import { Job, User, Category } from '../models';

async function seedJobs() {
  try {
    await sequelize.authenticate(); // Ensure DB connection
    await sequelize.sync(); // Sync models

    const categories = await Category.findAll();

    const users = await User.bulkCreate([
      { name: 'Job Poster Dave', phone: '555-1234', password: 'password123', username: 'dave123' },
    ]);

    const job1 = await Job.create({
      userId: users[0].id,
      jobDescription: 'Need plumbing work and cabinet installation',
      location: 'Cartago, Costa Rica',
    });

    const job2 = await Job.create({
      userId: users[0].id,
      jobDescription: 'Looking for a full-time childcare provider',
      location: 'Heredia, Costa Rica',
    });

    // Link jobs to categories safely
    const plumbing = categories.find(c => c.name === 'Plumbing');
    const construction = categories.find(c => c.name === 'General Construction');
    if (plumbing && construction) await job1.addCategories([plumbing, construction]);

    const childcare = categories.find(c => c.name === 'Childcare');
    if (childcare) await job2.addCategories([childcare]);

    console.log('✅ Jobs seeded successfully!');
    process.exit(0); // Gracefully terminate script
  } catch (error) {
    console.error('❌ Error seeding jobs:', error);
    process.exit(1);
  }
}

seedJobs();

