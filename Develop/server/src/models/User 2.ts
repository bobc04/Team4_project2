import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/dbConfig'; //  Fixed import case sensitivity

class User extends Model {
  public id!: number;
  public name!: string;
  public username!: string;
  public email?: string;
  public password!: string;

  // ✅ Fix: Ensure Sequelize initializes the model
  static initModel(sequelize: Sequelize) {
    User.init(
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
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: true, // ✅ Enables createdAt & updatedAt fields
      }
    );
  }
}

export default User;
