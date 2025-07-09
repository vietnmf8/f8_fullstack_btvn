import {createSlice} from "@reduxjs/toolkit";
import {fetchContacts, createContact, deleteContact, updateContact} from "../../utils/index.js";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],           // Quản lý mỗi liên hệ
        loading: false,     // Theo dõi gọi API
        error: null,        // Xử lý nếu có lỗi
        searchTerm: ''      // Tìm kiếm theo từ khoá
    },
    reducers: {
        //Action:
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },

        // Clear error:
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch contacts
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Create contact
            .addCase(createContact.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(createContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Update contact
            .addCase(updateContact.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.items.findIndex((item) => item.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(updateContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Delete contact
            .addCase(deleteContact.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(item => item.id !== action.payload);
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export const {setSearchTerm, clearError} = contactsSlice.actions;
export default contactsSlice.reducer;   // Export reducer
export {contactsSlice}