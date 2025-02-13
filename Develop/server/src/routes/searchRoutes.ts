// Fixed searchRoutes.ts
import express, { Request, Response, NextFunction } from 'express';
import { Category, Service, Job, User } from '../models';
import authenticateToken from '../middleware/authMiddleware';

const router = express.Router();

// ✅ Get all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories.map((category) => category.name));
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Search by category and role (protected route)
router.get('/search', (req: Request, res: Response, next: NextFunction) => {
  authenticateToken(req, res, (err) => {
    if (err) {
      return next(err);
    }
    (async () => {
      try {
        const { category, role } = req.query;
        if (!category || !role) {
          return res.status(400).json({ message: 'Category and role are required' });
        }
        const categoryInstance = await Category.findOne({ where: { name: category } });
        if (!categoryInstance) {
          return res.status(404).json({ message: 'Category not found' });
        }
        let results;
        if (role === 'provider') {
          results = await Service.findAll({ where: { categoryId: categoryInstance.id }, include: [User] });
        } else if (role === 'job') {
          results = await Job.findAll({ where: { categoryId: categoryInstance.id }, include: [User] });
        } else {
          return res.status(400).json({ message: 'Invalid role specified' });
        }
        res.json(results);
      } catch (error) {
        console.error('Error fetching search results:', error);
        res.status(500).json({ message: 'Server error' });
      }
    })();
  });
});

export default router;


