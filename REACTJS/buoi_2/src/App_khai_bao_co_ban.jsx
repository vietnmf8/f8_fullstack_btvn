import { useState } from 'react'
import './App.css'

// Viết JSX cơ bản
const element = <h1>Xin chao</h1>

// Viết JSX với biến JS
const name = 'Hello World';
const greeting = <h1>{name}</h1>

// Viết JSX với nhiều dòng (cần đóng ngoặc)
const card = (
    <div>
        {greeting}
        {element}
    </div>
)



/* Init */
function App() {
  return (
    <>
        {card}
    </>
  )
}
export default App
