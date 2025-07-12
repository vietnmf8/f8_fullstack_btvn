import {createAsyncThunk} from "@reduxjs/toolkit";
import {contactsAPI} from "../plugins/api.js";


/* ==========================================================================================
 * Các function lấy dữ liệu từ API
 * ========================================================================================== */

// Lấy danh sách contacts
const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, {rejectWithValue}) => {
        try {
            const { data } = await contactsAPI.getAll();
            return data
        }
        catch (error) {
            console.log("GET API không thành công :(")
            return rejectWithValue(error.response?.data || 'Lỗi khi TẢI danh bạ');
        }
    }
)

// Tạo contact
const createContact = createAsyncThunk(
    'contacts/createContact',
    async (contactData, {rejectWithValue})=> {
        try {
            const { data } = await contactsAPI.create(contactData);
            return data
        }
        catch (error) {
            console.log("POST API không thành công :(")
            return rejectWithValue(error.response?.data || 'Lỗi khi THÊM liên hệ');
        }
    }
)

// Update contact
const updateContact = createAsyncThunk(
    'contacts/updateContact',
    async ({id, contactData}, {rejectWithValue})=> {
        try {
            const { data } = await contactsAPI.update(id, contactData);
            // return {id, ...data}
            return data
        }
        catch (error) {
            console.log("PUT API không thành công :(")
            return rejectWithValue(error.response?.data || 'Lỗi khi CẬP NHẬT liên hệ');
        }
    }
)

// Delete contact
const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, {rejectWithValue})=> {
        try {
            const { data } = await contactsAPI.delete(id);
            console.log('Data Delete: ', data)
            return id
        }
        catch (error) {
            console.log("PUT API không thành công :(")
            return rejectWithValue(error.response?.data || 'Lỗi khi XOÁ liên hệ');
        }
    }
)

export {fetchContacts, deleteContact, createContact, updateContact}