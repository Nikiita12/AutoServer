const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your_secret_key';

exports.generateToken = (userId) => {
  const payload = {
    userId,
    exp: Math.floor(Date.now() / 1000) + 3600, // Токен истекает через 1 час
  };
  return jwt.sign(payload, SECRET_KEY);
};

exports.verifyToken = (token) => {
  try {
    const { userId } = jwt.verify(token, SECRET_KEY);
    return userId;
  } catch (error) {
    return null;
  }
};