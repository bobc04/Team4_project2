import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig';
import User from './User';
import Category from './Category';

class Jobs extends Model {
  public id!: number;
  public userId!: number;
  public jobDescription!: string;
  public location!: string;
}

Jobs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    jobDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Jobs',
  }
);

Jobs.belongsTo(User, { foreignKey: 'userId' });
Jobs.belongsToMany(Category, { through: 'JobCategory', foreignKey: 'jobId' });
Category.belongsToMany(Jobs, { through: 'JobCategory', foreignKey: 'categoryId' });

export default Jobs;
