import { useState } from 'react'
import './App.css'





/* Init */
function App() {
    // Khai báo
    const studentName = 'Viet';
    const age = 20;
    const isStudent = true;

 // Giao diện
  return (
    <>
        <div>
            <h1>Thong tin sinh vien</h1>
            <p>Ten: {studentName}</p>
            <p>Tuoi: {age}</p>
            <p>La sinh vien: {isStudent ? "Co" : "Khong"}</p>
        </div>
    </>
  )
}
export default App
