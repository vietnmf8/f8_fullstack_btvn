import { useState } from 'react'
import './App.css'

//Toggle Content

function App() {
    const [age, setAge] = useState('')
    
    const getAgeMessage = () => {
        const numAge = parseInt(age)
        if (numAge < 18) return "Ban con nho tuoi"
        if (numAge <= 60) return "Ban dang trong do tuoi lao dong"
        return "Ban da ve huu"
    }
    
    return (
        <>
            <input
                type="number"
                placeholder="Vui long nhap tuoi cua ban"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            {age && !isNaN(age) && (
                <p>{getAgeMessage()}</p>
            )}

        </>
    )
}
export default App
