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

export const fetchData = async (resourceType, id = null) => {
  let url;
  switch (resourceType) {
    case 'categories':
      url = `/categories/all/${DEALER_NAME}`;
      break;
    case 'carsByCategory':
      if (!id) throw new Error('categoryId is required for "carsByCategory"');
      url = `/products/category/${id}/${DEALER_NAME}`;
      break;
    case 'carById':
      if (!id) throw new Error('carId is required for "carById"');
      url = `/products/product/${id}/${DEALER_NAME}`;
      break;
    default:
      throw new Error(`Unknown resource type: ${resourceType}`);
  }

  const response = await axiosInstance.get(url);
  return response.data;
};