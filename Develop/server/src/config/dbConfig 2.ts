import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
    logging: process.env.NODE_ENV === "development" ? console.log : false, // Log queries in dev mode
    define: {
      timestamps: true, // Ensures Sequelize models use timestamps by default
    },
  }
);

// Test DB connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully!');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1); // Exit if unable to connect
  }
}

testConnection();

export default sequelize;
