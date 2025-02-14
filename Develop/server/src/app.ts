import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';

import userRoutes from './routes/userRoutes';
import jobRoutes from './routes/jobRoutes';
import searchRoutes from './routes/searchRoutes';
import serviceRoutes from './routes/serviceRoutes'; // Ensure service routes are included

dotenv.config();

const app = express();

// Middleware setup
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173', // Allow your specific frontend origin
    credentials: true, // This enables Access-Control-Allow-Credentials: true
  })
);
app.use(helmet()); // Adds security headers

// Routes setup
app.use('/api', searchRoutes);
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/services', serviceRoutes);

// ✅ Add a default route for `/` (prevents "Cannot GET /" issue)
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('🌍 Community Business Revival Network API is running!');
});

// Error handling middleware (helps with debugging)
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
