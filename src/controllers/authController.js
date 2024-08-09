import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getUserByEmail } from '../models/user.js';

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);

  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).send('Unauthorized');
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  
  res.json({ token });  
};

export default { login };
