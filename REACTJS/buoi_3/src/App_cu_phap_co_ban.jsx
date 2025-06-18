import { useState } from 'react'
import './App.css'


// Component:
// Giống như một "khuôn bánh"
// - bạn tạo ra 1 khuôn,
// -> rồi có thể đúc ra hàng trăm chiếc bánh giống nhau.

// Component in ReacJS:
// Trong React, Component là một khối code có thể tái sử dụng, chứa:
//- Giao diện (HTML/JSX)
//- Logic xử lý (JavaScript)
//- Có thể nhận dữ liệu đầu vào (props - sẽ học buổi sau)

//Ví dụ:
// Thay vì viết code cho nút "Like" 100 lần trong Facebook,
// -> tạo 1 Component "LikeButton" và sử dụng lại ở mọi nơi.


// Init Component
const TenComponent = () => {
    return (
        <div>
            <h1>Xin chao 2</h1>
        </div>
    )
}


function App() {
  return (
    <>
        <TenComponent /> {/* Gọi component như thẻ HTML */}
    </>
  )
}
export default App
