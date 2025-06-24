import axios from "axios";

const api = axios.create({
    baseURL: "https://api-todolist-multiuser.onrender.com/Viet/",
})

export default api