function authMiddleware(req, res, next) {
  console.log("Rohit");

  
//   console.log("Request Type:", req.method);
  next();
}

export default authMiddleware;
