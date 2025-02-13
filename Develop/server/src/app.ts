import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import path from 'path';

import userRoutes from './routes/userRoutes';
import jobRoutes from './routes/jobRoutes';
import searchRoutes from './routes/searchRoutes';
import serviceRoutes from './routes/serviceRoutes';

dotenv.config();

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(helmet());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// Routes setup
app.use('/api', searchRoutes);
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/services', serviceRoutes);

// Handle React routing, return all requests to React app
app.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Error handling middleware (helps with debugging)
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});