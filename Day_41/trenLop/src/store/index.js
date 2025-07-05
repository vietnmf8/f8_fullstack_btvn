import {createStore} from "redux";
import {productsReducer} from "./Product/index.jsx";
import {searchReducer} from "./SearchStr/index.jsx";
import {countReducer} from "./Count/index.jsx";

/* Khai báo  */
const initialState = {
    products: [],
    count: 0,
    searchStr: null
}


// Reducer
const reducer = (state = initialState, action) => {
    return {
        products: productsReducer(state.products, action),
        count: countReducer(state.count, action),
        searchStr: searchReducer(state.searchStr, action)
    }
}

/* Hết khai báo */
const store = createStore(reducer)
export {  store }