import { useState } from 'react'
import './App.css'

//Toggle Content

function App() {
    // Khoi tao bien
    const [isVisible, setIsVisible] = useState(false)
    console.log(isVisible)
  return (
    <>
        <button onClick={() => setIsVisible(!isVisible)}>Click</button>

        {isVisible &&
            (
                <p>Day la noi dung duoc an/hien</p>
            )
        }
    </>
  )
}
export default App
