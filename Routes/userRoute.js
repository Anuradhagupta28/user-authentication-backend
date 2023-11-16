const express = require('express');
const { register, login } = require('../Controller/userController');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const result = await register(req.body);
    res.status(result.status).json(result);
  } catch (error) {
    console.log('Post Error', error);
    res.status(500).json({ status: 500, message: `Data Post fail: ${error}` });
  }
});

router.post('/login', async (req, res) => {
  try {
    const result = await login(req.body);
    res.status(result.status).json(result);
  } catch (error) {
    console.log('Post Error', error);
    res.status(500).json({ status: 500, message: `Data Post fail: ${error}` });
  }
});

module.exports = {router};
