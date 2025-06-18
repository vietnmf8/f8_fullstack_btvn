import { useState } from 'react'
import './App.css'

// Custom Hook để đếm số
const useCounter = (initialCount = 0) => {
    const [count, setCount] = useState(initialCount)

    // Logic tăng/giảm
    const increment = () => setCount(count => count + 1);
    const decrement = () => setCount(count => count - 1);
    const reset = () => setCount(initialCount)

    // Trả về state và các function
    return { count, setCount, increment, decrement, reset }
}



function App() {
    const { count, setCount, increment, decrement, reset } = useCounter(10)

  return (
    <>
        <p>So dem: {count}</p>
        <button onClick={increment}>Tang</button>
        <button onClick={decrement}>Giam</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}
export default App
