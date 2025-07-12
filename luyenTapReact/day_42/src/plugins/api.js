import axios from 'axios'


/* ==========================================================================================
 * Cấu hình axios
 * ========================================================================================== */

const api = axios.create({
    baseURL: 'https://api-todolist-multiuser.onrender.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})


/* ==========================================================================================
 * Các methods API
 * ========================================================================================== */

export const contactsAPI = {
    // GET
    getAll: () => api.get('/Viet/contacts'),

    // POST
    create: (contactData) => api.post('/Viet/contacts', contactData),

    // PUT
    update: (id, contactData) => api.put(`/Viet/contacts/${id}`, contactData),

    // DELETE
    delete: (id) => api.delete(`/Viet/contacts/${id}`),
}

export default api