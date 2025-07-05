import {createStore} from "redux";
import {productsReducer} from "./Product/index.jsx";
import {searchReducer} from "./SearchStr/index.jsx";

const initialState = {
    products: [
        // Sample data để test
        {
            id: 'p001',
            name: 'Táo Mỹ',
            price: 85000,
            quantity: 20,
            unit: 'kg'
        }
    ],
    searchStr: null
}

const reducer = (state = initialState, action) => {
    return {
        products: productsReducer(state.products, action),
        searchStr: searchReducer(state.searchStr, action)
    }
}

const store = createStore(reducer)
export { store }