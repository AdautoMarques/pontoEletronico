import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authenticate = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; 

  if (!token) return res.status(401).send('No token provided');

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send('Invalid token');

    req.user = decoded;
    next();
  });
};

export default authenticate;
