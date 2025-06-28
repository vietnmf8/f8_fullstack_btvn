import { useState } from 'react'
import './App.css'


// Component Card linh hoạt
function Card({children}) {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            margin: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            {children}
        </div>
    )
}

// Sử dụng Card với nội dung khác nhau
function App() {
    return (
        <>
            {/* Card chứa text */}
            <Card>
                <h3>San pham A</h3>
                <p>Gia: 100,000 VND</p>
            </Card>

            {/* Card chứa hình ảnh và button */}
            <Card>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsyaMJtoLWrgQpfJNMiALMknnJND0nddQHoQ&s" alt="Sản phẩm" />
                <button>Mua ngay</button>
            </Card>

            {/* Card chứa form */}
            <Card>
                <h3>Đăng nhập</h3>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Mật khẩu" />
                <button>Đăng nhập</button>
            </Card>

        </>
    )
}



export default App
