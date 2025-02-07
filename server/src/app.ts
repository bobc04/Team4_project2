import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import jobRoutes from './routes/jobRoutes';  // Placeholder for job-related routes

dotenv.config();

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

// Routes setup
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


