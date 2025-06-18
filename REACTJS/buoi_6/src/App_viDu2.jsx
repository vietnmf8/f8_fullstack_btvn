import { useState } from 'react'
import './App.css'

//Input với Onchage

function App() {
  const [name, setName] = useState('')

    //handleInput
    const handleInputChange = (event) => {
      setName(event.target.value) //Lay gia tri tu input
        console.log(event.target.value)
    }



  return (
    <>
        <h1>Nhap ten cua ban: </h1>
        <input
            type="text"
            placeholder="Nhap ten cua ban"
            onChange={handleInputChange}
            style={{
                border: '1px solid #85ee09',
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: '#e8fbd2',
                color: '#366004',
                marginRight: '10px',
            }}
        />
        <p>Xin chao: {name}</p>
    </>
  )
}
export default App
