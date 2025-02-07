import { Router } from 'express';
import { createJob, getJobs } from '../controllers/jobController';

const router = Router();

// Define routes
router.post('/create', createJob);
router.get('/', getJobs);

export default router;
