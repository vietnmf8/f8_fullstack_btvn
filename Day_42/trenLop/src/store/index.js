/*==================================================================================
Main Store
==================================================================================*/

import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./Count";
import productsSlice from "./Product";


/* Tạo store */
// configureStore sẽ truyền vào các reducer con
const store = configureStore(
    {
        reducer: { // Truyền các reducer con vào đây - Đây chính là STATE TỔNG
            count: countSlice.reducer,
            products: productsSlice.reducer
        }
    }
)


export { store };
export * from './Count'
export * from './Product'