const User = require('../Model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async ({ username, email, password }) => {
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return { status: 400, message: 'User already exists' };
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    // const token = jwt.sign({ email: newUser.email }, 'yourSecretKey');

    return { status: 201, user: newUser, message: 'Successfully registered' };
  } catch (error) {
    return { status: 500, message: 'Something went wrong' };
  }
};

const login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return { status: 404, message: 'User not found' };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { status: 401, message: 'Invalid credentials' };
    }

    const token = jwt.sign({ email: user.email }, 'yourSecretKey');

    return { status: 200, user, token, message: 'Successfully logged in' };
  } catch (error) {
    return { status: 500, message: 'Something went wrong' };
  }
};

module.exports = { register, login };
// zdbfghj