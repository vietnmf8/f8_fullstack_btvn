
// Initial state
import {useReducer} from "react";

const initialState = {count: 0}

// Reducer function
const counterReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1}
        case 'DECREMENT':
            return {count: state.count - 1}
        case 'RESET':
            return {count: 0}
        case 'SET_COUNT':
            return {count: action.payload}
        default:
            return state;
    }
}


function App() {

    const [state, dispatch] = useReducer(counterReducer, initialState)

  return (
    <>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>+ 1</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>- 1</button>
        <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
        <button onClick={() => dispatch({type: 'SET_COUNT', payload: 10})}>Set to 10</button>
    </>
  )
}
export default App
