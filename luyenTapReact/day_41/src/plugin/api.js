import axios from "axios";

// Cấu hình api
const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

export default api