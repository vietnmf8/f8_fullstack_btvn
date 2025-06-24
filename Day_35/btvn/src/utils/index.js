import api from "../plugins/api.js"

// GET request với xử lý token refresh
const get = async (endpoint) => {
    try {
        const {data} = await api.get(endpoint)
        return data
    }
    catch (error) {
        // Nếu token hết hạn (401), thử refresh token
        if (error.response?.status === 401) {
            const refreshed = await refreshToken();
            if (refreshed) {
                // Thử lại request sau khi refresh token
                const {data} = await api.get(endpoint)
                return data
            }
        }
        console.log(error)
        return null
    }
}

// POST request (sửa lỗi từ api.get thành api.post)
const post = async (endpoint, body) => {
    try {
        const {data} = await api.post(endpoint, body)
        return data
    }
    catch (error) {
        console.log(error)
        return null
    }
}

// Function refresh token khi hết hạn
const refreshToken = async () => {
    try {
        const refresh = localStorage.getItem('refresh_token');
        if (!refresh) return false;

        const {data} = await api.post('login/get_new_token/', { refresh });

        // Lưu token mới vào localStorage
        localStorage.setItem('access_token', data.access);
        return true;
    } catch (error) {
        // Nếu refresh token cũng hết hạn, xóa tất cả và redirect về login
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/';
        return false;
    }
}

export { get, post }