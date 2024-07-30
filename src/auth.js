import { login } from './api';

export const loginUser = async (credentials) => {
    const data = await login(credentials);
    localStorage.setItem('token', data.token);
  };
  
  export const getToken = () => localStorage.getItem('token');
  