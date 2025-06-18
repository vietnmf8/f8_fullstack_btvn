import { useState, useEffect } from 'react'
import './App.css'

function App() {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount((count) => count + 1)
    }

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log(count)
    }, [count])




  return (
    <>
       <h1>Count: {count}</h1>
        <button onClick={handleClick}>Click me!</button>
    </>
  )
}
export default App
