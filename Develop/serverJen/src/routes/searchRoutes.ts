import express from 'express';
import { Category, Service, Jobs } from '../models';

const router = express.Router();

// Route to get all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories.map((category) => category.name));
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Search route by category and role
router.get('/search', async (req, res) => {
  const { category, role } = req.query;

  try {
    const categoryInstance = await Category.findOne({ where: { name: category } });
    if (!categoryInstance) {
      return res.status(404).json({ message: 'Category not found' });
    }

    let results;
    if (role === 'provider') {
      results = await Service.findAll({
        where: { categoryId: categoryInstance.id },
        include: ['User'],
      });
    } else if (role === 'job') {
      results = await Jobs.findAll({
        where: { categoryId: categoryInstance.id },
        include: ['User'],
      });
    } else {
      return res.status(400).json({ message: 'Invalid role specified' });
    }

    res.json(results);
  } catch (error) {
    console.error('Error fetching search results:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
