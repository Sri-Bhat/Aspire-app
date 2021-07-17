import axios from 'axios';
const config = require('./config.json');

export const AspireNetWorkInstance = axios.create({
  baseURL: config.baseURL,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});
