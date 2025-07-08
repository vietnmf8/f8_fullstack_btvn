import { configureStore } from '@reduxjs/toolkit'
import {productsSlice} from './ProductsSlice'
import {searchStrSlice} from "./SearchStrSlice/index.jsx";

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        searchStr: searchStrSlice.reducer,
    }
})

export { store }