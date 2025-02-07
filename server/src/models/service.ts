import { DataTypes, Model, Sequelize } from 'sequelize';
import User from './User';

class Service extends Model {
  public id!: number;
  public name!: string;        // Name of the service (e.g., "Electrician")
  public description!: string; // Description of the service
  public category!: string;    // Category (e.g., "Electrical Work")
  public yearsOfExperience?: number;  // Optional field for years of experience
  public userId!: number;      // ID of the user offering the service

  static initModel(sequelize: Sequelize) {
    Service.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        yearsOfExperience: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: User,
            key: 'id',
          },
        },
      },
      {
        sequelize,
        modelName: 'Service',
      }
    );
  }
}

export default Service;
