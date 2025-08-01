import jwt from "jsonwebtoken";
import 'dotenv/config';
export const checkAdmin = (req, res, next) => {
    const token = req.cookies.userToken;
    if (!token) return res.status(401).json({ message: "No Token Found" });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ message: "Invalid Token"});}
};