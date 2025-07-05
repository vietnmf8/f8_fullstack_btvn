

const productsReducer = (state = [], action) => {
    if (action.type === 'product/addNew') {
        return [...state, action.value]

    }

    if (action.type === 'product/delete') {
        const index = state.findIndex(product => product.id === action.value);
        state.splice(index, 1)
        return [...state]

        // return {
        //     ...state,
        //     products: state.products.filter(product => product.id !== action.value)
        //
        // }
    }

    return state
}


export {productsReducer}