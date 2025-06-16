import { useState } from 'react'
import './App.css'

// Turn on
function App() {
    const [bulbState, setBulbState] = useState(false)

    const switchBulbState = () => {
        return setBulbState(!bulbState)
    }


    return (
        <>
           <h2>Den dang: {bulbState ? 'Bat' : 'Tat'}</h2>
            <button onClick={switchBulbState}>{!bulbState ? 'Bat' : 'Tat'}</button>

        </>
    )
}
export default App
