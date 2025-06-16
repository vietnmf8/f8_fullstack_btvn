import { useState } from 'react'
import './App.css'

// Dữ liệu mẫu - danh sách sản phẩm
const products = [
    {id: 1, name: 'Iphone 15', price: 250, category: 'Dien thoai'},
    {id: 2, name: 'Macbook', price: 250, category: 'Laptop'},
    {id: 3, name: 'AirPod', price: 250, category: 'Tai nghe'},
    {id: 4, name: 'Ipad Air', price: 250, category: 'Tablet'},
]

function App() {


  return (
    <div className="product-list">
        <h2>Danh muc san pham</h2>

        {products.map(product => (
            <div key={product.id}>
                <h3>Ten san pham: {product.name}</h3>
                {/* toLocaleString: Format số thành định dạng có dấu phẩy */}
                <p>Gia tien: {product.price.toLocaleString()}d</p>
                <button>Them vao gio hang</button>
            </div>
        ))}
    </div>
  )
}
export default App
