import {createSlice} from "@reduxjs/toolkit";

const searchStrSlice = createSlice({
    name: 'searchStr',
    initialState: null,
    reducers: {
        inputting: (state, action) => {
            return action.payload
        }
    }
})

export {searchStrSlice}
export const {inputting} = searchStrSlice.actions