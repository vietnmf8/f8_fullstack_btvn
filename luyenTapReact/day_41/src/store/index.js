import { configureStore } from '@reduxjs/toolkit'
import {productsSlice} from './ProductsSlice/index.jsx'
import {searchStrSlice} from "./SearchStrSlice/index.jsx";

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        searchStr: searchStrSlice.reducer,
    }
})

export { store }