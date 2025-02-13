import express, { Request, Response, NextFunction } from 'express';
import { Service, Category, User } from '../models';
import authenticateToken from '../middleware/authMiddleware';

const router = express.Router();

// ✅ Extend Express Request to include `user`
declare module 'express' {
  interface Request {
    user?: { id: number };
  }
}

// ✅ Create or update a service provider's profile (protected)
router.post('/service-provider', (req: Request, res: Response, next: NextFunction) => {
  authenticateToken(req, res, (err) => {
    if (err) {
      return next(err);
    }
    (async () => {
      try {
        const { categoryId, description, location, yearsOfExperience, hasReferences } = req.body;
        const userId = req.user?.id;
        if (!userId) {
          return res.status(401).json({ message: 'Unauthorized: User ID missing' });
        }
        const category = await Category.findOne({ where: { id: categoryId } });
        if (!category) {
          return res.status(404).json({ message: 'Category not found' });
        }
        const [serviceProvider, created] = await Service.upsert({
          userId,
          categoryId,
          description,
          location,
          yearsOfExperience,
          hasReferences,
        }, { returning: true });
        res.json({
          message: created ? 'Service provider profile created successfully' : 'Service provider profile updated successfully',
          serviceProvider,
        });
      } catch (error) {
        console.error('Error saving service provider:', error);
        res.status(500).json({ message: 'Server error' });
      }
    })();
  });
});

export default router;
