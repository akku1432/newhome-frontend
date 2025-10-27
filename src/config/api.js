// API Configuration
import axios from 'axios';

// Base API URL - Uses environment variable or defaults to Render backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://newhome-backend.onrender.com/api';

// Log the API URL being used
console.log('🌐 API Base URL:', API_BASE_URL);

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 90000, // 90 seconds (for Render free tier cold start - increased timeout)
});

// API endpoints
export const contactAPI = {
  // Submit contact form
  submit: (data) => api.post('/contact', data),
  
  // Get all contacts (admin)
  getAll: () => api.get('/contact'),
};

export const testimonialAPI = {
  // Get all testimonials
  getAll: () => api.get('/testimonials'),
  
  // Create new testimonial (admin)
  create: (data) => api.post('/testimonials', data),
};

export const portfolioAPI = {
  // Get all portfolio items
  getAll: (params) => api.get('/portfolio', { params }),
  
  // Get portfolio item by ID
  getById: (id) => api.get(`/portfolio/${id}`),
  
  // Create new portfolio item (admin)
  create: (data) => api.post('/portfolio', data),
  
  // Update portfolio item (admin)
  update: (id, data) => api.put(`/portfolio/${id}`, data),
  
  // Delete portfolio item (admin)
  delete: (id) => api.delete(`/portfolio/${id}`),
};

export default api;

