import { Sequelize } from 'sequelize';
import User from './User';
import Job from './Job';
import Service from './Service';
import sequelize from '../config/dbConfig';

// Initialize models
User.initModel(sequelize);
Job.initModel(sequelize);
Service.initModel(sequelize);

// Define relationships
User.hasMany(Service, { foreignKey: 'userId' });
Service.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Job, { foreignKey: 'userId' });
Job.belongsTo(User, { foreignKey: 'userId' });

// Sync models with the database
sequelize.sync({ alter: true })  // `alter: true` keeps existing data while updating the schema
  .then(() => console.log('Database synced successfully'))
  .catch(err => console.error('Error syncing database:', err));

export { sequelize, User, Job, Service };


