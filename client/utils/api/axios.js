import axios from 'axios';

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: 'http://localhost:5000', // Backend server URL
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

// Add an interceptor to attach Authorization tokens if needed
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

export default api;