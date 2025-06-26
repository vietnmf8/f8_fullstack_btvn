import axios from "axios";

// Cấu hình base URL cho API todo
const api = axios.create({
    baseURL: "https://api-todolist-multiuser.onrender.com/Viet/",
})

export default api