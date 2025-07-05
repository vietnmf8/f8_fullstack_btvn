import {useReducer, useState} from 'react'
import './App.css'


//useReducer
function App() {


    const reducer = (a, b) => {
        if (b.type === 'count/Tăng') {
            return {...a, count: a.count + 1}
        }

        if (b.type === 'count/Giảm') {
            return {...a, count: a.count - 1}
        }

        if (b.type === 'name/Thay đổi tên') {
            return {...a, name: b.value}
        }

        return a
    }

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        name: null

    })

    const onIncrease = () => {
        dispatch({
            type: 'count/Tăng'
        })
    }

    const onDecrease = () => {
        dispatch({
            type: 'count/Giảm'
        })
    }

    const onInput = (e) => {
        dispatch({
            type: 'name/Thay đổi tên',
            value: e.target.value
        })
    }




  return (
    <>
        <h1>Count: {state.count}</h1>
        <button onClick={onIncrease}>Tăng</button>
        <button onClick={onDecrease}>Giảm</button>
        <input
            value={state.name || ''}
            onChange={onInput}
        />
    </>
  )
}

export default App
