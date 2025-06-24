
import axios from "axios";

// Cấu hình base URL cho API thật
const api = axios.create({
    baseURL: "https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/",
})

// Thêm interceptor để tự động thêm token vào header
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api