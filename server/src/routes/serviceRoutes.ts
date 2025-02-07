import { Router } from 'express';
import { createService, getServicesByCategory } from '../controllers/serviceController';

const router = Router();

router.post('/create', createService);
router.get('/:category', getServicesByCategory);

export default router;
