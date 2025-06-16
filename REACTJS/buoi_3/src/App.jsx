import { useState } from 'react'
import './App.css'

// Tạo Component ProductCard hiển thị:
// - Tên sản phẩm: "iPhone 15"
// - Giá: "25.000.000 VND"
// - Button "Mua ngay"


//Component: productCard
const ProductCard = () => {
    return (
        <div style={
            {
                width: '90%',
                backgroundColor: '#e8e5e5',
                padding: '10px',
                margin: 'auto',
                boxSizing: 'border-box',
            }
        }>
            <h2>Ten san pham: iPhone 15</h2>
            <p>Gia: 25.000.000 VND</p>
            <button>Mua ngay</button>
        </div>
    )
}

const Welcome = () => {
    return <h2>Xin chao 1</h2>
}



function App() {
  return (
    <>
        <ProductCard/>
        <Welcome/>
        <Welcome/>
    </>
  )
}
export default App
