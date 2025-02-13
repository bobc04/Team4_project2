import { Sequelize } from 'sequelize';
import sequelize from '../config/dbConfig';
import User from './User';
import Job from './Job';
import Service from './service'; //  Fixed case sensitivity
import Category from './Category';

// Initialize models before defining relationships
User.initModel(sequelize);
Job.initModel(sequelize);
Service.initModel(sequelize);
Category.initModel(sequelize);

// Define relationships in ONE place
User.hasMany(Service, { foreignKey: 'userId', onDelete: 'CASCADE' });
Service.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Job, { foreignKey: 'userId', onDelete: 'CASCADE' });
Job.belongsTo(User, { foreignKey: 'userId' });

Category.hasMany(Job, { foreignKey: 'categoryId', onDelete: 'CASCADE' });
Job.belongsTo(Category, { foreignKey: 'categoryId' });

Category.hasMany(Service, { foreignKey: 'categoryId', onDelete: 'CASCADE' });
Service.belongsTo(Category, { foreignKey: 'categoryId' });

Job.belongsToMany(Category, { through: 'JobCategory', foreignKey: 'jobId' });
Category.belongsToMany(Job, { through: 'JobCategory', foreignKey: 'categoryId' });


// Sync models with the database
(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('✅ Database synced successfully');
  } catch (err) {
    console.error('❌ Error syncing database:', err);
  }
})();

export { sequelize, User, Job, Service, Category };
