import { Request, Response } from 'express';
import Service from '../models/service';

export const createService = async (req: Request, res: Response) => {
  const { name, description, category, yearsOfExperience } = req.body;

  try {
    const newService = await Service.create({
      name,
      description,
      category,
      yearsOfExperience,
      userId: req.user.id,  // Assumes `req.user` is set by authentication middleware
    });
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ message: 'Error creating service', error });
  }
};

export const getServicesByCategory = async (req: Request, res: Response) => {
  const { category } = req.params;

  try {
    const services = await Service.findAll({ where: { category } });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving services', error });
  }
};
