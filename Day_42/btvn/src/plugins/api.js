import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-todolist-multiuser.onrender.com',
    timeout: 10000,
    headers: {
        'Content-Type': "application/json"
    }
})

// Các functions gọi API
export const contactsAPI = {

    // Lấy tất các contacts
    getAll: () => api.get('/Viet/contacts'),

    // Tạo contact mới
    create: (contactData) => api.post('/Viet/contacts', contactData),

    // Cập nhật contact theo ID
    update: (id, contactData) => api.put(`/Viet/contacts/${id}`, contactData),

    // Xoá contact theo ID
    delete: (id) => api.delete(`/Viet/contacts/${id}`),
}

export default api