import axios from 'axios';

const API_BASE_URL = 'https://node-demo-api.vercel.app/api';

export const fetchProducts = async () => {
  console.log('fectch');
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const fetchProductDetails = async (productId: number) => {
  const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
  return response.data;
};
