// Handle Product
const AddProduct = (value) => {
    return {
        type: 'product/addNew',
        value: value
    }
}

const DeleteProduct = (value) => {
    return {
        type: 'product/delete',
        value: value
    }
}

export {AddProduct, DeleteProduct}