import { useState } from 'react'
import './App.css'
import {StudentList} from "./components";

function App() {

   /* Khởi tạo danh sách sản phẩm */
    const [students] = useState([
        { id: 1, name: 'Nguyễn Văn An', age: 20, major: 'CNTT' },
        { id: 2, name: 'Lê Thị Bích', age: 21, major: 'Marketing' },
        { id: 3, name: 'Trần Quốc Cường', age: 22, major: 'Kế toán' }
    ]);

  return (
    <>
        <StudentList students={students} />
    </>
  )
}

export default App
