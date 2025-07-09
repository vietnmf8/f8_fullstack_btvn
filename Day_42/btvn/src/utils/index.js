import { createAsyncThunk } from '@reduxjs/toolkit';
import {contactsAPI} from '../plugins/api.js'


// Get
const fetchContacts = createAsyncThunk(
    'contacts/fetchContact',
    async (_, {rejectWithValue})=> {
        try {
            const { data } = await contactsAPI.getAll();
            return data
        }
        catch(error) {
            console.log("Thực hiện GET API không thành công!")
            return rejectWithValue(error.response?.data || 'Lỗi khi tải danh bạ');
        }
    }
)

// Post
const createContact = createAsyncThunk(
    'contacts/createContact',
    async (contactData, {rejectWithValue})=> {
        try {
            const { data } = await contactsAPI.create(contactData);
            return data
        }
        catch(error) {
            return rejectWithValue(error.message?.data || 'Lỗi tạo liên hệ');
        }
    }
)

// Update
const updateContact = createAsyncThunk(
    'contacts/updateContact',
    async ({id, contactData}, {rejectWithValue})=> {
        try {
            const { data } = await contactsAPI.update(id, contactData);
            return data
        }
        catch(error) {
            return rejectWithValue(error.response?.data || 'Lỗi cập nhật liên hệ')
        }
    }
)

// Delete
const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, {rejectWithValue})=> {
        try {
            await contactsAPI.delete(id);
            return id
        }
        catch(error) {
            return rejectWithValue(error.response?.data || 'Lỗi khi xoá liên hệ')
        }
    }
)

export {fetchContacts, createContact, updateContact, deleteContact}


