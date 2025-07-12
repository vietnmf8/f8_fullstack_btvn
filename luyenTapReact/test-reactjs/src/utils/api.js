import axios from "axios";

const API_URL = "http://localhost:3000";

const api = {
    // Products
    getProducts: () => axios.get(`${API_URL}/products`),
    getProduct: (id) => axios.get(`${API_URL}/products/${id}`),
    createProduct: (product) => axios.post(`${API_URL}/products`, product),
    updateProduct: (id, product) =>
        axios.put(`${API_URL}/products/${id}`, product),
    deleteProduct: (id) => axios.delete(`${API_URL}/products/${id}`),

    // Categories
    getCategories: () => axios.get(`${API_URL}/categories`),
};

export default api;
