import {createSlice} from '@reduxjs/toolkit'
import {getAPI, deleteAPI, updateAPI, postAPI} from "../../utils/index.js";



/* Slice: ProductsSlice */
const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        // addNewProduct: (state, action) => {
        //     state.push(action.payload)
        // },
        // updateProduct: (state, action) => {
        //     const index = state.findIndex(p => p.id === action.payload.id)
        //     if (index !== -1) state[index] = { ...state[index], ...action.payload }
        // },
        // deleteProduct: (state, action) => {
        //     // C1:
        //     const index = state.findIndex(product => product.id === action.payload.id)
        //     if (index !== -1) {
        //         state.splice(index, 1) // xoá tại vị trí index, chỉ 1 phần tử
        //     }
        //     // C2:
        //     return state.filter(product => product.id !== action.payload.id)
        // }
    },

    extraReducers: builder => {
        // Method: GET
       builder.addCase(getAPI.fulfilled, (state, action) => {
           console.log('Lấy dữ liệu thành công!')
           return action.payload // Data

       })
        builder.addCase(getAPI.pending, (state, action) => {
            console.log('Đang lấy dữ liệu')
        })

        // Method: POST
        builder.addCase(postAPI.fulfilled, (state, action) => {
            console.log('THÊM DỮ LIỆU thành công')
            return [...state, action.payload]
            //C2
            // productsSlice.caseReducers.addNewProduct(state, { payload: action.payload })
        })
        builder.addCase(postAPI.pending, (state, action) => {
            console.log('Đang THÊM DỮ LIỆU')
        })

        // Method: PUT
        builder.addCase(updateAPI.fulfilled, (state, action) => {
            console.log('CẬP NHẬT DỮ LIỆU thành công!')
            return state.map(product => {
                return product.id === action.payload.id
                    ? {...product, ...action.payload}
                    : product
            })
        })

        builder.addCase(updateAPI.pending, (state, action) => {
            console.log('Đang CẬP NHẬT DỮ LIỆU')
        })

        // Method: DELETE
        builder.addCase(deleteAPI.fulfilled, (state, action) => {
            console.log('XOÁ DỮ LIỆU thành công!')
            return state.filter(product => product.id !== action.payload.id)
        })
        builder.addCase(deleteAPI.pending, (state, action) => {
            console.log('Đang XOÁ DỮ LIỆU')
        })
    }
})

export { productsSlice }