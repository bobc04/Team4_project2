import { Request, Response } from 'express';
import Job from '../models/Job';

export const createJob = async (req: Request, res: Response): Promise<void> => {
  const { title, description, location, category } = req.body;

  try {
    // ✅ Ensure `req.user` exists before using it
    if (!req.user || !req.user.id) {
      res.status(401).json({ message: 'Unauthorized: No user found' });
      return;
    }

    const newJob = await Job.create({
      title,
      description,
      location,
      category,
      userId: req.user.id, // ✅ Now TypeScript knows req.user is defined
    });

    res.status(201).json(newJob);
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ message: 'Error creating job', error });
  }
};

export const getJobsByCategory = async (req: Request, res: Response): Promise<void> => {
  const { category } = req.params;

  try {
    const jobs = await Job.findAll({ where: { category } });
    res.status(200).json(jobs);
  } catch (error) {
    console.error('Error retrieving jobs:', error);
    res.status(500).json({ message: 'Error retrieving jobs', error });
  }
};
