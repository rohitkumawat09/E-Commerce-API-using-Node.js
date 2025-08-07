
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // req.User = user;

     req.user = {
      id: user._id,
      name: user.name,
      email: user.email,
       role: user.role, 
    };
    next();
  } catch (err) {
    console.error('Auth error:', err);
    res.status(401).json({ error: 'Token is not valid' });
  }
};

export default authMiddleware;
