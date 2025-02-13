// Fixed jobRoutes.ts
import { Router, RequestHandler } from 'express';
import { createJob, getJobsByCategory } from '../controllers/jobController';
import authenticateToken from '../middleware/authMiddleware';

const router = Router();

// ✅ Create a job (protected route)
router.post('/create', authenticateToken as RequestHandler, createJob);

// ✅ Get jobs by category
router.get('/category/:category', getJobsByCategory);

export default router;



