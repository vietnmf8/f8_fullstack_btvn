import { useState } from 'react'
import './App.css'


//Component
const MyComponent = () => {
    // Khai báo state với giá trị ban đầu

}



function App() {
    const [stateName, setStateName] = useState(initialValue)
  return (
    <>
        <p>{stateName}</p>
        <button onClick={() => setStateName(newValue)}>Thay Doi</button>
    </>
  )
}
export default App
