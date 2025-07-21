import axios from 'axios'

// Cấu hình axios
const api = axios.create({
    baseURL: "https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/"
})

// Thêm interceptors để tự động gắn token vào header
api.interceptors.request.use(config => {
    // Lấy access token từ localStorage
    const token = localStorage.getItem("access")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export default api