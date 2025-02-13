import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

declare module 'express' {
  interface Request {
    user?: { id: number }; // ✅ Ensure req.user has the correct type
  }
}

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const secret = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secret);

    // ✅ Fix: Explicitly check the type of `decoded`
    if (typeof decoded === 'string') {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = { id: decoded.id }; // ✅ Properly assign only the `id`
    next();
  } catch (error) {
    res.status(403).json({ message: 'Forbidden: Invalid token' });
  }
};

export default authenticateToken;

