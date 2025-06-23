// Component -> Hiển thị danh sách sản phẩm
import {ProductItem} from "./ProductItem.jsx";

export const ProductList = ({products}) => {
    return (
        <>
          <h1>Danh sách sản phẩm</h1>
            {
                products.map(product => (
                    <ProductItem
                        key={product.id}
                        product={product}
                    />
                ))
            }
        </>
    )
}