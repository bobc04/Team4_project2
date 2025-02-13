import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Database configuration with fallback values
const DB_CONFIG = {
  name: process.env.DB_NAME || 'local_development',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  dialect: 'postgres' as const,
};

const sequelize = new Sequelize(
  DB_CONFIG.name,
  DB_CONFIG.user,
  DB_CONFIG.password,
  {
    host: DB_CONFIG.host,
    port: DB_CONFIG.port,
    dialect: DB_CONFIG.dialect,
    logging: process.env.NODE_ENV === "development" ? console.log : false,
    define: {
      timestamps: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    retry: {
      max: 3,
      match: [
        /SequelizeConnectionError/,
        /SequelizeConnectionRefusedError/,
        /SequelizeHostNotFoundError/,
        /SequelizeHostNotReachableError/,
        /SequelizeInvalidConnectionError/,
        /SequelizeConnectionTimedOutError/
      ]
    }
  }
);

// Enhanced connection testing
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully!');
    console.log(`Connected to: ${DB_CONFIG.name} on ${DB_CONFIG.host}:${DB_CONFIG.port}`);
  } catch (error: any) {
    console.error('Database connection failed!');
    console.error('Error details:', {
      message: error.message,
      code: error.parent?.code,
      detail: error.parent?.detail
    });
    
    // Provide helpful troubleshooting messages
    if (error.parent?.code === '3D000') {
      console.error(`Database "${DB_CONFIG.name}" does not exist. Please create it first using:`);
      console.error(`createdb ${DB_CONFIG.name}`);
      console.error('Or using SQL:');
      console.error(`CREATE DATABASE ${DB_CONFIG.name};`);
    } else if (error.parent?.code === '28P01') {
      console.error('Authentication failed. Check your DB_USER and DB_PASSWORD environment variables.');
    } else if (error.parent?.code === 'ECONNREFUSED') {
      console.error('Connection refused. Make sure PostgreSQL is running and check your DB_HOST and DB_PORT.');
    }

    // Exit with failure in production, but not in development
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
}

// Run connection test
testConnection();

export default sequelize;