import express from 'express';
import { ServiceProvider, Category, User } from '../models';

const router = express.Router();

// Endpoint to create or update a service provider's profile
router.post('/service-provider', async (req, res) => {
  const { userId, categoryId, description, location, yearsOfExperience, hasReferences } = req.body;

  try {
    // Ensure the category exists
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Create or update the service provider record
    const serviceProvider = await ServiceProvider.upsert({
      userId,
      categoryId,
      description,
      location,
      yearsOfExperience,
      hasReferences,
    });

    res.json({ message: 'Service provider profile saved successfully', serviceProvider });
  } catch (error) {
    console.error('Error saving service provider:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
