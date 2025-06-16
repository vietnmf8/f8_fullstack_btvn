import { useState } from 'react'
import './App.css'

//Counter với Button

function App() {
    const [count, setCount] = useState(0)

    // Hàm tăng số đếm
    const handleIncrement = () => {
        setCount((count) => count + 1)
    }
    // Hàm giảm số đếm
    const handleDecrement = () => {
        setCount((count) => count - 1)
    }



  return (
    <>
        <h1>Count: {count}</h1>
        <button
            style={{
            border: '1px solid #85ee09',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: '#e8fbd2',
            color: '#366004',
            cursor: 'pointer',
            marginRight: '10px',
        }}
            onClick={handleIncrement}
        >
            Increment
        </button>

        <button
            style={{
                border: '1px solid #e2077f',
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: '#ffe7f4',
                color: '#e2077f',
                cursor: 'pointer',
            }}
            onClick={handleDecrement}
        >
            Decrement
        </button>

    </>
  )
}
export default App
