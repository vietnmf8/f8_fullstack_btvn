import {useEffect, useState} from 'react'
import './App.css'

// Turn on
function App() {
    const [count, setCount] = useState(0)

    const handleCount = () => {
        return setCount((count) => count + 1)
    }

    return (
        <>
            <h2>ban da click duoc: {count} lan</h2>
            <button onClick={handleCount}>Click</button>
        </>
    )
}
export default App
