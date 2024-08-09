import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['ADM', 'RH', 'FUNCIONARIO'] }
});

const User = mongoose.model('User', userSchema);


const createUser = async (userData) => {
  const user = new User(userData);
  return user.save();
};

const getAllUsers = async () => {
  return User.find();
};


const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

export { createUser, getAllUsers, getUserByEmail };
