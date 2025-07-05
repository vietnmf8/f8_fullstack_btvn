import { PRODUCT_ADD, PRODUCT_UPDATE, PRODUCT_DELETE } from './action.jsx';


export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case PRODUCT_ADD:
            return [...state, action.payload];

        case PRODUCT_UPDATE:
            return state.map(product =>
                product.id === action.payload.id
                    ? { ...product, ...action.payload }
                    : product
            );

        case PRODUCT_DELETE:
            return state.filter(product => product.id !== action.payload);

        default:
            return state;
    }
};