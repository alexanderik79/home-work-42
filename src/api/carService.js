import axios from 'axios';

const BASE_URL = 'https://car-dealer-app.botdepo.shop/api';
const DEALER_NAME = 'AutoPlus';
const API_KEY = '0190ed4a-9d93-4b55-ac50-96123dbc39e6';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-API-Key': API_KEY,
  },
});

export const fetchCategories = async () => {
  const response = await axiosInstance.get(`/categories/all/${DEALER_NAME}`);
  return response.data;
};

export const fetchCarsByCategory = async (categoryId) => {
  const response = await axiosInstance.get(`/products/category/${categoryId}/${DEALER_NAME}`);
  return response.data;
};
