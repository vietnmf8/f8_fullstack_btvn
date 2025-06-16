import { useState } from 'react'
import './App.css'

// Event handle (Sự kiện)
// - Click chuột → onClick
// - Gõ phím → onChange, onKeyDown
// - Submit form → onSubmit
// - Di chuột → onMouseOver


function App() {
    // function: handleEvent
    const handleClick = (event) => {
        console.log('click')
        console.log(event.target)
        console.log(event.type)
    }

  return (
    <>
        <button onClick={handleClick}>Click</button>

        {/* Cách viết ngắn gọn (inline) */}
        <button onClick={() => console.log('click 2!')}>Click</button>
    </>
  )
}
export default App
