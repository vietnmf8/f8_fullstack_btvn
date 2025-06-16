import { useState } from 'react'
import './App.css'

function App() {
    // State để lưu giá trị input
    const [inputValue, setInputValue] = useState('')

    // Hàm xử lý khi input thay đổi
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    // Hàm xử lý khi submit form
    const handleSubmit = (event) => {
        event.preventDefault()  // Ngăn trang reload
        console.log('Data: ', inputValue)
    }


  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Nhap ten..."
        />

        <button type="submit">Send</button>
    </form>
  )
}
export default App
