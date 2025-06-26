
// Component -> Hiển thị thông tin sản phẩm
export const ProductItem = ({product}) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>Giá: {product.price.toLocaleString()} VND</p>
        </div>
    )
}