// Fixed userRoutes.ts
import { Router, Request, Response, NextFunction, RequestHandler } from 'express';

import { registerUser, loginUser, getUserProfile } from '../controllers/userController';
import authenticateToken from '../middleware/authMiddleware';

const router = Router();

// ✅ Register a new user
router.post('/register', registerUser);

// ✅ Log in an existing user
router.post('/login', loginUser);

// ✅ Get logged-in user profile (protected)
router.get('/profile', authenticateToken as RequestHandler, getUserProfile);

export default router;




