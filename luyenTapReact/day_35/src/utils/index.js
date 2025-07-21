import api from '../plugins/api.js'
import axios from 'axios'



// GET:
const getApi = async (endpoint) => {
    try {
        const { data } = await api.get(endpoint)
        return data
    }
    catch(error) {
        // Nếu token hết hạn (401) -> gửi refresh -> lấy access mới
        if (error.response?.status === 401) {
            const isRefreshed = await refreshToken()
            if (isRefreshed) {
                // getAPi lại
                const { data } = await api.get(endpoint)
                return data
            }
        }
        return null
    }
}

// POST
const postApi = async (endpoint, body) => {
    try {
        const { data } = await api.post(endpoint, body)
        return data
    }
    catch(error) {
        console.log("Lỗi postApi: ", error)
        return null
    }
}


// refresh token -> khi hết hạn -> bool
const refreshToken = async () => {
    try {
        // Lấy refresh token từ localStorage
        const refresh = localStorage.getItem('refresh')
        if (!refresh) {
            return false
        }

        // lấy data từ method post
        const { data } = await api.post('login/get_new_token/', { refresh });
        console.log(data) // trả về access mới

        // Luu token mới vào localStorage
        localStorage.setItem('access', data.access)
        return true

    }
    catch (error) {
        // Nếu refresh token cũng hết hạn, xóa tất cả và redirect về login
        // localStorage.removeItem('access')
        // localStorage.removeItem('refresh')
        // window.location.href = '/';
        console.log(error)
        return false
    }
}

export { getApi, postApi }