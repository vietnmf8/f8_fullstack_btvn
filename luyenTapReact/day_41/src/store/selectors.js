export const selectProducts = (state) => state.products
export const selectSearchStr = (state) => state.searchStr

export const filteredProductwithSearchStr = (state) => {
    const products = selectProducts(state)
    const searchStr = selectSearchStr(state)

    if (!searchStr) {
        return products
    }
    return products.filter(product =>
        product.name.toLowerCase().includes(searchStr.toLowerCase()) ||
        product.id.toString().toLowerCase().includes(searchStr.toLowerCase())
    )

}