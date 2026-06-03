import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth APIs
export const register = (userData) => api.post('/auth/register', userData);
export const login = (credentials) => api.post('/auth/login', credentials);
export const getCurrentUser = () => api.get('/auth/me');

// Journal APIs
export const getJournals = () => api.get('/journals');
export const getJournalById = (id) => api.get(`/journals/${id}`);

// Article APIs
export const getArticles = () => api.get('/articles');
export const getArticleById = (id) => api.get(`/articles/${id}`);
export const createArticle = (articleData) => api.post('/articles', articleData);
export const getUserArticles = () => api.get('/articles/my-articles');

export default api;