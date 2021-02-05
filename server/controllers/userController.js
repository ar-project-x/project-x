import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

// @desc authenticate user and get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      middleInitial: user.middleInitial,
      email: user.email,
      isAdmin: user.isAdmin,
      roles: user.roles,
      token: generateToken(user._id)
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    middleInitial,
    email,
    password,
    title,
    isAdmin,
    roles
  } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({
    firstName,
    lastName,
    middleInitial,
    email,
    password,
    title,
    isAdmin,
    roles
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      middleInitial: user.middleInitial,
      email: user.email,
      isAdmin: user.isAdmin,
      roles: user.roles,
      token: generateToken(user._id)
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
});

// @desc Get all users
// @route GET /api/users
// @access Private admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select('-password');
  res.json(users);
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: 'User deleted' });
  } else {
    res.status(404).json({ message: 'Delete failed. User not found.' });
  }
});

export { authUser, registerUser, getUsers, deleteUser };
