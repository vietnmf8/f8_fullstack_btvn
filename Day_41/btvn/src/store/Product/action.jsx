// Product Action Types
export const PRODUCT_ADD = 'product/add';
export const PRODUCT_UPDATE = 'product/update';
export const PRODUCT_DELETE = 'product/delete';

// Action Creators
export const AddProduct = (product) => ({
    type: PRODUCT_ADD,
    payload: product
});

export const UpdateProduct = (product) => ({
    type: PRODUCT_UPDATE,
    payload: product
});

export const DeleteProduct = (id) => ({
    type: PRODUCT_DELETE,
    payload: id
});