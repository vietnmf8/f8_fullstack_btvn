

export const selectProducts = (state) => state.products;

export const selectSearchStr = (state) => state.searchStr;

export const selectFilteredProducts = (state) => {
    const products = selectProducts(state);
    const searchStr = selectSearchStr(state);

    if (!searchStr) {
        return products;
    }

    const searchLower = searchStr.toLowerCase();
    return products.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.id.toLowerCase().includes(searchLower)
    );
};