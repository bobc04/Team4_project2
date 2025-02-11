import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig';
import User from './User';
import Category from './Category';

class Service extends Model {
  public id!: number;
  public userId!: number;
  public description!: string;
  public location!: string;
  public yearsOfExperience?: number;
  public hasReferences?: boolean;
}

Service.init(
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yearsOfExperience: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hasReferences: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Service',
  }
);

Service.belongsTo(User, { foreignKey: 'userId' });
Service.belongsToMany(Category, { through: 'ServiceCategory', foreignKey: 'serviceId' });
Category.belongsToMany(Service, { through: 'ServiceCategory', foreignKey: 'categoryId' });

export default Service;
