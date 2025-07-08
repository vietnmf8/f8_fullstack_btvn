/*==================================================================================
Reducer: Count Slice
==================================================================================*/

import {createSlice} from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "count",      // Tên của slice
    initialState: 0,    // Trạng thái ban đầu
    reducers: {
        increase: (state, action) => { // State là giá trị hiện tại của count
            return state + 1;   // Tăng giá trị count lên 1
        }
    }
})

export const { increase } = countSlice.actions;

export default countSlice;