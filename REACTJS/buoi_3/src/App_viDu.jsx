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


// Component: hiển thị thông tin sinh viên
const StudentCard = () => {
    return (
        <div style={
            {
                border: '1px solid red',
                padding: '10px',
                margin: '10px',
            }
        }>
            <h3>Nguyen Van A</h3>
            <p>Tuoi: 20</p>
            <p>Nganh: Cong Nghe Thong Tin</p>
            <button>Xem chi tiet</button>
        </div>
    )
}


function App() {
  return (
    <>
      {/* Call StudentCard Component */}
        <h1>Danh sach sinh vien</h1>
        <StudentCard />
        <StudentCard />
    </>
  )
}
export default App
