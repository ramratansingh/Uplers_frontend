import axios from 'axios';

const API_URL = 'http://localhost:4000/api'; // Backend url

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const fetchProducts = async (token) => {
  const response = await axios.get(`${API_URL}/products`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const fetchProductById = async (id, token) => {
  const response = await axios.get(`${API_URL}/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
