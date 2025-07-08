// Selector functions - tách logic lấy dữ liệu từ store

// Lấy tất cả sản phẩm
export const selectProducts = (state) => state.products;

// Lấy chuỗi tìm kiếm
export const selectSearchStr = (state) => state.searchStr;

// Lấy danh sách sản phẩm đã lọc theo tìm kiếm
export const selectFilteredProducts = (state) => {
    const products = selectProducts(state);
    const searchStr = selectSearchStr(state);

    if (!searchStr) {
        return products;
    }

    // Tìm kiếm theo tên hoặc ID (không phân biệt hoa thường)
    const searchLower = searchStr.toLowerCase();
    return products.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.id.toLowerCase().includes(searchLower)
    );
};