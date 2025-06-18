import { useState } from 'react'
import './App.css'

function App() {

  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')

    const handleChangeNum1 = (event) => {
      setNum1(Number(event.target.value))
    }

    const handleChangeNum2 = (event) => {
        setNum2(Number(event.target.value))
    }


  return (
    <>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
                type="number"
                placeholder="So hang thu 1"
                value={num1}
                onChange={handleChangeNum1}
            />
            <span> + </span>
            <input
                type="number"
                placeholder="So hang thu 2"
                value={num2}
                onChange={handleChangeNum2}
            />

            <h3>Ket qua: {num1 + num2}</h3>

        </div>



    </>
  )
}
export default App
