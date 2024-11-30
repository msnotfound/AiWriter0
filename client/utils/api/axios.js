import axios from 'axios';

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: 'https://ai-writer0-cbrh-5ba27sajh-msnotfounds-projects.vercel.app/', // Backend server URL
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});



export default api;