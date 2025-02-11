import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/userController';

const router = Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to log in an existing user
router.post('/login', loginUser);

// You can add more routes here
// router.get('/profile', authMiddleware, getUserProfile);

export default router;

