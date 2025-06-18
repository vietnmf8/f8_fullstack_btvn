import { useState } from 'react'
import './App.css'

// Dữ liệu mẫu - danh sách sản phẩm
const students = [
    {id: 1, name: 'Nguyen Van A', age: 20, score: 8.5},
    {id: 2, name: 'Nguyen Van B', age: 21, score: 9.5},
    {id: 3, name: 'Nguyen Van C', age: 22, score: 7.5},
]

function App() {


  return (
    <>
        <h2>Danh sach hoc sinh</h2>
        {students.map((student) => (
            <div key={student.id}>
                <p>Ten hoc sinh: {student.name}</p>
                <p>Tuoi: {student.age}</p>
                <p>Diem: {student.score}</p>
            </div>
        ))}
    </>
  )
}
export default App
