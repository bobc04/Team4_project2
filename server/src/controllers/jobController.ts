import { Request, Response } from 'express';
import Job from '../models/Job';

export const createJob = async (req: Request, res: Response) => {
  const { title, description, location, category } = req.body;

  try {
    const newJob = await Job.create({
      title,
      description,
      location,
      category,
      userId: req.user.id,
    });
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job', error });
  }
};

export const getJobsByCategory = async (req: Request, res: Response) => {
  const { category } = req.params;

  try {
    const jobs = await Job.findAll({ where: { category } });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving jobs', error });
  }
};

