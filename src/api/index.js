import axios from 'axios';

axios.defaults.baseURL = `https://wallet.goit.ua/`;

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
