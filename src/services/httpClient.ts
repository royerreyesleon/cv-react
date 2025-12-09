import axios from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  // timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    apikey: import.meta.env.VITE_API_KEY,
  },
});

export default http;
