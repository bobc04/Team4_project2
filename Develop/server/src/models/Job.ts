import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/dbConfig'; //  Ensure `sequelize` comes after `Sequelize`
import User from './User';
import Category from './Category';

class Job extends Model {
  public id!: number;
  public userId!: number;
  public jobDescription!: string;
  public location!: string;

  // Fix: Ensure Sequelize initializes the model
  static initModel(sequelize: Sequelize) {
    Job.init(
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
        modelName: 'Job',
        tableName: 'jobs', // Explicit table name for consistency
        timestamps: true, // Ensure timestamps (createdAt, updatedAt)
      }
    );
  }
}


export default Job;
