import { useState } from 'react'
import './App.css'


// 1. Tạo component nhận children
function App({children}) {
    return (
        <div className="wrapper">
            <h2>Tieu de co dinh!</h2>
            {children}
        </div>
    )
}

/* 2. Sử dụng component với nội dung khác nhau */
// <MyComponent>
//     <p>Đây là nội dung 1</p>
// </MyComponent>

// <MyComponent>
//     <button>Đây là nội dung 2</button>
// </MyComponent>

export default App
