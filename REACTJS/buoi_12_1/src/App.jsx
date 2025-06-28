import { useState } from 'react'
import './App.css'

const Button = ({children, color})=> {
    return (
        <button style={{
            background: color,
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }}>
            {children}
        </button>
    )
}


function App() {
    return (
        <>
            <Button color='blue'>
                DEF
            </Button>
        </>
    )
}


export default App
