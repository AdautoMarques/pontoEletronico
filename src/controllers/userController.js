import bcrypt from 'bcrypt';
import { createUser, getAllUsers, getUserByEmail } from '../models/user.js';

const createUserController = async (req, res) => {
  const { email, password, role } = req.body;

  try {
 
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    await createUser({ email, password: hashedPassword, role });
    res.status(201).send('User created');
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

const getUsersController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

export default { createUser: createUserController, getUsers: getUsersController };
