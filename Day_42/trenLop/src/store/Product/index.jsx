import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../plugin/api.js";
import {fetchProducts} from "../../utils/index.js";


const productsSlice = createSlice({
    name: "products",      // Tên của slice
    initialState: [],    // Trạng thái ban đầu
    reducers: {
        addNew: (state, action) => {
            state.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            console.log(`fetch OK`);
        })
        builder.addCase(fetchProducts.pending, (state, action) => {
            console.log(`fetch PENDING`);
        })
    }
})

export const {addNew} = productsSlice.actions;
export default productsSlice;
export {fetchProducts}