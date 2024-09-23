// api.js
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});


export const getWalletsByMerchantCode = async () => {
  try {
    const response = await api.get('/nextpay/getwaltterbycommercant/');
    return response.data;
  } catch (error) {
    console.error('Error fetching wallets:', error);
    throw error;
  }
};

export const getTransactionHistory = async () => {
  const response = await api.get('/nextpay/merchant/transactions/');
  return response.data;
};

export const getTransactionById = async (id) => {
  const response = await api.get(`/nextpay/merchant/transactions/${id}/`);
  return response.data;
};

export const changePassword = async ({ old_password, new_password }) => {
  try {
    const accessToken = localStorage.getItem('access');
    const response = await api.post('/user/change-password/', { old_password, new_password }, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error changing password:', error);
    throw error;
  }
};



api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
