import {createSlice} from "@reduxjs/toolkit";
import {fetchContacts, createContact, updateContact, deleteContact} from '../../utils/index.js';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],          // Mảng chứa danh sách contacts
        loading: false,     // Trạng thái loading, true khi đang gọi API
        error: null,        // Lưu trữ thông báo lỗi nếu có
        searchTerm: ''      // Lưu trữ từ khoá từ kiếm
    },

    // Các reducers cho hành động đồng bộ (không phải gọi API)
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        }
    },


    // Các reducers cho hành động bất đồng bộ (từ createAsyncThunk)
    extraReducers: (builder) => {
        builder
            /* Xử lý cho fetchContacts */
            // Pending:
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // Fulfilled:
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload; // action.payload -> data được return từ API
            })
            // Rejected:
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // action.payload -> Nội dung trong rejectWithValue(...)
            })


            /* Xử lý cho createContact */
            // Pending:
            .addCase(createContact.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // Fullfilled:
            .addCase(createContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            // Rejected:
            .addCase(createContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            /* Xử lý cho updateContact */
            // Pending:
            .addCase(updateContact.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            //Fulfilled:
            .addCase(updateContact.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.items.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            // Rejected:
            .addCase(updateContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            /* Xử lý cho deleteContact */
            // Pending:
            .addCase(deleteContact.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            //Fulfilled:
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(item => item.id !== action.payload)
            })
            // Rejected:
            .addCase(deleteContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    }
})

export default contactsSlice.reducer
export const {setSearchTerm, clearError} = contactsSlice.actions;