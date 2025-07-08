import { configureStore } from '@reduxjs/toolkit'
import {productsSlice} from './ProductsSlice'

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
    }
})

export { store }