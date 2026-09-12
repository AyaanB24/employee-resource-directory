import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET all employees with optional search and department filters
export const getEmployees = async (search = '', department = '') => {
  try {
    const params = {};
    if (search) params.search = search;
    if (department) params.department = department;

    const response = await api.get('/employees', { params });
    return response.data.data;
  } catch (error) {
    throw error.response?.data?.error || 'Failed to fetch employees';
  }
};

// GET single employee by ID
export const getEmployeeById = async (id) => {
  try {
    const response = await api.get(`/employees/${id}`);
    return response.data.data;
  } catch (error) {
    throw error.response?.data?.error || 'Failed to fetch employee';
  }
};

// POST create new employee
export const createEmployee = async (employeeData) => {
  try {
    const response = await api.post('/employees', employeeData);
    return response.data.data;
  } catch (error) {
    throw error.response?.data?.error || 'Failed to create employee';
  }
};

// PUT update existing employee
export const updateEmployee = async (id, employeeData) => {
  try {
    const response = await api.put(`/employees/${id}`, employeeData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || 'Failed to update employee';
  }
};

// DELETE employee
export const deleteEmployee = async (id) => {
  try {
    const response = await api.delete(`/employees/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || 'Failed to delete employee';
  }
};

export default api;
