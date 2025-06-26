import { useState } from 'react'
import './App.css'
import {ProductList, ProductItem} from './components'

function App() {

   /* Khởi tạo danh sách sản phẩm */
    const [products] = useState([
        { id: 1, name: 'Áo thun', price: 100000 },
        { id: 2, name: 'Quần jeans', price: 200000 },
        { id: 3, name: 'Giày thể thao', price: 500000 }
    ]);

  return (
    <>
        <ProductList products={products} />
    </>
  )
}

export default App
