import api from "../plugins/apj.js"

// GET - Lấy danh sách todos
const get = async (endpoint) => {
    try {
        const {data} = await api.get(endpoint)
        return data
    }
    catch (e) {
        console.log(e)
        alert('Lỗi khi tải dữ liệu!')
    }
    return null
}

// POST - Thêm todo mới
const post = async (endpoint, body) => {
    try {
        const {data} = await api.post(endpoint, body)
        return data
    }
    catch (e) {
        console.log(e)
        alert('Lỗi khi thêm dữ liệu!')
    }
    return null
}

// PUT - Cập nhật todo
const put = async (endpoint, body) => {
    try {
        const {data} = await api.put(endpoint, body)
        return data
    }
    catch (e) {
        console.log(e)
        alert('Lỗi khi cập nhật dữ liệu!')
    }
    return null
}

// DELETE - Xóa todo
const del = async (endpoint) => {
    try {
        const {data} = await api.delete(endpoint)
        return data
    }
    catch (e) {
        console.log(e)
        alert('Lỗi khi xóa dữ liệu!')
    }
    return null
}

export {get, post, put, del}