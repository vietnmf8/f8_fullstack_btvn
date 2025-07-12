import axios from 'axios'


/* ==========================================================================================
 * Cấu hình axios
 * ========================================================================================== */

const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})


/* ==========================================================================================
 * Method API
 * ========================================================================================== */

export const productsAPI = {
    // Get products
    getProducts: () => api.get('/products'),

    // Get categories
    getCategories: () => api.get('/categories'),

    // Post
    create: (productData) => api.post('/products', productData),

    // Update
    update: (id, productData) => api.put(`/products/${id}`, productData),

    // Delete
    delete: (id) => api.delete(`/products/${id}`)
}

export default api;

