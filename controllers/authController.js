const { User } = require('../models/User');
const { generateToken, verifyToken } = require('../utils/jwtUtils');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hashedPassword });
  const token = generateToken(user.id);
  res.json({ token });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = generateToken(user.id);
  res.json({ token });
};

exports.logout = (req, res) => {
  // Здесь можно реализовать логику выхода пользователя (например, удалить токен)
  res.json({ message: 'Logout successful' });
};