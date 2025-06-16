import api from './axios';

export const login = async (credentials) => {
  const response = await api.post('auth/login', credentials);
  return response.data; 
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};