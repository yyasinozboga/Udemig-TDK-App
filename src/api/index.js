import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sozluk.gov.tr',
});

export const jsonServer = axios.create({
  baseURL: 'http://localhost:3000',
});

export default api;
