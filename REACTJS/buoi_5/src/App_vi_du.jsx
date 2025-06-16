import { useState } from 'react'
import './App.css'


function App() {
    const [count, setCount] = useState(0)

    // Tang Count
    const increaseCount = () => {
        setCount((count) => count + 1)
    }

    // Giam Count
    const reduceCount = () => {
        setCount((count) => count - 1)
    }

    // Reset Count
    const resetCount = () => {
        setCount(0)
    }

    return (
        <>
            <h2>Bo dem: {count}</h2>
            <button onClick={increaseCount}>Tang len!</button>
            <button onClick={() => reduceCount()}>Giam xuong!</button>
            <button onClick={() => resetCount()}>Reset!</button>
        </>
    )
}
export default App
