import axios from 'axios';
const config = require('./config.json');

// This is the main config file for All network calls happen inside app.
// Advange of keeping such config file:
// 1. To handle token expiry cases
// 2. To set JWT token at the header at once
// 3. Throughout the app: Single instance of Axios will be there (Helps is performance too)
export const AspireNetWorkInstance = axios.create({
  baseURL: config.baseURL,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});
