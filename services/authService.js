import axios from 'axios';

const register = async (username, password) => {
  const response = await axios.post('/auth/register', { username, password });
  return response.data.token;
};

const login = async (username, password) => {
  const response = await axios.post('/auth/login', { username, password });
  return response.data.token;
};

const logout = async () => {
  await axios.post('/auth/logout');
  localStorage.removeItem('token');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;