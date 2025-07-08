import { PRODUCT_ADD, PRODUCT_UPDATE, PRODUCT_DELETE } from './action.jsx';

// ProductsSlice Reducer - xử lý các action liên quan đến sản phẩm
export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case PRODUCT_ADD:
            // Thêm sản phẩm mới vào danh sách
            return [...state, action.payload];

        case PRODUCT_UPDATE:
            // Cập nhật sản phẩm theo ID
            return state.map(product =>
                product.id === action.payload.id
                    ? { ...product, ...action.payload }
                    : product
            );

        case PRODUCT_DELETE:
            // Xóa sản phẩm theo ID
            return state.filter(product => product.id !== action.payload);

        default:
            return state;
    }
};