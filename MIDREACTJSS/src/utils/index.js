import {createAsyncThunk} from '@reduxjs/toolkit'
import api from '../plugin/api.js'

// GET
const getAPI = createAsyncThunk('products/getAPI', async () => {
    try {
        const { data } = await api.get('products/')
        return data
    }
    catch (error) {
        console.log("Thực hiện GET API không thành công!")
    }
})

const getCategoriesAPI = createAsyncThunk('categories/getAPI', async () => {
    try {
        const { data } = await api.get('categories/')
        return data
    }
    catch (error) {
        console.log("Thực hiện GET API không thành công!")
    }
})

// POST
const postAPI = createAsyncThunk('products/postAPI', async (body) => {
    try {
        const { data } = await api.post('products/', body)
        return data
    }
    catch (error) {
        console.log("Thực hiện POST API không thành công!")
    }
})

// UPDATE
const updateAPI = createAsyncThunk('products/updateAPI', async ({id, ...body}) => {
    try {
        const { data } = await api.put(`products/${id}`, body)
        return data
    }
    catch (error) {
        console.log("Thực hiện UPDATE API không thành công!")
    }
})

// DELETE
const deleteAPI = createAsyncThunk('products/deleteAPI', async (id) => {
    try {
        const { data } = await api.delete(`products/${id}`)
        return data
    }
    catch (error) {
        console.log("Thực hiện UPDATE API không thành công!")
    }
})

export {postAPI, deleteAPI, updateAPI, getAPI, getCategoriesAPI}