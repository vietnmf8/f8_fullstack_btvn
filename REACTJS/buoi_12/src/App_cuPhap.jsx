import {useContext, useState} from 'react'
import './App.css'

// 1. Tạo Context
const MyContext = createContext();

// 2. Tạo Provider (cung cấp dữ liệu)
const MyProvider = ({ children }) => {
    const [state, setState] = useState('du lieu')

    return (
        <MyContext.Provider value={{ state, setState }}>
            {children} {/* children = tất cả component con bên trong */}
        </MyContext.Provider>
    )
}

// 3. Sử dụng Context trong component con
const ChildComponent = () => {
    const { state, setState } = useContext(MyContext)
    return <div>{state}</div>
}


function App() {
  return (
    <>
        <h1>Xin chao 2</h1>
    </>
  )
}
export default App
