const adminMiddleware = (req, res, next) => {
  if (req.User && req.User.role === "admin") {
    next();
  } else {
    res.status(403).json({ error: "Access denied. Admins only." });
  }
};

export default adminMiddleware; 

 
