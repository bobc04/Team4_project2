import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/dbConfig'; //  Ensured correct import

class Category extends Model {
  public id!: number;
  public name!: string;

  // ✅ Fix: Ensure Sequelize initializes the model
  static initModel(sequelize: Sequelize) {
    Category.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: true, // Ensures name is not an empty string
            len: [2, 50], // Limits category name length (adjustable)
          },
          set(value: string) {
            this.setDataValue('name', value.trim()); // Removes whitespace
          },
        },
      },
      {
        sequelize,
        modelName: 'Category',
        tableName: 'categories', // Explicit table name to prevent pluralization issues
        timestamps: true, // Adds createdAt & updatedAt fields
      }
    );
  }
}

export default Category;
