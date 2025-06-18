import { useState } from 'react'
import './App.css'

// Component: Welcome!
const Welcome = (props) => {
    return (
        <div>
            {/*props is Object*/}
            <h1>Xin chao, {props.name}!</h1>
            <p>Ban da duoc {props.age} tuoi roi do!</p>
        </div>

    )

}


function App() {
  return (
    <>
        <Welcome name={'Minh'} age={18} />
        <Welcome name={'Viet'} age={25} />
    </>
  )
}
export default App
