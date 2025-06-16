import { useState } from 'react'
import './App.css'

//Input với Onchage

function App() {
  const [bulbState, setBulbState] = useState(false)

    const handleBulbStateChange = () => {
      return setBulbState(!bulbState)
    }


  return (
    <>
        <h2>Bong den dang: {bulbState ? "Bat" : "Tat"}</h2>
        <button
            style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid black',
                backgroundColor: 'white',
            }}
            onClick={handleBulbStateChange}
        >
            {!bulbState ? "Bat" : "Tat"}
        </button>
    </>
  )
}
export default App
