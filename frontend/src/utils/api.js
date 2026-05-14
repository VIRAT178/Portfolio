import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.data)
    } else if (error.request) {
      // Request made but no response
      console.error('No response received:', error.request)
    } else {
      // Error in request setup
      console.error('Error:', error.message)
    }
    return Promise.reject(error)
  }
)

/**
 * Send contact form message
 * @param {Object} data - Contact form data
 * @param {string} data.fullName - Full name
 * @param {string} data.email - Email address
 * @param {string} data.projectType - Type of project
 * @param {string} data.budget - Budget range
 * @param {string} data.message - Message content
 * @returns {Promise<Object>} Response from server
 */
export const sendContactMessage = async (data) => {
  try {
    const response = await apiClient.post('/contact', data)
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to send message' }
  }
}

/**
 * Health check
 * @returns {Promise<Object>} Server status
 */
export const checkHealth = async () => {
  try {
    const response = await apiClient.get('/health')
    return response.data
  } catch (error) {
    return { success: false }
  }
}

export default apiClient
