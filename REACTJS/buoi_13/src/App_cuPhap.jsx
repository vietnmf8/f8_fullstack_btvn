import {useReducer, useState} from 'react'
import './App.css'


const initialState = 0
// 1. Tạo reducer function
const reducer = (state, action) => {
    switch(action.type) {
        case 'ACTION_TYPE':
            return { ...state, /* thay đổi gì đó */ };
        default:
            return state;
    }
}

// 2. Sử dụng trong component
function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    // 3. Gửi action
    const handleClick = () => {
        dispatch({
            type: 'ACTION_TYPE',
            payload: someData,
        })
    }
  return (
    <>
        <h1>Xin chao 2</h1>
    </>
  )
}
export default App
